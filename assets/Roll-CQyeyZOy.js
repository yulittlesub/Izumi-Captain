var dt=Object.defineProperty;var vt=(r,t,e)=>t in r?dt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var f=(r,t,e)=>(vt(r,typeof t!="symbol"?t+"":t,e),e);import{d as xt,r as G,w as it,c as gt,a as q,b as m,t as k,u as X,e as U,f as mt,v as yt,F as wt,g as bt,h as _t,o as D,i as Mt,j as rt,n as ot}from"./index-YJ29pxzL.js";var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Et(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Ot(r){if(r.__esModule)return r;var t=r.default;if(typeof t=="function"){var e=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach(function(n){var s=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,s.get?s:{enumerable:!0,get:function(){return r[n]}})}),e}var K={exports:{}};K.exports;(function(r){(function(t,e,n){function s(i){var a=this,c=u();a.next=function(){var o=2091639*a.s0+a.c*23283064365386963e-26;return a.s0=a.s1,a.s1=a.s2,a.s2=o-(a.c=o|0)},a.c=1,a.s0=c(" "),a.s1=c(" "),a.s2=c(" "),a.s0-=c(i),a.s0<0&&(a.s0+=1),a.s1-=c(i),a.s1<0&&(a.s1+=1),a.s2-=c(i),a.s2<0&&(a.s2+=1),c=null}function p(i,a){return a.c=i.c,a.s0=i.s0,a.s1=i.s1,a.s2=i.s2,a}function v(i,a){var c=new s(i),o=a&&a.state,h=c.next;return h.int32=function(){return c.next()*4294967296|0},h.double=function(){return h()+(h()*2097152|0)*11102230246251565e-32},h.quick=h,o&&(typeof o=="object"&&p(o,c),h.state=function(){return p(c,{})}),h}function u(){var i=4022871197,a=function(c){c=String(c);for(var o=0;o<c.length;o++){i+=c.charCodeAt(o);var h=.02519603282416938*i;i=h>>>0,h-=i,h*=i,i=h>>>0,h-=i,i+=h*4294967296}return(i>>>0)*23283064365386963e-26};return a}e&&e.exports?e.exports=v:n&&n.amd?n(function(){return v}):this.alea=v})(L,r,!1)})(K);var St=K.exports,Y={exports:{}};Y.exports;(function(r){(function(t,e,n){function s(u){var i=this,a="";i.x=0,i.y=0,i.z=0,i.w=0,i.next=function(){var o=i.x^i.x<<11;return i.x=i.y,i.y=i.z,i.z=i.w,i.w^=i.w>>>19^o^o>>>8},u===(u|0)?i.x=u:a+=u;for(var c=0;c<a.length+64;c++)i.x^=a.charCodeAt(c)|0,i.next()}function p(u,i){return i.x=u.x,i.y=u.y,i.z=u.z,i.w=u.w,i}function v(u,i){var a=new s(u),c=i&&i.state,o=function(){return(a.next()>>>0)/4294967296};return o.double=function(){do var h=a.next()>>>11,l=(a.next()>>>0)/4294967296,d=(h+l)/(1<<21);while(d===0);return d},o.int32=a.next,o.quick=o,c&&(typeof c=="object"&&p(c,a),o.state=function(){return p(a,{})}),o}e&&e.exports?e.exports=v:n&&n.amd?n(function(){return v}):this.xor128=v})(L,r,!1)})(Y);var jt=Y.exports,Q={exports:{}};Q.exports;(function(r){(function(t,e,n){function s(u){var i=this,a="";i.next=function(){var o=i.x^i.x>>>2;return i.x=i.y,i.y=i.z,i.z=i.w,i.w=i.v,(i.d=i.d+362437|0)+(i.v=i.v^i.v<<4^(o^o<<1))|0},i.x=0,i.y=0,i.z=0,i.w=0,i.v=0,u===(u|0)?i.x=u:a+=u;for(var c=0;c<a.length+64;c++)i.x^=a.charCodeAt(c)|0,c==a.length&&(i.d=i.x<<10^i.x>>>4),i.next()}function p(u,i){return i.x=u.x,i.y=u.y,i.z=u.z,i.w=u.w,i.v=u.v,i.d=u.d,i}function v(u,i){var a=new s(u),c=i&&i.state,o=function(){return(a.next()>>>0)/4294967296};return o.double=function(){do var h=a.next()>>>11,l=(a.next()>>>0)/4294967296,d=(h+l)/(1<<21);while(d===0);return d},o.int32=a.next,o.quick=o,c&&(typeof c=="object"&&p(c,a),o.state=function(){return p(a,{})}),o}e&&e.exports?e.exports=v:n&&n.amd?n(function(){return v}):this.xorwow=v})(L,r,!1)})(Q);var zt=Q.exports,Z={exports:{}};Z.exports;(function(r){(function(t,e,n){function s(u){var i=this;i.next=function(){var c=i.x,o=i.i,h,l;return h=c[o],h^=h>>>7,l=h^h<<24,h=c[o+1&7],l^=h^h>>>10,h=c[o+3&7],l^=h^h>>>3,h=c[o+4&7],l^=h^h<<7,h=c[o+7&7],h=h^h<<13,l^=h^h<<9,c[o]=l,i.i=o+1&7,l};function a(c,o){var h,l=[];if(o===(o|0))l[0]=o;else for(o=""+o,h=0;h<o.length;++h)l[h&7]=l[h&7]<<15^o.charCodeAt(h)+l[h+1&7]<<13;for(;l.length<8;)l.push(0);for(h=0;h<8&&l[h]===0;++h);for(h==8?l[7]=-1:l[h],c.x=l,c.i=0,h=256;h>0;--h)c.next()}a(i,u)}function p(u,i){return i.x=u.x.slice(),i.i=u.i,i}function v(u,i){u==null&&(u=+new Date);var a=new s(u),c=i&&i.state,o=function(){return(a.next()>>>0)/4294967296};return o.double=function(){do var h=a.next()>>>11,l=(a.next()>>>0)/4294967296,d=(h+l)/(1<<21);while(d===0);return d},o.int32=a.next,o.quick=o,c&&(c.x&&p(c,a),o.state=function(){return p(a,{})}),o}e&&e.exports?e.exports=v:n&&n.amd?n(function(){return v}):this.xorshift7=v})(L,r,!1)})(Z);var Pt=Z.exports,tt={exports:{}};tt.exports;(function(r){(function(t,e,n){function s(u){var i=this;i.next=function(){var c=i.w,o=i.X,h=i.i,l,d;return i.w=c=c+1640531527|0,d=o[h+34&127],l=o[h=h+1&127],d^=d<<13,l^=l<<17,d^=d>>>15,l^=l>>>12,d=o[h]=d^l,i.i=h,d+(c^c>>>16)|0};function a(c,o){var h,l,d,_,C,j=[],$=128;for(o===(o|0)?(l=o,o=null):(o=o+"\0",l=0,$=Math.max($,o.length)),d=0,_=-32;_<$;++_)o&&(l^=o.charCodeAt((_+32)%o.length)),_===0&&(C=l),l^=l<<10,l^=l>>>15,l^=l<<4,l^=l>>>13,_>=0&&(C=C+1640531527|0,h=j[_&127]^=l+C,d=h==0?d+1:0);for(d>=128&&(j[(o&&o.length||0)&127]=-1),d=127,_=4*128;_>0;--_)l=j[d+34&127],h=j[d=d+1&127],l^=l<<13,h^=h<<17,l^=l>>>15,h^=h>>>12,j[d]=l^h;c.w=C,c.X=j,c.i=d}a(i,u)}function p(u,i){return i.i=u.i,i.w=u.w,i.X=u.X.slice(),i}function v(u,i){u==null&&(u=+new Date);var a=new s(u),c=i&&i.state,o=function(){return(a.next()>>>0)/4294967296};return o.double=function(){do var h=a.next()>>>11,l=(a.next()>>>0)/4294967296,d=(h+l)/(1<<21);while(d===0);return d},o.int32=a.next,o.quick=o,c&&(c.X&&p(c,a),o.state=function(){return p(a,{})}),o}e&&e.exports?e.exports=v:n&&n.amd?n(function(){return v}):this.xor4096=v})(L,r,!1)})(tt);var Tt=tt.exports,et={exports:{}};et.exports;(function(r){(function(t,e,n){function s(u){var i=this,a="";i.next=function(){var o=i.b,h=i.c,l=i.d,d=i.a;return o=o<<25^o>>>7^h,h=h-l|0,l=l<<24^l>>>8^d,d=d-o|0,i.b=o=o<<20^o>>>12^h,i.c=h=h-l|0,i.d=l<<16^h>>>16^d,i.a=d-o|0},i.a=0,i.b=0,i.c=-1640531527,i.d=1367130551,u===Math.floor(u)?(i.a=u/4294967296|0,i.b=u|0):a+=u;for(var c=0;c<a.length+20;c++)i.b^=a.charCodeAt(c)|0,i.next()}function p(u,i){return i.a=u.a,i.b=u.b,i.c=u.c,i.d=u.d,i}function v(u,i){var a=new s(u),c=i&&i.state,o=function(){return(a.next()>>>0)/4294967296};return o.double=function(){do var h=a.next()>>>11,l=(a.next()>>>0)/4294967296,d=(h+l)/(1<<21);while(d===0);return d},o.int32=a.next,o.quick=o,c&&(typeof c=="object"&&p(c,a),o.state=function(){return p(a,{})}),o}e&&e.exports?e.exports=v:n&&n.amd?n(function(){return v}):this.tychei=v})(L,r,!1)})(et);var Ct=et.exports,lt={exports:{}};const It={},kt=Object.freeze(Object.defineProperty({__proto__:null,default:It},Symbol.toStringTag,{value:"Module"})),At=Ot(kt);(function(r){(function(t,e,n){var s=256,p=6,v=52,u="random",i=n.pow(s,p),a=n.pow(2,v),c=a*2,o=s-1,h;function l(x,g,b){var w=[];g=g==!0?{entropy:!0}:g||{};var y=j(C(g.entropy?[x,B(e)]:x??$(),3),w),M=new d(w),O=function(){for(var E=M.g(p),T=i,z=0;E<a;)E=(E+z)*s,T*=s,z=M.g(1);for(;E>=c;)E/=2,T/=2,z>>>=1;return(E+z)/T};return O.int32=function(){return M.g(4)|0},O.quick=function(){return M.g(4)/4294967296},O.double=O,j(B(M.S),e),(g.pass||b||function(E,T,z,I){return I&&(I.S&&_(I,M),E.state=function(){return _(M,{})}),z?(n[u]=E,T):E})(O,y,"global"in g?g.global:this==n,g.state)}function d(x){var g,b=x.length,w=this,y=0,M=w.i=w.j=0,O=w.S=[];for(b||(x=[b++]);y<s;)O[y]=y++;for(y=0;y<s;y++)O[y]=O[M=o&M+x[y%b]+(g=O[y])],O[M]=g;(w.g=function(E){for(var T,z=0,I=w.i,F=w.j,N=w.S;E--;)T=N[I=o&I+1],z=z*s+N[o&(N[I]=N[F=o&F+T])+(N[F]=T)];return w.i=I,w.j=F,z})(s)}function _(x,g){return g.i=x.i,g.j=x.j,g.S=x.S.slice(),g}function C(x,g){var b=[],w=typeof x,y;if(g&&w=="object")for(y in x)try{b.push(C(x[y],g-1))}catch{}return b.length?b:w=="string"?x:x+"\0"}function j(x,g){for(var b=x+"",w,y=0;y<b.length;)g[o&y]=o&(w^=g[o&y]*19)+b.charCodeAt(y++);return B(g)}function $(){try{var x;return h&&(x=h.randomBytes)?x=x(s):(x=new Uint8Array(s),(t.crypto||t.msCrypto).getRandomValues(x)),B(x)}catch{var g=t.navigator,b=g&&g.plugins;return[+new Date,t,b,t.screen,B(e)]}}function B(x){return String.fromCharCode.apply(0,x)}if(j(n.random(),e),r.exports){r.exports=l;try{h=At}catch{}}else n["seed"+u]=l})(typeof self<"u"?self:L,[],Math)})(lt);var Lt=lt.exports,Rt=St,qt=jt,Dt=zt,$t=Pt,Bt=Tt,Nt=Ct,R=Lt;R.alea=Rt;R.xor128=qt;R.xorwow=Dt;R.xorshift7=$t;R.xor4096=Bt;R.tychei=Nt;var Xt=R;const Ft=Et(Xt);function st(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,Wt(n.key),n)}}function nt(r,t,e){return t&&st(r.prototype,t),e&&st(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function ft(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,H(r,t)}function H(r,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},H(r,t)}function Gt(r,t){if(typeof r!="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function Wt(r){var t=Gt(r,"string");return typeof t=="symbol"?t:String(t)}var W=function(){function r(){}var t=r.prototype;return t._seed=function(n,s){if(n===(n||0))return n;for(var p=""+n,v=0,u=0;u<p.length;++u)v^=p.charCodeAt(u)|0;return v},r}(),at=function(r){ft(t,r);function t(n,s){var p;return p=r.call(this)||this,p._rng=void 0,p.seed(n,s),p}var e=t.prototype;return e.next=function(){return this._rng()},e.seed=function(s,p){this._rng=s},e.clone=function(s,p){return new t(this._rng,p)},nt(t,[{key:"name",get:function(){return"function"}}]),t}(W),ht=function(){var r=[].slice.call(arguments),t=r,e=t[0],n=e===void 0?"default":e;switch(typeof n){case"object":if(n instanceof W)return n;break;case"function":return new at(n);case"number":case"string":default:return new at(Ft.apply(void 0,r))}throw new Error('invalid RNG "'+n+'"')},Ut=function(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),function(){return r.next()*(e-t)+t}};function S(r){return new Vt(r)}var Vt=function(t){var e=this;this.n=void 0,this.isInt=function(){if(Number.isInteger(e.n))return e;throw new Error("Expected number to be an integer, got "+e.n)},this.isPositive=function(){if(e.n>0)return e;throw new Error("Expected number to be positive, got "+e.n)},this.lessThan=function(n){if(e.n<n)return e;throw new Error("Expected number to be less than "+n+", got "+e.n)},this.greaterThanOrEqual=function(n){if(e.n>=n)return e;throw new Error("Expected number to be greater than or equal to "+n+", got "+e.n)},this.greaterThan=function(n){if(e.n>n)return e;throw new Error("Expected number to be greater than "+n+", got "+e.n)},this.n=t},Ht=function(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),e===void 0&&(e=t===void 0?1:t,t=0),S(t).isInt(),S(e).isInt(),function(){return Math.floor(r.next()*(e-t+1)+t)}},Jt=function(r){return function(){return r.next()>=.5}},Kt=function(r,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),function(){var n,s,p;do n=r.next()*2-1,s=r.next()*2-1,p=n*n+s*s;while(!p||p>1);return t+e*s*Math.sqrt(-2*Math.log(p)/p)}},Yt=function(r,t,e){t===void 0&&(t=0),e===void 0&&(e=1);var n=r.normal(t,e);return function(){return Math.exp(n())}},Qt=function(r,t){return t===void 0&&(t=.5),S(t).greaterThanOrEqual(0).lessThan(1),function(){return Math.floor(r.next()+t)}},Zt=function(r,t,e){return t===void 0&&(t=1),e===void 0&&(e=.5),S(t).isInt().isPositive(),S(e).greaterThanOrEqual(0).lessThan(1),function(){for(var n=0,s=0;n++<t;)r.next()<e&&s++;return s}},te=function(r,t){t===void 0&&(t=.5),S(t).greaterThan(0).lessThan(1);var e=1/Math.log(1-t);return function(){return Math.floor(1+Math.log(r.next())*e)}},ee=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],ne=function(t){return ee[t]},ie=.9189385332046727,re=function(r,t){if(t===void 0&&(t=1),S(t).isPositive(),t<10){var e=Math.exp(-t);return function(){for(var i=e,a=0,c=r.next();c>i;)c=c-i,i=t*i/++a;return a}}else{var n=Math.sqrt(t),s=.931+2.53*n,p=-.059+.02483*s,v=1.1239+1.1328/(s-3.4),u=.9277-3.6224/(s-2);return function(){for(;;){var i=void 0,a=r.next();if(a<=.86*u)return i=a/u-.43,Math.floor((2*p/(.5-Math.abs(i))+s)*i+t+.445);a>=u?i=r.next()-.5:(i=a/u-.93,i=(i<0?-.5:.5)-i,a=r.next()*u);var c=.5-Math.abs(i);if(!(c<.013&&a>c)){var o=Math.floor((2*p/c+s)*i+t+.445);if(a=a*v/(p/(c*c)+s),o>=10){var h=(o+.5)*Math.log(t/o)-t-ie+o-(.08333333333333333-(.002777777777777778-1/(1260*o*o))/(o*o))/o;if(Math.log(a*n)<=h)return o}else if(o>=0){var l,d=(l=ne(o))!=null?l:0;if(Math.log(a)<=o*Math.log(t)-t-d)return o}}}}}},oe=function(r,t){return t===void 0&&(t=1),S(t).isPositive(),function(){return-Math.log(1-r.next())/t}},se=function(r,t){return t===void 0&&(t=1),S(t).isInt().greaterThanOrEqual(0),function(){for(var e=0,n=0;n<t;++n)e+=r.next();return e}},ae=function(r,t){t===void 0&&(t=1),S(t).isInt().isPositive();var e=r.irwinHall(t);return function(){return e()/t}},he=function(r,t){t===void 0&&(t=1),S(t).greaterThanOrEqual(0);var e=1/t;return function(){return 1/Math.pow(1-r.next(),e)}},ue=function(r){ft(t,r);function t(){return r.apply(this,arguments)||this}var e=t.prototype;return e.next=function(){return Math.random()},e.seed=function(s,p){},e.clone=function(){return new t},nt(t,[{key:"name",get:function(){return"default"}}]),t}(W),ce=function(){function r(e){var n=this;this._rng=void 0,this._patch=void 0,this._cache={},this.next=function(){return n._rng.next()},this.float=function(s,p){return n.uniform(s,p)()},this.int=function(s,p){return n.uniformInt(s,p)()},this.integer=function(s,p){return n.uniformInt(s,p)()},this.bool=function(){return n.uniformBoolean()()},this.boolean=function(){return n.uniformBoolean()()},this.uniform=function(s,p){return n._memoize("uniform",Ut,s,p)},this.uniformInt=function(s,p){return n._memoize("uniformInt",Ht,s,p)},this.uniformBoolean=function(){return n._memoize("uniformBoolean",Jt)},this.normal=function(s,p){return Kt(n,s,p)},this.logNormal=function(s,p){return Yt(n,s,p)},this.bernoulli=function(s){return Qt(n,s)},this.binomial=function(s,p){return Zt(n,s,p)},this.geometric=function(s){return te(n,s)},this.poisson=function(s){return re(n,s)},this.exponential=function(s){return oe(n,s)},this.irwinHall=function(s){return se(n,s)},this.bates=function(s){return ae(n,s)},this.pareto=function(s){return he(n,s)},e&&e instanceof W?this.use(e):this.use(new ue),this._cache={}}var t=r.prototype;return t.clone=function(){var n=[].slice.call(arguments);return n.length?new r(ht.apply(void 0,n)):new r(this.rng.clone())},t.use=function(){this._rng=ht.apply(void 0,[].slice.call(arguments))},t.patch=function(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()},t.unpatch=function(){this._patch&&(Math.random=this._patch,delete this._patch)},t.choice=function(n){if(!Array.isArray(n))throw new Error("Random.choice expected input to be an array, got "+typeof n);var s=n==null?void 0:n.length;if(s>0){var p=this.uniformInt(0,s-1)();return n[p]}else return},t._memoize=function(n,s){var p=[].slice.call(arguments,2),v=""+p.join(";"),u=this._cache[n];return(u===void 0||u.key!==v)&&(u={key:v,distribution:s.apply(void 0,[this].concat(p))},this._cache[n]=u),u.distribution},nt(r,[{key:"rng",get:function(){return this._rng}}]),r}(),le=new ce;function V(r){return Math.abs(Math.floor(r))}function A(r,t){return Math.random()*(t-r)+r}function P(r,t){return Math.floor(A(r,t+1))}function ut(r,t,e,n){const s=Math.pow;return Math.sqrt(s(r-e,2)+s(t-n,2))}function J(r,t,e=1){if(r>360||r<0)throw new Error(`Expected hue 0-360 range, got \`${r}\``);if(t>100||t<0)throw new Error(`Expected lightness 0-100 range, got \`${t}\``);if(e>1||e<0)throw new Error(`Expected alpha 0-1 range, got \`${e}\``);return`hsla(${r}, 100%, ${t}%, ${e})`}const ct=r=>{if(typeof r=="object"&&r!==null){if(typeof Object.getPrototypeOf=="function"){const t=Object.getPrototypeOf(r);return t===Object.prototype||t===null}return Object.prototype.toString.call(r)==="[object Object]"}return!1},fe=["__proto__","constructor","prototype"],pt=(...r)=>r.reduce((t,e)=>(Object.keys(e).forEach(n=>{fe.includes(n)||(Array.isArray(t[n])&&Array.isArray(e[n])?t[n]=e[n]:ct(t[n])&&ct(e[n])?t[n]=pt(t[n],e[n]):t[n]=e[n])}),t),{});function pe(r,t){let e;return(...n)=>{e&&clearTimeout(e),e=setTimeout(()=>r(...n),t)}}class de{constructor({x:t,y:e,ctx:n,hue:s,decay:p,gravity:v,friction:u,brightness:i,flickering:a,lineWidth:c,explosionLength:o}){f(this,"x");f(this,"y");f(this,"ctx");f(this,"hue");f(this,"friction");f(this,"gravity");f(this,"flickering");f(this,"lineWidth");f(this,"explosionLength");f(this,"angle");f(this,"speed");f(this,"brightness");f(this,"coordinates",[]);f(this,"decay");f(this,"alpha",1);for(this.x=t,this.y=e,this.ctx=n,this.hue=s,this.gravity=v,this.friction=u,this.flickering=a,this.lineWidth=c,this.explosionLength=o,this.angle=A(0,Math.PI*2),this.speed=P(1,10),this.brightness=P(i.min,i.max),this.decay=A(p.min,p.max);this.explosionLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=J(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=J(this.hue,this.flickering?A(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()}}class ve{constructor(t,e){f(this,"active",!1);f(this,"x");f(this,"y");this.options=t,this.canvas=e,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}get mouseOptions(){return this.options.mouse}mount(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)}unmount(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)}usePointer(t,e){const{click:n,move:s}=this.mouseOptions;(n||s)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=e)}pointerDown(t){this.usePointer(t,this.mouseOptions.click)}pointerUp(t){this.usePointer(t,!1)}pointerMove(t){this.usePointer(t,this.active)}}class xe{constructor(){f(this,"hue");f(this,"rocketsPoint");f(this,"opacity");f(this,"acceleration");f(this,"friction");f(this,"gravity");f(this,"particles");f(this,"explosion");f(this,"mouse");f(this,"boundaries");f(this,"sound");f(this,"delay");f(this,"brightness");f(this,"decay");f(this,"flickering");f(this,"intensity");f(this,"traceLength");f(this,"traceSpeed");f(this,"lineWidth");f(this,"lineStyle");f(this,"autoresize");this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={debug:!1,height:0,width:0,x:50,y:50}}update(t){Object.assign(this,pt(this,t))}}class ge{constructor(t,e){f(this,"tick",0);f(this,"rafId",0);f(this,"fps",60);f(this,"tolerance",.1);f(this,"now");this.options=t,this.render=e}mount(){this.now=performance.now();const t=1e3/this.fps,e=n=>{this.rafId=requestAnimationFrame(e);const s=n-this.now;s>=t-this.tolerance&&(this.render(),this.now=n-s%t,this.tick+=s*(this.options.intensity*Math.PI)/1e3)};this.rafId=requestAnimationFrame(e)}unmount(){cancelAnimationFrame(this.rafId)}}class me{constructor(t,e,n){f(this,"resizer");this.options=t,this.updateSize=e,this.container=n}mount(){if(!this.resizer){const t=pe(()=>this.updateSize(),100);this.resizer=new ResizeObserver(t)}this.options.autoresize&&this.resizer.observe(this.container)}unmount(){this.resizer&&this.resizer.unobserve(this.container)}}class ye{constructor(t){f(this,"buffers",[]);f(this,"audioContext");f(this,"onInit",!1);this.options=t,this.init()}get isEnabled(){return this.options.sound.enabled}get soundOptions(){return this.options.sound}init(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())}async loadSounds(){for(const t of this.soundOptions.files){const e=await(await fetch(t)).arrayBuffer();this.audioContext.decodeAudioData(e).then(n=>{this.buffers.push(n)}).catch(n=>{throw n})}}play(){if(this.isEnabled&&this.buffers.length){const t=this.audioContext.createBufferSource(),e=this.buffers[P(0,this.buffers.length-1)],n=this.audioContext.createGain();t.buffer=e,n.gain.value=A(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),n.connect(this.audioContext.destination),t.connect(n),t.start(0)}else this.init()}}class we{constructor({x:t,y:e,dx:n,dy:s,ctx:p,hue:v,speed:u,traceLength:i,acceleration:a}){f(this,"x");f(this,"y");f(this,"sx");f(this,"sy");f(this,"dx");f(this,"dy");f(this,"ctx");f(this,"hue");f(this,"speed");f(this,"acceleration");f(this,"traceLength");f(this,"totalDistance");f(this,"angle");f(this,"brightness");f(this,"coordinates",[]);f(this,"currentDistance",0);for(this.x=t,this.y=e,this.sx=t,this.sy=e,this.dx=n,this.dy=s,this.ctx=p,this.hue=v,this.speed=u,this.traceLength=i,this.acceleration=a,this.totalDistance=ut(t,e,n,s),this.angle=Math.atan2(s-e,n-t),this.brightness=P(50,70);this.traceLength--;)this.coordinates.push([t,e])}update(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;const e=Math.cos(this.angle)*this.speed,n=Math.sin(this.angle)*this.speed;this.currentDistance=ut(this.sx,this.sy,this.x+e,this.y+n),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=e,this.y+=n)}draw(){const t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=J(this.hue,this.brightness),this.ctx.stroke()}}class be{constructor(t,e={}){f(this,"target");f(this,"container");f(this,"canvas");f(this,"ctx");f(this,"width");f(this,"height");f(this,"traces",[]);f(this,"explosions",[]);f(this,"waitStopRaf");f(this,"running",!1);f(this,"opts");f(this,"sound");f(this,"resize");f(this,"mouse");f(this,"raf");this.target=t,this.container=t,this.opts=new xe,this.createCanvas(this.target),this.updateOptions(e),this.sound=new ye(this.opts),this.resize=new me(this.opts,this.updateSize.bind(this),this.container),this.mouse=new ve(this.opts,this.canvas),this.raf=new ge(this.opts,this.render.bind(this))}get isRunning(){return this.running}get version(){return"2.10.7"}get currentOptions(){return this.opts}start(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())}stop(t=!1){!this.running||(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())}async waitStop(t){if(this.running)return new Promise(e=>{this.waitStopRaf=()=>{!this.waitStopRaf||(requestAnimationFrame(this.waitStopRaf),!this.traces.length&&!this.explosions.length&&(this.waitStopRaf=null,this.stop(t),e()))},this.waitStopRaf()})}pause(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()}clear(){!this.ctx||(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))}launch(t=1){for(let e=0;e<t;e++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())}updateOptions(t){this.opts.update(t)}updateSize({width:t=this.container.clientWidth,height:e=this.container.clientHeight}={}){this.width=t,this.height=e,this.canvas.width=t,this.canvas.height=e,this.updateBoundaries({...this.opts.boundaries,width:t,height:e})}updateBoundaries(t){this.updateOptions({boundaries:t})}createCanvas(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()}render(){if(!this.ctx||!this.running)return;const{opacity:t,lineStyle:e,lineWidth:n}=this.opts;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle=`rgba(0, 0, 0, ${t})`,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=e,this.ctx.lineJoin="round",this.ctx.lineWidth=A(n.trace.min,n.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}createTrace(){const{hue:t,rocketsPoint:e,boundaries:n,traceLength:s,traceSpeed:p,acceleration:v,mouse:u}=this.opts;this.traces.push(new we({x:this.width*P(e.min,e.max)/100,y:this.height,dx:this.mouse.x&&u.move||this.mouse.active?this.mouse.x:P(n.x,n.width-n.x*2),dy:this.mouse.y&&u.move||this.mouse.active?this.mouse.y:P(n.y,n.height*.5),ctx:this.ctx,hue:P(t.min,t.max),speed:p,acceleration:v,traceLength:V(s)}))}initTrace(){if(this.waitStopRaf)return;const{delay:t,mouse:e}=this.opts;(this.raf.tick>P(t.min,t.max)||this.mouse.active&&e.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}drawTrace(){let t=this.traces.length;for(;t--;)this.traces[t].draw(),this.traces[t].update((e,n,s)=>{this.initExplosion(e,n,s),this.sound.play(),this.traces.splice(t,1)})}initExplosion(t,e,n){const{particles:s,flickering:p,lineWidth:v,explosion:u,brightness:i,friction:a,gravity:c,decay:o}=this.opts;let h=V(s);for(;h--;)this.explosions.push(new de({x:t,y:e,ctx:this.ctx,hue:n,friction:a,gravity:c,flickering:P(0,100)<=p,lineWidth:A(v.explosion.min,v.explosion.max),explosionLength:V(u),brightness:i,decay:o}))}drawExplosion(){let t=this.explosions.length;for(;t--;)this.explosions[t].draw(),this.explosions[t].update(()=>{this.explosions.splice(t,1)})}}const _e={id:"roll",w:"full"},Me={mt:"0",pb:"4","border-b":"","border-0":"","border-light-800":""},Ee={key:0,relative:"",text:"center"},Oe={class:"-z-3",text:"center",px:"12",pb:"4","inline-block":"",border:"","border-light-800":"","bg-light-100":"",rounded:""},Se=m("h3",null,"奖品",-1),je=m("a",null,"十连",-1),ze=[je],Pe={relative:""},Te={mt:"16"},Ce=m("span",{font:"bold"},"你的用户名",-1),Ie={mt:"4"},ke=m("span",{font:"bold"},"单抽中奖率",-1),Ae={ml:"2"},Le={mt:"4"},Re=m("span",{font:"bold"},"十连中奖率",-1),qe={ml:"2"},De={mt:"4"},$e={key:0,border:"","border-light-800":"",rounded:"","py-1":""},Be={font:"bold mono","inline-block":"",text:"center",w:"8"},Fe=xt({__name:"Roll",setup(r){const t=_t(),e=G(""),n=G([...t.value.captains]),s=G([]),p=G();window.localStorage.getItem("username")&&(e.value=window.localStorage.getItem("username"));const v=()=>{n.value=[...t.value.captains],s.value=[]};it(t,()=>{v()}),it(e,o=>{window.localStorage.setItem("username",o),v()});let u,i;const a=()=>{if(!(u&&new Date().getTime()-u<3e3)){n.value.length===0&&v(),s.value.length>0&&s.value[s.value.length-1].username===e.value&&v();for(let o=0;o<10&&n.value.length>0;o++){const l=le.uniformInt(0,n.value.length-1)(),d=n.value[l];if(s.value.push(d),d.username===e.value){!i&&p.value&&(i=new be(p.value,{delay:{min:5,max:15}})),u=new Date().getTime(),i==null||i.start(),setTimeout(()=>i==null?void 0:i.stop(),3e3);break}n.value.splice(l,1)}}},c=gt(()=>{const o=n.value.length;if(o<=10)return"100.00";{let h=1;for(let l=0;l<10;l++)h*=1-1/(o-l);return(100*(1-h)).toFixed(2)}});return(o,h)=>(D(),q("div",_e,[m("h2",Me,k(X(Mt)(X(t).date,"yyyy 年 M 月 d 日"))+" 舰长抽奖 ",1),X(rt)?(D(),q("div",Ee,[m("div",Oe,[Se,m("h3",null,k(X(rt).name),1),m("div",{mt:"4"},[m("div",{class:"button !border-0",onClick:a},ze)])])])):U("",!0),m("div",Pe,[X(t).captains.find(l=>l.username===e.value)?(D(),q("div",{key:0,absolute:"",top:"-24",left:"0",class:"-z-1","max-h":"100",h:"full",w:"full",ref_key:"_fw",ref:p},null,512)):U("",!0),m("div",Te,[Ce,mt(m("input",{type:"text",name:"contest_search",id:"contest_search",class:"p-2 ml-2 rounded-md outline-none <md:shadow-box border border-light-900","onUpdate:modelValue":h[0]||(h[0]=l=>e.value=l)},null,512),[[yt,e.value]])]),m("div",Ie,[ke,m("span",Ae,k((100/n.value.length).toFixed(2))+" %",1),m("span",null," (剩余 "+k(n.value.length)+" 位舰长)",1)]),m("div",Le,[Re,m("span",qe,k(c.value)+" %",1)]),m("div",De,[s.value.length?(D(),q("div",$e,[(D(!0),q(wt,null,bt(s.value.slice(0).reverse(),(l,d)=>(D(),q("div",{key:l.uid,"p-2":"",class:ot(["border-0","border-light-800",d+1<s.value.length&&"border-b"])},[m("span",Be,k(s.value.length-d),1),m("span",{ml:"2",class:ot([l.username===e.value&&"text-green-400 font-bold"])},k(l.username),3)],2))),128))])):U("",!0)])])]))}});export{Fe as default};
