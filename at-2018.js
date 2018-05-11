const once=(a,b,c)=>{
	const f=(e)=>{
		a.removeEventListener(b,f);
		c(e)
	};
	a.addEventListener(b,f)
};

once(window,'click',evt=>{
	console.dir(evt);
});
