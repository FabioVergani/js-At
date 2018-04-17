const at=(e,s,x)=>{
	const f=e.removeEventListener;
	f(s,x),e.addEventListener(s,x);
	return f;
},

//const g=at(window,'load',e=>{g('load');f(e.target)});
