
; /* Start:"a:4:{s:4:"full";s:72:"/bitrix/templates/centrofinans/js/old/modernizr-custom.js?15565191443403";s:6:"source";s:57:"/bitrix/templates/centrofinans/js/old/modernizr-custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/centrofinans/js/old/jquery.min.js?155651914485660";s:6:"source";s:51:"/bitrix/templates/centrofinans/js/old/jquery.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v2.2.2 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.2",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/centrofinans/js/old/jquery-ui.min.js?155651914424022";s:6:"source";s:54:"/bitrix/templates/centrofinans/js/old/jquery-ui.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery UI - v1.11.4 - 2016-04-05
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(e,s){var n,a,o,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,a=n.name,e.href&&a&&"map"===n.nodeName.toLowerCase()?(o=t("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!e.disabled:"a"===r?e.href||s:s)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(i){return e(i,!isNaN(t.attr(i,"tabindex")))},tabbable:function(i){var s=t.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&e(i,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,i){function s(e,i,s,a){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),a&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?o["inner"+i].call(this):this.each(function(){t(this).css(a,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?o["outer"+i].call(this,e):this.each(function(){t(this).css(a,s(this,e,!0,n)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var i,s,n=t(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),t.ui.plugin={add:function(e,i,s){var n,a=t.ui[e].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,a=t.plugins[e];if(a&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)t.options[a[n][0]]&&a[n][1].apply(t.element,i)}};var s=0,n=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(o){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,a,o,r,h={},l=e.split(".")[0];return e=e.split(".")[1],n=l+"-"+e,s||(s=i,i=t.Widget),t.expr[":"][n.toLowerCase()]=function(e){return!!t.data(e,n)},t[l]=t[l]||{},a=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,a,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),r=new i,r.options=t.widget.extend({},r.options),t.each(s,function(e,s){return t.isFunction(s)?(h[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},n=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,a=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=a,e}}(),void 0):(h[e]=s,void 0)}),o.prototype=t.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||e:e},h,{constructor:o,namespace:l,widgetName:e,widgetFullName:n}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=t.data(this,s);return"instance"===a?(h=n,!1):n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+a+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=t.widget.extend.apply(null,[a].concat(r))),this.each(function(){var e=t.data(this,s);e?(e.option(a||{}),e._init&&e._init()):t.data(this,s,new i(a,this))})),h}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,a,o=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(o={},s=e.split("."),e=s.shift(),s.length){for(n=o[e]=t.widget.extend({},this.options[e]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,s){var n,a=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,o){function r(){return e||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,a,o=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(t.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),o=!t.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){t(this)[e](),a&&a.call(s[0]),i()})}}),t.widget;var a=!1;t(document).mouseup(function(){a=!1}),t.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),a=!1,!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.widget("ui.slider",t.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,h,l,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-a.width()/2,top:e.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!i),this._super(e,i),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.floor(+(t-e).toFixed(this._precision())/i)*i;t=s+e,this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(e){var i,s,n,a,o=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(e.target).addClass("ui-state-active"),i=this._start(e,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(e,o,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/bitrix/templates/centrofinans/js/old/jquery.ui.touch-punch.min.js?15565191441301";s:6:"source";s:66:"/bitrix/templates/centrofinans/js/old/jquery.ui.touch-punch.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/bitrix/templates/centrofinans/js/old/jquery.kladr.min.js?155651914412369";s:6:"source";s:57:"/bitrix/templates/centrofinans/js/old/jquery.kladr.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t,e){function n(t){var e={},n={type:"contentType",name:"query",withParents:"withParent"};t.parentType&&t.parentId&&(e[t.parentType+"Id"]=t.parentId);for(var a in t)r(t,a)&&t[a]&&(e[r(n,a)?n[a]:a]=t[a]);return e}function r(t,e){return t.hasOwnProperty(e)}function a(t){var n=e.console;n&&n.error&&n.error(t)}t.kladr={},function(){var n="https:"==e.location.protocol?"https:":"http:";t.kladr.url=n+"//kladr-api.ru/api.php"}(),t.kladr.type={region:"region",district:"district",city:"city",street:"street",building:"building"},t.kladr.typeCode={city:1,settlement:2,village:4},t.kladr.validate=function(e){var n=t.kladr.type;switch(e.type){case n.region:case n.district:case n.city:if(e.parentType&&!e.parentId)return a("parentId undefined"),!1;break;case n.street:if(e.parentType!=n.city&&e.parentType!=n.street)return a('parentType must equal "city" or "street"'),!1;if(!e.parentId)return a("parentId undefined"),!1;break;case n.building:if(!e.zip){if(!~t.inArray(e.parentType,[n.street,n.city]))return a('parentType must equal "street" or "city"'),!1;if(!e.parentId)return a("parentId undefined"),!1}break;default:if(!e.oneString)return a("type incorrect"),!1}return e.oneString&&e.parentType&&!e.parentId?(a("parentId undefined"),!1):e.typeCode&&e.type!=n.city?(a('type must equal "city"'),!1):e.limit<1?(a("limit must greater than 0"),!1):!0},t.kladr.api=function(e,r){if(!r)return void a("Callback undefined");if(!t.kladr.validate(e))return void r([]);var i=setTimeout(function(){r([]),i=null},3e3);t.ajax({url:t.kladr.url+"?callback=?",type:"get",data:n(e),dataType:"jsonp"}).done(function(t){i&&(r(t.result||[]),clearTimeout(i))})},t.kladr.check=function(e,n){return n?(e.withParents=!1,e.limit=1,void t.kladr.api(e,function(t){n(t&&t.length?t[0]:!1)})):void a("Callback undefined")}}(jQuery,window),function(t,e,n,r){function a(r,a){function i(t,e){return t.isGet?s.get(t.str[0]):(s.set(t),void e())}var s=function(){var e="kladr-data",n=r.data(e);return n||(n=t.extend({},u,d),r.data(e,n)),{set:function(t){if(t.obj)for(var a in t.obj)l(t.obj,a)&&l(u,a)&&(n[a]=t.obj[a]);else t.str&&!t.isGet&&l(u,t.str[0])&&(n[t.str[0]]=t.str[1]);r.data(e,n)},get:function(t){return l(u,t)||l(d,t)?n[t]:void 0},_set:function(t,a){n[t]=a,r.data(e,n)},_get:function(t){return l(n,t)?n[t]:void 0}}}();return i(a,function(){function a(a){var i=t(n.getElementById("kladr_autocomplete"));i.length||(i=t('<div id="kladr_autocomplete"></div>').appendTo(n.body));var l=x("guid");l?(V=i.find(".autocomplete"+l),A=i.find(".spinner"+l),t(e).off(L),r.off(L),V.off(L)):(l=o(),P("guid",l),r.attr("autocomplete","off"),V=t('<ul class="autocomplete'+l+' autocomplete" style="display: none;"></ul>').appendTo(i),A=t('<div class="spinner'+l+' spinner" style="display: none;"></div>').appendTo(i),m(),f(),b()),a()}function i(e,n){var r,a,i,o;V.empty();for(var l=0;l<e.length;l++)r=e[l],a=x("valueFormat")(r,n),i=x("labelFormat")(r,n),o=t('<a data-val="'+a+'">'+i+"</a>"),o.data("kladr-object",r),t("<li></li>").append(o).appendTo(V)}function d(){var e,n,r;V.empty(),e="",n=u.noResultText,null!=n&&""!=n&&(r=t('<a data-val="'+e+'">'+n+"</a>"),r.data("kladr-object",{}),t("<li></li>").append(r).appendTo(V))}function f(){var t=r.offset(),e=r.outerWidth(),n=r.outerHeight();if(t&&(f.top!=t.top||f.left!=t.left||f.width!=e||f.height!=n)){f.top=t.top,f.left=t.left,f.width=e,f.height=n,V.css({top:t.top+n+"px",left:t.left});var a=V.outerWidth()-V.width();V.width(e-a);var i=A.width(),o=A.height();A.css({top:t.top+(n-o)/2-1,left:t.left+e-i-2})}}function p(e){if(!(e.which>8&&e.which<46)){if(r.data(z,!1),!w("open_before"))return void v();_(null);var n=r.val();if(!t.trim(n))return B(!1),void v();var a=C(n);if(!w("send_before",a))return void v();T(),w("send"),x("source")(a,function(e){return w("receive",e),r.is(":focus")?t.trim(r.val())&&e.length?(G=!0,i(e,a),f(),I(),V.slideDown(50),void w("open")):(I(),_(null),d(),f(),V.slideDown(50),w("open"),void(G=!1)):(I(),void v())})}}function v(){w("close_before")&&(V.empty().hide(),w("close"))}function y(t){var e=V.find("li.active");switch(t.which){case c.up:e.length?(e.removeClass("active"),e.prev().length&&(e=e.prev())):e=V.find("li").last(),function(){var t=V.scrollTop(),n=V.offset(),r=e.outerHeight(),a=e.offset();a.top-n.top<0&&V.scrollTop(t-r)}(),e.addClass("active"),k();break;case c.down:e.length?(e.removeClass("active"),e.next().length&&(e=e.next())):e=V.find("li").first(),e.length&&!function(){var t=V.scrollTop(),n=V.height(),r=V.offset(),a=e.outerHeight(),i=e.offset();i.top-r.top+a>n&&V.scrollTop(t+a)}(),e.addClass("active"),k();break;case c.enter:v()}}function h(e){var n=t(e);n.is("a")&&(n=n.parents("li")),n.addClass("active"),k(),v()}function k(){if(w("select_before")){var t=V.find(".active a");t.length&&(r.val(t.attr("data-val")).data(z,!0),B(!1),_(t.data("kladr-object")),w("select",x("current")))}}function g(){function e(t,e){B(e),_(t)}if(x("verify")&&w("check_before")){var n=t.trim(r.val());if(!n)return void e(null,!1);if(x("current"))return void B(!1);var a=C(n);if(a.withParents=!1,a.limit=10,!w("send_before",a))return e(null,!1),void w("check",null);T(),w("send"),x("source")(a,function(n){function i(t,n){I(),e(t,n)}if(w("receive"),!t.trim(r.val()))return void i(null,!1);for(var o=a.name.toLowerCase(),l=null,u=null,d=0;d<n.length;d++)if(l=n[d].name.toLowerCase(),o==l){u=n[d];break}u&&r.val(x("valueFormat")(u,a)),i(u,!u),w("check",u)})}}function m(){function e(){r.attr(i,!0)}function n(t,e){t?r.val(x("valueFormat")(t,e)):B(!0),_(t),r.removeAttr(i)}var a={setValue:function(e){return"object"===t.type(e)?a.setValueByObject(e):"number"===t.type(e)?a.setValueById(e):"string"===t.type(e)?a.setValueByName(e):e?a:a.clear()},setValueByName:function(r){if(r=t.trim(r+"")){var i=C("");if(i.name=S(r),i.withParents=!1,i.limit=10,!w("send_before",i))return n(null,i),a;e(),w("send"),x("source")(i,function(t){w("receive");for(var e=i.name.toLowerCase(),r=null,a=null,o=0;o<t.length;o++)if(r=t[o].name.toLowerCase(),e==r){a=t[o];break}n(a,i)})}return a},setValueById:function(r){var i=C("");return i.parentType=i.type,i.parentId=r,i.limit=1,e(),t.kladr.api(i,function(t){t.length?n(t[0],i):n(null,i)}),a},setValueByObject:function(t){return n(t,C("")),a},clear:function(){return n(null,null),a}},i="data-kladr-autofill-lock";P("controller",a)}function b(){function e(){var e=r.val();if(e){var n,a=C(e),i=a.type,o=a.parentType,l=t.kladr.type,u=!0,d=x("controller").setValueByName;return i==l.street&&o!=l.city&&(u=!1),i!=l.building||~t.inArray(o,[l.street,l.city])||(u=!1),n=r.attr("data-kladr-autofill-lock"),n&&x("current")&&u&&d(e),!!x("current")}return!1}var n=0;!function a(){++n>5||e()||setTimeout(a,100)}()}function w(e,n){if(!e)return!0;var a=e.replace(/_([a-z])/gi,function(t,e){return e.toUpperCase()});return r.trigger("kladr_"+e,n),"function"===t.type(x(a))?x(a).call(r.get(0),n)!==!1:!0}function T(){x("spinner")&&x("showSpinner")(A)}function I(){x("spinner")&&x("hideSpinner")(A)}function C(t){var e,n={},r=["token","key","type","typeCode","parentType","parentId","oneString","withParents","limit","strict"];for(e=0;e<r.length;e++)n[r[e]]=x(r[e]);n.name=S(t);var a,i=x("parentInput");return i&&(a=j(i,n.type),a&&(n.parentType=a.type,n.parentId=a.id)),n.oneString&&(n.withParents=!0),n}function j(e,n){var r,a=t.kladr.getInputs(e),i=t.kladr.type,o={},u=null;a.each(function(){var e,n=t(this);(e=n.attr("data-kladr-id"))&&(o[n.attr("data-kladr-type")]=e)});for(r in i){if(r==n)return u;l(i,r)&&o[r]&&(u={type:r,id:o[r]})}return u}function S(t){for(var e="abcdefghijklmnopqrstuvwxyz",n=t.toLowerCase(),r=0;r<n.length;r++)if(~e.indexOf(n[r]))return B(!0),t;return B(!1),t}function _(t){var e=x("current");(e&&e.id)!==(t&&t.id)&&(P("current",t),t&&t.id?r.attr("data-kladr-id",t.id):r.removeAttr("data-kladr-id"),x("oneString")&&t&&t.contentType&&r.attr("data-kladr-type",t.contentType),w("change",t))}function B(t){t?r.addClass("kladr-error"):r.removeClass("kladr-error")}function x(t){return s._get(t)}function P(t,e){s._set(t,e)}var V=null,A=null,G=!1,L=".kladr",z="kladrInputChange";a(function(){var n=!1,a=!0,i="";r.attr("data-kladr-type",x("type")||"").attr("data-kladr-one-string",x("oneString")||null).on("keyup"+L,p).on("keydown"+L,y).on("blur"+L,function(){!n&&r.data(z)&&i!=r.val()&&r.change()}).on("blur"+L+" change"+L,function(t){return n?void 0:("change"==t.type&&(i=r.val()),a&&(a=!1,g()),!G&&u.checkEmptyRespone&&r.val(""),v(),!1)}).on("focus"+L,function(){a=!0}),V.on("touchstart"+L+" mousedown"+L,"li, a",function(t){t.preventDefault(),n=!0,h(this),n=!1}),t(e).on("resize"+L,f)})})}function i(e,n){var a={obj:!1,str:!1,isGet:!1};return"object"===t.type(e)?(a.obj=e,a):("string"===t.type(e)&&(a.str=[e,n],a.isGet=n===r),a)}function o(){return o.guid?++o.guid:o.guid=1}function l(t,e){return t.hasOwnProperty(e)}var u={token:null,key:null,type:null,typeCode:null,parentType:null,parentId:null,limit:10,oneString:!1,withParents:!1,noResultText:null,checkEmptyRespone:!1,strict:null,parentInput:null,verify:!1,spinner:!0,open:null,close:null,send:null,receive:null,select:null,check:null,change:null,openBefore:null,closeBefore:null,sendBefore:null,selectBefore:null,checkBefore:null,source:function(e,n){t.kladr.api(e,n)},labelFormat:function(e,n){var r;if(n.oneString)return e.parents?(r=[].concat(e.parents),r.push(e),t.kladr.buildAddress(r)):(e.typeShort?e.typeShort+". ":"")+e.name;var a,i,o,l,u="";return e.typeShort&&(u+=e.typeShort+". "),a=e.name,i=a.toLowerCase(),o=n.name.toLowerCase(),l=i.indexOf(o),l=~l?l:0,o.length<i.length?(u+=a.substr(0,l),u+="<strong>",u+=a.substr(l,o.length),u+="</strong>",u+=a.substr(l+o.length)):u+="<strong>"+a+"</strong>",u},valueFormat:function(e,n){var r;return n.oneString?e.parents?(r=[].concat(e.parents),r.push(e),t.kladr.buildAddress(r)):(e.typeShort?e.typeShort+". ":"")+e.name:e.name},showSpinner:function(t){var e=-.2,n=setInterval(function(){return t.is(":visible")?(t.css("background-position","0% "+e+"%"),e+=5.555556,void(e>95&&(e=-.2))):(clearInterval(n),void(n=null))},30);t.show()},hideSpinner:function(t){t.hide()}},d={current:null,controller:null},c={up:38,down:40,enter:13};t.kladr=t.extend(t.kladr,{setDefault:function(t,e){var n=i(t,e);if(n.obj)for(var r in n.obj)l(u,r)&&(u[r]=n.obj[r]);else n.str&&!n.isGet&&l(u,n.str[0])&&(u[n.str[0]]=n.str[1])},getDefault:function(t){return l(u,t)?u[t]:void 0},getInputs:function(e){var r=t(e||n.body),a="[data-kladr-type]";return r.filter(a).add(r.find(a))},setValues:function(e,n){var r,a,i="kladr_change.setvalues",o=t.kladr.type,u={},d=[];if(~t.inArray(t.type(e),["object","array"])){t.each(e,function(t,e){if(e){var n=e.contentType||e.type||t;l(o,n)&&(u[n]=e)}});for(a in o)l(o,a)&&u[a]&&(d[a]=u[a]);r=t.kladr.getInputs(n),function c(){var t,e,n;for(e in d)if(l(d,e)){n=d[e],delete d[e];break}if(e)return t=r.filter('[data-kladr-type="'+e+'"]'),t.length?void t.on(i,function(){t.off(i),c()}).kladr("controller").setValue(n):void c()}()}},getAddress:function(e,n){var r,a=t.kladr.getInputs(e),i=t.kladr.type,o={},u={};a.each(function(){var e,n,r,a=t(this);if(a.attr("data-kladr-id"))if(e=a.kladr("current"),a.attr("data-kladr-one-string")&&e.parents)for(n=[].concat(e.parents),n.push(e),r=0;r<n.length;r++)o[n[r].contentType]=n[r];else o[a.attr("data-kladr-type")]=e;else o[a.attr("data-kladr-type")]=a.val()});for(r in i)l(i,r)&&o[r]&&(u[r]=o[r]);return(n||t.kladr.buildAddress)(u)},buildAddress:function(e){var n=[],r="",a="";return t.each(e,function(e,i){var o,l="",u="";if("object"===t.type(i)){for(o=0;o<n.length;o++)if(n[o]==i.id)return;n.push(i.id),l=i.name,u=i.typeShort+". ",a=i.zip||a}else l=i;r&&(r+=", "),r+=u+l}),r=(a?a+", ":"")+r}}),t.fn.kladr=function(e,n){var r=i(e,n),o=null;return this.each(function(){var e=a(t(this),r);return r.isGet?(o=e,!1):void 0}),r.isGet?o:this}}(jQuery,window,document),function(t){t.fn.kladrZip=function(e){return this.keydown(function(e){var n=e.charCode||e.keyCode||0,r=8==n||9==n||13==n||46==n||110==n||190==n||n>=35&&40>=n||n>=96&&105>=n;return t(this).val().length>=6?r:r||n>=48&&57>=n}),this.keyup(function(){function n(t){t?r.addClass("kladr-error"):r.removeClass("kladr-error")}var r=t(this),a=r.val();return a?void t.kladr.api({type:t.kladr.type.building,zip:a,withParents:!0,limit:1},function(r){var a=r.length&&r[0];r=[],a?(n(!1),a.parents&&(r=r.concat(a.parents)),r.push(a),t.kladr.setValues(r,e)):n(!0)}):void n(!1)}),this}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/centrofinans/js/scripts.min.js?156041822929308";s:6:"source";s:48:"/bitrix/templates/centrofinans/js/scripts.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function polyfill(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var o,n=t.HTMLElement||t.Element,i=468,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||c,scrollIntoView:n.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?f.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;f.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var o=function(t){for(;t!==e.body&&!1===h(t);)t=t.parentNode||t.host;return t}(this),n=o.getBoundingClientRect(),i=this.getBoundingClientRect();o!==e.body?(f.call(this,o,o.scrollLeft+i.left-n.left,o.scrollTop+i.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function d(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function h(t){var e=u(t,"Y")&&d(t,"Y"),o=u(t,"X")&&d(t,"X");return e||o}function p(e){var o,n,r,l,c=(s()-e.startTime)/i;l=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*l)),n=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,n,r),n===e.x&&r===e.y||t.requestAnimationFrame(p.bind(t,e))}function f(o,n,i){var l,a,u,d,h=s();o===e.body?(l=t,a=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,d=r.scroll):(l=o,a=o.scrollLeft,u=o.scrollTop,d=c),p({scrollable:l,method:d,startTime:h,startX:a,startY:u,x:n,y:i})}}!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var o=[];i.prototype.THROTTLE_TIMEOUT=100,i.prototype.POLL_INTERVAL=null,i.prototype.USE_MUTATION_OBSERVER=!0,i.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},i.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},i.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},i.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},i.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,o){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==o[e-1]})},i.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},i.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(t,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},i.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},i.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),o=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(i){var r=i.element,s=l(r),c=this._rootContainsTarget(r),a=i.entry,u=e&&c&&this._computeTargetAndRootIntersection(r,o),d=i.entry=new n({time:t.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:o,intersectionRect:u});a?e&&c?this._hasCrossedThreshold(a,d)&&this._queuedEntries.push(d):a&&a.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},i.prototype._computeTargetAndRootIntersection=function(o,n){if("none"!=t.getComputedStyle(o).display){for(var i,r,s,c,u,d,h,p,f=l(o),m=a(o),v=!1;!v;){var y=null,g=1==m.nodeType?t.getComputedStyle(m):{};if("none"==g.display)return;if(m==this.root||m==e?(v=!0,y=n):m!=e.body&&m!=e.documentElement&&"visible"!=g.overflow&&(y=l(m)),y&&(i=y,r=f,s=void 0,c=void 0,u=void 0,d=void 0,h=void 0,p=void 0,s=Math.max(i.top,r.top),c=Math.min(i.bottom,r.bottom),u=Math.max(i.left,r.left),d=Math.min(i.right,r.right),p=c-s,!(f=(h=d-u)>=0&&p>=0&&{top:s,bottom:c,left:u,right:d,width:h,height:p})))break;m=a(m)}return f}},i.prototype._getRootRect=function(){var t;if(this.root)t=l(this.root);else{var o=e.documentElement,n=e.body;t={top:0,left:0,right:o.clientWidth||n.clientWidth,width:o.clientWidth||n.clientWidth,bottom:o.clientHeight||n.clientHeight,height:o.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},i.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,o){return"px"==e.unit?e.value:e.value*(o%2?t.width:t.height)/100}),o={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o},i.prototype._hasCrossedThreshold=function(t,e){var o=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(o!==n)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==o||r==n||r<o!=r<n)return!0}},i.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)},i.prototype._rootContainsTarget=function(t){return c(this.root||e,t)},i.prototype._registerInstance=function(){o.indexOf(this)<0&&o.push(this)},i.prototype._unregisterInstance=function(){var t=o.indexOf(this);-1!=t&&o.splice(t,1)},t.IntersectionObserver=i,t.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,o=e.width*e.height,n=this.intersectionRect,i=n.width*n.height;this.intersectionRatio=o?Number((i/o).toFixed(4)):this.isIntersecting?1:0}function i(t,e){var o,n,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(o=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){o(),i=null},n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(t,e,o,n){"function"==typeof t.addEventListener?t.addEventListener(e,o,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,o)}function s(t,e,o,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,o,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,o)}function l(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var o=e;o;){if(o==t)return!0;o=a(o)}return!1}function a(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}(window,document),function(t){var e=!1;if("function"==typeof define&&define.amd&&(define(t),e=!0),"object"==typeof exports&&(module.exports=t(),e=!0),!e){var o=window.Cookies,n=window.Cookies=t();n.noConflict=function(){return window.Cookies=o,n}}}(function(){function t(){for(var t=0,e={};t<arguments.length;t++){var o=arguments[t];for(var n in o)e[n]=o[n]}return e}return function e(o){function n(e,i,r){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(r=t({path:"/"},n.defaults,r)).expires){var l=new Date;l.setMilliseconds(l.getMilliseconds()+864e5*r.expires),r.expires=l}r.expires=r.expires?r.expires.toUTCString():"";try{s=JSON.stringify(i),/^[\{\[]/.test(s)&&(i=s)}catch(t){}i=o.write?o.write(i,e):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var c="";for(var a in r)r[a]&&(c+="; "+a,!0!==r[a]&&(c+="="+r[a]));return document.cookie=e+"="+i+c}e||(s={});for(var u=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,h=0;h<u.length;h++){var p=u[h].split("="),f=p.slice(1).join("=");this.json||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var m=p[0].replace(d,decodeURIComponent);if(f=o.read?o.read(f,m):o(f,m)||f.replace(d,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(t){}if(e===m){s=f;break}e||(s[m]=f)}catch(t){}}return s}}return n.set=n,n.get=function(t){return n.call(n,t)},n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(e,o){n(e,"",t(o,{expires:-1}))},n.withConverter=e,n}(function(){})}),Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),o=0;e[o]&&e[o]!==this;)++o;return!!e[o]},Element.prototype.closest=function(t){for(var e=this;e;){if(e.matches(t))return e;e=e.parentElement}return null},
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){if("Element"in t){t=t.Element.prototype;var e=Object,o=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},n=Array.prototype.indexOf||function(t){for(var e=0,o=this.length;e<o;e++)if(e in this&&this[e]===t)return e;return-1},i=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},r=function(t,e){if(""===e)throw new i("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new i("INVALID_CHARACTER_ERR","The token must not contain space characters.");return n.call(t,e)},s=function(t){for(var e=o.call(t.getAttribute("class")||""),n=0,i=(e=e?e.split(/\s+/):[]).length;n<i;n++)this.push(e[n]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=s.prototype=[],c=function(){return new s(this)};if(i.prototype=Error.prototype,l.item=function(t){return this[t]||null},l.contains=function(t){return!~r(this,t+"")},l.add=function(){var t=arguments,e=0,o=t.length,n=!1;do{var i=t[e]+"";~r(this,i)&&(this.push(i),n=!0)}while(++e<o);n&&this._updateClassName()},l.remove=function(){var t,e=arguments,o=0,n=e.length,i=!1;do{var s=e[o]+"";for(t=r(this,s);~t;)this.splice(t,1),i=!0,t=r(this,s)}while(++o<n);i&&this._updateClassName()},l.toggle=function(t,e){var o=this.contains(t),n=o?!0!==e&&"remove":!1!==e&&"add";return n&&this[n](t),!0===e||!1===e?e:!o},l.replace=function(t,e){var o=r(t+"");~o&&(this.splice(o,1,e),this._updateClassName())},l.toString=function(){return this.join(" ")},e.defineProperty){l={get:c,enumerable:!0,configurable:!0};try{e.defineProperty(t,"classList",l)}catch(o){void 0!==o.number&&-2146823252!==o.number||(l.enumerable=!1,e.defineProperty(t,"classList",l))}}else e.prototype.__defineGetter__&&t.__defineGetter__("classList",c)}}(self),function(){var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var o,n=arguments.length;for(o=0;o<n;o++)t=arguments[o],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:o.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var o=this.toString().split(" "),n=o.indexOf(t+"");~n&&(o=o.slice(n),this.remove.apply(this,o),this.add(e),this.add.apply(this,o.slice(1)))}),t=null}()),"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:polyfill}:polyfill()
/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/;var CF={};!function(){CF.body=document.body,CF.width=window.innerWidth,CF.height=window.innerHeight,CF.btnUP=document.querySelector(".footer__up"),CF.touchDevice="ontouchstart"in document.documentElement;var t=null;if(window.addEventListener("resize",function(){t||(t=setTimeout(function(){t=null,CF.width=window.innerWidth,CF.height=window.innerHeight},100))}),window.addEventListener("scroll",function(){window.requestAnimationFrame(function(){CF.btnUP&&CF.btnUP.classList.toggle("footer__up--show",CF.height<window.pageYOffset)})}),CF.btnUP&&CF.btnUP.addEventListener("click",function(){CF.body.scrollIntoView({behavior:"smooth"})}),(!CF.touchDevice||CF.width>1200)&&Array.prototype.forEach.call(document.querySelectorAll('[href^="tel"]'),function(t){t.removeAttribute("href")}),CF.declension=function(t,e){var o=t%100;return o>4&&o<21?e[2]:1==(o%=10)?e[0]:o>1&&o<5?e[1]:e[2]},document.querySelector(".calculator")){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=SITE_TEMPLATE_PATH+"/js/calculator.all.min.js?1560417736675",document.head.appendChild(e)}CF.cssAnimation=function(t){var e,o,n=document.createElement("cssanimation");switch(t){case"animation":e={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};break;case"transition":e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"}}for(o in e)if(void 0!==n.style[o])return e[o]},CF.isInViewport=function(t){var e=t.getBoundingClientRect();return e.top>=0&&e.bottom<=CF.height}}(),function(t){t&&t.addEventListener("click",function(){document.querySelector(".blog__tags-all-list").classList.toggle("blog__tags-all-list--open")})}(document.querySelector(".blog__tags-all-btn")),document.querySelector(".cookie"),function(){document.querySelector(".article")&&(document.querySelector(".article").oncopy=function(){var t=document.getElementsByTagName("body")[0],e=document.getSelection(),o=e+"<p>Источник: <a href='"+location.href+"'>"+location.href+"</a></p>",n=document.createElement("div");t.appendChild(n),n.innerHTML=o,e.selectAllChildren(n),window.setTimeout(function(){t.removeChild(n)},0)})}(),function(){var t=document.querySelectorAll(".form");Array.prototype.forEach.call(t,function(t){var i=t.getAttribute("data-ok"),r=t.querySelectorAll("[required]"),s=t.querySelector(".form__submit");t.addEventListener("submit",function(l){l.preventDefault();var c=!1,a=new FormData(t);if(Array.prototype.forEach.call(r,function(t){"checkbox"==t.getAttribute("type")?t.checked?t.parentNode.classList.remove("checkbox--error"):(t.parentNode.classList.add("checkbox--error"),c=!0):(t.classList.contains("input-label__input")&&n(t),t.value||(c=!0))}),!c){var u=new XMLHttpRequest;u.open("POST",t.getAttribute("action")),u.send(a),s&&s.setAttribute("disabled","disabled"),u.onreadystatechange=function(){4==u.readyState&&(200==u.status?(t.reset(),Array.prototype.forEach.call(e,function(t){o(t)}),i&&CF.modalShow("ok",i.split("|")[0],i.split("|")[1])):alert("ошибка "+u.status),s&&s.removeAttribute("disabled"))}}})});var e=document.querySelectorAll(".input-label__input");function o(t,e){t.value?t.parentNode.classList.add("input-label--no-empty"):t.parentNode.classList.remove("input-label--no-empty"),e&&null!==t.getAttribute("required")&&n(t),t.classList.contains("input--capitalize")&&(t.value=t.value.toLowerCase())}function n(t){t.value?t.parentNode.classList.remove("input-label--error"):t.parentNode.classList.add("input-label--error")}Array.prototype.forEach.call(e,function(t){t.addEventListener("focus",function(){o(t)}),t.addEventListener("keyup",function(){o(t,!0)}),t.addEventListener("blur",function(){o(t,!0)}),o(t)});var i=document.querySelectorAll(".checkbox");Array.prototype.forEach.call(i,function(t){var e=t.querySelector("input");e.addEventListener("change",function(){e.checked&&t.classList.remove("checkbox--error")})})}(),[{selector:".calculator__next-step",event:"click",yandex:{target:"calcStart"}},{selector:".calculator__form",event:"ajax-send-success",yandex:{target:"calcFinish"}}].forEach(function(t){if(!(t.page&&t.page!==location.pathname||t.skipPages&&-1!==t.skipPages.indexOf(location.pathname))){var e=document.querySelectorAll(t.selector);[].forEach.call(e,function(e){e.addEventListener(t.event,function(){t.yandex&&window.yaCounter19405381&&window.yaCounter19405381.reachGoal(t.yandex.target),t.google&&window.gtag&&gtag("event",t.google.action,{event_category:t.google.category,event_label:t.google.label})})})}}),function(){var t=function(t){this.container=document.querySelector(t),this.container&&(this.action=this.container.getAttribute("action"),this.input=this.container.querySelector(".header__search-input"),this.btn=this.container.querySelector(".header__search-btn"),this.result=this.container.querySelector(".header__search-result"),this.init())};t.prototype={oldValue:"",run:!1,minQueryLen:2,cache:[],init:function(){var t=this;this.oldValue=this.input.value,this.btn.addEventListener("click",function(e){t.open(),e.preventDefault()}),window.addEventListener("click",function(e){e.target.closest(".header__search")||t.close()}),this.input.addEventListener("keydown",function(e){27!==e.keyCode||t.close()}),this.input.addEventListener("focus",function(){t.result.innerHTML.length>0&&t.showResult()});var e=0;this.input.addEventListener("input",function(){e&&clearTimeout(e),0!==t.input.value.length?e=setTimeout(function(){t.search(t.input.value)},500):t.hideResult()})},open:function(){var t=this;this.container.classList.toggle("header__search--show"),setTimeout(function(){t.container.classList.contains("header__search--show")?t.input.focus():document.body.classList.remove("body--bg")},100)},close:function(){this.input.value="",this.container.classList.remove("header__search--show"),document.body.classList.remove("body--bg"),this.hideResult()},showResult:function(t){this.result.innerHTML=t||"",this.result.classList.remove("hide")},hideResult:function(){this.result.innerHTML="",this.result.classList.add("hide")},search:function(t){var e=this;this.run||t!==this.oldValue&&(t.length<=this.minQueryLen||(this.input.value in this.cache?this.showResult(this.cache[this.input.value]):(this.run=!0,this.loadResults(this.input.value).then(function(t){e.cache[e.input.value]=t,e.showResult(t),e.run=!1}))))},loadResults:function(t){var e=this;return new Promise(function(o,n){var i,r=new XMLHttpRequest;r.open("GET",e.action+"?"+(i={ajax_call:"y",INPUT_ID:e.input.id,q:t,l:e.minQueryLen},Object.keys(i).map(function(t){return t+"="+encodeURIComponent(i[t])}).join("&"))),r.send(),r.onload=function(){this.status>=200&&this.status<300?o(r.response):n({status:this.status,statusText:this.statusText})},r.onerror=function(){n({status:this.status,statusText:this.statusText})}})}},new t(".header__search")}(),CF.loadMap=function(t){if("undefined"==typeof ymaps){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU",e.onload=function(){ymaps.ready(t)},document.head.appendChild(e)}else ymaps.ready(t)},function(t){Array.prototype.forEach.call(t,function(t){var e=t.querySelector(".map-toggle__btn");t.querySelector(".map-toggle__map");e.addEventListener("click",function(){t.classList.toggle("map-toggle--hide")})})}(document.querySelectorAll(".map-toggle")),CF.mask=function(t){if(t.length)if("undefined"==typeof Inputmask){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=SITE_TEMPLATE_PATH+"/js/inputmask.all.min.js",e.onload=function(){Inputmask.extendDefaults({oncomplete:function(){this.classList.add("inputmask--complete")},onincomplete:function(){this.classList.remove("inputmask--complete")},oncleared:function(){},onKeyValidation:function(t,e){}}),o()},setTimeout(function(){document.head.appendChild(e)},3e3)}else o();function o(){Array.prototype.forEach.call(t,function(t){if(t.classList.contains("inputmask--phone"))var e=new Inputmask({mask:"+7 999 999 99 99",showMaskOnHover:!1,placeholder:"+7 ___ ___ __ __"});else if(t.classList.contains("inputmask--date"))e=new Inputmask({alias:"datetime",showMaskOnHover:!1,inputFormat:"dd.mm.yyyy",placeholder:"дд.мм.гггг"});else if(t.classList.contains("inputmask--currency"))e=new Inputmask({alias:"integer",suffix:" рублей",groupSize:3,autoGroup:!0,groupSeparator:" ",rightAlign:!1});else e=new Inputmask(t.getAttribute("data-mask"));e.mask(t)})}},CF.mask(document.querySelectorAll(".inputmask")),CF.videoToggle=function(t){var e=document.querySelectorAll("video");e.length&&Array.prototype.forEach.call(e,function(e){"play"==t?e.play():e.pause()})},function(t){t&&(t.addEventListener("click",function(){CF.videoToggle("stop"),t.parentNode.classList.toggle("header__nav--show")}),window.addEventListener("click",function(e){e.target.closest(".header__nav")&&!e.target.closest(".header__search")||(CF.videoToggle("play"),t.parentNode.classList.remove("header__nav--show"))}))}(document.querySelector(".header__btn-full-menu")),function(t){if(t){var e=document.querySelector(".header__btn-full-menu").parentNode;window.addEventListener("click",function(o){e.classList.contains("header__nav--show")||t.classList.contains("header__search--show")?(CF.videoToggle("stop"),CF.body.classList.add("body--bg")):CF.videoToggle("play")})}}(document.querySelector(".header__search")),function(t){t&&t.addEventListener("click",function(){CF.OpenMenu?(CF.body.classList.remove("menu-show"),window.jQuery?jQuery("body, html").scrollTop(CF.windowScrollOld):window.scrollTo(0,CF.windowScrollOld),CF.OpenMenu=!1):(CF.OpenMenu=!0,CF.windowScrollOld=window.pageYOffset,window.jQuery?jQuery("body, html").scrollTop(0):window.scrollTo(0,0),CF.body.classList.add("menu-show"))})}(document.querySelector(".header__btn-menu-toggle")),function(){var t=document.querySelectorAll(".modal"),e=document.querySelectorAll(".modal__box"),o=document.querySelectorAll(".modal__item"),n=document.querySelector(".wrapper"),i=document.getElementById("modal-video"),r=null;Array.prototype.forEach.call(t,function(t){t.addEventListener("click",function(t){(t.target.classList.contains("modal")||t.target.classList.contains("modal__close"))&&CF.hideModal()})}),CF.hideModal=function(){CF.videoToggle("play"),Array.prototype.forEach.call(t,function(t){t.classList.add("hidden-visible")}),CF.body.classList.remove("modal-show"),n.style.top=0,window.jQuery?jQuery("body, html").scrollTop(CF.windowScrollOld):window.scrollTo(0,CF.windowScrollOld),r=!1,i&&(i.innerHTML=""),setTimeout(function(){CF.body.classList.remove("scroll-behavior-off")})},CF.modalShow=function(i,s,l){CF.videoToggle("stop"),CF.body.classList.add("scroll-behavior-off"),r||(CF.windowScrollOld=window.pageYOffset,n.style.top=-CF.windowScrollOld+"px"),r=null,Array.prototype.forEach.call(o,function(t){t.classList.contains("modal__item--"+i)?(t.classList.remove("hidden-visible"),r=t):t.classList.add("hidden-visible")}),r?("ok"===i&&(s||(s=""),l||(l=""),r.querySelector(".modal__title").innerHTML=s,r.querySelector(".modal__text").innerHTML=l),Array.prototype.forEach.call(t,function(t){t.classList.add("hidden-visible")}),Array.prototype.forEach.call(e,function(t){t.classList.add("hidden-visible")}),r.closest(".modal").classList.remove("hidden-visible"),r.closest(".modal__box").classList.remove("hidden-visible"),CF.body.classList.add("modal-show"),window.jQuery?jQuery("body, html").scrollTop(0):window.scrollTo(0,0),CF.OpenMenu&&(CF.body.classList.remove("menu-show"),CF.OpenMenu=!1),r.focus(),"function"==typeof window.CustomEvent&&r.dispatchEvent(new Event("modalShow"))):console.warn('Modal "%s" not found',i)},document.addEventListener("click",function(t){for(var e=t.target;e!==this;)e.hasAttribute("data-modal")&&CF.modalShow(e.getAttribute("data-modal")),e=e.parentNode})}(),document.querySelector(".modal__item--lk"),function(t){t.length&&Array.prototype.forEach.call(t,function(t){var e=t.querySelector(".office-select__input"),o=t.querySelector(".office-select__reset");e.addEventListener("keyup",function(){o.classList.toggle("hide",e.value.length<4)}),t.addEventListener("reset",function(){o.classList.add("hide"),e.value=""})})}(document.querySelectorAll(".office-select__form")),function(t){t.length&&Array.prototype.forEach.call(t,function(t){var e=t.querySelectorAll(".modal-poll__radio input"),o=t.querySelector(".modal-poll__input-custom"),n=t.querySelector(".modal__btn");function i(){n.disabled=!o.value}o.addEventListener("change",function(){i()}),o.addEventListener("keyup",function(){i()}),o.addEventListener("blur",function(){i()}),Array.prototype.forEach.call(e,function(t){t.addEventListener("change",function(){n.disabled=!1,"custom"===this.value?(o.classList.remove("hide"),o.disabled=!1,o.focus(),i()):(o.classList.add("hide"),o.disabled=!0)})})})}(document.querySelectorAll(".modal-poll")),function(t){if(t){var e=t.querySelectorAll("[data-youtube]");e.length&&Array.prototype.forEach.call(e,function(t){var e=t.getAttribute("data-youtube");t.addEventListener("click",function(o){o.preventDefault();var n=document.createElement("iframe");n.setAttribute("allowfullscreen",""),n.setAttribute("allow","autoplay"),n.setAttribute("src","https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"),t.appendChild(n),t.classList.add("youtube-iframe")})})}}(document.querySelector(".article__content"));
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/bitrix/templates/centrofinans/js/add.js?156041323419852";s:6:"source";s:40:"/bitrix/templates/centrofinans/js/add.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function () {
    //Делаем скриншот, когда вся страница загрузится
    var IMG,
        nCanvasID = $('#send-img-to-email').data('id');

    $(window).load(function () {
        if ($('#send-img-to-email').length > 0 && window.html2canvas) {
            var element = $('#' + nCanvasID);

            element.css('background', '#fff');
            $('.hide-on-src-canvas').addClass('hide');
            $('.show-on-src-canvas').removeClass('hide');

            html2canvas(element, {
                allowTaint: true,
                useCORS: true,
                onrendered: function (canvas) {
                    try {
                        IMG = canvas.toDataURL().replace(/^data[:]image\/(png|jpg|jpeg)[;]base64,/i, '');
                    } catch (e) {
                        console.log(e);
                    }

                    element.css('background', '');
                    $('.hide-on-src-canvas').removeClass('hide');
                    $('.show-on-src-canvas').addClass('hide');
                }
            });
        }
    });

    // /spasibo/ Сохранение займа в PDF
    $(document).on('click', '.btn-download-pdf', function () {
        var element = document.getElementById(nCanvasID);

        $(element).addClass('thank_you--pdf');
        $('.hide-on-src-canvas').addClass('hide');
        $('.show-on-src-canvas').removeClass('hide');

        html2pdf(element, {
            margin: 1,
            filename: 'Детали займа.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {dpi: 192, letterRendering: true},
            jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
        });

        $(element).removeClass('thank_you--pdf');
        $('.hide-on-src-canvas').removeClass('hide');
        $('.show-on-src-canvas').addClass('hide');
    });

    // /spasibo/ Отправка картинка займа на Email
    $(document).on('submit', "#form-loan-send-email", function (event) {
        event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        var thisForm = $(this),
            formData = thisForm.serialize();

        formData += "&IMAGE=" + encodeURIComponent(IMG);

        $.ajax({
            url: thisForm.attr('action'),
            type: 'POST',
            data: formData,
        }).done(function (data) {
            data = JSON.parse(data);

            if (data.SUCCESS) {
                thisForm.find('.modal__title').html(data.MESSAGE);
                thisForm.find('input[type="email"]').val('');
                thisForm.find('.modal__form-center').hide();
            }
        });

        return false;
    });

    $(document).on('click', 'form#list-officess-address .ico--close-reset', function (event) {
        event.preventDefault();
        var lat = $("ul.map-address__address-result li:first a").attr("data-ll").split(",")[0],
            lon = $("ul.map-address__address-result li:first a").attr("data-ll").split(",")[1];

        $('form#list-officess-address input[name="OFFICE_ID"]').val("");
        $('form#list-officess-address input[name="OFFICE_ID"]').closest('ul').find('li:last').hide().find('.as-select__text').html("");
        $('.map-address__btn').hide();
        $('.map-address-ya-taxi-widget').hide();

        ymaps.ready(function () {
            myMap.setCenter([lat, lon], 10);
        });
    });

    // AJAX подгрузка отзывов
    $('#ajax-load-reviews').on('click', function (event) {
        event.preventDefault();

        var thisBtn = $(this),
            nTotalNewsCount = parseInt($(this).data("all-news-count")),
            nNewsPerPage = parseInt($(this).data("news-per-page")),
            nCurrentPage = parseInt($(this).attr("data-current-page")),
            nMaxPages = Math.ceil(nTotalNewsCount / nNewsPerPage),
            sUrl = $(this).data("page-url"),
            nNextPage = nCurrentPage + 1;

        if (nNextPage <= nMaxPages) {

            $.get(sUrl + "?AJAX=Y&PAGEN_1=" + nNextPage, function (data) {

                scrlTopDoc = $(document).scrollTop();
                $(data).insertBefore(thisBtn);
                $('html, body').scrollTop(scrlTopDoc);

                nCurrentPage++;
                if (nCurrentPage == nMaxPages)
                    thisBtn.hide();
                else
                    thisBtn.attr("data-current-page", nCurrentPage);
            });

        } else thisBtn.hide();

    });

    // AJAX подгрузка статей
    $('.blog__btn-loading a').on('click', function (e) {
        e.preventDefault();

        var btn = $(this);

        if (btn.is('[disabled]'))
            return;

        btn.attr('disabled', 'disabled');

        $.get(btn.attr('href'), function (html) {

            html = $(html);

            btn.closest('.blog__box').find('.preview-list__box').append(html.find('.preview-list__item'));

            if (html.find('.btn-loading').length) {
                btn.attr('href', html.find('.btn-loading').attr('href'))
            } else {
                btn.addClass('hide');
            }

            btn.removeAttr('disabled');
        });
    });

    // Лайки к статьям
    $('.icons-row__like-form').each(function () {
        var form = $(this),
            like = form.closest('.icons-row__like');

        $.post(form.attr('action'), form.serialize(), function (response) {
            if (response.success) {
                like.find('.icons-row__like-count').text(response.likes || 0);

                if (response.userHasLike)
                    like.addClass('icons-row__like--red');
            }
        }, 'json');

        form.on('submit', function (e) {
            e.preventDefault();

            if (like.hasClass('icons-row__like--red'))
                return;

            $.post(form.attr('action'), form.serialize() + '&action=add-like', function (response) {
                if (response.success) {
                    like.addClass('icons-row__like--red');
                    like.find('.icons-row__like-count').text(response.likes);
                } else if (response.error) {
                    alert(response.error);
                }
            }, 'json');
        });
    });

    // Подписка на новостную рассылку
    $('form.subscribe').on('submit', function (e) {
        e.preventDefault();

        var emailInput = $(this).find('input[type="email"]');

        $('.modal__item--subscribe .js-subscribe-email').val(emailInput.val());

        CF.modalShow('subscribe');
    });

    $("#jobs-city-select").on('change', function (event) {
        event.preventDefault();
        var nCitySectionID = parseInt($(this).val()),
            sUrl = $(this).data("url");

        if (!isNaN(nCitySectionID)) {
            $('<span class="job-city-list__loader"><svg class="loading-spin" height="44" width="44" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="19" fill="none" stroke-width="4" stroke-linecap="round" stroke-dasharray="88 80" stroke="#ff0142"/></svg></span>').appendTo('#job-city-list');
            $.get(sUrl + "?AJAX=Y&AJAX_JOBS_CITY_ID=" + nCitySectionID, function (data) {
                $("#job-city-list").html(data);
                if (location.hash) {
                    $("#job-city-list li").each(function (index, el) {
                        var href = $(this).find('a').attr("href");
                        $(this).find('a').attr("href", href + location.hash);

                    });
                }
            });
        }
    });


    /* /o-kompanii/arendodatelyam/ АРЕНДОДАТЕЛЯМ */

    var rentFiles = [];

    $("#rent-form").on('change', 'input[type="file"]', function (event) {

        var file = this.files[0],
            imagefile = file.type,
            match = ["image/jpeg", "image/png", "image/jpg"],
            thisLi = $(this).closest('li');

        event.target.files[0].index = thisLi.index();
        rentFiles.push(event.target.files[0]);

        $(thisLi).html('<span class="ajax-load__circle"><span class="ajax-load__circle-line"></span></span><a class="ajax-load__loading"><span class="ico ico--arrow-up"></span></a>');

        if (!((imagefile == match[0]) || (imagefile == match[1]) || (imagefile == match[2]))) {
            alert("Неверный формат файла!");
            return false;
        } else {
            var reader = new FileReader();
            reader.onload = function (e) {
                rentFiles
                $(thisLi).html('<img src="' + e.target.result + '" alt=""><a class="ajax-load__remove-img" data-fileindex="' + (thisLi.index()) + '"><span class="ico ico--close-white"></span></a>');
            };
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#rent-form").on('click', '.ajax-load__remove-img', function (event) {
        var tempRentFiles = [],
            thisLi = $(this).closest('li');

        for (k in rentFiles) {
            if (thisLi.index() != parseInt(rentFiles[k].index))
                tempRentFiles.push(rentFiles[k]);
        }

        rentFiles = tempRentFiles;

        $(thisLi).html('<a class="ajax-load__load-add"><span class="ico ico--load"></span>Загрузить фото<input type="file" name="USER_PHOTO[]" class="file--hidden"></a>');
    });

    $(document).on('submit', '#rent-form', function (event) {

        event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        var uploadedFiles = new FormData(),
            thisForm = $(this),
            bError = false;

        $.each(rentFiles, function (key, value) {
            uploadedFiles.append(key, value);
        });

        thisForm.find('.input-error').removeClass('input-error');

        $.ajax({
            url: SITE_TEMPLATE_PATH + "/ajax/rent_order.php?FILE_UPLOAD=Y&sessid=" + BX.bitrix_sessid(),
            type: "POST",
            data: uploadedFiles,
            contentType: false,
            cache: false,
            processData: false
        })
            .done(function (data) {

                data = JSON.parse(data);

                if (data.SUCCESS) {

                    $.ajax({
                        url: SITE_TEMPLATE_PATH + "/ajax/rent_order.php",
                        type: "POST",
                        data: {
                            RENT_CITY: thisForm.find('input[name="RENT_CITY"]').val(),
                            RENT_ADDRESS: thisForm.find('input[name="RENT_ADDRESS"]').val(),
                            RENT_SQUARE: thisForm.find('input[name="RENT_SQUARE"]').val(),
                            RENT_PHONE: thisForm.find('input[name="RENT_PHONE"]').val(),
                            RENT_MESSAGE: thisForm.find('textarea[name="RENT_MESSAGE"]').val(),
                            RENT_PHOTOS: data.FILES,
                            sessid: BX.bitrix_sessid(),
                            AJAX_RENT: "Y"
                        }
                    })
                        .done(function (data) {
                            data = JSON.parse(data);
                            if (parseInt(thisForm.find('input[name="FZ_PD_ACCEPT"]:checked').val()) != 1) {
                                thisForm.find('input[name="FZ_PD_ACCEPT"]').closest('label').addClass('error-blink').one('click', function (event) {
                                    $(this).removeClass('error-blink');
                                });
                                setTimeout(function () {
                                    thisForm.find('input[name="FZ_PD_ACCEPT"]').closest('label').removeClass('error-blink');
                                }, 2000);
                                bError = true;
                            }

                            if (data.SUCCESS && !bError) {
                                thisForm.find('input[type="text"], input[type="tel"], textarea').val("");
                                $("#rent-form ul.ajax-load li").html('<a class="ajax-load__load-add"><span class="ico ico--load"></span>Загрузить фото<input type="file" name="USER_PHOTO[]" class="file--hidden"></a>');
                                CF.modalShow('ok', 'Заявка успешно отправлена.', 'Мы свяжемся с вами в ближайшее время.')
                            } else {
                                for (p in data.MESSAGE) {
                                    var thisField = thisForm.find('[name="' + data.MESSAGE[p].FIELD + '"]');
                                    thisField.addClass('input--error').one('click', function (event) {
                                        $(this).removeClass('input--error');
                                    });
                                }
                            }

                        });
                }
            });

        return false;
    });


    /*FEEDBACK CONTACTS*/
    $(document).on('submit', '#contacts-form', function (event) {
        event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        var thisForm = $(this),
            formData = thisForm.serialize(),
            bError = false;

        $(this).find("select[name='CONTACTS_THEME']").siblings('span.select__value').removeClass('select--error');

        if (isNaN(parseInt($(this).find("select[name='CONTACTS_THEME']").val()))) {
            $(this).find("select[name='CONTACTS_THEME']").siblings('span.select__value').addClass('select--error');
            bError = true;
        }

        if (parseInt(thisForm.find('input[name="FZ_PD_ACCEPT"]:checked').val()) != 1) {
            thisForm.find('input[name="FZ_PD_ACCEPT"]').closest('label').addClass('error-blink').one('click', function (event) {
                $(this).removeClass('error-blink');
            });
            setTimeout(function () {
                thisForm.find('input[name="FZ_PD_ACCEPT"]').closest('label').removeClass('error-blink');
            }, 2000);
            bError = true;
        }

        if (bError)
            return false;

        $.ajax({
            url: SITE_TEMPLATE_PATH + "/ajax/contacts_form.php",
            type: 'POST',
            data: formData
        })
            .done(function (data) {
                data = JSON.parse(data);

                if (data.SUCCESS) {
                    thisForm.find('input[type="text"], input[type="tel"], input[type="email"], textarea').val("");
                    CF.modalShow('ok', 'Заявка успешно отправлена.', 'Мы свяжемся с вами в ближайшее время.');
                }
            });

        return false;
    });

    /*JOB FORM*/
    $('form#job-form').on('submit', function (event) {
        event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        if ($("#hidden-submit-field").length == 0)
            return false;

        var thisForm = $(this).closest('form'),
            thisBtn = $(this),
            formData = thisForm.serialize();

        $.ajax({
            url: SITE_TEMPLATE_PATH + '/ajax/job_order.php',
            type: 'POST',
            data: formData,
        })
            .done(function (data) {
                data = JSON.parse(data);

                if (data.ERROR) {
                    for (p in data.MESSAGE) {
                        if (data.MESSAGE[p].FIELD == 'JOB_CAPTCHA') {
                            thisForm.find('input[name="JOB_CAPTCHA_SID"]').val(data.CAPTCHA_CODE);
                            thisForm.find('input[name="' + data.MESSAGE[p].FIELD + '"]').addClass('input--error').one('focus', function () {
                                $(this).removeClass('input--error');
                            });
                            $("#job-captcha").attr('src', data.CAPTCHA_IMG);
                        }
                    }
                    $('.form-jobs__step.step-5').addClass('hide');
                    $('.form-jobs__step.step-4').removeClass('hide');
                } else if (data.SUCCESS) {
                    $("#hidden-submit-field").remove();
                    $('.form-jobs__step.step-5').find('p').toggleClass('hide');
                    $('.form-jobs__step.step-5').find('span').remove();
                }
            });


        return false;
    });

    //AJAX подгрузка статей блога
    $('#ajax-load-blog').on('click', function (event) {
        event.preventDefault();

        var thisBtn = $(this),
            nTotalNewsCount = parseInt($(this).data("all-news-count")),
            nNewsPerPage = parseInt($(this).data("news-per-page")),
            nCurrentPage = parseInt($(this).attr("data-current-page")),
            nMaxPages = Math.ceil(nTotalNewsCount / nNewsPerPage),
            sUrl = $(this).data("page-url"),
            nNextPage = nCurrentPage + 1;

        if (nNextPage <= nMaxPages) {
            $.get(sUrl + (stripos(sUrl, "?") === false ? "?" : "&") + "AJAX=Y&PAGEN_1=" + nNextPage, function (data) {

                $(data).insertBefore(thisBtn).hide().slideDown('fast');

                nCurrentPage++;

                if (nCurrentPage == nMaxPages)
                    thisBtn.hide();
                else
                    thisBtn.attr("data-current-page", nCurrentPage);
            });
        } else {
            thisBtn.hide();
        }
    });


    $(".input--numeric").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
            // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
            // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $(document).on('click', '.faq__box-nav .faq__item-name', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $($(this).data('href')).offset().top - 150}, 200);
    });

    $(".input--cyrillic").on('keydown', function () {
        var that = this;
        setTimeout(function () {
            var res = /[^А-Яа-я\-]/g.exec(that.value);
            that.value = that.value.replace(res, '');
        }, 0);
    });
});

