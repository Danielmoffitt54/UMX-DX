(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(66),i=n.n(a),s=n(8),o=n(9),l=n(14),u=n(11),d=n(10),j=n(2),h=n(15),b=n(0),p=function(e){return Object(b.jsxs)("header",{className:"App-Header",children:[Object(b.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Account"})}):Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"})})]})},O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={},r.setMainState=r.setMainState.bind(Object(l.a)(r)),r}return Object(o.a)(n,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props.Cerner;return Object(b.jsx)("div",{className:"App-Main",children:e?Object(b.jsx)("h1",{children:"Authorized"}):Object(b.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(c.a.Component),f=Object(j.f)(O),x=n(22),v=n.n(x),m={patient:{}};m.patient.launch=function(e){v.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"patient/Patient.read patient/Observation.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},m.patient.ready=function(e){v.a.oauth2.ready().then((function(e){return e.request("Patient")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))},m.provider={},m.provider.launch=function(e){v.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},m.provider.ready=function(e){v.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))};var g=m,y=Object(j.f)((function(){return g.patient.launch(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),A=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).FormatTitle=function(e){e.charAt(0).toUpperCase(),e.slice(1);return e.replace(/([A-Z])/g," $1").trim()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,r=t.Title,c=t.Array,a=[];return c.map((function(e){Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"interger"===typeof e:case a.includes(e):return;default:return a.push(e)}}))})),Object(b.jsxs)("table",{children:[Object(b.jsxs)("thead",{children:[r?Object(b.jsx)("tr",{children:Object(b.jsx)("th",{children:this.FormatTitle(r)})}):null,Object(b.jsx)("tr",{children:a.map((function(t,n){return isNaN(t)?Object(b.jsx)("th",{children:e.FormatTitle(t)},n):Object(b.jsx)("th",{children:"".concat(parseInt(t)+1,".)")},n)}))})]}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsx)("tr",{children:a.map((function(t,r){switch(!0){case"relationship"===t:return Object(b.jsx)("td",{children:e[t][0].text},r);case"name"===t:return Object(b.jsx)("td",{children:e[t].text},r);case"string"===typeof e[t]:return Object(b.jsx)("td",{children:e[t]},r);case"array"===typeof e[t]:return Object(b.jsx)("td",{children:Object(b.jsx)(n,{Array:e[t]})},r);case"object"===typeof e[t]:return Object(b.jsx)("td",{children:Object(b.jsx)(n,{Array:[e[t]]})},r);default:return}}))},t)}))})]})}}]),n}(c.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.Cerner.entry[0];return Object(b.jsxs)("div",{className:"App-Account",children:[Object(b.jsxs)("h1",{children:["You are logged in as ",e.resource.name[0].text,"."]}),e.resource.telecom.length>0?Object(b.jsx)(A,{Title:"Communication",Array:e.resource.telecom}):null,e.resource.careProvider.length>0?Object(b.jsx)(A,{Title:"Care Provider",Array:e.resource.careProvider}):null,e.resource.contact.length>0?Object(b.jsx)(A,{Title:"Contact",Array:e.resource.contact}):null]})}}]),n}(c.a.Component);n(131);function S(e){return Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:e.Loading?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsx)(f,{Cerner:e.Cerner,SetAppState:e.SetAppState})}),Object(b.jsx)(j.a,{path:"/launch-patient",children:Object(b.jsx)(y,{})}),Object(b.jsx)(j.a,{path:"/account",children:Object(b.jsx)(C,{Cerner:e.Cerner})})]})}var L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={Loading:!1,Cerner:null},r.setAppState=r.setAppState.bind(Object(l.a)(r)),r}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.state.Cerner||(g.patient.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Cerner;return n&&console.log("Cerner:",n),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{basename:"/UMX-DX",children:[t?Object(b.jsx)("header",{className:"App-Header"}):Object(b.jsx)(p,{Cerner:n}),Object(b.jsx)(S,{Loading:t,Cerner:n,SetAppState:this.setAppState})]})})}}]),n}(c.a.Component),N=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))});i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),N()}},[[133,1,2]]]);
//# sourceMappingURL=main.9f880581.chunk.js.map