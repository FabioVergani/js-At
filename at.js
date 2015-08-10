console.clear();
//
"use strict";
(function(global){


 var undefined, scope=global, O=scope.Object,
 CreateObject=O.create, CreateRawObject=CreateObject.bind(null),
 propertiesOf=O.getOwnPropertyNames, hasProperties=function(o){return propertiesOf(o).length > 0;},
 at=function (x,s,h){var p='listeners',xp=x[p],f=function(evt){var e=evt,t=e.type,i=h,o=x,m=xp;m[i]=f;i(e);o.removeEventListener(t,f);delete m[i];if(!hasProperties(m)){delete o[p];};};if(!xp){xp=x[p]=CreateRawObject(null);};x.addEventListener(s,f);},
 doc=scope.document, location=doc.location, uri=location.href, root=doc.documentElement,
 opbo=function(e,p){var o=e;return o[p].bind(o);},
 $query=opbo(doc,'querySelector');

 opbo=null;

 root.dataset.uri=uri;
 root.classList.add('js');//immediately!

 at(doc,'DOMContentLoaded',function(){console.log("DOM fully loaded and parsed");

 });

 at(scope,'load',function(){console.log("load");

 });

})(window);
//∴
