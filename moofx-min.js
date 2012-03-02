/*
---
provides: moofx
version: 3.0.2
description: A CSS3-enabled javascript animation library on caffeine
homepage: http://moofx.it
author: Valerio Proietti <@kamicane> (http://mad4milk.net)
license: MIT (http://mootools.net/license.txt)
includes: cubic-bezier by Arian Stolwijk (https://github.com/arian/cubic-bezier)
...
*/

(function(a){var b={},c=function(d){var e;if(e=b[d])return e.exports;e=b[d]={exports:{}};var f=e.exports;return a[d].call(f,c,e,f,window),e.exports};window.moofx=c("0")})({0:function(a,b,c,d){var e,f,j,l,u,v,x,E,F,G,M,N,P,Q,R,Z,ba,bb,bc,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA=Object.prototype.hasOwnProperty,bB=function(a,b){function d(){this.constructor=a}for(var c in b)bA.call(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},w=a("1"),B=a("2"),H=a("3"),z=H.cancel,V=H.request,Y=String,S=parseFloat,y=function(a){return a.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase()})},L=function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.charAt(0).toLowerCase()})},A=function(a){return Y(a).replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")},O=function(a){var b;return b=a.length,b===1?a.push(a[0],a[0],a[0]):b===2?a.push(a[0],a[1]):b===3&&a.push(a[1]),a},C=d.getComputedStyle?function(a){var b;return b=getComputedStyle(a),function(a){return b?b.getPropertyValue(L(a)):""}}:function(a){var b;return b=a.currentStyle,function(a){return b?b[y(a)]:""}},p=function(){function a(){}return a.prototype.extract=function(){return[this]},a.prototype.toString=function(){return Y(this.value)},a}(),r=function(a){function b(a){a==null&&(a=""),this.value=Y(a)}return bB(b,a),b}(p),o=function(a){function b(a){var b;a==null&&(a=""),this.value=isFinite(b=S(a))?b:a}return bB(b,a),b}(p),q=function(){function a(){}return a.prototype.extract=function(){return this.parsed},a.prototype.toString=function(a,b){var c;return A(function(){var d,e,f=this.parsed,g=[];for(d=0,e=f.length;d<e;d++)c=f[d],g.push(c.toString(a,b));return g}.call(this).join(" "))},a}(),m=function(a){function b(a){var b;a==null&&(a=""),a==="auto"?this.value="auto":(b=A(Y(a)).match(/^([-\d.]+)(%|cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vm)?$/))?(this.value=S(b[1]),this.unit=this.value===0||!b[2]?"px":b[2]):this.value=""}return bB(b,a),b.prototype.toString=function(a,b){return this.value==="auto"?this.value:a&&this.value===""?"0px":this.value===""?"":b&&this.unit!=="px"?""+U(b,this.unit)*this.value+"px":this.value+this.unit},b}(p),k=function(a){function b(a){a==="transparent"&&(a="#00000000"),this.value=a?B(a,!0):""}return bB(b,a),b.prototype.toString=function(a){return a&&!this.value?"rgba(0,0,0,1)":this.value?!!a||this.value!=="transparent"&&this.value[3]!==0?a||this.value[3]!==1?"rgba("+this.value+")":"rgb("+this.value[0]+","+this.value[1]+","+this.value[2]+")":"transparent":""},b}(p),n=function(a){function b(a){var b,c,d;a==null&&(a=""),d=O(A(a).split(" ")),this.parsed=function(){var a,e=[];for(b=0,a=d.length;b<a;b++)c=d[b],e.push(new m(c));return e}()}return bB(b,a),b}(q),i=function(a){function b(a){var b;a==null&&(a=""),b=(a=A(a)).match(/none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit/),this.value=b?a:""}return bB(b,a),b.prototype.toString=function(a){return a&&!this.value?"none":this.value},b}(p),h=function(a){function b(a){var b,c,d,e;a==null&&(a=""),a==="none"&&(a="0 none #000"),b=(a=A(a)).match(/((?:[\d.]+)(?:[\w%]+)?)\s(\w+)\s(rgb(?:a)?\([\d,\s]+\)|hsl(?:a)?\([\d,\s]+\)|#[a-f0-9]+|\w+)/)||[],this.parsed=[new m((c=b[1])!=null?c:""),new i((d=b[2])!=null?d:""),new k((e=b[3])!=null?e:"")]}return bB(b,a),b}(q),g=function(a){function b(a){var b;a==null&&(a=""),a=O(a.match(/rgb(a)?\([\d,\s]+\)|hsl(a)?\([\d,\s]+\)|#[a-f0-9]+|\w+/g)||[""]),this.parsed=function(){var c,d,e=[];for(c=0,d=a.length;c<d;c++)b=a[c],e.push(new k(b));return e}()}return bB(b,a),b}(q),t=function(a){function b(a){this.value=a==="auto"?a:S(a)}return bB(b,a),b}(p),s=function(a){function b(a){var c,d,e,f,b={translate:"0px,0px",rotate:"0deg",scale:"1,1",skew:"0deg,0deg"};if(a=A(a).match(/\w+\s?\([-,.\w\s]+\)/g)){d=function(a){var c,d,e,f,g,h,i,j,k,l,m;if(!(a=a.replace(/\s+/g,"").match(/^(translate|scale|rotate|skew)\((.*)\)$/)))return;c=a[1],d=a[2].split(",");switch(c){case"translate":if(d.length<2)return;k=[];for(e=0,h=d.length;e<h;e++)a=d[e],k.push(b[c]=S(a)+"px");return k;case"rotate":return b[c]=S(d[0])+"deg";case"scale":d.length===1&&(d=[d[0],d[0]]),l=[];for(f=0,i=d.length;f<i;f++)a=d[f],l.push(b[c]=S(a));return l;case"skew":if(d.length===1)return;m=[];for(g=0,j=d.length;g<j;g++)a=d[g],m.push(b[c]=S(a)+"deg");return m}};for(e=0,f=a.length;e<f;e++)c=a[e],d(c)}this.transforms=b}return bB(b,a),b.prototype.toString=function(){var a;return function(){var b,c,d=["translate","rotate","scale","skew"],e=[];for(b=0,c=d.length;b<c;b++)a=d[b],e.push(""+a+"("+this.transforms[a]+")");return e}.call(this).join(" ")},b}(p),T={},J={},X={},bd={},K=document.documentElement,I=function(a){return J[a]||(J[a]=function(){var b;return b=T[a]||r,function(){return(new b(C(this)(a))).toString(!0,this)}}())},W=function(a){return X[a]||(X[a]=function(){var b;return b=T[a]||r,function(c){return this.style[a]=(new b(c)).toString()}}())},$=document.createElement("div"),D="border:none;margin:none;padding:none;visibility:hidden;position:absolute;height:0;",U=function(a,b){var c,d;return c=a.parentNode,d=1,c&&($.style.cssText=D+("width:100"+b+";"),c.appendChild($),d=$.offsetWidth/100,c.removeChild($)),d},be=["Top","Right","Bottom","Left"],_=["TopLeft","TopRight","BottomRight","BottomLeft"];T.color=T.backgroundColor=k,T.width=T.height=T.fontSize=T.backgroundSize=m;for(bh=0,bl=be.length;bh<bl;bh++){E=be[bh],v="border"+E,bv=["margin"+E,"padding"+E,v+"Width",E.toLowerCase()];for(bi=0,bm=bv.length;bi<bm;bi++)R=bv[bi],T[R]=m;T[v+"Color"]=k,T[v+"Style"]=i,T[v]=h,J[v]=function(){return[I(v+"Width").call(this),I(v+"Style").call(this),I(v+"Color").call(this)].join(" ")}}for(bj=0,bn=_.length;bj<bn;bj++)E=_[bj],T["border"+E+"Radius"]=m;T.zIndex=t,bw=["margin","padding"],bf=function(a){return T[a]=n,J[a]=function(){var b;return function(){var c,d,e=[];for(d=0,c=be.length;d<c;d++)b=be[d],e.push(I(a+b).call(this));return e}.call(this).join(" ")}};for(bk=0,bo=bw.length;bk<bo;bk++)R=bw[bk],bf(R);T.borderRadius=n,J.borderRadius=function(){var a;return function(){var b,c,d=[];for(c=0,b=be.length;c<b;c++)a=be[c],d.push(I("border"+a+"Radius").call(this));return d}.call(this).join(" ")},T.borderWidth=n,T.borderColor=g,bx=["Width","Style","Color"],bg=function(a){return J["border"+a]=function(){var b;return function(){var c,d,e=[];for(d=0,c=be.length;d<c;d++)b=be[d],e.push(I("border"+b+a).call(this));return e}.call(this).join(" ")}};for(bs=0,bp=bx.length;bs<bp;bs++)Z=bx[bs],bg(Z);T.border=h,J.border=function(){var a,b,c,d,e;for(e=0,d=be.length;e<d;e++){a=be[e],c=I(v="border"+a).call(this);if(b&&c!==b)return null;b=c}return c},G=K.style.MsFilter!=null?"MsFilter":K.style.filter!=null?"filter":null,T.opacity=o,G&&K.style.opacity==null&&(N=/alpha\(opacity=([\d.]+)\)/i,X.opacity=function(a){var b;return a=(a=S(a)===1)?"":"alpha(opacity="+a*100+")",b=C(this)(G),this.style[G]=N.test(b)?b.replace(N,a):b+a},J.opacity=function(){var a;return Y((a=C(this)(G).match(N))?a[1]/100:1)}),by=["MozTransform","WebkitTransform","OTransform","msTransform","transform"];for(bt=0,bq=by.length;bt<bq;bt++){M=by[bt];if(K.style[M]==null)continue;ba=M;break}T.transform=s,ba?(bd.transform=ba,X.transform=function(a){return this.style[ba]=(new s(a)).toString()},J.transform=function(){return(new s(this.style[ba])).toString()}):(X.transform=function(){},J.transform=function(){return(new s).toString()}),bz=["WebkitTransition","MozTransition","transition"];for(bu=0,br=bz.length;bu<br;bu++){M=bz[bu];if(K.style[M]==null)continue;bc=M;break}bb=bc==="MozTransition"?"transitionend":"webkitTransitionEnd",F={"default":"cubic-bezier(0.25, 0.1, 0.25, 1.0)",linear:"cubic-bezier(0, 0, 1, 1)","ease-in":"cubic-bezier(0.42, 0, 1.0, 1.0)","ease-out":"cubic-bezier(0, 0, 0.58, 1.0)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1.0)"},e=function(){function a(a,b){this.node=a,this.property=b,this.setter=W(b),this.getter=I(b)}return a.prototype.setOptions=function(a){var b;a==null&&(a={});if(!(this.duration=this.parseDuration((b=a.duration)!=null?b:"500ms")))throw new Error(""+a.duration+" is not a valid duration");if(!(this.equation=this.parseEquation(a.equation||"default")))throw new Error(""+a.equation+" is not a valid equation");return this.callback=a.callback||function(){},this},a.prototype.start=function(a,b){var c;return this.stop(),c=!0,a===b&&(c=!1),this.duration===0&&(this.setter.call(this.node,b),c=!1),c||V(this.callback),c},a.prototype.parseDuration=function(a){var b,c,d;if(!(b=Y(a).match(/([\d.]+)(s|ms)/)))return null;c=S(b[1]),d=b[2];if(d==="s")return c*1e3;if(d==="ms")return c},a.prototype.parseEquation=function(a){var b,c,d,e,f,g;a=F[a]||a,c=a.replace(/\s+/g,"").match(/^cubic-bezier\(([\d.]+),([\d.]+),([\d.]+),([\d.]+)\)$/);if(c){f=c.slice(1),g=[];for(e=0,d=f.length;e<d;e++)b=f[e],g.push(S(b));return g}return null},a}(),x={},l=function(a){function b(a,c){var d=this;b.__super__.constructor.call(this,a,c),this.bstep=function(a){return d.step(a)}}return bB(b,a),b.prototype.start=function(a,c){if(b.__super__.start.call(this,a,c)){this.time=0,a=this.numbers(a),c=this.numbers(c);if(a[0].length!==c[0].length)throw new Error("property length mismatch");this.from=a[0],this.to=c[0],this.template=c[1],V(this.bstep)}return this},b.prototype.stop=function(){return z(this.bstep),this},b.prototype.step=function(a){var b,c,d,e,f,g,h;this.time||(this.time=a),d=(a-this.time)/this.duration,d>1&&(d=1),b=this.equation(d),f=this.template,h=this.from;for(e=0,g=h.length;e<g;e++)c=h[e],Z=this.to[e],f=f.replace("@",Z!==c?this.compute(c,Z,b):Z);return this.setter.call(this.node,f),d!==1?V(this.bstep):this.callback(Z),this},b.prototype.parseEquation=function(a){var c,d;return a=b.__super__.parseEquation.call(this,a),d=a.toString(),c=""+d+":"+this.duration+"ms",d===[0,0,1,1].toString()?function(a){return a}:x[c]||(x[c]=w(a[0],a[1],a[2],a[3],1e3/60/this.duration/4))},b.prototype.compute=function(a,b,c){return(b-a)*c+a},b.prototype.numbers=function(a){var b,c;return b=[],c=a.replace(/[-\d.]+/g,function(a){return b.push(S(a)),"@"}),[b,c]},b}(e),j=function(a){function b(a,c){var d=this;b.__super__.constructor.call(this,a,c),this.hproperty=L(bd[this.property]||this.property),this.bdefer=function(a){return d.defer(a)},this.bcomplete=function(a){return d.complete(a)}}return bB(b,a),b.prototype.start=function(a,c){return b.__super__.start.call(this,a,c)&&(this.to=c,V(this.bdefer)),this},b.prototype.stop=function(a){return this.running?(this.running=!1,a&&this.setter.call(this.node,this.getter.call(this.node)),this.clean()):z(this.bdefer),this},b.prototype.defer=function(){return this.running=!0,this.modCSS(!0),this.node.addEventListener(bb,this.bcomplete,!1),this.setter.call(this.node,this.to),null},b.prototype.clean=function(){return this.modCSS(),this.node.removeEventListener(bb,this.bcomplete),null},b.prototype.complete=function(a){return a&&a.propertyName===this.hproperty&&(this.running=!1,this.clean(),this.callback()),null},b.prototype.removeProp=function(a,b,c,d){var e,f,g,h;for(e=0,h=b.length;e<h;e++){g=b[e];if(g!==a)continue;f=e;break}return f!=null&&(b.splice(f,1),c.splice(f,1),d.splice(f,1)),null},b.prototype.modCSS=function(a){var b,c,d;return d=C(this.node),c=d(bc+"Property").replace(/\s+/g,"").split(","),E=d(bc+"Duration").replace(/\s+/g,"").split(","),b=d(bc+"TimingFunction").replace(/\s+/g,"").match(/cubic-bezier\(([\d.,]+)\)/g),this.removeProp("all",c,E,b),this.removeProp(this.hproperty,c,E,b),a&&(c.push(this.hproperty),E.push(this.duration),b.push(this.equation)),this.node.style[bc+"Property"]=c,this.node.style[bc+"Duration"]=E,this.node.style[bc+"TimingFunction"]=b,null},b.prototype.parseDuration=function(a){return""+b.__super__.parseDuration.call(this,a)+"ms"},b.prototype.parseEquation=function(a){return"cubic-bezier("+b.__super__.parseEquation.call(this,a)+")"},b}(e),f=function(){function a(){this.uid=0,this.animations={}}return a.prototype.retrieve=function(a,b){var c,d,e,f;return d=(f=a["µid"])!=null?f:a["µid"]=(this.uid++).toString(36),c=(e=this.animations)[d]||(e[d]={}),c[b]||(c[b]=bc?new j(a,b):new l(a,b))},a.prototype.starts=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,z,A,B;c==null&&(c={}),w=typeof c,c=w==="function"?{callback:c}:w==="string"?{duration:c}:c,d=c.callback||function(){},e=0,m=0,c.callback=function(){if(++e===m)return d()};for(r in b){x=b[r],r=y(r),q=T[r];if(!q)throw new Error("no parser for "+r);s=W(r),j=I(r);for(B=0,z=a.length;B<z;B++){n=a[B],m++,l=this.retrieve(n,r),o=new q(j.call(n)),p=new q(x),h=o.extract(),t=p.extract();for(k=0,A=h.length;k<A;k++){g=h[k],u=t[k];if("auto"===u.value||"auto"===g.value)throw new Error("cannot animate "+r+" from or to `auto`");u.unit&&g.unit&&(f=!0,u.unit!=="px"&&(g.value=g.value/U(n,u.unit),g.unit=u.unit))}i=o.toString(!0),v=p.toString(!0),f&&s.call(n,i),l.setOptions(c).start(i,v)}}return this},a.prototype.start=function(a,b,c,d){var e;return e={},e[b]=c,this.starts(a,e,d)},a.prototype.sets=function(a,b){var c,d,e,f,g,h,i,j;for(d in b){f=b[d],e=W(d=y(d));for(h=0,g=a.length;h<g;h++)c=a[h],(i=this.animations[c["µid"]])!=null&&(j=i[d])!=null&&j.stop(!0),e.call(c,f)}return this},a.prototype.set=function(a,b,c){var d;return d={},d[b]=c,this.sets(a,d)},a}(),u=new f,Q=function(a){return this.valueOf=function(){return a},this},P=function(a){return a?new Q(a.length!=null?a:a.nodeType===1?[a]:[]):null},P.prototype=Q.prototype,P.prototype.animate=function(a,b,c){return typeof a!="string"?u.starts(this.valueOf(),a,b):u.start(this.valueOf(),a,b,c),this},P.prototype.style=function(a,b){return typeof a!="string"?u.sets(this.valueOf(),a):u.set(this.valueOf(),a,b),this},P.prototype.compute=function(a){return I(y(a)).call(this.valueOf()[0])},P.parse=function(a,b,c,d){return T[a=y(a)]?(new T[a](b)).toString(c,d):null},P.cancelFrame=z,P.requestFrame=V,P.color=B,b.exports=P},1:function(a,b){b.exports=function(a,b,c,d,e){var f=function(b){var d=1-b;return 3*d*d*b*a+3*d*b*b*c+b*b*b},g=function(a){var c=1-a;return 3*c*c*a*b+3*c*a*a*d+a*a*a},h=function(b){var d=1-b;return 3*(2*(b-1)*b+d*d)*a+3*(-b*b*b+2*d*b)*c};return function(a){var c,d,i,j,k,l,b=a;for(i=b,l=0;l<8;l++){j=f(i)-b;if(Math.abs(j)<e)return g(i);k=h(i);if(Math.abs(k)<1e-6)break;i-=j/k}c=0,d=1,i=b;if(i<c)return g(c);if(i>d)return g(d);while(c<d){j=f(i);if(Math.abs(j-b)<e)return g(i);b>j?c=i:d=i,i=(d-c)*.5+c}return g(i)}}},2:function(a,b){var i={maroon:"#800000",red:"#ff0000",orange:"#ffA500",yellow:"#ffff00",olive:"#808000",purple:"#800080",fuchsia:"#ff00ff",white:"#ffffff",lime:"#00ff00",green:"#008000",navy:"#000080",blue:"#0000ff",aqua:"#00ffff",teal:"#008080",black:"#000000",silver:"#c0c0c0",gray:"#808080"},h=function(a,b,c,d){return d==null&&(d=1),a=parseInt(a,10),b=parseInt(b,10),c=parseInt(c,10),d=parseFloat(d),a<=255&&a>=0&&b<=255&&b>=0&&c<=255&&c>=0&&d<=1&&d>=0?[Math.round(a),Math.round(b),Math.round(c),d]:null},e=function(a){var b,c,d,e,f,g,h;a.length===3&&(a+="f"),a.length===4&&(b=a.charAt(0),c=a.charAt(1),d=a.charAt(2),e=a.charAt(3),a=b+b+c+c+d+d+e+e),a.length===6&&(a+="ff"),h=[];for(f=0,g=a.length;f<=g;f+=2)h.push(parseInt(a.substr(f,2),16)/(f===6?255:1));return h},g=function(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+(b-a)*6*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a},f=function(a,b,c,d){var e,f,h,i,j;return d==null&&(d=1),a/=360,b/=100,c/=100,d/=1,a>1||a<0||b>1||b<0||c>1||c<0||d>1||d<0?null:(b===0?j=e=f=c:(i=c<.5?c*(1+b):c+b-c*b,h=2*c-i,j=g(h,i,a+1/3),f=g(h,i,a),e=g(h,i,a-1/3)),[j*255,f*255,e*255,d])};b.exports=function(a,b){var c;if(typeof a!="string")return null;a=i[a=a.replace(/\s+/g,"")]||a;if(a.match(/^#[a-f0-9]{3,8}/))a=e(a.replace("#",""));else{if(!(c=a.match(/([\d.])+/g)))return null;if(a.match(/^rgb/))a=c;else{if(!a.match(/^hsl/))return null;a=f.apply(null,c)}}return!a||!(a=h.apply(null,a))?null:b?a:(a[3]===1&&a.splice(3,1),"rgb"+(a.length>3?"a":"")+"("+a+")")}},3:function(a,b,c,d){var e=[],h=!1,f=function(a){var b;a==null&&(a=+(new Date)),h=!1,b=e.length;while(b)e.splice(--b,1)[0](a);return null},g=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame||function(a){return setTimeout(a,1e3/60)};b.exports={request:function(a){return e.push(a),h||(h=!0,g(f)),this},cancel:function(a){var b,c,d;for(c=0,d=e.length;c<d;c++)b=e[c],b===a&&e.splice(c,1);return this}}}})
