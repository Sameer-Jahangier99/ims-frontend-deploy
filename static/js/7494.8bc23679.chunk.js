"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7494],{50910:function(e,n,r){r(72791);var t=r(78983),a=r(80184);n.Z=function(e){return(0,a.jsx)("div",{className:"row bg-white pt-2 pl-2 mb-4 ",style:{margin:"0px 1px"},children:(0,a.jsx)("div",{className:"col-12  ",children:(0,a.jsx)(t.fj,{className:"d-flex  align-items-center",style:{"--cui-breadcrumb-divider":"'>'"},children:e.breadCrumbsInfo&&e.breadCrumbsInfo.length&&e.breadCrumbsInfo.map((function(e){return(0,a.jsx)(t.Sd,{href:e.href?e.href:null,children:e.name})}))})})})}},37494:function(e,n,r){r.r(n);var t=r(74165),a=r(1413),s=r(15861),i=r(29439),l=r(72791),o=r(78983),c=r(59434),u=r(74569),d=r.n(u),f=r(70895),h=r(50910),m=r(80184);n.default=function(){var e=(0,l.useState)({title:"",type:"",lab:"",note:""}),n=(0,i.Z)(e,2),r=n[0],u=n[1],x=(0,l.useState)(!1),b=(0,i.Z)(x,2),j=b[0],p=b[1],g=(0,c.v9)((function(e){return e.userLogin})).userInfo,v=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n){var s,i,l,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),p(!0),s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(g.token)}},i=(0,a.Z)((0,a.Z)({},r),{},{user:g._id}),e.next=6,d().post("".concat(f._,"/request/add"),i,s);case 6:l=e.sent,(o=l.data).success&&(console.log("data======>",o),p(!1));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("main",{children:[(0,m.jsx)(h.Z,{breadCrumbsInfo:[{name:"Home",href:"/"},{name:"Request"},{name:"Add Request"}]}),(0,m.jsx)("div",{className:"bg-white p-3 shadow-sm rounded-sm mt-3",children:(0,m.jsx)(o.rb,{className:"justify-content-center",children:(0,m.jsx)(o.b7,{md:12,className:"bg-white rounded-lg",children:(0,m.jsxs)(o.lx,{className:"row mx-4 g-3",onSubmit:v,children:[(0,m.jsx)(o.b7,{md:12,children:(0,m.jsx)("p",{className:"text-gray-800 dark:text-gray-200 text-xl font-bold",children:"Add Request"})}),(0,m.jsx)(o.b7,{md:6,children:(0,m.jsxs)(o.YR,{className:"mb-3",children:[(0,m.jsx)(o.wV,{children:(0,m.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})}),(0,m.jsx)(o.jO,{placeholder:"Title",value:r.title,onChange:function(e){return u((0,a.Z)((0,a.Z)({},r),{},{title:e.target.value}))},required:!0})]})}),(0,m.jsx)(o.b7,{md:6,children:(0,m.jsxs)(o.YR,{className:"mb-4",children:[(0,m.jsx)(o.wV,{children:(0,m.jsx)("i",{className:"fas fa-user-tag"})}),(0,m.jsxs)(o.LX,{"aria-label":"Default select example",onChange:function(e){return u((0,a.Z)((0,a.Z)({},r),{},{type:e.target.value}))},children:[(0,m.jsx)("option",{children:"Request Type"}),(0,m.jsx)("option",{value:"software",children:"software"}),(0,m.jsx)("option",{value:"hardware",children:"hardware"})]})]})}),(0,m.jsx)(o.b7,{md:12,children:(0,m.jsxs)(o.YR,{className:"mb-4",children:[(0,m.jsx)(o.wV,{children:(0,m.jsx)("i",{className:"fas fa-user-tag"})}),(0,m.jsxs)(o.LX,{"aria-label":"Default select example",onChange:function(e){return u((0,a.Z)((0,a.Z)({},r),{},{lab:e.target.value}))},children:[(0,m.jsx)("option",{children:"Select Lab"}),(0,m.jsx)("option",{value:"lab 1",children:"lab 1"}),(0,m.jsx)("option",{value:"lab 2",children:"lab 2"}),(0,m.jsx)("option",{value:"lab 3",children:"lab 3"}),(0,m.jsx)("option",{value:"lab 4",children:"lab 4"})]})]})}),(0,m.jsx)(o.b7,{xs:12,children:(0,m.jsxs)(o.YR,{className:"mb-4",children:[(0,m.jsx)(o.wV,{children:(0,m.jsx)("i",{className:"fas fa-user-tag"})}),(0,m.jsx)(o.PB,{id:"exampleFormControlTextarea1",value:r.note,onChange:function(e){return u((0,a.Z)((0,a.Z)({},r),{},{note:e.target.value}))},placeholder:"Enter detail of Request",rows:"5"})]})}),(0,m.jsx)(o.rb,{className:"flex items-center justify-start mb-3",children:(0,m.jsx)(o.b7,{md:3,xs:8,children:(0,m.jsx)("button",{type:"submit",className:"py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ",children:j?"Adding...":"Add Request"})})})]})})})})]})})}},30907:function(e,n,r){function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}r.d(n,{Z:function(){return t}})},83878:function(e,n,r){function t(e){if(Array.isArray(e))return e}r.d(n,{Z:function(){return t}})},25267:function(e,n,r){function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(n,{Z:function(){return t}})},29439:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(83878);var a=r(40181),s=r(25267);function i(e,n){return(0,t.Z)(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,s=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(s.push(t.value),!n||s.length!==n);i=!0);}catch(o){l=!0,a=o}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return s}}(e,n)||(0,a.Z)(e,n)||(0,s.Z)()}},40181:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(30907);function a(e,n){if(e){if("string"===typeof e)return(0,t.Z)(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,t.Z)(e,n):void 0}}}}]);
//# sourceMappingURL=7494.8bc23679.chunk.js.map