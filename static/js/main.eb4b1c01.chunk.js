(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(66),i=n.n(r),s=n(11),o=n(12),u=n(27),d=n(14),l=n(13),h=n(8),j=n(2),p=n(0),b=function(e){return Object(p.jsxs)("header",{className:"App-Header",children:[Object(p.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Oauth2?Object(p.jsx)("div",{className:"Header-Navbar",children:Object(p.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Account"})}):Object(p.jsxs)("div",{className:"Header-Navbar",children:[Object(p.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Patient"}),Object(p.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Provider"})]})]})},O=n(68),x=n(15),f=n.n(x),v={patient:{}};v.patient.launch=function(e){f.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},v.patient.ready=function(e,t){f.a.oauth2.ready().then((function(n){n.patient.request(t).then((function(t){return e({Loading:!1,Oauth2:n,Cerner:t})})).catch((function(){return e({Loading:!1})}))})).catch((function(){return e({Loading:!1})}))},v.provider={},v.provider.launch=function(e){f.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},v.provider.ready=function(e){f.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(){return e({Loading:!1})}))},v.client={},v.client.request=function(e,t,n){f.a.client(e.state).patient.request(n.Page).then((function(e){return t(Object(O.a)({Cerner:e},n.State,n.Value))})).catch(console.error)};var m=v,A=function(e){var t=[],n=["subject","issued","status","category","code","patient","clinicalStatus","verificationStatus","abatementDateTime","abatementBoolean","onsetDateTime","medicationCodeableConcept","dosage","wasNotTaken","substance","criticality","name","birthDate","gender","maritalStatus","active"];return e.Cerner.entry.map((function(e){return Object.keys(e.resource).map((function(e){switch(!0){case!isNaN(e):return t.push(e);case t.includes(e):case!n.includes(e):return;default:return t.push(e)}}))})),console.log("Keys:",t),Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:t.map((function(e,t){return Object(p.jsx)("th",{children:e},t)}))})}),Object(p.jsx)("tbody",{children:e.Cerner.entry.map((function(e,n){return console.log("entry.resource",e.resource),Object(p.jsx)("tr",{children:t.map((function(t,n){var a="",c=null;switch(!0){case"name"===t:return e.resource[t].forEach((function(e){"official"===e.use&&(a=e.text)})),Object(p.jsx)("td",{children:a},n);case"dosage"===t:return e.resource[t].forEach((function(n,c){switch(!0){case c===e.resource[t].length-1:a+=n.text;break;default:a+=n.text+"/n"}})),Object(p.jsx)("td",{children:a},n);case"birthDate"===t:case"issued"===t:return c=new Date(e.resource[t]),Object(p.jsx)("td",{children:c.toDateString()},n);case"subject"===t:return e.resource[t].reference?Object(p.jsx)("td",{children:e.resource[t].reference.split("/")[1]},n):Object(p.jsx)("td",{},n);case"maritalStatus"===t:case"substance"===t:case"medicationcodeableConcept"===t:case"code"===t:case"category"===t:switch(e.resource.resourceType){case"Observation":return Object(p.jsx)("td",{children:e.resource[t].text},n);default:return Object(p.jsx)("td",{},n)}case"patient"===t:return e.resource[t].display?Object(p.jsx)("td",{children:e.resource[t].display},n):Object(p.jsx)("td",{},n);case"active"===t:case"gender"===t:case"criticality"===t:case"wasNotTaken"===t:case"medicationcodeableConcept"===t:case"onsetDateTime"===t:case"abatementBoolean"===t:case"abatementDateTime"===t:case"verificationStatus"===t:case"clinicalStatus"===t:case"status"===t:return Object(p.jsx)("td",{children:e.resource[t]},n);default:return}}))},n)}))}),t.includes("0")?Object(p.jsx)("tfoot",{}):null]})},y=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.MainArray,c=e.MainIndex,r=e.SetAppState;return n?Object(p.jsxs)("div",{className:"App-Main",children:[Object(p.jsx)("ul",{className:"Main-Nav",children:a.map((function(e,n){return c===n?Object(p.jsx)("li",{className:"Main-Nav-Link Main-Nav-Link-Active",onClick:function(){return m.client.request(t,r,{Page:e,State:"MainIndex",Value:n})},children:e},n):Object(p.jsx)("li",{className:"Main-Nav-Link",onClick:function(){return m.client.request(t,r,{Page:e,State:"MainIndex",Value:n})},children:e},n)}))}),Object(p.jsx)(A,{Cerner:n})]}):Object(p.jsx)("div",{className:"App-Main",children:Object(p.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(c.a.Component),N=Object(j.f)((function(){return m.patient.launch(),Object(p.jsx)("div",{className:"App-Launch",children:Object(p.jsx)("h1",{children:"Please wait..."})})})),g=Object(j.f)((function(){return m.provider.launch(),Object(p.jsx)("div",{className:"App-Launch",children:Object(p.jsx)("h1",{children:"Please wait..."})})})),C=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.AccountArray,c=e.AccountIndex,r=e.SetAppState;return Object(p.jsxs)("div",{className:"App-Account",children:[Object(p.jsx)("ul",{className:"Account-Nav",children:a.map((function(e,n){return c===n?Object(p.jsx)("li",{className:"Account-Nav-Link Account-Nav-Link-Active",onClick:function(){return m.client.request(t,r,{Page:e,State:"AccountIndex",Value:n})},children:e},n):Object(p.jsx)("li",{className:"Account-Nav-Link",onClick:function(){return m.client.request(t,r,{Page:e,State:"AccountIndex",Value:n})},children:e},n)}))}),Object(p.jsx)(A,{Cerner:n})]})}}]),n}(c.a.Component),S=(n(132),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Oauth2:null,Cerner:null,AccountArray:["Patient","Person","RelatedPerson","CarePlan"],MainArray:["Observation","Condition","MedicationStatement","AllergyIntolerance"],AccountIndex:0,MainIndex:0},a.setAppState=a.setAppState.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.state,t=e.Cerner,n=e.MainArray,a=e.MainIndex;t||(m.patient.ready(this.setAppState,n[a]),m.provider.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Oauth2,a=e.Cerner,c=e.AccountArray,r=e.MainArray,i=e.AccountIndex,s=e.MainIndex;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(h.a,{basename:"/UMX-DX",children:[t?null:Object(p.jsx)(b,{Oauth2:n}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",children:t?Object(p.jsx)("div",{className:"App-Main",children:Object(p.jsx)("h1",{children:"Please wait..."})}):Object(p.jsx)(y,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:s,SetAppState:this.setAppState})}),Object(p.jsx)(j.a,{path:"/account",children:Object(p.jsx)(C,{Oauth2:n,Cerner:a,AccountArray:c,AccountIndex:i,SetAppState:this.setAppState})}),Object(p.jsx)(j.a,{path:"/launch-patient",children:Object(p.jsx)(N,{})}),Object(p.jsx)(j.a,{path:"/launch-provider",children:Object(p.jsx)(g,{})})]})]})})}}]),n}(c.a.Component)),k=(n(133),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))});i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),k()}},[[134,1,2]]]);
//# sourceMappingURL=main.eb4b1c01.chunk.js.map