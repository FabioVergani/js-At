console.clear();
//
"use strict";
(function(global){


 function at(x,s,h){
	var f=function(evt){
	 var e=evt,t=e.type,p='listeners',i=h,o=x,m=o[p];
	 (m=isArray(m)?m:(o[p]=[]))[i]=f;
	 i(e);
	 o.removeEventListener(t,f);
	 delete m[i];
	};
	x.addEventListener(s,f);
 }

 var scope=global,
 gsArray=scope.Array, isArray=gsArray.isArray,
 doc=scope.document, location=doc.location, uri=location.href, root=doc.documentElement,
 opbo=function(e,p){var o=e;return o[p].bind(o);},
 $query=opbo(doc,'querySelector');



 root.dataset.uri=uri;
 root.classList.add('js');//immediately!

 at(doc,'DOMContentLoaded',function(){
	 console.log("DOM fully loaded and parsed");
	 console.dir(doc.listeners);
 });

})(window);
//∴