function stripos(f_haystack, f_needle, f_offset) {
    var haystack = f_haystack.toLowerCase();
    var needle = f_needle.toLowerCase();
    var index = 0;

    if (f_offset == undefined) {
        f_offset = 0;
    }

    if ((index = haystack.indexOf(needle, f_offset)) > -1) {
        return index;
    }

    return false;
}

function stristr(haystack, needle, bool) {
    var pos = 0;

    pos = haystack.toLowerCase().indexOf(needle.toLowerCase());
    if (pos === -1) {
        return false;
    } else {
        if (bool) {
            return haystack.substr(0, pos);
        } else {
            return haystack.slice(pos);
        }
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/centrofinans/js/lk.js?155651914410326";s:6:"source";s:39:"/bitrix/templates/centrofinans/js/lk.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function () {
    $('.modal__box--lk').each(function () {
        var component = $(this);

        component.on('submit', '.modal__form', function (e) {
            e.preventDefault();

            var form = $(this),
                requredInputs = form.find('[required]'),
                novalidate = false;

            requredInputs.each(function () {
                var input = $(this);

                if (input.attr('type') === 'checkbox') {
                    if (input.checked) {
                        input.parent().removeClass('checkbox--error');
                    } else {
                        input.parent().addClass('checkbox--error');
                        novalidate = true;
                    }
                } else {
                    if (input.val()) {
                        input.removeClass('input--error');
                    } else {
                        input.addClass('input--error');
                        novalidate = true;
                    }
                }
            });

            if (novalidate)
                return;

            var btn = form.find('.form__submit');

            btn.prop('disabled', true);

            $.ajax({
                method: 'post',
                url: form.attr('action'),
                data: form.serializeArray(),
                cache: false,
                crossDomain: true,
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function (answer) {
                    component.find('.js-errors').html('');
                    btn.prop('disabled', false);

                    if (answer.success) {
                        if (answer.auth) {
                            form.find('input[name="action"]').val('auth');
                            form.trigger('submit')
                        } else if (answer.nextModal) {
                            replaceContent(answer.html);
                        } else if (answer.redirect) {
                            location.href = answer.redirect;

                            if (answer.html)
                                replaceContent(answer.html);
                        }
                    } else if (answer.errors) {
                        component.find('.js-errors').html(answer.errors.join('<br>'));
                    }
                }
            });
        });

        component.on('click', '.js-load-modal', function (e) {
            e.preventDefault();

            var data = {
                action: 'load-modal',
                modal: $(this).data('load-modal'),
                sessid: BX.message('bitrix_sessid')
            };

            if ($(this).data('modal-params')) {
                data['params'] = $(this).data('modal-params');
            }

            $.post(component.data('ajax-url'), data, function (answer) {
                if (answer.success) {
                    replaceContent(answer.html);
                }
            }, 'json');
        });

        component.on('click', '.js-agree', function () {
            component.find('.form__submit').prop('disabled', !$(this).is(':checked'));
        });

        function replaceContent(html) {
            component.find('.js-alert-content').html(html);

            [].forEach.call(component.get(0).querySelectorAll('.input-label__input'), function (el) {
                el.addEventListener('focus', function () {
                    focusInputLabel(el);
                });

                el.addEventListener('keyup', function () {
                    focusInputLabel(el, true);
                });

                el.addEventListener('blur', function () {
                    focusInputLabel(el, true);
                });

                focusInputLabel(el);
            });

            component.find('.inputmask--phone').each(function () {
                var maskInput = new Inputmask({
                    mask: '+7 (999) 999-99-99',
                    showMaskOnHover: false,
                    placeholder: '+7 (___) ___-__-__'
                });
                maskInput.mask(this);
            });

            component.find('.js-agree').trigger('change');

            [].forEach.call(component.get(0).querySelectorAll('.password-input'), function (el) {
                var btn = el.querySelector('.password-input__btn'),
                    input = el.querySelector('.password-input__input'),
                    inputPassword = el.querySelector('.password-input__hide-input'),
                    passwordHide = true,
                    realPassword = [];

                if (!input || !btn || !inputPassword)
                    return;

                input.addEventListener('keyup', function () {
                    var tmpPassword = this.value,
                        passwordLen = tmpPassword.length;

                    for (var i = 0; i < passwordLen; i++) {
                        if (tmpPassword[i] !== '*') {
                            realPassword[i] = tmpPassword[i];
                        }
                    }

                    realPassword = realPassword.slice(0, passwordLen);

                    if (passwordHide) {
                        this.value = tmpPassword.replace(/./g, '*');
                    }

                    inputPassword.value = realPassword.join('');
                });

                btn.addEventListener('click', function () {
                    passwordHide = !passwordHide;

                    btn.classList.toggle('is-open');

                    if (passwordHide) {
                        input.value = input.value.replace(/./g, '*');
                        btn.setAttribute('title', 'Показать пароль');
                    } else {
                        input.value = realPassword.join('');
                        btn.setAttribute('title', 'Скрыть пароль');
                    }
                });
            });

            [].forEach.call(component.get(0).querySelectorAll('.gen-password'), function (el) {
                var btn = el.querySelector('.gen-password__btn'),
                    input = el.querySelector('.gen-password__input'),
                    toggleVisible = el.querySelector('.password-input__btn');

                btn.addEventListener('click', function () {
                    input.value = generatePassword(6);

                    if (typeof window.CustomEvent === 'function') {
                        input.dispatchEvent(new Event('keyup'));

                        if (!!toggleVisible && !toggleVisible.classList.contains('is-open')) {
                            toggleVisible.dispatchEvent(new Event('click'));
                        }
                    }
                });
            });

            /** Повторный запрос на отправку СМС */
            [].forEach.call(component.get(0).querySelectorAll('.modal-timer'), function (timer) {
                var form = component.get(0).querySelector('.modal__form'),
                    clearIntervalID = null,
                    btnRepeat = timer.querySelector('.modal-timer__submit'),
                    timerText = timer.querySelector('.modal-timer__text'),
                    timerValue = timer.querySelector('.modal-timer__value'),
                    timerStart = parseInt(timerValue.getAttribute('data-time')),
                    suf = timerValue.getAttribute('data-suf').split(',');

                setup();

                console.log(form);

                function setup() {
                    var count = timerStart;

                    timerValue.textContent = count + ' ' + CF.declension(count, suf);
                    timerText.classList.remove('hide');
                    btnRepeat.classList.add('hide');

                    clearInterval(clearIntervalID);

                    clearIntervalID = setInterval(function () {
                        if (count < 1) {
                            clearInterval(clearIntervalID);
                            timerText.classList.add('hide');
                            btnRepeat.classList.remove('hide');
                        }

                        count--;
                        timerValue.textContent = count + ' ' + CF.declension(count, suf);
                    }, 1000);
                }

                btnRepeat.addEventListener('click', function () {
                    var xhr = new XMLHttpRequest(),
                        formData = new FormData(form);

                    component.find('.js-errors').html('');

                    formData.set('action', 'resend-code');

                    xhr.open('POST', form.getAttribute('action'));

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === xhr.DONE) {
                            var answer = JSON.parse(xhr.responseText);

                            console.log(answer);

                            if (answer.success) {
                                setup();
                            } else if (answer.errors) {
                                component.find('.js-errors').html(answer.errors.join('<br>'));
                            }
                        }
                    };

                    xhr.send(formData);
                });
            });
        }

        function focusInputLabel(el, required) {
            el.value ?
                el.parentNode.classList.add('input-label--no-empty') :
                el.parentNode.classList.remove('input-label--no-empty');

            if (required && el.getAttribute('required') !== null) {
                errorInputLabel(el);
            }
        }

        function errorInputLabel(el) {
            el.value ?
                el.parentNode.classList.remove('input-label--error') :
                el.parentNode.classList.add('input-label--error');
        }

        function generatePassword(len) {
            var password = '',
                symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!;%:?()_+=';

            for (var i = 0; i < len; i++) {
                password += symbols.charAt(Math.floor(Math.random() * symbols.length));
            }

            return password;
        }
    });
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/centrofinans/js/map-address.js?156041323417284";s:6:"source";s:48:"/bitrix/templates/centrofinans/js/map-address.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function () {
    var modal = document.querySelector('.modal__item--geo');

    if (modal) {
        modal.addEventListener('modalShow', function () {
            $(modal).find('.map-toggle').trigger('load-map');
        });
    }

    $('.map-toggle').each(function () {
        var component = $(this),
            params = component.data('params'),
            load = false,
            map,
            cities = [],
            offices = [],
            geoObjects = [],
            cityInput = component.find('.js-city'),
            officeSelect = component.find('.js-office'),
            curCityId = parseInt(cityInput.data('city-id') || 0),
            curOfficeId = parseInt(officeSelect.val() || 0);

        component.on('load-map', function () {
            if (load)
                return;

            $.get(params.ajaxUrl, {
                action: 'load-cities-and-offices',
                sessid: BX.message('bitrix_sessid')
            }, function (answer) {
                if (answer.session_expired) {
                    component.find('.js-session-expired-message').removeClass('hide');
                    component.find('.js-office-info').html('');
                    return;
                }

                cities = answer.cities;
                offices = answer.offices;
                addPlacemarks()
            }, 'json');


            CF.loadMap(function () {
                map = new ymaps.Map(
                    params.map.id,
                    {
                        center: [params.map.center.lon, params.map.center.lat],
                        zoom: params.map.zoom,
                        controls: []
                    },
                    {
                        minZoom: 4,
                        maxZoom: 16,
                    }
                );

                var zoomControl = new ymaps.control.ZoomControl({
                    options: {
                        visible: true
                    }
                });
                map.controls.add(zoomControl);

                map.events.add('boundschange', function (e) {
                    map.hint.close();
                });

                //map.behaviors.disable('scrollZoom');
                addPlacemarks();
            });

            load = true;
        });

        cityInput.kladr({
            type: $.kladr.type.city,
            spinner: false,
            withParents: true,
            select: function (obj) {
                var regionName = '';

                if (obj.parents) {
                    obj.parents.forEach(function (parent) {
                        if (parent.contentType === $.kladr.type.region) {
                            if (parent.typeShort === 'Аобл' || parent.typeShort === 'АО') {
                                regionName = parent.name + ' АО';
                            } else {
                                regionName = parent.name + ' ' + parent.type;
                            }
                        }
                    });
                }

                loadCityOffices(obj.name, 0, true, regionName);

                cityInput.removeClass('input--error');
                cityInput.parent().parent().find('.office-select__error-text').remove();

                officeSelect.parent().removeClass('select--error');
                officeSelect.closest('.office-select__input-box').find('.office-select__error-text').remove();
            },
            labelFormat: function (obj, query) {
                var label = '',
                    name,
                    objName,
                    queryName,
                    start;

                if (obj.typeShort) {
                    label += obj.typeShort + '. ';
                }

                name = obj.name;
                objName = name.toLowerCase();
                queryName = query.name.toLowerCase();
                start = objName.indexOf(queryName);
                start = ~start ? start : 0;

                if (queryName.length < objName.length) {
                    label += name.substr(0, start);
                    label += '<strong>';
                    label += name.substr(start, queryName.length);
                    label += '</strong>';
                    label += name.substr(start + queryName.length);
                } else {
                    label += '<strong>' + name + '</strong>';
                }

                if (obj.parents) {
                    obj.parents.forEach(function (parent) {
                        if (parent.contentType === $.kladr.type.region) {
                            label += ', ' + parent.name + (parent.typeShort ? ' ' + parent.typeShort : '');

                            if (parent.typeShort && parent.typeShort !== 'край' && parent.typeShort !== 'АО') {
                                label += '.';
                            }
                        }
                    });
                }

                return label;
            },
            valueFormat: function (obj, query) {
                var value = '';

                if (obj.typeShort)
                    value += obj.typeShort + '. ';

                value += obj.name;

                if (obj.parents) {
                    obj.parents.forEach(function (parent) {
                        if (parent.contentType === $.kladr.type.region) {
                            value += ', ' + parent.name + (parent.typeShort ? ' ' + parent.typeShort : '');

                            if (parent.typeShort && parent.typeShort !== 'край' && parent.typeShort !== 'АО') {
                                value += '.';
                            }
                        }
                    });
                }

                return value;
            }
        });

        cityInput.on('focus', function () {
            var self = this;

            if (isIOS()) {
                /* На iOS setSelectionRange работает только когда у input уже есть focus */
                setTimeout(function () {
                    self.setSelectionRange(0, self.value.length);
                }, 50);
            } else {
                self.setSelectionRange(0, self.value.length);
            }
        }).on('input', function () {
            if (this.value.length === 0) {
                officeSelect.closest('.office-select__input-box').hide();
                clearOfficeInfo();
            }
        }).on('kladr_send_before', function (e, query) {
            query.name = query.name.replace('г. ', '');
        });

        component.find('.js-clear-city').on('click', function (e) {
            e.preventDefault();
            cityInput.val('');
            officeSelect.closest('.office-select__input-box').hide();
            clearOfficeInfo();
        });

        officeSelect.on('change', function () {
            if ($(this).val() === 'none') {
                clearOfficeInfo();
                return;
            }

            loadOffice($(this).val(), true);
        });

        component.on('submit', '.js-form-select-office', function (e) {
            e.preventDefault();

            var form = $(this);

            $.post(form.attr('action'), form.serializeArray(), function (answer) {
                if (answer.session_expired) {
                    component.find('.js-session-expired-message').removeClass('hide');
                    component.find('.js-office-info').html('');
                    return;
                }

                if (answer.SUCCESS) {
                    [].forEach.call(document.querySelectorAll('.js-calculator-select-city'), function (el) {
                        el.classList.add('hide');
                    });

                    [].forEach.call(document.querySelectorAll('.js-calculator-btn-submit'), function (el) {
                        el.classList.remove('hide');
                    });

                    /* Проставляем данные в калькулятор */
                    if (answer.OFFICE_ID) {
                        [].forEach.call(document.querySelectorAll('.js-office-id'), function (el) {
                            if (el.tagName.toLowerCase() === 'input') {
                                el.value = answer.OFFICE_ID;
                            } else {
                                el.innerText = answer.OFFICE_ID;
                            }
                        });
                    }
                }
            }, 'json');
        });

        if (typeof params !== 'undefined')
            if (params.preload)
                component.trigger('load-map');

        function addPlacemarks() {
            if (!map || offices.length <= 0)
                return;

            var clusterer = new ymaps.Clusterer({
                preset: 'twirl#redClusterIcons'
            });

            offices.forEach(function (placemark) {
                var yaPlacemark = new ymaps.Placemark(
                    [placemark.position.lon, placemark.position.lat],
                    {
                        hintContent: placemark.hint,
                        regionId: placemark.region.id,
                        regionName: placemark.region.name,
                        cityId: placemark.city.id,
                        cityName: placemark.city.name
                    },
                    {
                        iconLayout: 'default#image',
                        iconImageHref: placemark.icon,
                        iconImageSize: [28, 53],
                        iconImageOffset: [-14, -52]
                    }
                );

                yaPlacemark.events.add('click', function () {
                    loadOffice(placemark.id);
                    map.hint.close();
                });

                geoObjects.push(yaPlacemark);
            });

            clusterer.add(geoObjects);
            clusterer.events.once('objectsaddtomap', function () {
                map.setBounds(clusterer.getBounds());
            });
            map.geoObjects.add(clusterer);
        }

        function loadOffice(officeId, center) {
            officeId = parseInt(officeId);

            if (officeId === curOfficeId)
                return;

            curOfficeId = officeId;

            $.get(params.ajaxUrl, {
                action: 'load-office',
                office: officeId,
                sessid: BX.message('bitrix_sessid')
            }, function (answer) {
                if (answer.session_expired) {
                    component.find('.js-session-expired-message').removeClass('hide');
                    component.find('.js-office-info').html('');
                    return;
                }

                if (answer.office) {
                    if (curCityId != answer.office.city_id) {
                        cityInput.val(answer.office.city_name);
                        loadCityOffices(answer.office.city_name, answer.office.id, false, '');
                    } else {
                        officeSelect.val(answer.office.id);
                    }

                    component.find('.js-office-info').html(answer.office.html);

                    if (center) {
                        map.setCenter([answer.office.coordinates.lon, answer.office.coordinates.lat], params.map.zoomOffice);
                    }

                    setYaTaxiCoordinates(answer.office.coordinates.lon, answer.office.coordinates.lat);
                    component.find('.js-partner').addClass('hide');

                    component.find('.js-form-select-office').trigger('submit');

                    cityInput.removeClass('input--error');
                    cityInput.parent().parent().find('.office-select__error-text').remove();

                    officeSelect.parent().removeClass('select--error');
                    officeSelect.closest('.office-select__input-box').find('.office-select__error-text').remove();
                }
            }, 'json');
        }

        function loadCityOffices(cityName, officeId, center, regionName) {
            var city = {};

            cityName = cityName.replace('ё', 'е');

            cities.forEach(function (oneCity) {
                if (oneCity.name === cityName) {
                    city = oneCity;
                }
            });

            curCityId = parseInt(city.id || 0);

            var cityOffices = offices.filter(function (office) {
                return office.city.id == city.id;
            });

            if (city.id && cityOffices.length > 0) {
                officeSelect.find('option').remove();

                if (cityOffices.length === 1) {
                    officeId = cityOffices[0].id;
                    loadOffice(officeId, true);
                } else {
                    curOfficeId = parseInt(officeId || 0);
                    officeSelect.append(new Option('Выберите офис', 'none', false, officeId === 0));
                }

                cityOffices.forEach(function (office) {
                    officeSelect.append(new Option(office.address, office.id, false, office.id == officeId));
                });

                officeSelect.closest('.office-select__control').show();

                if (center && city.position && city.position.lon && city.position.lat) {
                    map.setCenter([city.position.lon, city.position.lat], params.map.zoomCity);
                }

                component.find('.js-partner').addClass('hide');

                /** Показываем форму в калькуляторе */
                $('.calculator__state-2').last().removeClass('hide');

                /** Если поменяли город и нет выбранного офиса, скрываем информацию о предыдущем офисе */
                if (curOfficeId <= 0) {
                    component.find('.js-office-info').html('');
                    component.find('.map-address-ya-taxi-widget').hide();
                }
            } else {
                /** Отключаем выбор офисов и показываем информацию о партнере */
                officeSelect.closest('.office-select__control').hide();
                officeSelect.find('option').remove().val('');
                clearOfficeInfo();
                component.find('.js-partner').removeClass('hide');

                /** Скрываем форму в калькуляторе */
                $('.calculator__state-2').last().addClass('hide');

                /** Ищем ближайший офис */
                var address = $.kladr.getAddress(cityInput);

                ymaps.ready(function () {
                    var geocode = ymaps.geocode(address, {results: 1});

                    geocode.then(function (res) {
                        var regionGeoObjects = geoObjects;

                        if (regionName) {
                            regionName = regionName.toLowerCase().replace('ё', 'е');
                            regionGeoObjects = geoObjects.filter(function (object) {
                                return object.properties._data.regionName.toLowerCase() === regionName;
                            });
                        }

                        var points = ymaps.geoQuery(regionGeoObjects).then(findClosestPoint);

                        function findClosestPoint() {
                            var closest = points.getClosestTo(res.geoObjects.get(0)),
                                coordinates = closest.geometry.getCoordinates();

                            if (coordinates.length > 0) {
                                map.setCenter(coordinates, params.map.zoomCity);

                                if (!BX.browser.IsMobile()) {
                                    var hint = closest.properties._data.cityName ? closest.properties._data.cityName : 'Ближайший офис';

                                    map.hint.open(coordinates, hint, {
                                        offset: [18, -60]
                                    });
                                }
                            }
                        }
                    });
                });
            }
        }

        function setYaTaxiCoordinates(lat, lon) {
            var taxiWidget = component.find('.map-address-ya-taxi-widget');

            if (taxiWidget.length > 0) {
                taxiWidget.show();

                /** https://tech.yandex.ru/taxi/doc/dg/concepts/deeplinks-docpage/ */
                var link = taxiWidget.data('proxy-url');

                link = link.replace('{start-lat}', '').replace('{start-lon}', '');
                link = link.replace('{end-lat}', lat).replace('{end-lon}', lon);

                taxiWidget.find('a').attr('href', link);
            }
        }

        function clearOfficeInfo() {
            curOfficeId = 0;
            component.find('.js-office-info').html('');
            component.find('.map-address-ya-taxi-widget').hide();
            component.find('.js-partner').addClass('hide');
        }

        function isIOS() {
            return (/(iPad;)|(iPhone;)/i.test(navigator.userAgent));
        }
    });
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/centrofinans/js/old/scripts.js?156041323428842";s:6:"source";s:48:"/bitrix/templates/centrofinans/js/old/scripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var timerSec, timerSecClear,
    mobilecheck = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent || navigator.vendor || window.opera.substr(0, 4)));
