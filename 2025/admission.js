var a=document.querySelector('#admission');

function upd(){
	var b=a.innerHTML, c0='<img src="arctan.png" width="20pt">', c1="<img src='arctan.png' width='20pt'>";
	console.log(b);
	for(var i=0; i<b.length; ++i){
		if(i+c0.length<=b.length){
			var ok=1;
			for(var j=0; j<c0.length; ++j)if(b[i+j]!=c0[j]){ok=0; break;}
			if(!ok){
				ok=1;
				for(var j=0; j<c1.length; ++j)if(b[i+j]!=c1[j]){ok=0; break;}
			}
			//console.log(ok);
			if(ok){
				var s='', t='〇', u='';
				for(var j=0; j<i; ++j)s+=b[j];
				for(var j=i+c0.length; j<b.length; ++j)u+=b[j];
				b=s+t+u;
			}
		}
	}
	a.innerHTML=b;
}

a0=a.innerHTML;
upd();
a1=a.innerHTML;

function change(){
	if(a.innerHTML==a0)a.innerHTML=a1;
	else a.innerHTML=a0;
}
