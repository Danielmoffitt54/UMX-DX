(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(66),r=n.n(i),s=n(24),o=n(25),d=n(10),h=n(27),u=n(26),l=n(68),p=n(2),b=n(11),j=n(1),f=function(e){return Object(j.jsxs)("header",{className:"App-Header",children:[Object(j.jsx)(b.b,{to:"/",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"UMX-DX App"}),e.LoggedIn?Object(j.jsx)("div",{className:"Header-Navbar",children:Object(j.jsx)(b.b,{to:"/patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"})}):Object(j.jsx)("div",{className:"Header-Navbar",children:Object(j.jsx)(b.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"})})]})},O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.setMainState=a.setMainState.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props,t=e.LoggedIn,n=e.Authorized;return Object(j.jsx)("div",{className:"App-Main",children:t?n?Object(j.jsx)("h1",{children:"Authorized"}):Object(j.jsx)("h1",{children:"Unauthorized"}):Object(j.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(c.a.Component),g=Object(p.g)(O),v=n(18),x=n.n(v),m={patient:{}};m.patient.launch=function(e){x.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"patient/Patient.read patient/Observation.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},m.patient.ready=function(e){return x.a.oauth2.ready().then((function(e){return e.request("Patient")})).then((function(e){return e})).catch(console.error)},m.provider={},m.provider.launch=function(e){x.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},m.provider.ready=function(e){x.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(e){return e})).catch(console.error)};var S=m,A=Object(p.g)((function(){return S.patient.launch(),Object(j.jsx)("div",{className:"App-Launch",children:Object(j.jsx)("h1",{children:"Please wait..."})})}));n(132);function L(e){var t=!1,n=!1,a=Object(l.a)(new URLSearchParams(Object(p.f)().search).entries());return console.log(a),a.forEach((function(e){"code"===e[1]?t=!0:"state"===e[1]&&(n=!0)})),t&&n&&e.setAppState({LoggedIn:!0}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/",children:Object(j.jsx)(g,{LoggedIn:e.LoggedIn,Authorized:e.Authorized,SetAppState:e.SetAppState})}),Object(j.jsx)(p.a,{path:"/launch-patient",children:Object(j.jsx)(A,{})})]})}var N=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={LoggedIn:!1,Authorized:!1,Patient:{}},a.setAppState=a.setAppState.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.LoggedIn,a=t.Authorized;return S.patient.ready().then((function(t){console.log(t),e.setState({Patient:t})})),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(b.a,{basename:"/UMX-DX",children:[Object(j.jsx)(f,{LoggedIn:n}),Object(j.jsx)(L,{LoggedIn:n,Authorized:a,SetAppState:this.setAppState})]})})}}]),n}(c.a.Component),P=(n(133),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))});r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),P()}},[[134,1,2]]]);
//# sourceMappingURL=main.73f7441d.chunk.js.map