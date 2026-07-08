import urllib.parse, urllib.request, time, os, sys
os.makedirs("audio", exist_ok=True)
lines=[l for l in open("/tmp/aud.tsv").read().strip().split("\n") if l]
def fetch(text, slow):
    q=urllib.parse.quote(text)
    url=f"https://translate.google.com/translate_tts?ie=UTF-8&q={q}&tl=zh-CN&client=tw-ob"
    if slow=="1": url+="&ttsspeed=0.24"
    req=urllib.request.Request(url, headers={"User-Agent":"Mozilla/5.0"})
    return urllib.request.urlopen(req, timeout=20).read()
fails=[]
for i,ln in enumerate(lines):
    h,slow,text=ln.split("\t",2)
    fn=f"audio/{h}.mp3"
    if os.path.exists(fn) and os.path.getsize(fn)>800: continue
    try:
        data=fetch(text,slow)
        if len(data)<500: raise ValueError("tiny/"+str(len(data)))
        open(fn,"wb").write(data)
    except Exception as e:
        fails.append((h,slow,text,str(e)[:30]))
    time.sleep(0.4)
    if i%50==0: print(f"{i}/{len(lines)}", flush=True)
# retry failures once with backoff
retry=fails[:]; fails=[]
for h,slow,text,_ in retry:
    try:
        time.sleep(1.5); data=fetch(text,slow)
        if len(data)<500: raise ValueError("tiny")
        open(f"audio/{h}.mp3","wb").write(data)
    except Exception as e:
        fails.append((h,slow,text,str(e)[:30]))
print("DONE. generated:", len([f for f in os.listdir('audio') if f.endswith('.mp3')]), "| failures:", len(fails))
for f in fails[:15]: print("  FAIL", f[2], f[3])
