"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3024],{69807:function(e,t,n){n.d(t,{Lh:function(){return h},Vx:function(){return p},eD:function(){return l},h8:function(){return m},kS:function(){return f},x4:function(){return i},z2:function(){return d}});var r=n(74165),a=n(15861),s=n(58660),o=n(74569),c=n.n(o),u=n(70895),i=function(e,t){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var o,i,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:s.mA}),o={headers:{"Content-Type":"application/json"}},n.next=5,c().post("".concat(u._,"/user/login"),{email:e,password:t},o);case 5:i=n.sent,p=i.data,a({type:s.wW,payload:p}),localStorage.setItem("userInfo",JSON.stringify(p)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:s.P,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()},p=function(e,t,n,o,i){return function(){var p=(0,a.Z)((0,r.Z)().mark((function a(p,l){var f,d,h,m,y;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,p({type:s.wJ}),f=l(),d=f.userLogin.userInfo,h={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},r.next=6,c().put("".concat(u._,"/user/profile"),{name:e,email:t,password:n,role:o,phone:i},h);case 6:m=r.sent,y=m.data,p({type:s.ji,payload:y}),localStorage.setItem("userInfo",JSON.stringify(y)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),p({type:s.KG,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 15:case"end":return r.stop()}}),a,null,[[0,12]])})));return function(e,t){return p.apply(this,arguments)}}()},l=function(e,t,n,o,u){return function(){var i=(0,a.Z)((0,r.Z)().mark((function a(i,p){var l,f,d,h,m;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i({type:s.BU}),l=p(),f=l.userLogin.userInfo,d={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(f.token)}},r.next=6,c().put("user/update-profile",{_id:e,name:t,email:n,password:o,role:u},d);case 6:h=r.sent,m=h.data,i({type:s.j7,payload:m}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),i({type:s.gY,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),a,null,[[0,11]])})));return function(e,t){return i.apply(this,arguments)}}()},f=function(){return function(e){localStorage.removeItem("userInfo"),e({type:s.lK}),document.location.href="/login"}},d=function(e,t,n,o,i){return function(){var p=(0,a.Z)((0,r.Z)().mark((function a(p,l){var f,d,h,m,y;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,p({type:s.k1}),f=l(),d=f.userLogin.userInfo,h={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.token)}},r.next=6,c().post("".concat(u._,"/user"),{name:e,email:t,password:n,role:o,phone:i},h);case 6:m=r.sent,y=m.data,p({type:s.hk,payload:y}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),p({type:s.K_,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),a,null,[[0,11]])})));return function(e,t){return p.apply(this,arguments)}}()},h=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,o,i,p,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:s.Ev}),a=n(),o=a.userLogin.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(o.token)}},e.next=6,c().get("".concat(u._,"/user"),i);case 6:p=e.sent,l=p.data,t({type:s.lB,payload:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:s.Xy,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.response});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n,a){var o,i,p,l,f;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:s.SB}),o=a(),i=o.userLogin.userInfo,p={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i.token)}},t.next=6,c().delete("".concat(u._,"/user/").concat(e),p);case 6:l=t.sent,f=l.data,n({type:s.uZ,payload:f}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:s.Lx,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.response});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()}},70895:function(e,t,n){n.d(t,{_:function(){return r}});var r="https://ims-backend-app.herokuapp.com"},23024:function(e,t,n){n.r(t);var r=n(29439),a=n(72791),s=n(78983),o=n(59434),c=n(69807),u=n(79271),i=n(80184);t.default=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],p=t[1],l=(0,a.useState)(""),f=(0,r.Z)(l,2),d=f[0],h=f[1],m=(0,o.v9)((function(e){return e.userLogin})),y=m.loading,v=m.error,x=m.userInfo,g=(0,o.I0)(),j=(0,u.k6)();(0,a.useEffect)((function(){x&&j.push("/dashboard")}),[j,x]);var Z=function(e){e.preventDefault(),g((0,c.x4)(n,d))};return(0,i.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,i.jsx)(s.KB,{children:(0,i.jsx)(s.rb,{className:"justify-content-center",children:(0,i.jsxs)(s.b7,{md:6,children:[v&&(0,i.jsx)(s.Gc,{color:"danger",style:{textAlign:"center"},children:v}),(0,i.jsx)(s.xH,{className:"p-4",children:(0,i.jsx)(s.sl,{children:(0,i.jsxs)(s.lx,{onSubmit:Z,children:[(0,i.jsx)("h1",{children:"Login"}),(0,i.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,i.jsxs)(s.YR,{className:"mb-3",children:[(0,i.jsx)(s.wV,{children:(0,i.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})}),(0,i.jsx)(s.jO,{placeholder:"Username",autoComplete:"username",value:n,onChange:function(e){return p(e.target.value)}})]}),(0,i.jsxs)(s.YR,{className:"mb-4",children:[(0,i.jsx)(s.wV,{children:(0,i.jsx)("i",{className:"fa fa-lock","aria-hidden":"true"})}),(0,i.jsx)(s.jO,{type:"password",placeholder:"Password",autoComplete:"current-password",value:d,onChange:function(e){return h(e.target.value)}})]}),(0,i.jsx)(s.rb,{children:(0,i.jsx)(s.b7,{className:"text-center",children:(0,i.jsx)(s.u5,{color:"primary",className:"px-4",type:"submit",onClick:Z,children:y?(0,i.jsx)(s.LQ,{size:"sm",style:{color:"#fff"}}):"Login"})})})]})})})]})})})})}},30907:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},83878:function(e,t,n){function r(e){if(Array.isArray(e))return e}n.d(t,{Z:function(){return r}})},25267:function(e,t,n){function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},29439:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(83878);var a=n(40181),s=n(25267);function o(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,s=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(u){c=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return s}}(e,t)||(0,a.Z)(e,t)||(0,s.Z)()}},40181:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(30907);function a(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=3024.a45a6c77.chunk.js.map