(function ($) {
    var windowWidth, windowHeight, windowScrollTop, windowScrollTopOld, resizeTimeoutId, $window = $(window),
        body = $('body'), main = $('.main'), menuHeader = $('.header__menu'), menuMobile = $('.menu-mobile'), xStart,
        xMove;
    if (!mobilecheck) {
        $('a').filter('[href^="tel"]').removeAttr('href').addClass('not-cursor');
    }
    $window.on({
        resize: function () {
            clearTimeout(resizeTimeoutId);
            resizeTimeoutId = setTimeout(function () {
                pageResize();
            }, 100);
        }, scroll: function () {
            windowScrollTop = $window.scrollTop();
            if (menuHeader.length > 0) {
                if (menuHeader.offset().top + menuHeader.height() < windowScrollTop) {
                    menuHeader.addClass('header__menu--fixed');
                }
                if (windowScrollTop < menuHeader.offset().top) {
                    menuHeader.removeClass('header__menu--fixed');
                }
            }
            $('.img-cover--parallax').each(function () {
                var p = $(this);
                var top = p.offset().top + p.outerHeight() - windowScrollTop;
                var delta = windowHeight + p.outerHeight();
                var top = p.offset().top + p.outerHeight() - windowScrollTop - menuHeader.children().height();
                var delta = p.outerHeight() - menuHeader.children().height();
                delta += p.offset().top < windowHeight ? p.offset().top : windowHeight;
                top /= delta;
                top = 100 * (1 - top);
                if (top < 0)
                    top = 0;
                if (top > 100)
                    top = 100;
                p.css('background-position', 'center ' + top + '%');
            });
            windowScrollTop > windowHeight ? $('.footer__up').fadeIn() : $('.footer__up').fadeOut();
        }
    });

    function pageResize() {
        windowWidth = $window.width();
        windowHeight = $window.height();
        paddingBody = body.outerHeight() - body.height();
        var ahtungHeight = 0;
        $('.ahtung').not('.ahtung--hide').each(function () {
            var h = $(this).children().outerHeight();
            $(this).height(h);
            ahtungHeight += h;
        });
        windowWidth > 980 ? main.css('padding-top', 0) : main.css('padding-top', ahtungHeight);
        if ($('.img-cover--ratio').length > 0) {
            var ratio = $('.img-cover--ratio').attr('data-ratio').split('x');
            var h = windowWidth / parseInt(ratio[0]) * parseInt(ratio[1]);
            if (windowWidth < 768) {
                if ($('.img-cover--ratio').is('[data-ratio-mobile]')) {
                    ratio = $('.img-cover--ratio').attr('data-ratio-mobile').split('x');
                    h = windowWidth / parseInt(ratio[0]) * parseInt(ratio[1]);
                }
                else {
                    $('.img-cover--ratio').removeAttr('style');
                    return true;
                }
            }
            $('.img-cover--ratio').height(h).each(function () {
                var t = $(this);
                var src = windowWidth > 767 ? t.attr('data-img') : t.attr('data-img-mobile');
                t.css('background-image', 'url(' + src + ')');
            });
            if ($('.specials').length > 0) {
                main.css('min-height', h);
            }
        }
    }

    pageResize();
    $window.trigger('resize').trigger('scroll');
    $window.on('load', function () {
        $('.img-cover').each(function () {
            var src = Modernizr.webp && $(this).is('[data-img-webp]') ? $(this).attr('data-img-webp') : $(this).attr('data-img');
            $(this).css('background-image', 'url(' + src + ')');
        });
        pageResize();
    });

    $.fn.tabs = function () {
        var tab = function () {
            var t = $(this);
            var dt = t.find('.tabs__dt');
            var dd = t.find('.tabs__dd');
            var tab_head = $('<div class="tabs__nav flexbox">');
            var tab_body = $('<div class="tabs__body">');
            dt.addClass('notsel').on('click touchstart', function () {
                var t = $(this);
                t.addClass('tabs__dt--active').siblings('.tabs__dt--active').removeClass('tabs__dt--active');
                dd.removeClass('tabs__dd--active').eq(dt.index(t)).addClass('tabs__dd--active');
            }).filter('.tabs__dt--active').length > 0 ? dt.filter('.tabs__dt--active').triggerHandler('click') : dt.first().triggerHandler('click');
            dd.addClass('clr');
            tab_head.append(dt);
            tab_body.append(dd);
            t.prepend(tab_head).append(tab_body);
        }
        return this.each(tab);
    };

    timerSec = function (selector) {
        selector = $(selector);
        selector.closest('.alert-lk__kod-tictak').removeClass('hide').siblings('.alert-lk__kod-repeat').addClass('hide');
        var sec = selector.attr('data-start');
        clearTimeout(timerSecClear);
        (function setSec() {
            var suf = '0:';
            suf += sec < 10 ? '0' : '';
            selector.text(suf + sec);
            timerSecClear = setTimeout(function () {
                if (sec-- > 0)
                    setSec(); else
                    selector.closest('.alert-lk__kod-tictak').addClass('hide').siblings('.alert-lk__kod-repeat').removeClass('hide');
            }, 1000);
        }());
    };

    //$('.checkbox').addClass('notsel').append('<i></i>');

    $('.btn--radio').addClass('notsel').children('input').on('change', function () {
        if ($(this).prop('checked'))
            $(this).parent().addClass('btn--checked').siblings().removeClass('btn--checked');
    }).trigger('change');

    $('.tabs').tabs();

    $('.ahtung__close').on('click', function () {
        $(this).closest('.ahtung').addClass('ahtung--hide');
        pageResize();
    });
    (function (feedback) {
        var navLeft = $('<a class="feedback-slider__nav-left ico ico--prev">');
        var navRight = $('<a class="feedback-slider__nav-right ico ico--next">');
        var item = feedback.children('.feedback-slider__item');
        feedback.append(navLeft, navRight);
        navRight.on('click', function () {
            if (navLeft.hasClass('disabled')) return;
            navLeft.addClass('disabled');
            var f = item.filter('.feedback-slider__first');
            var l = item.filter('.feedback-slider__left');
            var r = item.filter('.feedback-slider__right');
            var e = item.filter('.feedback-slider__right').next('.feedback-slider__item');
            if (e.length == 0)
                e = item.first();
            f.addClass('feedback-slider__left').removeClass('feedback-slider__first');
            l.addClass('feedback-slider__start').removeClass('feedback-slider__left');
            r.addClass('feedback-slider__first').removeClass('feedback-slider__right');
            e.addClass('feedback-slider__right');
            setTimeout(function () {
                item.filter('.feedback-slider__start').removeClass('feedback-slider__start');
                item.filter('.feedback-slider__end').removeClass('feedback-slider__end');
                navLeft.removeClass('disabled');
            }, 300);
            return false;
        });
        navLeft.on('click', function () {
            if (navRight.hasClass('disabled')) return;
            navRight.addClass('disabled');
            var f = item.filter('.feedback-slider__first');
            var l = item.filter('.feedback-slider__left');
            var r = item.filter('.feedback-slider__right');
            var s = item.filter('.feedback-slider__left').prev('.feedback-slider__item');
            if (s.length == 0)
                s = item.last();
            f.addClass('feedback-slider__right').removeClass('feedback-slider__first');
            l.addClass('feedback-slider__first').removeClass('feedback-slider__left');
            r.addClass('feedback-slider__end').removeClass('feedback-slider__right');
            s.addClass('feedback-slider__left');
            setTimeout(function () {
                item.filter('.feedback-slider__start').removeClass('feedback-slider__start');
                item.filter('.feedback-slider__end').removeClass('feedback-slider__end');
                navRight.removeClass('disabled');
            }, 300);
            return false;
        });
        touchX(item, navRight, navLeft);
    }($('.feedback-slider')));
    (function () {
        var menuBox = menuHeader.children();
        var li = menuHeader.find('.menu-top__submenu');
        menuBox.on('mouseleave', function () {
            menuHeader.removeClass('header__menu--submenu-show');
        });
        li.on('mouseenter', function () {
            if ($(this).hasClass('menu-top__submenu--about')) {
                $('.menu-top-submenu--about').removeClass('hide');
                $('.menu-top-submenu--zaim').addClass('hide');
                $('.menu-top__submenu--about').addClass('menu-top__submenu--open');
                $('.menu-top__submenu--zaim').removeClass('menu-top__submenu--open');
            }
            if ($(this).hasClass('menu-top__submenu--zaim')) {
                $('.menu-top-submenu--about').addClass('hide');
                $('.menu-top-submenu--zaim').removeClass('hide');
                $('.menu-top__submenu--about').removeClass('menu-top__submenu--open');
                $('.menu-top__submenu--zaim').addClass('menu-top__submenu--open');
            }
            menuHeader.addClass('header__menu--submenu-show');
        });
    }());
    (function (s) {
        if (s.length == 0) return;
        var min = parseInt(s.attr('data-min')), max = parseInt(s.attr('data-max')), diff = max - min,
            yearsTdWidth = s.width() / diff, tablo = $('.about-intro__b'), arr = [], sep = $('<span>'),
            years = $('<ul>'), animSlider = true, touchSlider = false;
        for (var i = min; i <= max; i++) {
            arr[i] = {a: s.attr('data-a' + i), b: s.attr('data-b' + i), c: s.attr('data-c' + i)}
        }

        function setYears(year) {
            tablo.eq(0).text(arr[year].a);
            tablo.eq(1).text(arr[year].b);
            tablo.eq(2).text(arr[year].c);
        }

        s.slider({
            min: min, max: max, value: min, create: function () {
                var seps = diff * 10;
                var sepStep = s.width() / seps;
                for (var i = 0; i <= seps; i++) {
                    var el = $('<i>');
                    el.css('left', i * sepStep);
                    if (i % 10 == 0) {
                        var yearsLi = $('<li>');
                        yearsLi.text(min++).css('left', i * sepStep);
                        years.append(yearsLi);
                        el.addClass('sep12');
                    } else {
                        el.addClass('sep8');
                    }
                    sep.append(el);
                }
                s.siblings('.about-table-years').html(years);
                s.children('.about-slider__sep').html(sep);
            }, slide: function (event, ui) {
                clearInterval(animSlider);
                touchSlider = true;
                setYears(ui.value);
            }
        });
        $window.on('load', function () {
            if (!touchSlider) {
                animSlider = setInterval(function () {
                    var value = s.slider('value') + 1;
                    if (value == max) {
                        clearInterval(animSlider);
                    }
                    s.slider("value", value);
                    setYears(value);
                }, 500);
            }
        });
    })($('#about-slider'));

    var formNavDisk = $('.form-jobs__nav-disk');

    function formJobsValid(step) {
        var valid = true,
            inputs = step.find('.form-jobs__requred').filter(function () {
                return $(this).is(':visible') || $(this).is(':checkbox');
            });

        inputs.each(function () {
            if ($(this).hasClass('input') && $(this).val() == '') {
                $(this).addClass('input--error').one('focus', function () {
                    $(this).removeClass('input--error');
                });
                valid = false;
            } else if ($(this).hasClass('input-type-radio') && $('.input-type-radio').filter('[name="' + $(this).attr('name') + '"]').filter(':checked').length == 0) {
                var radio = $('.input-type-radio').filter('[name="' + $(this).attr('name') + '"]');
                var radioBox = radio.closest('.checkbox');
                radio.one('change', function () {
                    radioBox.removeClass('checkbox--error');
                });
                radioBox.addClass('checkbox--error');
                valid = false;
            } else if ($(this).is(':checkbox') && !$(this).is(':checked')) {
                var parent = $(this).closest('.checkbox');
                parent.addClass('checkbox--error');

                $(this).one('change', function () {
                    parent.removeClass('checkbox--error');
                });
                valid = false;
            }
        });

        return valid;
    }

    function formJobsNav(nextIndex) {
        var next = $('.form-jobs__step').eq(nextIndex),
            nextDisk = formNavDisk.eq(nextIndex),
            valid = false;

        next.removeClass('hide').siblings().addClass('hide');
        formNavDisk.addClass('form-jobs__nav-disk--active').removeClass('form-jobs__nav-disk--current');

        if (nextDisk.length) {
            nextDisk.addClass('form-jobs__nav-disk--current').nextAll().removeClass('form-jobs__nav-disk--active');
            $('.form-jobs__nav-progress').width(nextDisk.position().left);
        } else {
            valid = true;

            $('.form-jobs__step').each(function (i) {
                $(this).removeClass('hide').siblings().addClass('hide');

                valid &= formJobsValid($(this));

                if (!valid)
                    return false;
            });
        }

        return valid;
    }

    formNavDisk.on('click', function () {
        formJobsNav($(this).index());
    });

    $('.form-jobs__btn--next').on('click', function () {
        setTimeout(function () {
            scrollTo($('#form-jobs').offset().top);
        }, 100);
        var step = $(this).closest('.form-jobs__step');

        if (formJobsValid(step)) {
            if (formJobsNav(step.next().index())) {
                formNavDisk.off();
                $(this).closest('.form-jobs__form').trigger('submit');
            }
        }
    });
    $('.form-jobs__checkbox').on('change', function () {
        $('.form-jobs__checkbox-value-' + $(this).val()).toggleClass('hide', $(this).prop('checked'));
    });
    $('.form-jobs__add-btn').on('click', function () {
        var box = $(this).closest('.form-jobs__add');
        var clone = box.find('.form-jobs__add-item').clone().removeClass('form-jobs__add-item');
        clone.find('.input').val('').removeClass('input--error');
        clone.appendTo(box);
        maskSet(clone.find('.mask-date'));
    });

    (function (faq) {
        var cat = faq.children('.faq__cat');
        cat.each(function (i) {
            var item = $(this).children('.faq__item');
            var box = $('<div class="faq__box-item clear-both clr">');
            var nav = $('<div class="faq__box-nav notsel">');
            var list = $('<div class="faq__box-list">');
            var navLi = '';
            item.children('.faq__item-name').each(function () {
                navLi += '<a class="faq__nav-link" href="#' + $(this).attr("id") + '">' + $(this).text() + '</a>';
                $(this).removeAttr("id");
            });
            nav.html(navLi);
            nav.children().on('click', function (e, param1, param2) {
                nav.children('.faq__item').remove();
                if (param2 == 'off') {
                    $('.faq__nav-link--active').removeClass('faq__nav-link--active');
                    item.hide();
                }
                else {
                    $(this).addClass('faq__nav-link--active').siblings().removeClass('faq__nav-link--active');
                    if (windowWidth >= 768) {
                        item.eq($(this).index()).show().siblings().hide();
                    }
                    else {
                        $(this).after(item.eq($(this).index()).clone());
                        param1 = 'link';
                    }
                }
                box.show().siblings('.faq__box-item').hide();
                cat.not(cat.eq(i)).removeClass('faq__cat--active');
                cat.eq(i).addClass('faq__cat--active');
                var top = param1 == 'link' ? $(this).offset().top : list.offset().top;
                if (param1 == 'cat') {
                    top = cat.eq(i).offset().top;
                }
                if (param1 != 'noscroll') {
                    scrollTo(top - menuHeader.height());
                }
            });
            list.append(item);
            box.append(nav, list);
            faq.append(box);
        });
        cat.on('click', function () {
            var showBox = faq.children('.faq__box-item').eq($(this).index()),
                showItem = showBox.find('.faq__nav-link--active');
            if ($(this).hasClass('faq__cat--active')) {
                $(this).removeClass('faq__cat--active');
                $('.faq__box-item').hide();
            }
            else if (windowWidth >= 768) {
                if (showItem.length > 0) {
                    showItem.trigger('click', ['cat']);
                }
                else {
                    showBox.find('.faq__nav-link').first().trigger('click', ['cat']);
                }
            }
            else {
                showBox.find('.faq__nav-link').first().trigger('click', ['cat', 'off']);
            }
        });
        if (location.hash.length > 1) {
            $('[href="' + location.hash + '"]').trigger('click');
        }
        else if (windowWidth >= 768) {
            $('.faq__box-nav').children().first().trigger('click', ['noscroll']);
        }
    })($('.faq'));
    (function (specials) {
        if (!specials) {
            return;
        }
        var time = parseInt(specials.attr('data-time')) * 1000;
        var specialsTimer = null;
        var list = specials.find('.specials__item');
        var nav = $('<span class="specials__nav">');
        var nav_box = $('<span class="specials__nav-box clr">');
        for (var i = 0; i < list.size(); i++)
            nav_box.append('<i></i>');
        nav_box.children().on('click', function () {
            var index = $(this).index();
            var btnClick = index > list.filter('.specials__item--active').index() ? specials.find('.specials__next') : specials.find('.specials__prev');
            btnClick.trigger('click', index);
        });
        nav.append(nav_box);
        specials.append(nav);
        nav_box.children().first().addClass('active');
        specials.find('.specials__prev, .specials__next').on('click', function (event, nextItem) {
            if (list.filter('.specials__item--next').length > 0) return;
            var next, t = $(this);
            var active = list.filter('.specials__item--active');
            if (t.hasClass('specials__next')) {
                specials.addClass('specials--right');
                next = active.next().length > 0 ? active.next() : list.first();
            }
            else {
                specials.addClass('specials--left');
                next = active.prev().length > 0 ? active.prev() : list.last();
            }
            if (nextItem !== undefined)
                next = list.eq(nextItem);
            next.addClass('specials__item--next').one(cssAnimation('animation'), function () {
                next.addClass('specials__item--active');
                list.removeClass('specials__item--next');
                active.removeClass('specials__item--active');
                specials.removeClass('specials--left specials--right');
            });
            nav_box.children().removeClass('active').eq(next.index()).addClass('active');
        });
        touchX(specials, specials.find('.specials__next'), specials.find('.specials__prev'));
        specials.hover(function () {
            clearInterval(specialsTimer);
        });
        specials.on('touchstart', function () {
            clearInterval(specialsTimer);
        });

        function setupTimer() {
            specialsTimer = setInterval(function () {
                specials.find('.specials__next').trigger('click');
            }, time);
        }

        setupTimer();
    })($('.specials'));

    function touchX(b, l, n) {
        b.on('touchstart touchmove touchend', function (event) {
            if (event.type == 'touchstart') {
                xMove = 0;
                xStart = parseInt(event.originalEvent.touches[0].clientX);
                event.preventDefault();
            }
            if (event.type == 'touchmove') {
                xMove = parseInt(event.originalEvent.touches[0].clientX);
                event.preventDefault();
            }
            if (event.type == 'touchend') {
                if (xMove == 0) {
                    window.location.assign(b.find('.specials__item--active').attr('href'));
                }
                else {
                    xStart > xMove ? l.trigger('click') : n.trigger('click');
                }
            }
        });
    }

    $('.feedback__text').each(function () {
        var p = 0;
        var t = $(this);
        var h = t.height();
        var readmore = $('<a class="feedback__readmore">');
        var text = 'читать полностью';
        var altText = 'свернуть';
        readmore.html(text);
        t.children().each(function () {
            p += $(this).height();
        });
        if (p > h) {
            var ha = p;
            var ta = altText;
            t.height(h);
            t.after(readmore);
        }
        readmore.on('click', function () {
            t.animate({'height': ha}, 300, function () {
                readmore.html(ta).toggleClass('feedback__readmore--active');
                if (ha == p) {
                    ha = h;
                    ta = text;
                }
                else {
                    ha = p;
                    ta = altText;
                }
            });
        });
    });
    $('.slider-abscissa').each(function () {
        var l = 0;
        var s = $(this).addClass('notsel').append('<a class="ico ico--left-gray"></a><a class="ico ico--right-gray"></a>');
        var ul = s.children('ul').wrap('<div class="slider-abscissa__box">');
        var b = s.children();
        var b_w = ul.children().first().outerWidth(true) * 3;
        var ul_w = ul.children().last().position().left + ul.children().last().outerWidth(true);
        var b_ul = b.width() - ul_w;
        s.children('.ico').on('click', function () {
            if ($(this).hasClass('ico--right-gray')) {
                if (b_ul == l)
                    l = 0; else
                    l -= b_w;
                if (b_ul > l)
                    l = b_ul;
            }
            else {
                if (l == 0)
                    l = b_ul; else
                    l += b_w;
                if (l > 0)
                    l = 0;
            }
            ul.css('left', l);
        });
    });
    $('.map-address__contact-rasp').on('click', function () {
        $('.map-address__rasp').slideToggle();
    });
    $('.js-map-address-toggle-map').on('click', function () {
        $('.map-address').toggleClass('map-address--show');
    });
    (function (seo) {
        var dt = seo.find('.seo-text__title');
        var dd = seo.find('.seo-text__desc');
        dd.hide();
        dt.on('click', function () {
            $(this).toggleClass('seo-text__title--active');
        });
    }($('.seo-text')));
    if (mobilecheck) {
        $('.mask-tel').attr('type', 'tel');
    }
    $('.password-input').each(function () {
        var realPassword = [], realPasswordInput = $(this).find('.password-input__form'),
            inputPassword = $(this).find('.password-input__input'), inputType = "password";
        inputPassword.on('keyup', function () {
            var tmpPassword = $(this).val();
            var passwordLen = tmpPassword.length;
            for (var i = 0; i < passwordLen; i++) {
                if (tmpPassword[i] != '*') {
                    realPassword[i] = tmpPassword[i];
                }
            }
            realPassword = realPassword.slice(0, passwordLen);
            if (inputType == "password") {
                $(this).val(tmpPassword.replace(/./g, '*'));
            }
            realPasswordInput.val(realPassword.join(''));
        });
        $(this).find('.password-input__toggle-type').on('click', function () {
            inputType = $(this).hasClass('ico--hidden') ? 'password' : 'text';
            $(this).addClass('hide').siblings('.password-input__toggle-type').removeClass('hide');
            if (inputType == 'text') {
                inputPassword.val(realPassword.join(''));
            }
            else {
                inputPassword.val(inputPassword.val().replace(/./g, '*'));
            }
            return false;
        });
    });
    $('.input-box').children('.input').on('keyup blur change', function () {
        var t = $(this);
        setTimeout(function () {
            t.parent().toggleClass('input-box--focus', Boolean(t.val()));
        }, 100);
    }).trigger('blur');
    $('.footer__up').on('click', function () {
        scrollTo(0);
        return false;
    });
})(jQuery);

