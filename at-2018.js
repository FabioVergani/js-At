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


/*
const at=(e,s,x)=>{
	const f=(o)=>{
		e.removeEventListener(s,f);
		x(o)
	};
	e.addEventListener(s,f)
};

at(window,'click',evt=>{alert('clicked')
	console.dir(evt);
});

*/
