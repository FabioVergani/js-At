//
const at=(a,b,c)=>{
	const f=a.removeEventListener;
	f(b,c),a.addEventListener(b,c);
	return f;
},

/*
const remWinLoadListener=at(window,'load',event=>{
	remWinLoadListener('load');
	//f(event.target);
});
*/
