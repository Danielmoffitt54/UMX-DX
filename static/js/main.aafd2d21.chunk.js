(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(66),i=n.n(c),s=n(11),o=n(12),d=n(13),u=n(15),p=n(14),l=n(2),h=n(8),j=n(1),b=function(e){return Object(j.jsxs)("header",{className:"App-Header",children:[Object(j.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(j.jsx)("div",{className:"Header-Navbar",children:Object(j.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Selected",children:e.Cerner.entry[0].resource.name[0].text})}):Object(j.jsxs)("div",{className:"Header-Navbar",children:[Object(j.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"}),Object(j.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Provider"})]})]})},f=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.setMainState=a.setMainState.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props.Cerner;return Object(j.jsx)("div",{className:"App-Main",children:e?Object(j.jsx)("h1",{children:"Authorized"}):Object(j.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(r.a.Component),O=Object(l.f)(f),m=n(22),v=n.n(m),x={};function S(){return new Promise((function(e){document.getElementById("Patient-Popup").classList.add(),document.getElementById("Patient-PopupFrame").src="about:blank",setTimeout((function(){return e("Patient-PopupFrame")}),1e3)}))}x.patient={},x.patient.launch=function(e){e({Type:"patient"}),v.a.oauth2.authorize({target:S,client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/AllergyIntolerance.read user/CarePlan.read user/Condition.read user/MedicationStatement.read user/Observation.read user/Patient.read user/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},x.patient.ready=function(e){v.a.oauth2.ready().then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){e({Loading:!1}),console.log(t)}))},x.provider={},x.provider.launch=function(e){e({Type:"provider"}),v.a.oauth2.authorize({target:"popup",client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},x.provider.ready=function(e){v.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))};var g=x,C=function(e){return g.patient.launch(e.SetAppState),Object(j.jsxs)("div",{id:"Patient-Popup",children:[Object(j.jsx)("header",{children:"Patient Login"}),Object(j.jsx)("iframe",{id:"Patient-PopupFrame",name:"Patient-PopupFrame",src:""})]})},P=function(e){return g.provider.launch(e.SetAppState),Object(j.jsx)("div",{className:"App-Launch",children:Object(j.jsx)("h1",{children:"Please wait..."})})},A=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){this.props.Cerner;return Object(j.jsx)("div",{className:"App-Account"})}}]),n}(r.a.Component);n(131);function y(e){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:e.Loading?Object(j.jsx)("div",{className:"App-Main",children:Object(j.jsx)("h1",{children:"Please wait..."})}):Object(j.jsx)(O,{Cerner:e.Cerner,SetAppState:e.SetAppState})}),Object(j.jsx)(l.a,{path:"/launch-patient",children:Object(j.jsx)(C,{SetAppState:e.SetAppState})}),Object(j.jsx)(l.a,{path:"/launch-provider",children:Object(j.jsx)(P,{SetAppState:e.SetAppState})}),Object(j.jsx)(l.a,{path:"/account",children:Object(j.jsx)(A,{Cerner:e.Cerner})})]})}var L=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Type:null,Cerner:null},a.setAppState=a.setAppState.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.state.Type;null!==e&&(g[e].ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Cerner;return n&&console.log("Cerner:",n),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(h.a,{basename:"/UMX-DX",children:[t?Object(j.jsx)("header",{className:"App-Header"}):Object(j.jsx)(b,{Cerner:n}),Object(j.jsx)(y,{Loading:t,Cerner:n,SetAppState:this.setAppState})]})})}}]),n}(r.a.Component),N=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),N()}},[[133,1,2]]]);
//# sourceMappingURL=main.aafd2d21.chunk.js.map