function scrollTo(t) {
    jQuery('body, html').animate({scrollTop: t}, 1000);
}

function cssAnimation(a) {
    var b, c, d = document.createElement("cssanimation");
    switch (a) {
        case'animation':
            b = {
                "animation": "animationend",
                "OAnimation": "oAnimationEnd",
                "MozAnimation": "animationend",
                "WebkitAnimation": "webkitAnimationEnd"
            };
            break;
        case'transition':
            b = {
                "transition": "transitionend",
                "OTransition": "oTransitionEnd",
                "MozTransition": "transitionend",
                "WebkitTransition": "webkitTransitionEnd"
            }
    }
    for (c in b) if (d.style[c] !== undefined) return b[c]
}
/* End */
;; /* /bitrix/templates/centrofinans/js/old/modernizr-custom.js?15565191443403*/
; /* /bitrix/templates/centrofinans/js/old/jquery.min.js?155651914485660*/
; /* /bitrix/templates/centrofinans/js/old/jquery-ui.min.js?155651914424022*/
; /* /bitrix/templates/centrofinans/js/old/jquery.ui.touch-punch.min.js?15565191441301*/
; /* /bitrix/templates/centrofinans/js/old/jquery.kladr.min.js?155651914412369*/
; /* /bitrix/templates/centrofinans/js/scripts.min.js?156041822929308*/
; /* /bitrix/templates/centrofinans/js/add.js?156041323419852*/
; /* /bitrix/templates/centrofinans/js/lk.js?155651914410326*/
; /* /bitrix/templates/centrofinans/js/map-address.js?156041323417284*/
; /* /bitrix/templates/centrofinans/js/old/scripts.js?156041323428842*/
