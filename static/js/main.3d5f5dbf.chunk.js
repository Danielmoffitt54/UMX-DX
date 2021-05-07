(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(67),i=n.n(c),s=n(11),o=n(12),u=n(27),l=n(14),d=n(13),h=n(8),j=n(2),p=n(0),b=function(e){return Object(p.jsxs)("header",{className:"App-Header",children:[Object(p.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Oauth2?Object(p.jsx)("div",{className:"Header-Navbar",children:Object(p.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Account"})}):Object(p.jsxs)("div",{className:"Header-Navbar",children:[Object(p.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Patient"}),Object(p.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Provider"})]})]})},x=n(45),O=n(15),f=n.n(O),v={patient:{}};v.patient.launch=function(e){f.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},v.patient.ready=function(e,t){f.a.oauth2.ready().then((function(n){n.patient.request(t).then((function(t){return e({Loading:!1,Oauth2:n,Cerner:t})})).catch((function(){return e({Loading:!1})}))})).catch((function(){return e({Loading:!1})}))},v.provider={},v.provider.launch=function(e){f.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},v.provider.ready=function(e){f.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(){return e({Loading:!1})}))},v.client={},v.client.request=function(e,t,n){f.a.client(e.state).patient.request(n.Page).then((function(e){var a;return t((a={Cerner:e},Object(x.a)(a,n.State,n.Value),Object(x.a)(a,"DisplayIndex",0),a))})).catch(console.error)};var y=v,m=function(e){var t=[],n=[],a=[],r=["subject","issued","status","category","code","patient","clinicalStatus","verificationStatus","abatementDateTime","abatementBoolean","onsetDateTime","medicationCodeableConcept","dosage","wasNotTaken","substance","criticality","name","birthDate","gender","maritalStatus","active"];e.Cerner.entry.map((function(n,c){if(Object.keys(n.resource).map((function(e){switch(!0){case a.includes(e):return;case!isNaN(e):return a.push(e);case!r.includes(e):return;default:return a.push(e)}})),!(c<e.DisplayIndex||c>e.DisplayIndex+e.DisplayCount))return t.push(n)}));for(var c=0;c<e.Cerner.entry.length;c++)c%e.DisplayCount===0&&n.push(n.length);return console.log("Pages:",n),console.log("DisplayCount:",e.DisplayCount),console.log("DisplayIndex:",e.DisplayIndex),Object(p.jsxs)("div",{className:"Table",children:[Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsx)("tr",{children:a.map((function(e,t){switch(e){case"wasNotTaken":return Object(p.jsx)("th",{children:"Taken"},t);default:return Object(p.jsx)("th",{children:e},t)}}))})}),Object(p.jsx)("tbody",{children:t.map((function(e,t){return Object(p.jsx)("tr",{children:a.map((function(t,n){var a="";switch(!0){case"name"===t:switch(e.resource.resourceType){case"RelatedPerson":return Object(p.jsx)("td",{children:e.resource[t].text},n);default:return e.resource[t].forEach((function(e){"official"===e.use&&(a=e.text)})),Object(p.jsx)("td",{children:a},n)}case"dosage"===t:return e.resource[t].forEach((function(n,r){switch(!0){case r===e.resource[t].length-1:a+=n.text;break;default:a+=n.text+"/n"}})),Object(p.jsx)("td",{children:a},n);case"birthDate"===t:case"issued"===t:return a=new Date(e.resource[t]),Object(p.jsx)("td",{children:a.toDateString()},n);case"subject"===t:return e.resource[t].reference?Object(p.jsx)("td",{children:e.resource[t].reference.split("/")[1]},n):Object(p.jsx)("td",{},n);case"maritalStatus"===t:case"substance"===t:case"medicationCodeableConcept"===t:case"code"===t:case"category"===t:switch(!0){case"string"===typeof e.resource[t]:return Object(p.jsx)("td",{children:e.resource[t]},n);case"Patient"===e.resource.resourceType&&void 0!==e.resource[t]:case"AllergyIntolerance"===e.resource.resourceType&&void 0!==e.resource[t]:case"MedicationStatement"===e.resource.resourceType&&void 0!==e.resource[t]:case"Observation"===e.resource.resourceType&&void 0!==e.resource[t]:return Object(p.jsx)("td",{children:e.resource[t].text},n);default:return Object(p.jsx)("td",{},n)}case"patient"===t:return e.resource[t].display?Object(p.jsx)("td",{children:e.resource[t].display},n):Object(p.jsx)("td",{},n);case"wasNotTaken"===t:return a=e.resource[t]?"Not Taken":"Taken",Object(p.jsx)("td",{children:a},n);default:return"string"!==typeof e.resource[t]?Object(p.jsx)("td",{children:"NonString"},n):Object(p.jsx)("td",{children:e.resource[t]},n)}}))},t)}))})]}),n.length>1?Object(p.jsx)("ul",{className:"Footer-Nav",children:n.map((function(t,n){return e.DisplayIndex===n?Object(p.jsx)("li",{className:"Footer-Nav-Link Footer-Nav-Link-Active",onClick:function(){return e.SetAppState({DisplayIndex:e.DisplayCount*t})},children:t+1},n):Object(p.jsx)("li",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({DisplayIndex:e.DisplayCount*t})},children:t+1},n)}))}):null]})},C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.MainArray,r=e.MainIndex,c=e.DisplayCount,i=e.DisplayIndex,s=e.SetAppState;return n?Object(p.jsxs)("div",{className:"App-Main",children:[Object(p.jsxs)("ul",{className:"Subheader-Nav",children:[a.map((function(e,n){return r===n?Object(p.jsx)("li",{className:"Subheader-Nav-Link Subheader-Nav-Link-Active",onClick:function(){return y.client.request(t,s,{Page:e,State:"MainIndex",Value:n})},children:e},n):Object(p.jsx)("li",{className:"Subheader-Nav-Link",onClick:function(){return y.client.request(t,s,{Page:e,State:"MainIndex",Value:n})},children:e},n)})),Object(p.jsx)("li",{className:"Subheader-Nav-Link",children:Object(p.jsxs)("label",{className:"Subheader-Count",children:["Count:",Object(p.jsxs)("select",{value:c,onChange:function(e){return s({DisplayCount:e.target.value})},children:[Object(p.jsx)("option",{value:25,children:"25"}),Object(p.jsx)("option",{value:50,children:"50"}),Object(p.jsx)("option",{value:100,children:"100"})]})]})})]}),Object(p.jsx)(m,{Cerner:n,DisplayCount:c,DisplayIndex:i,SetAppState:s})]}):Object(p.jsx)("div",{className:"App-Main",children:Object(p.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(r.a.Component),A=Object(j.f)((function(){return y.patient.launch(),Object(p.jsx)("div",{className:"App-Launch",children:Object(p.jsx)("h1",{children:"Please wait..."})})})),N=Object(j.f)((function(){return y.provider.launch(),Object(p.jsx)("div",{className:"App-Launch",children:Object(p.jsx)("h1",{children:"Please wait..."})})})),S=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.AccountArray,r=e.AccountIndex,c=e.DisplayCount,i=e.DisplayIndex,s=e.SetAppState;return Object(p.jsxs)("div",{className:"App-Account",children:[Object(p.jsxs)("ul",{className:"Subheader-Nav",children:[a.map((function(e,n){return r===n?Object(p.jsx)("li",{className:"Subheader-Nav-Link Subheader-Nav-Link-Active",onClick:function(){return y.client.request(t,s,{Page:e,State:"AccountIndex",Value:n})},children:e},n):Object(p.jsx)("li",{className:"Subheader-Nav-Link",onClick:function(){return y.client.request(t,s,{Page:e,State:"AccountIndex",Value:n})},children:e},n)})),Object(p.jsx)("li",{className:"Subheader-Nav-Link",children:Object(p.jsxs)("label",{className:"Subheader-Count",children:["Count:",Object(p.jsxs)("select",{value:c,onChange:function(e){return s({DisplayCount:e.target.value})},children:[Object(p.jsx)("option",{value:25,children:"25"}),Object(p.jsx)("option",{value:50,children:"50"}),Object(p.jsx)("option",{value:100,children:"100"})]})]})})]}),Object(p.jsx)(m,{Cerner:n,DisplayCount:c,DisplayIndex:i,SetAppState:s})]})}}]),n}(r.a.Component),g=(n(132),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Oauth2:null,Cerner:null,MainArray:["Observation","Condition","MedicationStatement","AllergyIntolerance"],MainIndex:0,AccountArray:["Patient","Person","RelatedPerson","CarePlan"],AccountIndex:0,DisplayCount:25,DisplayIndex:0},a.setAppState=a.setAppState.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.state,t=e.Cerner,n=e.MainArray,a=e.MainIndex;t||(y.patient.ready(this.setAppState,n[a]),y.provider.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Oauth2,a=e.Cerner,r=e.MainArray,c=e.MainIndex,i=e.AccountArray,s=e.AccountIndex,o=e.DisplayCount,u=e.DisplayIndex;return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(h.a,{basename:"/UMX-DX",children:[t?null:Object(p.jsx)(b,{Oauth2:n}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",children:t?Object(p.jsx)("div",{className:"App-Main",children:Object(p.jsx)("h1",{children:"Please wait..."})}):Object(p.jsx)(C,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:o,DisplayIndex:u,SetAppState:this.setAppState})}),Object(p.jsx)(j.a,{path:"/account",children:Object(p.jsx)(S,{Oauth2:n,Cerner:a,AccountArray:i,AccountIndex:s,DisplayCount:o,DisplayIndex:u,SetAppState:this.setAppState})}),Object(p.jsx)(j.a,{path:"/launch-patient",children:Object(p.jsx)(A,{})}),Object(p.jsx)(j.a,{path:"/launch-provider",children:Object(p.jsx)(N,{})})]})]})})}}]),n}(r.a.Component)),D=(n(133),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),D()}},[[134,1,2]]]);
//# sourceMappingURL=main.3d5f5dbf.chunk.js.map