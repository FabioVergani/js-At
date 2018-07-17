console.clear();
(w=>{
	const at=(e,s,x)=>{//element,event,callback
		const f=e.removeEventListener;
		f(s,x);
		e.addEventListener(s,x);
		return f
	},
	once=(e,s,x)=>{
		const f=o=>{
			g(s,x);
			x(o)
		},
		g=at(e,s,f);
	},
	d=w.document,
	isReady=evt=>{
		console.info('ready:%O',evt);
		//doReadyStuff..
	},
	isLoad=evt=>{
		console.info('load:%O',evt);
		//doLoadStuff..
	};
	if(d.readyState!=='complete'){
		once(w,'DOMContentLoaded',isReady);
		once(w,'load',isLoad)
	}else{
		const o={target:d};
		isReady(o);
		isLoad(o)
	};
})(window);
