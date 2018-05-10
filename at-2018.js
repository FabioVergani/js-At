//
const at=(a,b,c)=>{
	const f=()=>{a.removeEventListener(b,c)};
	f(),a.addEventListener(b,c);
	return f;
};

/*
const remWinLoadListener=at(window,'load',event=>{
	remWinLoadListener('load');
	//f(event.target);
});
*/
