"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8366],{50910:function(e,n,r){r(72791);var t=r(78983),a=r(80184);n.Z=function(e){return(0,a.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,a.jsx)("div",{className:"col-12  ",children:(0,a.jsx)(t.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,a.jsx)(t.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},28366:function(e,n,r){r.r(n);var t=r(74165),a=r(15861),s=r(29439),i=r(72791),l=r(74569),c=r.n(l),d=r(78983),o=r(50910),u=r(70895),m=r(80184);n.default=function(){var e=(0,i.useState)(!0),n=(0,s.Z)(e,2),r=n[0],l=n[1],x=(0,i.useState)(!1),f=(0,s.Z)(x,2),h=f[0],p=f[1],j=(0,i.useState)(!0),b=(0,s.Z)(j,2),v=(b[0],b[1],(0,i.useState)(null)),g=(0,s.Z)(v,2),y=g[0],w=g[1],N=(0,i.useState)(),Z=(0,s.Z)(N,2),k=(Z[0],Z[1],(0,i.useState)("")),C=(0,s.Z)(k,2),_=C[0],S=C[1],A=(0,i.useState)(null),I=(0,s.Z)(A,2),L=I[0],O=I[1],z=(0,i.useState)(),E=(0,s.Z)(z,2),M=E[0],Y=E[1];(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(u._,"/lab/allLab"));case 2:n=e.sent,r=n.data,Y(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[M]);var q=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_){e.next=11;break}return e.prev=1,e.next=4,c().put("".concat(u._,"/lab/updateLab"),{_id:y,softwares:_});case 4:n=e.sent,n.data&&p(!0),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("main",{className:"main-div",children:[(0,m.jsx)(o.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Lab "},{name:"All Labs"}]}),h&&(0,m.jsxs)("main",{className:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(d.Gc,{color:"success",style:{textAlign:"center"},children:"Lab updated"})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:function(){return p(!1)},children:(0,m.jsx)("i",{class:"far fa-times-circle"})})})]}),(0,m.jsx)("div",{children:(0,m.jsx)("h4",{className:"font-semibold",children:"All Labs"})}),(0,m.jsx)("div",{className:"flex flex-col",children:(0,m.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,m.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,m.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,m.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,m.jsx)("thead",{className:"bg-gray-50",children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),(0,m.jsx)("th",{scope:"col",className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Edit"})]})}),(0,m.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:M&&M.map((function(e){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsx)("div",{className:"ml-4",children:(0,m.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.name})})})}),(0,m.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:[(0,m.jsx)("button",{onClick:function(){return function(e){console.log(e),O(e.name),w(e._id),l(!1)}(e)},children:(0,m.jsx)("i",{class:"fa fa-pencil","aria-hidden":"true"})}),(0,m.jsx)("button",{style:{padding:"5px"},onClick:function(){return function(e){console.log(e)}(e._id)},children:(0,m.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})})]})]},e._id)}))})]})})})})}),(0,m.jsxs)(d.Tk,{alignment:"center",size:"lg",visible:!r,onClose:function(){return l(!0)},children:[(0,m.jsx)(d.p0,{children:(0,m.jsxs)(d.fl,{children:[" ",(0,m.jsxs)("div",{className:"flex items-center space-x-2 font-semibold text-gray-900 leading-8",children:[(0,m.jsx)("span",{clas:"text-green-500",children:(0,m.jsx)("svg",{className:"h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,m.jsx)("path",{d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),(0,m.jsx)("span",{className:"tracking-wide",children:"Update Lab"})]})]})}),(0,m.jsx)(d.sD,{children:r?"":(0,m.jsx)("div",{className:"bg-white p-1 shadow-sm rounded-sm mt-2",children:(0,m.jsxs)("div",{className:"text-gray-700",children:[(0,m.jsx)(d.rb,{className:"justify-content-center",children:(0,m.jsx)(d.b7,{md:12,className:"bg-white rounded-lg",children:(0,m.jsxs)(d.lx,{className:"row m-2 g-2",children:[(0,m.jsx)(d.b7,{md:6,children:(0,m.jsxs)(d.YR,{className:"mb-3",children:[(0,m.jsx)(d.wV,{children:(0,m.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})}),(0,m.jsx)(d.jO,{placeholder:"Name",autoComplete:"",value:L,onChange:function(e){return O(e.target.value)},required:!0,disabled:!0})]})}),(0,m.jsx)(d.b7,{md:6,className:"mb-4",children:(0,m.jsxs)(d.YR,{children:[(0,m.jsx)(d.wV,{children:(0,m.jsx)("i",{className:"fas fa-envelope-open"})}),(0,m.jsx)(d.jO,{type:"email",placeholder:"Name of software ",value:_,onChange:function(e){return S(e.target.value)},required:!0})]})})]})})}),(0,m.jsx)(d.b7,{md:3,xs:8,children:(0,m.jsx)(d.u5,{color:"primary",onClick:q,children:"Save changes"})})]})})}),(0,m.jsx)(d.Ym,{children:(0,m.jsx)(d.u5,{color:"danger",onClick:function(){return l(!0)},children:"Close"})})]})]})})}},30907:function(e,n,r){function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}r.d(n,{Z:function(){return t}})},83878:function(e,n,r){function t(e){if(Array.isArray(e))return e}r.d(n,{Z:function(){return t}})},25267:function(e,n,r){function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(n,{Z:function(){return t}})},29439:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(83878);var a=r(40181),s=r(25267);function i(e,n){return(0,t.Z)(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,s=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return s}}(e,n)||(0,a.Z)(e,n)||(0,s.Z)()}},40181:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(30907);function a(e,n){if(e){if("string"===typeof e)return(0,t.Z)(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,t.Z)(e,n):void 0}}}}]);
//# sourceMappingURL=8366.97554e95.chunk.js.map