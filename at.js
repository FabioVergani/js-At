//#3
console.clear();
//
function ready(e,s,o,f){console.dir(arguments);}//dispatcher,type,event,handler
//
function at(e,s,h){
	e.addEventListener(s,function f(x){
	 var o=x,e=o.target,s=o.type;
	 h(e,s,o,f);
	 e.removeEventListener(s,f);
	});
};
//
at(document,'DOMContentLoaded',ready);
