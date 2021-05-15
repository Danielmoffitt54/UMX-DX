(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(67),i=n.n(r),s=n(11),l=n(12),u=n(27),o=n(14),d=n(13),p=n(8),h=n(2),j=n(0),b=function(e){return Object(j.jsxs)("header",{className:"App-Header",children:[Object(j.jsx)(p.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Oauth2?Object(j.jsxs)("div",{className:"Header-Navbar",children:[Object(j.jsx)(p.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Account"}),Object(j.jsx)(p.b,{to:"/",className:"Header-Link",onClick:function(){return e.SetAppState({Oauth2:null,Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Log Out"})]}):Object(j.jsxs)("div",{className:"Header-Navbar",children:[Object(j.jsx)(p.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Patient"}),Object(j.jsx)(p.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Provider"})]})]})},x=n(45),O=n(21),y=n.n(O),v={patient:function(e){y.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},provider:function(e){y.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},client:{}};v.client.ready=function(e){y.a.oauth2.ready().then((function(t){t.patient.request(e.Page,{pageLimit:0,flat:!0}).then((function(n){return e.SetAppState({Loading:!1,Type:"Patient",Oauth2:t,Cerner:n})})).catch((function(){return e.SetAppState({Loading:!1})}))})).catch((function(){return e.SetAppState({Loading:!1})}))},v.client.routeChange=function(e){var t=!1;e.Cerner.forEach((function(n){e.PrevScope.includes(n.resourceType)&&(t=!0)})),t&&v.client.request(e)},v.client.request=function(e){y.a.client(e.Oauth2.state).patient.request(e.Page,{pageLimit:0,flat:!0}).then((function(t){var n;return e.SetAppState((n={Cerner:t},Object(x.a)(n,e.State,e.Value),Object(x.a)(n,"DisplayIndex",0),n))})).catch(console.error)};var S=v,f=function(e){var t=[],n=[],a=[],c=["subject","issued","status","category","code","patient","clinicalStatus","verificationStatus","abatementDateTime","abatementBoolean","onsetDateTime","medicationCodeableConcept","dosage","wasNotTaken","substance","criticality","name","birthDate","gender","maritalStatus","active"];e.Cerner.map((function(e,t){Object.keys(e).map((function(e){switch(!0){case a.includes(e):return;case!isNaN(e):return a.push(e);case!c.includes(e):return;default:return a.push(e)}}))}));for(var r=0;r<e.Cerner.length;r++)r%e.DisplayCount===0&&n.push(n.length),r>=e.DisplayIndex&&r<e.DisplayIndex+e.DisplayCount&&t.push(e.Cerner[r]);return Object(j.jsxs)("div",{className:"Table",children:[Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:a.map((function(e,t){switch(e){case"wasNotTaken":return Object(j.jsx)("th",{children:"Taken"},t);default:return Object(j.jsx)("th",{children:e},t)}}))})}),Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsx)("tr",{children:a.map((function(t,n){if(!e[t])return Object(j.jsx)("td",{},n);var a="";switch(!0){case"birthDate"===t:case"issued"===t:return a=new Date(e[t]),Object(j.jsx)("td",{children:a.toDateString()},n);case"subject"===t:return e[t].reference?Object(j.jsx)("td",{children:e[t].reference.split("/")[1]},n):Object(j.jsx)("td",{},n);case"maritalStatus"===t:case"substance"===t:case"medicationCodeableConcept"===t:case"code"===t:case"category"===t:switch(!0){case"string"===typeof e[t]:return Object(j.jsx)("td",{children:e[t]},n);case"Patient"===e.resourceType&&void 0!==e[t]:case"AllergyIntolerance"===e.resourceType&&void 0!==e[t]:case"MedicationStatement"===e.resourceType&&void 0!==e[t]:case"Observation"===e.resourceType&&void 0!==e[t]:return Object(j.jsx)("td",{children:e[t].text},n);default:return Object(j.jsx)("td",{},n)}case"patient"===t:return e[t].display?Object(j.jsx)("td",{children:e[t].display},n):Object(j.jsx)("td",{},n);case"wasNotTaken"===t:return a=e[t]?"Not Taken":"Taken",Object(j.jsx)("td",{children:a},n);default:return"string"!==typeof e[t]?Object(j.jsx)("td",{children:"NonString"},n):Object(j.jsx)("td",{children:e[t]},n)}}))},t)}))})]}),n.length>1?Object(j.jsx)("ul",{className:"Footer-Nav",children:n.map((function(t,n){return e.DisplayIndex===e.DisplayCount*t?Object(j.jsx)("li",{className:"Footer-Nav-Link Footer-Nav-Link-Active",onClick:function(){return e.SetAppState({DisplayIndex:e.DisplayCount*t})},children:t+1},n):Object(j.jsx)("li",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({DisplayIndex:e.DisplayCount*t})},children:t+1},n)}))}):null]})},A=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.Type,n=e.Oauth2,a=e.Cerner,c=e.AccountArray,r=e.MainArray,i=e.MainIndex,s=e.SetAppState;a&&S.client.routeChange({PrevScope:c,Type:t,Oauth2:n,Cerner:a,SetAppState:s,Page:r[i],State:"MainIndex",Value:i})}},{key:"render",value:function(){var e=this.props,t=e.Type,n=e.Oauth2,a=e.Cerner,c=e.MainArray,r=e.MainIndex,i=e.DisplayCount,s=e.DisplayIndex,l=e.SetAppState;return n?a?Object(j.jsxs)("div",{className:"App-Main",children:[Object(j.jsxs)("ul",{className:"Subheader-Nav",children:[c.map((function(e,a){return r===a?Object(j.jsx)("li",{className:"Subheader-Nav-Link Subheader-Nav-Link-Active",onClick:function(){return S.client.request({Type:t,Oauth2:n,SetAppState:l,Page:e,State:"MainIndex",Value:a})},children:e},a):Object(j.jsx)("li",{className:"Subheader-Nav-Link",onClick:function(){return S.client.request({Type:t,Oauth2:n,SetAppState:l,Page:e,State:"MainIndex",Value:a})},children:e},a)})),Object(j.jsx)("li",{className:"Subheader-Nav-Link",children:Object(j.jsxs)("label",{className:"Subheader-Count",children:["Count:",Object(j.jsxs)("select",{value:i,onChange:function(e){return l({DisplayCount:e.target.value,DisplayIndex:0})},children:[Object(j.jsx)("option",{value:25,children:"25"}),Object(j.jsx)("option",{value:50,children:"50"}),Object(j.jsx)("option",{value:100,children:"100"})]})]})})]}),Object(j.jsx)(f,{Cerner:a,DisplayCount:i,DisplayIndex:s,SetAppState:l})]}):Object(j.jsx)("div",{className:"App-Main",children:Object(j.jsx)("h1",{children:"Please wait..."})}):Object(j.jsx)("div",{className:"App-Main",children:Object(j.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(c.a.Component),m=Object(h.f)((function(){return S.patient(),Object(j.jsx)("div",{className:"App-Launch",children:Object(j.jsx)("h1",{children:"Please wait..."})})})),C=Object(h.f)((function(){return S.provider(),Object(j.jsx)("div",{className:"App-Launch",children:Object(j.jsx)("h1",{children:"Please wait..."})})})),N=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.Type,n=e.Oauth2,a=e.Cerner,c=e.MainArray,r=e.AccountArray,i=e.AccountIndex,s=e.SetAppState;a&&S.client.routeChange({PrevScope:c,Type:t,Oauth2:n,Cerner:a,SetAppState:s,Page:r[i],State:"AccountIndex",Value:i})}},{key:"render",value:function(){var e=this.props,t=e.Type,n=e.Oauth2,a=e.Cerner,c=e.AccountArray,r=e.AccountIndex,i=e.DisplayCount,s=e.DisplayIndex,l=e.SetAppState;return Object(j.jsxs)("div",{className:"App-Account",children:[Object(j.jsxs)("ul",{className:"Subheader-Nav",children:[c.map((function(e,a){return r===a?Object(j.jsx)("li",{className:"Subheader-Nav-Link Subheader-Nav-Link-Active",onClick:function(){return S.client.request({Type:t,Oauth2:n,SetAppState:l,Page:e,State:"AccountIndex",Value:a})},children:e},a):Object(j.jsx)("li",{className:"Subheader-Nav-Link",onClick:function(){return S.client.request({Type:t,Oauth2:n,SetAppState:l,Page:e,State:"AccountIndex",Value:a})},children:e},a)})),Object(j.jsx)("li",{className:"Subheader-Nav-Link",children:Object(j.jsxs)("label",{className:"Subheader-Count",children:["Count:",Object(j.jsxs)("select",{value:i,onChange:function(e){return l({DisplayCount:e.target.value,DisplayIndex:0})},children:[Object(j.jsx)("option",{value:25,children:"25"}),Object(j.jsx)("option",{value:50,children:"50"}),Object(j.jsx)("option",{value:100,children:"100"})]})]})})]}),Object(j.jsx)(f,{Cerner:a,DisplayCount:i,DisplayIndex:s,SetAppState:l})]})}}]),n}(c.a.Component),g=(n(132),function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Type:null,Oauth2:null,Cerner:null,MainArray:["Observation","Condition","MedicationStatement","AllergyIntolerance"],MainIndex:0,AccountArray:["Patient","Person","RelatedPerson","CarePlan"],AccountIndex:0,DisplayCount:25,DisplayIndex:0},a.setAppState=a.setAppState.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.state,t=e.Cerner,n=e.MainArray,a=e.MainIndex;t||(S.client.ready({Page:n[a],SetAppState:this.setAppState}),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Type,a=e.Oauth2,c=e.Cerner,r=e.MainArray,i=e.MainIndex,s=e.AccountArray,l=e.AccountIndex,u=e.DisplayCount,o=e.DisplayIndex;return c&&console.log("Cerner:",c),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(p.a,{basename:"/UMX-DX",children:[t?null:Object(j.jsx)(b,{Oauth2:a,SetAppState:this.setAppState}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",children:t?Object(j.jsx)("div",{className:"App-Main",children:Object(j.jsx)("h1",{children:"Please wait..."})}):Object(j.jsx)(A,{Type:n,Oauth2:a,Cerner:c,AccountArray:s,MainArray:r,MainIndex:i,DisplayCount:u,DisplayIndex:o,SetAppState:this.setAppState})}),Object(j.jsx)(h.a,{path:"/account",children:Object(j.jsx)(N,{Type:n,Oauth2:a,Cerner:c,MainArray:r,AccountArray:s,AccountIndex:l,DisplayCount:u,DisplayIndex:o,SetAppState:this.setAppState})}),Object(j.jsx)(h.a,{path:"/launch-patient",children:Object(j.jsx)(m,{})}),Object(j.jsx)(h.a,{path:"/launch-provider",children:Object(j.jsx)(C,{})})]})]})})}}]),n}(c.a.Component)),D=(n(133),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))});i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),D()}},[[134,1,2]]]);
//# sourceMappingURL=main.1b3567d3.chunk.js.map