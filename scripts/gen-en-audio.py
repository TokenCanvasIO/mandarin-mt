import urllib.parse, urllib.request, time, os, re
os.makedirs("audio", exist_ok=True)
def chunks(text, limit=180):
    parts=re.split(r'(?<=[.!?,;:])\s+', text.strip()); out=[]; cur=""
    for p in parts:
        while len(p)>limit:
            out.append(p[:limit]); p=p[limit:]
        if len(cur)+len(p)+1<=limit: cur=(cur+" "+p).strip()
        else:
            if cur: out.append(cur)
            cur=p
    if cur: out.append(cur)
    return out or [text[:limit]]
def fetch(text):
    q=urllib.parse.quote(text)
    url=f"https://translate.google.com/translate_tts?ie=UTF-8&q={q}&tl=en&client=tw-ob"
    req=urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
    return urllib.request.urlopen(req, timeout=20).read()
lines=[l for l in open("/tmp/en.tsv").read().split("\n") if l.strip()]
fails=[]
for i,ln in enumerate(lines):
    h,text=ln.split("\t",1); fn=f"audio/{h}.mp3"
    if os.path.exists(fn) and os.path.getsize(fn)>1000: continue
    try:
        data=b"".join(fetch(c) for c in chunks(text)); 
        if len(data)<800: raise ValueError("tiny")
        open(fn,"wb").write(data)
    except Exception as e:
        fails.append((h,text[:40],str(e)[:30]))
    time.sleep(0.45)
    if i%40==0: print(f"{i}/{len(lines)}", flush=True)
# one retry pass
retry=fails[:]; fails=[]
for h,text40,_ in retry:
    ln=[l for l in lines if l.startswith(h+"\t")][0]; text=ln.split("\t",1)[1]
    try:
        time.sleep(1.2); data=b"".join(fetch(c) for c in chunks(text))
        if len(data)<800: raise ValueError("tiny")
        open(f"audio/{h}.mp3","wb").write(data)
    except Exception as e: fails.append((h,text40,str(e)[:30]))
print("DONE. total mp3s in audio/:", len([f for f in os.listdir('audio') if f.endswith('.mp3')]), "| failures:", len(fails))
for f in fails[:10]: print("  FAIL", f)
