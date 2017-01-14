
//NB: currentTarget >elemento a cui è stato assegnato l'handler. Target > elemento da cui è stato generato l'evento.


(function(w){
 function at(a,b,c){//elem,event,handler
		function g(a){const e=a,h=g;e.currentTarget.removeEventListener(e.type,h);h.f(e);}
		const e=a,s=b;
		g.f=c;
		e.removeEventListener(s,g);
		e.addEventListener(s,g);
 }
 at(w,'load', function(event){
		let e=event;
    const d=e.target;
    console.clear();
		console.dir(e);
 });
})(window);
