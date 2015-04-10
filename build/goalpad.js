"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(e,t,r){"use strict";function n(e,t){return D(new(D(function(){},{prototype:e})),t)}function i(e){return R(arguments,function(t){t!==e&&R(t,function(t,r){e.hasOwnProperty(r)||(e[r]=t)})}),e}function a(e,t){var r=[];for(var n in e.path){if(e.path[n]!==t.path[n])break;r.push(e.path[n])}return r}function o(e){if(Object.keys)return Object.keys(e);var r=[];return t.forEach(e,function(e,t){r.push(t)}),r}function u(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var r=e.length>>>0,n=Number(arguments[2])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=r);r>n;n++)if(n in e&&e[n]===t)return n;return-1}function s(e,t,r,n){var i,s=a(r,n),l={},c=[];for(var f in s)if(s[f].params&&(i=o(s[f].params),i.length))for(var p in i)u(c,i[p])>=0||(c.push(i[p]),l[i[p]]=e[i[p]]);return D({},l,t)}function l(e,t,r){if(!r){r=[];for(var n in e)r.push(n)}for(var i=0;i<r.length;i++){var a=r[i];if(e[a]!=t[a])return!1}return!0}function c(e,t){var r={};return R(e,function(e){r[e]=t[e]}),r}function f(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var n in e)-1==u(r,n)&&(t[n]=e[n]);return t}function p(e,t){var r=N(e),n=r?[]:{};return R(e,function(e,i){t(e,i)&&(n[r?n.length:i]=e)}),n}function h(e,t){var r=N(e)?[]:{};return R(e,function(e,n){r[n]=t(e,n)}),r}function v(e,t){var n=1,a=2,s={},l=[],c=s,p=D(e.when(s),{$$promises:s,$$values:s});this.study=function(s){function h(e,r){if(g[r]!==a){if(m.push(r),g[r]===n)throw m.splice(0,u(m,r)),new Error("Cyclic dependency: "+m.join(" -> "));if(g[r]=n,M(e))d.push(r,[function(){return t.get(e)}],l);else{var i=t.annotate(e);R(i,function(e){e!==r&&s.hasOwnProperty(e)&&h(s[e],e)}),d.push(r,e,i)}m.pop(),g[r]=a}}function v(e){return F(e)&&e.then&&e.$$promises}if(!F(s))throw new Error("'invocables' must be an object");var $=o(s||{}),d=[],m=[],g={};return R(s,h),s=m=g=null,function(n,a,o){function u(){--y||(b||i(w,a.$$values),m.$$values=w,m.$$promises=m.$$promises||!0,delete m.$$inheritedValues,h.resolve(w))}function s(e){m.$$failure=e,h.reject(e)}function l(r,i,a){function l(e){f.reject(e),s(e)}function c(){if(!I(m.$$failure))try{f.resolve(t.invoke(i,o,w)),f.promise.then(function(e){w[r]=e,u()},l)}catch(e){l(e)}}var f=e.defer(),p=0;R(a,function(e){g.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(p++,g[e].then(function(t){w[e]=t,--p||c()},l))}),p||c(),g[r]=f.promise}if(v(n)&&o===r&&(o=a,a=n,n=null),n){if(!F(n))throw new Error("'locals' must be an object")}else n=c;if(a){if(!v(a))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else a=p;var h=e.defer(),m=h.promise,g=m.$$promises={},w=D({},n),y=1+d.length/3,b=!1;if(I(a.$$failure))return s(a.$$failure),m;a.$$inheritedValues&&i(w,f(a.$$inheritedValues,$)),D(g,a.$$promises),a.$$values?(b=i(w,f(a.$$values,$)),m.$$inheritedValues=f(a.$$values,$),u()):(a.$$inheritedValues&&(m.$$inheritedValues=f(a.$$inheritedValues,$)),a.then(u,s));for(var E=0,S=d.length;S>E;E+=3)n.hasOwnProperty(d[E])?u():l(d[E],d[E+1],d[E+2]);return m}},this.resolve=function(e,t,r,n){return this.study(e)(t,r,n)}}function $(e,t,r){this.fromConfig=function(e,t,r){return I(e.template)?this.fromString(e.template,t):I(e.templateUrl)?this.fromUrl(e.templateUrl,t):I(e.templateProvider)?this.fromProvider(e.templateProvider,t,r):null},this.fromString=function(e,t){return V(e)?e(t):e},this.fromUrl=function(r,n){return V(r)&&(r=r(n)),null==r?null:e.get(r,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data})},this.fromProvider=function(e,t,n){return r.invoke(e,null,n||{params:t})}}function d(e,t,i){function a(t,r,n,i){if(d.push(t),v[t])return v[t];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if($[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return $[t]=new T.Param(t,r,n,i),$[t]}function o(e,t,r){var n=["",""],i=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return i;switch(r){case!1:n=["(",")"];break;case!0:n=["?(",")?"];break;default:n=["("+r+"|",")?"]}return i+n[0]+t+n[1]}function u(r,i){var a,o,u,s,l;return a=r[2]||r[3],l=t.params[a],u=e.substring(p,r.index),o=i?r[4]:r[4]||("*"==r[1]?".*":null),s=T.type(o||"string")||n(T.type("string"),{pattern:new RegExp(o)}),{id:a,regexp:o,segment:u,type:s,cfg:l}}t=D({params:{}},F(t)?t:{});var s,l=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f="^",p=0,h=this.segments=[],v=i?i.params:{},$=this.params=i?i.params.$$new():new T.ParamSet,d=[];this.source=e;for(var m,g,w;(s=l.exec(e))&&(m=u(s,!1),!(m.segment.indexOf("?")>=0));)g=a(m.id,m.type,m.cfg,"path"),f+=o(m.segment,g.type.pattern.source,g.squash),h.push(m.segment),p=l.lastIndex;w=e.substring(p);var y=w.indexOf("?");if(y>=0){var b=this.sourceSearch=w.substring(y);if(w=w.substring(0,y),this.sourcePath=e.substring(0,p+y),b.length>0)for(p=0;s=c.exec(b);)m=u(s,!0),g=a(m.id,m.type,m.cfg,"search"),p=l.lastIndex}else this.sourcePath=e,this.sourceSearch="";f+=o(w)+(t.strict===!1?"/?":"")+"$",h.push(w),this.regexp=new RegExp(f,t.caseInsensitive?"i":r),this.prefix=h[0],this.$$paramNames=d}function m(e){D(this,e)}function g(){function e(e){return null!=e?e.toString().replace(/\//g,"%2F"):e}function i(e){return null!=e?e.toString().replace(/%2F/g,"/"):e}function a(e){return this.pattern.test(e)}function s(){return{strict:w,caseInsensitive:$}}function l(e){return V(e)||N(e)&&V(e[e.length-1])}function c(){for(;S.length;){var e=S.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend(b[e.name],v.invoke(e.def))}}function f(e){D(this,e||{})}T=this;var v,$=!1,w=!0,y=!1,b={},E=!0,S=[],x={string:{encode:e,decode:i,is:a,pattern:/[^/]*/},"int":{encode:e,decode:function(e){return parseInt(e,10)},is:function(e){return I(e)&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return 0!==parseInt(e,10)},is:function(e){return e===!0||e===!1},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):r},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):r},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^/]*/},any:{encode:t.identity,decode:t.identity,is:t.identity,equals:t.equals,pattern:/.*/}};g.$$getDefaultValue=function(e){if(!l(e.value))return e.value;if(!v)throw new Error("Injectable functions cannot be called at configuration time");return v.invoke(e.value)},this.caseInsensitive=function(e){return I(e)&&($=e),$},this.strictMode=function(e){return I(e)&&(w=e),w},this.defaultSquashPolicy=function(e){if(!I(e))return y;if(e!==!0&&e!==!1&&!M(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return y=e,e},this.compile=function(e,t){return new d(e,D(s(),t))},this.isMatcher=function(e){if(!F(e))return!1;var t=!0;return R(d.prototype,function(r,n){V(r)&&(t=t&&I(e[n])&&V(e[n]))}),t},this.type=function(e,t,r){if(!I(t))return b[e];if(b.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return b[e]=new m(D({name:e},t)),r&&(S.push({name:e,def:r}),E||c()),this},R(x,function(e,t){b[t]=new m(D({name:t},e))}),b=n(b,{}),this.$get=["$injector",function(e){return v=e,E=!1,c(),R(x,function(e,t){b[t]||(b[t]=new m(e))}),this}],this.Param=function(e,t,n,i){function a(e){var t=F(e)?o(e):[],r=-1===u(t,"value")&&-1===u(t,"type")&&-1===u(t,"squash")&&-1===u(t,"array");return r&&(e={value:e}),e.$$fn=l(e.value)?e.value:function(){return e.value},e}function s(t,r,n){if(t.type&&r)throw new Error("Param '"+e+"' has two type configurations.");return r?r:t.type?t.type instanceof m?t.type:new m(t.type):"config"===n?b.any:b.string}function c(){var t={array:"search"===i?"auto":!1},r=e.match(/\[\]$/)?{array:!0}:{};return D(t,r,n).array}function f(e,t){var r=e.squash;if(!t||r===!1)return!1;if(!I(r)||null==r)return y;if(r===!0||M(r))return r;throw new Error("Invalid squash policy: '"+r+"'. Valid policies: false, true, or arbitrary string")}function $(e,t,n,i){var a,o,s=[{from:"",to:n||t?r:""},{from:null,to:n||t?r:""}];return a=N(e.replace)?e.replace:[],M(i)&&a.push({from:i,to:r}),o=h(a,function(e){return e.from}),p(s,function(e){return-1===u(o,e.from)}).concat(a)}function d(){if(!v)throw new Error("Injectable functions cannot be called at configuration time");return v.invoke(n.$$fn)}function g(e){function t(e){return function(t){return t.from===e}}function r(e){var r=h(p(E.replace,t(e)),function(e){return e.to});return r.length?r[0]:e}return e=r(e),I(e)?E.type.decode(e):d()}function w(){return"{Param:"+e+" "+t+" squash: '"+P+"' optional: "+x+"}"}var E=this;n=a(n),t=s(n,t,i);var S=c();t=S?t.$asArray(S,"search"===i):t,"string"!==t.name||S||"path"!==i||n.value!==r||(n.value="");var x=n.value!==r,P=f(n,x),j=$(n,S,x,P);D(this,{id:e,type:t,location:i,array:S,squash:P,replace:j,isOptional:x,value:g,dynamic:r,config:n,toString:w})},f.prototype={$$new:function(){return n(this,D(new f,{$$parent:this}))},$$keys:function(){for(var e=[],t=[],r=this,n=o(f.prototype);r;)t.push(r),r=r.$$parent;return t.reverse(),R(t,function(t){R(o(t),function(t){-1===u(e,t)&&-1===u(n,t)&&e.push(t)})}),e},$$values:function(e){var t={},r=this;return R(r.$$keys(),function(n){t[n]=r[n].value(e&&e[n])}),t},$$equals:function(e,t){var r=!0,n=this;return R(n.$$keys(),function(i){var a=e&&e[i],o=t&&t[i];n[i].type.equals(a,o)||(r=!1)}),r},$$validates:function(e){var t,r,n,i=!0,a=this;return R(this.$$keys(),function(o){n=a[o],r=e[o],t=!r&&n.isOptional,i=i&&(t||!!n.type.is(r))}),i},$$parent:r},this.ParamSet=f}function w(e,n){function i(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return null!=t?t[1].replace(/\\(.)/g,"$1"):""}function a(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}function o(e,t,r){if(!r)return!1;var n=e.invoke(t,t,{$match:r});return I(n)?n:!0}function u(n,i,a,o){function u(e,t,r){return"/"===$?e:t?$.slice(0,-1)+e:r?$.slice(1)+e:e}function p(e){function t(e){var t=e(a,n);return t?(M(t)&&n.replace().url(t),!0):!1}if(!e||!e.defaultPrevented){var i=v&&n.url()===v;if(v=r,i)return!0;var o,u=l.length;for(o=0;u>o;o++)if(t(l[o]))return;c&&t(c)}}function h(){return s=s||i.$on("$locationChangeSuccess",p)}var v,$=o.baseHref(),d=n.url();return f||h(),{sync:function(){p()},listen:function(){return h()},update:function(e){return e?void(d=n.url()):void(n.url()!==d&&(n.url(d),n.replace()))},push:function(e,t,i){n.url(e.format(t||{})),v=i&&i.$$avoidResync?n.url():r,i&&i.replace&&n.replace()},href:function(r,i,a){if(!r.validates(i))return null;var o=e.html5Mode();t.isObject(o)&&(o=o.enabled);var s=r.format(i);if(a=a||{},o||null===s||(s="#"+e.hashPrefix()+s),s=u(s,o,a.absolute),!a.absolute||!s)return s;var l=!o&&s?"/":"",c=n.port();return c=80===c||443===c?"":":"+c,[n.protocol(),"://",n.host(),c,l,s].join("")}}}var s,l=[],c=null,f=!1;this.rule=function(e){if(!V(e))throw new Error("'rule' must be a function");return l.push(e),this},this.otherwise=function(e){if(M(e)){var t=e;e=function(){return t}}else if(!V(e))throw new Error("'rule' must be a function");return c=e,this},this.when=function(e,t){var r,u=M(t);if(M(e)&&(e=n.compile(e)),!u&&!V(t)&&!N(t))throw new Error("invalid 'handler' in when()");var s={matcher:function(e,t){return u&&(r=n.compile(t),t=["$match",function(e){return r.format(e)}]),D(function(r,n){return o(r,t,e.exec(n.path(),n.search()))},{prefix:M(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return u&&(r=t,t=["$match",function(e){return a(r,e)}]),D(function(r,n){return o(r,t,e.exec(n.path()))},{prefix:i(e)})}},l={matcher:n.isMatcher(e),regex:e instanceof RegExp};for(var c in l)if(l[c])return this.rule(s[c](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===r&&(e=!0),f=e},this.$get=u,u.$inject=["$location","$rootScope","$injector","$browser"]}function y(e,i){function a(e){return 0===e.indexOf(".")||0===e.indexOf("^")}function f(e,t){if(!e)return r;var n=M(e),i=n?e:e.name,o=a(i);if(o){if(!t)throw new Error("No reference point given for path '"+i+"'");t=f(t);for(var u=i.split("."),s=0,l=u.length,c=t;l>s;s++)if(""!==u[s]||0!==s){if("^"!==u[s])break;if(!c.parent)throw new Error("Path '"+i+"' not valid for state '"+t.name+"'");c=c.parent}else c=t;u=u.slice(s).join("."),i=c.name+(c.name&&u?".":"")+u}var p=x[i];return!p||!n&&(n||p!==e&&p.self!==e)?r:p}function p(e,t){P[e]||(P[e]=[]),P[e].push(t)}function v(e){for(var t=P[e]||[];t.length;)$(t.shift())}function $(t){t=n(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var r=t.name;if(!M(r)||r.indexOf("@")>=0)throw new Error("State must have a valid name");if(x.hasOwnProperty(r))throw new Error("State '"+r+"'' is already defined");var i=-1!==r.indexOf(".")?r.substring(0,r.lastIndexOf(".")):M(t.parent)?t.parent:F(t.parent)&&M(t.parent.name)?t.parent.name:"";if(i&&!x[i])return p(i,t.self);for(var a in O)V(O[a])&&(t[a]=O[a](t,O.$delegates[a]));return x[r]=t,!t[j]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,r){S.$current.navigable==t&&l(e,r)||S.transitionTo(t,e,{inherit:!0,location:!1})}]),v(r),t}function d(e){return e.indexOf("*")>-1}function m(e){var t=e.split("."),r=S.$current.name.split(".");if("**"===t[0]&&(r=r.slice(u(r,t[1])),r.unshift("**")),"**"===t[t.length-1]&&(r.splice(u(r,t[t.length-2])+1,Number.MAX_VALUE),r.push("**")),t.length!=r.length)return!1;for(var n=0,i=t.length;i>n;n++)"*"===t[n]&&(r[n]="*");return r.join("")===t.join("")}function g(e,t){return M(e)&&!I(t)?O[e]:V(t)&&M(e)?(O[e]&&!O.$delegates[e]&&(O.$delegates[e]=O[e]),O[e]=t,this):this}function w(e,t){return F(e)?t=e:t.name=e,$(t),this}function y(e,i,a,u,p,v,$){function g(t,r,n,a){var o=e.$broadcast("$stateNotFound",t,r,n);if(o.defaultPrevented)return $.update(),O;if(!o.retry)return null;if(a.$retry)return $.update(),A;var u=S.transition=i.when(o.retry);return u.then(function(){return u!==S.transition?y:(t.options.$retry=!0,S.transitionTo(t.to,t.toParams,t.options))},function(){return O}),$.update(),u}function w(e,r,n,o,s,l){var f=n?r:c(e.params.$$keys(),r),h={$stateParams:f};s.resolve=p.resolve(e.resolve,h,s.resolve,e);var v=[s.resolve.then(function(e){s.globals=e})];return o&&v.push(o),R(e.views,function(r,n){var i=r.resolve&&r.resolve!==e.resolve?r.resolve:{};i.$template=[function(){return a.load(n,{view:r,locals:h,params:f,notify:l.notify})||""}],v.push(p.resolve(i,h,s.resolve,e).then(function(a){if(V(r.controllerProvider)||N(r.controllerProvider)){var o=t.extend({},i,h);a.$$controller=u.invoke(r.controllerProvider,null,o)}else a.$$controller=r.controller;a.$$state=e,a.$$controllerAs=r.controllerAs,s[n]=a}))}),i.all(v).then(function(){return s})}var y=i.reject(new Error("transition superseded")),P=i.reject(new Error("transition prevented")),O=i.reject(new Error("transition aborted")),A=i.reject(new Error("transition failed"));return E.locals={resolve:null,globals:{$stateParams:{}}},S={params:{},current:E.self,$current:E,transition:null},S.reload=function(){return S.transitionTo(S.current,v,{reload:!0,inherit:!1,notify:!0})},S.go=function(e,t,r){return S.transitionTo(e,t,D({inherit:!0,relative:S.$current},r))},S.transitionTo=function(t,r,a){r=r||{},a=D({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},a||{});var o,l=S.$current,p=S.params,h=l.path,d=f(t,a.relative);if(!I(d)){var m={to:t,toParams:r,options:a},x=g(m,l.self,p,a);if(x)return x;if(t=m.to,r=m.toParams,a=m.options,d=f(t,a.relative),!I(d)){if(!a.relative)throw new Error("No such state '"+t+"'");throw new Error("Could not resolve '"+t+"' from state '"+a.relative+"'")}}if(d[j])throw new Error("Cannot transition to abstract state '"+t+"'");if(a.inherit&&(r=s(v,r||{},S.$current,d)),!d.params.$$validates(r))return A;r=d.params.$$values(r),t=d;var O=t.path,q=0,C=O[q],k=E.locals,V=[];if(!a.reload)for(;C&&C===h[q]&&C.ownParams.$$equals(r,p);)k=V[q]=C.locals,q++,C=O[q];if(b(t,l,k,a))return t.self.reloadOnSearch!==!1&&$.update(),S.transition=null,i.when(S.current);if(r=c(t.params.$$keys(),r||{}),a.notify&&e.$broadcast("$stateChangeStart",t.self,r,l.self,p).defaultPrevented)return $.update(),P;for(var M=i.when(k),F=q;F<O.length;F++,C=O[F])k=V[F]=n(k),M=w(C,r,C===t,M,k,a);var N=S.transition=M.then(function(){var n,i,o;if(S.transition!==N)return y;for(n=h.length-1;n>=q;n--)o=h[n],o.self.onExit&&u.invoke(o.self.onExit,o.self,o.locals.globals),o.locals=null;for(n=q;n<O.length;n++)i=O[n],i.locals=V[n],i.self.onEnter&&u.invoke(i.self.onEnter,i.self,i.locals.globals);return S.transition!==N?y:(S.$current=t,S.current=t.self,S.params=r,U(S.params,v),S.transition=null,a.location&&t.navigable&&$.push(t.navigable.url,t.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===a.location}),a.notify&&e.$broadcast("$stateChangeSuccess",t.self,r,l.self,p),$.update(!0),S.current)},function(n){return S.transition!==N?y:(S.transition=null,o=e.$broadcast("$stateChangeError",t.self,r,l.self,p,n),o.defaultPrevented||$.update(),i.reject(n))});return N},S.is=function(e,t,n){n=D({relative:S.$current},n||{});var i=f(e,n.relative);return I(i)?S.$current!==i?!1:t?l(i.params.$$values(t),v):!0:r},S.includes=function(e,t,n){if(n=D({relative:S.$current},n||{}),M(e)&&d(e)){if(!m(e))return!1;e=S.$current.name}var i=f(e,n.relative);return I(i)?I(S.$current.includes[i.name])?t?l(i.params.$$values(t),v,o(t)):!0:!1:r},S.href=function(e,t,n){n=D({lossy:!0,inherit:!0,absolute:!1,relative:S.$current},n||{});var i=f(e,n.relative);if(!I(i))return null;n.inherit&&(t=s(v,t||{},S.$current,i));var a=i&&n.lossy?i.navigable:i;return a&&a.url!==r&&null!==a.url?$.href(a.url,c(i.params.$$keys(),t||{}),{absolute:n.absolute}):null},S.get=function(e,t){if(0===arguments.length)return h(o(x),function(e){return x[e].self});var r=f(e,t||S.$current);return r&&r.self?r.self:null},S}function b(e,t,r,n){return e!==t||(r!==t.locals||n.reload)&&e.self.reloadOnSearch!==!1?void 0:!0}var E,S,x={},P={},j="abstract",O={parent:function(e){if(I(e.parent)&&e.parent)return f(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?f(t[1]):E},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=D({},e.parent.data,e.data)),e.data},url:function(e){var t=e.url,r={params:e.params||{}};if(M(t))return"^"==t.charAt(0)?i.compile(t.substring(1),r):(e.parent.navigable||E).url.concat(t,r);if(!t||i.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new T.ParamSet;return R(e.params||{},function(e,r){t[r]||(t[r]=new T.Param(r,null,e,"config"))}),t},params:function(e){return e.parent&&e.parent.params?D(e.parent.params.$$new(),e.ownParams):new T.ParamSet},views:function(e){var t={};return R(I(e.views)?e.views:{"":e},function(r,n){n.indexOf("@")<0&&(n+="@"+e.parent.name),t[n]=r}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?D({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};E=$({name:"",url:"^",views:null,"abstract":!0}),E.navigable=null,this.decorator=g,this.state=w,this.$get=y,y.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function b(){function e(e,t){return{load:function(r,n){var i,a={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return n=D(a,n),n.view&&(i=t.fromConfig(n.view,n.params,n.locals)),i&&n.notify&&e.$broadcast("$viewContentLoading",n),i}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function E(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,r){return e?t:function(e){r(function(){e[0].scrollIntoView()},0,!1)}}]}function S(e,r,n,i){function a(){return r.has?function(e){return r.has(e)?r.get(e):null}:function(e){try{return r.get(e)}catch(t){return null}}}function o(e,t){var r=function(){return{enter:function(e,t,r){t.after(e),r()},leave:function(e,t){e.remove(),t()}}};if(l)return{enter:function(e,t,r){var n=l.enter(e,null,t,r);n&&n.then&&n.then(r)},leave:function(e,t){var r=l.leave(e,t);r&&r.then&&r.then(t)}};if(s){var n=s&&s(t,e);return{enter:function(e,t,r){n.enter(e,null,t),r()},leave:function(e,t){n.leave(e),t()}}}return r()}var u=a(),s=u("$animator"),l=u("$animate"),c={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(r,a,u){return function(r,a,s){function l(){f&&(f.remove(),f=null),h&&(h.$destroy(),h=null),p&&(m.leave(p,function(){f=null}),f=p,p=null)}function c(o){var c,f=P(r,s,a,i),g=f&&e.$current&&e.$current.locals[f];if(o||g!==v){c=r.$new(),v=e.$current.locals[f];var w=u(c,function(e){m.enter(e,a,function(){h&&h.$emit("$viewContentAnimationEnded"),(t.isDefined(d)&&!d||r.$eval(d))&&n(e)}),l()});p=w,h=c,h.$emit("$viewContentLoaded"),h.$eval($)}}var f,p,h,v,$=s.onload||"",d=s.autoscroll,m=o(s,r);r.$on("$stateChangeSuccess",function(){c(!1)}),r.$on("$viewContentLoading",function(){c(!1)}),c(!0)}}};return c}function x(e,t,r,n){return{restrict:"ECA",priority:-400,compile:function(i){var a=i.html();return function(i,o,u){var s=r.$current,l=P(i,u,o,n),c=s&&s.locals[l];if(c){o.data("$uiView",{name:l,state:c.$$state}),o.html(c.$template?c.$template:a);var f=e(o.contents());if(c.$$controller){c.$scope=i;var p=t(c.$$controller,c);c.$$controllerAs&&(i[c.$$controllerAs]=p),o.data("$ngControllerController",p),o.children().data("$ngControllerController",p)}f(i)}}}}}function P(e,t,r,n){var i=n(t.uiView||t.name||"")(e),a=r.inheritedData("$uiView");return i.indexOf("@")>=0?i:i+"@"+(a?a.state.name:"")}function j(e,t){var r,n=e.match(/^\s*({[^}]*})\s*$/);if(n&&(e=t+"("+n[1]+")"),r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!r||4!==r.length)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function O(e){var t=e.parent().inheritedData("$uiView");return t&&t.state&&t.state.name?t.state:void 0}function A(e,r){var n=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(i,a,o,u){var s=j(o.uiSref,e.current.name),l=null,c=O(a)||e.$current,f=null,p="A"===a.prop("tagName"),h="FORM"===a[0].nodeName,v=h?"action":"href",$=!0,d={relative:c,inherit:!0},m=i.$eval(o.uiSrefOpts)||{};t.forEach(n,function(e){e in m&&(d[e]=m[e])});var g=function(r){if(r&&(l=t.copy(r)),$){f=e.href(s.state,l,d);var n=u[1]||u[0];return n&&n.$$setStateInfo(s.state,l),null===f?($=!1,!1):void o.$set(v,f)}};s.paramExpr&&(i.$watch(s.paramExpr,function(e){e!==l&&g(e)},!0),l=t.copy(i.$eval(s.paramExpr))),g(),h||a.bind("click",function(t){var n=t.which||t.button;if(!(n>1||t.ctrlKey||t.metaKey||t.shiftKey||a.attr("target"))){var i=r(function(){e.go(s.state,l,d)});t.preventDefault();var o=p&&!f?1:0;t.preventDefault=function(){o--<=0&&r.cancel(i)}}})}}}function q(e,t,r){return{restrict:"A",controller:["$scope","$element","$attrs",function(t,n,i){function a(){o()?n.addClass(l):n.removeClass(l)}function o(){return"undefined"!=typeof i.uiSrefActiveEq?u&&e.is(u.name,s):u&&e.includes(u.name,s)}var u,s,l;l=r(i.uiSrefActiveEq||i.uiSrefActive||"",!1)(t),this.$$setStateInfo=function(t,r){u=e.get(t,O(n)),s=r,a()},t.$on("$stateChangeSuccess",a)}]}}function C(e){var t=function(t){return e.is(t)};return t.$stateful=!0,t}function k(e){var t=function(t){return e.includes(t)};return t.$stateful=!0,t}var I=t.isDefined,V=t.isFunction,M=t.isString,F=t.isObject,N=t.isArray,R=t.forEach,D=t.extend,U=t.copy;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),v.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",v),$.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",$);var T;d.prototype.concat=function(e,t){var r={caseInsensitive:T.caseInsensitive(),strict:T.strictMode(),squash:T.defaultSquashPolicy()};return new d(this.sourcePath+e+this.sourceSearch,D(r,t),this)},d.prototype.toString=function(){return this.source},d.prototype.exec=function(e,t){function r(e){function t(e){return e.split("").reverse().join("")}function r(e){return e.replace(/\\-/,"-")}var n=t(e).split(/-(?!\\)/),i=h(n,t);return h(i,r).reverse()}var n=this.regexp.exec(e);if(!n)return null;t=t||{};var i,a,o,u=this.parameters(),s=u.length,l=this.segments.length-1,c={};if(l!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(i=0;l>i;i++){o=u[i];var f=this.params[o],p=n[i+1];for(a=0;a<f.replace;a++)f.replace[a].from===p&&(p=f.replace[a].to);p&&f.array===!0&&(p=r(p)),c[o]=f.value(p)}for(;s>i;i++)o=u[i],c[o]=this.params[o].value(t[o]);return c},d.prototype.parameters=function(e){return I(e)?this.params[e]||null:this.$$paramNames},d.prototype.validates=function(e){return this.params.$$validates(e)},d.prototype.format=function(e){function t(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}e=e||{};var r=this.segments,n=this.parameters(),i=this.params;if(!this.validates(e))return null;var a,o=!1,u=r.length-1,s=n.length,l=r[0];for(a=0;s>a;a++){var c=u>a,f=n[a],p=i[f],v=p.value(e[f]),$=p.isOptional&&p.type.equals(p.value(),v),d=$?p.squash:!1,m=p.type.encode(v);if(c){var g=r[a+1];if(d===!1)null!=m&&(l+=N(m)?h(m,t).join("-"):encodeURIComponent(m)),l+=g;else if(d===!0){var w=l.match(/\/$/)?/\/?(.*)/:/(.*)/;l+=g.match(w)[1]}else M(d)&&(l+=d+g)}else{if(null==m||$&&d!==!1)continue;N(m)||(m=[m]),m=h(m,encodeURIComponent).join("&"+f+"="),l+=(o?"&":"?")+(f+"="+m),o=!0}}return l},m.prototype.is=function(){return!0},m.prototype.encode=function(e){return e},m.prototype.decode=function(e){return e},m.prototype.equals=function(e,t){return e==t},m.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},m.prototype.pattern=/.*/,m.prototype.toString=function(){return"{Type:"+this.name+"}"},m.prototype.$asArray=function(e,t){function n(e,t){function n(e,t){return function(){return e[t].apply(e,arguments)}}function i(e){return N(e)?e:I(e)?[e]:[]}function a(e){switch(e.length){case 0:return r;case 1:return"auto"===t?e[0]:e;default:return e}}function o(e){return!e}function u(e,t){return function(r){r=i(r);var n=h(r,e);return t===!0?0===p(n,o).length:a(n)}}function s(e){return function(t,r){var n=i(t),a=i(r);if(n.length!==a.length)return!1;for(var o=0;o<n.length;o++)if(!e(n[o],a[o]))return!1;return!0}}this.encode=u(n(e,"encode")),this.decode=u(n(e,"decode")),this.is=u(n(e,"is"),!0),this.equals=s(n(e,"equals")),this.pattern=e.pattern,this.$arrayMode=t}if(!e)return this;if("auto"===e&&!t)throw new Error("'auto' array mode is for query parameters only");return new n(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",g),t.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",w),y.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").value("$stateParams",{}).provider("$state",y),b.$inject=[],t.module("ui.router.state").provider("$view",b),t.module("ui.router.state").provider("$uiViewScroll",E),S.$inject=["$state","$injector","$uiViewScroll","$interpolate"],x.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",S),t.module("ui.router.state").directive("uiView",x),A.$inject=["$state","$timeout"],q.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",A).directive("uiSrefActive",q).directive("uiSrefActiveEq",q),C.$inject=["$state"],k.$inject=["$state"],t.module("ui.router.state").filter("isState",C).filter("includedByState",k)}(window,window.angular);