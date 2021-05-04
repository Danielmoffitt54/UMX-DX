(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(66),s=a.n(r),i=a(8),o=a(9),l=a(14),d=a(11),u=a(10),j=a(2),h=a(15),b=a(0),p=function(e){return Object(b.jsxs)("header",{className:"App-Header",children:[Object(b.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Selected",children:e.Cerner.entry[0].resource.name[0].text})}):Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"})})]})},O=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n.setMainState=n.setMainState.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props.Cerner;return Object(b.jsx)("div",{className:"App-Main",children:e?Object(b.jsx)("h1",{children:"Authorized"}):Object(b.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),a}(c.a.Component),f=Object(j.f)(O),m=a(22),x=a.n(m),v={patient:{}};v.patient.launch=function(e){x.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"patient/Patient.read patient/Observation.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},v.patient.ready=function(e){x.a.oauth2.ready().then((function(e){return e.request("Patient")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))},v.provider={},v.provider.launch=function(e){x.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},v.provider.ready=function(e){x.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))};var g=v,y=Object(j.f)((function(){return g.patient.launch(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.Data,t=[];return e.map((function(e){console.log(e),Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case t.includes(e):return;default:return t.push(e)}}))})),Object(b.jsx)("table",{className:"MiniTable",children:Object(b.jsx)("tbody",{className:"MiniTable-Body",children:e.map((function(e,a){return Object(b.jsx)("tr",{className:"MiniTable-Body-Row",children:t.map((function(t,a){switch(!0){case"relationship"===t:return Object(b.jsx)("td",{children:e[t][0].text},a);case"name"===t:case"address"===t:return Object(b.jsx)("td",{children:e[t].text},a);case"string"===typeof e[t]:return Object(b.jsx)("td",{children:e[t]},a);default:return}}))},a)}))})})}}]),a}(c.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.Title,n=t.Data,c=[];return n.map((function(e){Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case c.includes(e):return;default:return c.push(e)}}))})),Object(b.jsxs)("table",{className:"Table",children:[Object(b.jsxs)("thead",{className:"Table-Head",children:[a?Object(b.jsx)("tr",{children:Object(b.jsx)("th",{className:"Table-Title",children:this.FormatTitle(a)})}):null,Object(b.jsx)("tr",{className:"Table-Head-Row",children:c.map((function(t,a){switch(!0){case"display"===t:return Object(b.jsx)("th",{className:"Table-Head-Data"},a);case!isNaN(t):return Object(b.jsx)("th",{className:"Table-Head-Data",children:"".concat(parseInt(t)+1,".)")},a);default:return Object(b.jsx)("th",{className:"Table-Head-Data",children:e.FormatTitle(t)},a)}}))})]}),Object(b.jsx)("tbody",{className:"Table-Body",children:n.map((function(e,t){return Object(b.jsx)("tr",{className:"Table-Body-Row",children:c.map((function(a,n){switch(!0){case"display"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:"".concat(t+1,".) ").concat(e[a])},n);case"relationship"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a][0].text},n);case"name"===a:case"address"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a].text},n);case"string"===typeof e[a]:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a]},n);case"object"===typeof e[a]:return Object(b.jsx)("td",{className:"Table-Body-Data",children:Object(b.jsx)(N,{Data:e[a]})},n);default:return}}))},t)}))})]})}}]),a}(c.a.Component),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.Cerner.entry[0],t=[{account:e.resource.resourceType,gender:e.resource.gender,birthDate:e.resource.birthDate,address:e.resource.address[0].text,language:e.resource.communication[0].language.coding[0].display,maritalStatus:e.resource.maritalStatus.text}];return Object(b.jsxs)("div",{className:"App-Account",children:[e.resource.address.length>0?Object(b.jsx)(C,{Title:"Personal",Data:t}):null,e.resource.careProvider.length>0?Object(b.jsx)(C,{Title:"Care Provider",Data:e.resource.careProvider}):null,e.resource.telecom.length>0?Object(b.jsx)(C,{Title:"Communication",Data:e.resource.telecom}):null,e.resource.contact.length>0?Object(b.jsx)(C,{Title:"Contact",Data:e.resource.contact}):null]})}}]),a}(c.a.Component);a(131);function A(e){return Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:e.Loading?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsx)(f,{Cerner:e.Cerner,SetAppState:e.SetAppState})}),Object(b.jsx)(j.a,{path:"/launch-patient",children:Object(b.jsx)(y,{})}),Object(b.jsx)(j.a,{path:"/account",children:Object(b.jsx)(T,{Cerner:e.Cerner})})]})}var D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={Loading:!1,Cerner:null},n.setAppState=n.setAppState.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.state.Cerner||(g.patient.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,a=e.Cerner;return a&&console.log("Cerner:",a),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{basename:"/UMX-DX",children:[t?Object(b.jsx)("header",{className:"App-Header"}):Object(b.jsx)(p,{Cerner:a}),Object(b.jsx)(A,{Loading:t,Cerner:a,SetAppState:this.setAppState})]})})}}]),a}(c.a.Component),S=(a(132),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))});s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),S()}},[[133,1,2]]]);
//# sourceMappingURL=main.e29d4bf8.chunk.js.map