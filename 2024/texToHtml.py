fn=input('Filename: ')
with open(fn, 'r') as fp:
	s=fp.read()
t=''
cnt=0
for i in range(len(s)):
	if s[i]!='$' or (i<len(s)-1 and s[i:i+2]=='$$') or (i>0 and s[i-1:i+1]=='$$'):
		t+=s[i]
		continue
	t+='\\)' if cnt&1 else '\\('
	cnt+=1
print(t)
