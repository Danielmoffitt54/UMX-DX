(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(67),i=n.n(c),s=n(12),l=n(13),d=n(14),o=n(16),j=n(15),h=n(4),u=n(2),p=n(23),b=n(24),x=n.n(b),O=n(5),S=n(0),y={};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.find((function(e){return"official"===e.use}))||e[0];if(t)return t.given.join(" ")+" "+t.family}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=n,r=e.find((function(e){return e.system===t}));return r&&r.display&&(a=r.display),a}y.patient=function(e){x.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},y.provider=function(e){x.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},y.client={},y.client.ready=function(e){x.a.oauth2.ready().then((function(t){return e.SetAppState({Loading:!1,Oauth2:t})})).catch((function(){return e.SetAppState({Loading:!1})}))},y.client.routeChange=function(e){var t=!1;e.Cerner.forEach((function(n){e.PrevScope.includes(n.resourceType)&&(t=!0)})),t&&(e.SetAppState({Loading:!0}),y.client.request(e))},y.client.request=function(e){x.a.client(e.Oauth2.state).patient.request(e.Page,{pageLimit:0,flat:!0}).then((function(t){var n,a=[],r=!0;t.forEach((function(e){switch(!0){default:r=!0;break;case e.verificationStatus&&"entered-in-error"===e.verificationStatus:case e.code&&"Entered In Error"===e.code.text:r=!1}r&&a.push(e)})),e.SetAppState((n={Loading:!1,Cerner:a},Object(p.a)(n,e.State,e.Value),Object(p.a)(n,"DisplayIndex",0),n)),e.SetParentState&&e.SetParentState({CurrentPage:1})})).catch((function(t){var n;e.SetAppState((n={Loading:!1},Object(p.a)(n,e.State,e.Value),Object(p.a)(n,"DisplayIndex",0),n)),e.SetParentState&&e.SetParentState({CurrentPage:1})}))},y.thead={},y.thead.observation=function(){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Issued Date"}),Object(S.jsx)("th",{children:"Subject"}),Object(S.jsx)("th",{children:"Report"}),Object(S.jsx)("th",{children:"Category"}),Object(S.jsx)("th",{children:"Status"})]})},y.thead.condition=function(){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Patient"}),Object(S.jsx)("th",{children:"Category"}),Object(S.jsx)("th",{children:"Report"}),Object(S.jsx)("th",{children:"Initial Date"}),Object(S.jsx)("th",{children:"Verification Status"}),Object(S.jsx)("th",{children:"Clinical Status"}),Object(S.jsx)("th",{children:"Abatement Date"})]})},y.thead.medicationstatement=function(){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Patient"}),Object(S.jsx)("th",{children:"Medication"}),Object(S.jsx)("th",{children:"Dosage"}),Object(S.jsx)("th",{children:"Status"}),Object(S.jsx)("th",{children:"Taken"})]})},y.thead.allergyintolerance=function(){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Patient"}),Object(S.jsx)("th",{children:"Category"}),Object(S.jsx)("th",{children:"Substance"}),Object(S.jsx)("th",{children:"Criticality"}),Object(S.jsx)("th",{children:"Status"})]})},y.thead.patient=function(){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"ID"}),Object(S.jsx)("th",{children:"Name"}),Object(S.jsx)("th",{children:"Gender"}),Object(S.jsx)("th",{children:"Birth Date"}),Object(S.jsx)("th",{children:"Marital Status"})]})},y.thead.relatedperson=function(){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Patient"}),Object(S.jsx)("th",{children:"Person"}),Object(S.jsx)("th",{children:"Gender"}),Object(S.jsx)("th",{children:"Birth Date"})]})},y.tbody={},y.tbody.observation=function(e){var t=new Date(e.entry.issued);return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:t.toDateString()||"N/A"}),Object(S.jsx)("td",{children:e.entry.subject.reference.split("/")[1]||"N/A"}),Object(S.jsx)("td",{children:"N/A"}),Object(S.jsx)("td",{children:e.entry.category.text||"N/A"}),Object(S.jsx)("td",{children:e.entry.status||"N/A"})]},e.index)},y.tbody.condition=function(e){var t=new Date(e.entry.onsetDateTime),n=new Date(e.entry.onsetDateTime);return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(S.jsx)("td",{children:e.entry.category.text||"N/A"}),Object(S.jsx)("td",{children:e.entry.code.text||"N/A"}),Object(S.jsx)("td",{children:t.toDateString()||"N/A"}),Object(S.jsx)("td",{children:e.entry.verificationStatus||"N/A"}),Object(S.jsx)("td",{children:e.entry.clinicalStatus||"N/A"}),Object(S.jsx)("td",{children:n.toDateString()||"N/A"})]},e.index)},y.tbody.medicationstatement=function(e){var t=g(Object(O.getPath)(e.entry,"medicationCodeableConcept.coding")||Object(O.getPath)(e.entry,"medicationCodeableConcept.code.coding"),"http://www.nlm.nih.gov/research/umls/rxnorm","Unnamed Medication(TM)"),n=Object(O.getPath)(e.entry,"wasNotTaken")?"No":"Yes";return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(S.jsx)("td",{children:t||"N/A"}),Object(S.jsx)("td",{children:Object(O.getPath)(e.entry,"dosageInstruction.0.text")||"N/A"}),Object(S.jsx)("td",{children:e.entry.status||"N/A"}),Object(S.jsx)("td",{children:n||"N/A"})]},e.index)},y.tbody.allergyintolerance=function(e){var t=g(Object(O.getPath)(e.entry,"substance.coding")||Object(O.getPath)(e.entry,"substance.code.coding"),"http://snomed.info/sct",e.entry.substance.text||"Unnamed Allergy"),n="CRITH"===e.entry.criticality?"High Risk":"-";return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:Object(O.getPath)(e.entry,"patient.display")||"N/A"}),Object(S.jsx)("td",{children:Object(O.getPath)(e.entry,"category")||"N/A"}),Object(S.jsx)("td",{children:t||"N/A"}),Object(S.jsx)("td",{children:n||"N/A"}),Object(S.jsx)("td",{children:e.entry.status||"N/A"})]})},y.tbody.patient=function(e){var t=g(Object(O.getPath)(e.entry,"maritalStatus.coding")||Object(O.getPath)(e.entry,"maritalStatus.code.coding"),"http://hl7.org/fhir/v3/Marital",e.entry.maritalStatus.text||"Unavailable"),n=new Date(e.entry.birthDate);return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.entry.id||"N/A"}),Object(S.jsx)("td",{children:C(e.entry.name)||"N/A"}),Object(S.jsx)("td",{children:e.entry.gender||"N/A"}),Object(S.jsx)("td",{children:n.toDateString()||"N/A"}),Object(S.jsx)("td",{children:t||"N/A"})]},e.index)},y.tbody.relatedperson=function(e){var t=new Date(e.entry.birthDate);return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(S.jsx)("td",{children:e.entry.name.text||"N/A"}),Object(S.jsx)("td",{children:e.entry.gender||"N/A"}),Object(S.jsx)("td",{children:t.toDateString()||"N/A"})]},e.index)};var A=y,v=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={dropdown:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.Oauth2,a=t.SetAppState,r=this.state.dropdown;return Object(S.jsxs)("header",{id:"Header",className:"App-Header",children:[Object(S.jsx)(h.b,{to:"/",className:"Header-Link",onClick:function(){return a({Cerner:null})},children:"UMX-DX App"}),n?Object(S.jsxs)("div",{className:"Header-Navbar",children:[Object(S.jsx)("button",{className:"Header-Navbar-Button",onClick:function(){return e.setState((function(e){return{dropdown:!e.dropdown}}))},children:"Pages"}),r?Object(S.jsxs)("div",{className:"Header-Navbar-List",children:[Object(S.jsx)(h.b,{to:"/",className:"Header-Link",activeClassName:"Header-Link-Active",onClick:function(){return a({Cerner:null})},children:"Account"}),Object(S.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",onClick:function(){return a({Cerner:null})},children:"Account"}),Object(S.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",onClick:function(){return a({Cerner:null})},children:"Account"}),Object(S.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",onClick:function(){return a({Cerner:null})},children:"Account"}),Object(S.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",onClick:function(){return a({Cerner:null})},children:"Account"}),Object(S.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",onClick:function(){return a({Cerner:null})},children:"Account"}),Object(S.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",onClick:function(){return a({Cerner:null})},children:"Account"}),Object(S.jsx)(h.b,{to:"/",className:"Header-Link",onClick:function(){return a({Oauth2:null,Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Log Out"})]}):null]}):Object(S.jsxs)("div",{className:"Header-Navbar",children:[Object(S.jsx)("button",{className:"Header-Navbar-Button",onClick:function(){return e.setState((function(e){return{dropdown:!e.dropdown}}))},children:"Platform"}),r?Object(S.jsxs)("div",{className:"Header-Navbar-List",children:[Object(S.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Patient"}),Object(S.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Provider"})]}):null]})]})}}]),n}(r.a.Component),f=function(e){return Object(S.jsx)("div",{className:"App-Cards",children:e.CardArray.map((function(t,n){return Object(S.jsx)("div",{className:"Card",onClick:function(){e.SetAppState({Loading:!0}),A.client.request({Oauth2:e.Oauth2,Page:t,State:e.State,Value:n,SetAppState:e.SetAppState,SetParentState:e.SetParentState})},children:Object(S.jsx)("a",{className:"Card-Title",children:t})},n)}))})};function N(e){return Object(S.jsxs)("div",{className:"Footer-Nav",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){e.SetAppState({DisplayIndex:0}),e.SetParentState({CurrentPage:1})},disabled:e.CurrentPage<=1,children:"First"}),Object(S.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){e.SetAppState({DisplayIndex:e.DisplayIndex-e.DisplayCount}),e.SetParentState({CurrentPage:e.CurrentPage-1})},disabled:e.CurrentPage<=1,children:"Prev"})]}),Object(S.jsx)("div",{className:"Footer-Nav-Link",children:Object(S.jsxs)("label",{className:"Footer-Label",children:[Object(S.jsx)("input",{className:"Footer-Input",type:"text",value:e.CurrentPage,onChange:function(t){return e.SetParentState({CurrentPage:t.target.value})},onKeyPress:function(t){if("Enter"===t.key){if(e.CurrentPage<=1)return e.SetAppState({DisplayIndex:0}),e.SetParentState({CurrentPage:1});if(e.CurrentPage>=e.Pages)return e.SetAppState({DisplayIndex:e.Cerner.length-e.DisplayCount}),e.SetParentState({CurrentPage:e.Pages});e.SetAppState({DisplayIndex:e.DisplayCount*(e.CurrentPage-1)})}}}),"/".concat(e.Pages)]})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){e.SetAppState({DisplayIndex:e.DisplayIndex+e.DisplayCount}),e.SetParentState({CurrentPage:e.CurrentPage+1})},disabled:e.CurrentPage>=e.Pages,children:"Next"}),Object(S.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){e.SetAppState({DisplayIndex:e.DisplayCount*(e.Pages-1)}),e.SetParentState({CurrentPage:e.Pages})},disabled:e.CurrentPage>=e.Pages,children:"Last"})]})]})}var m=function(e){var t=[],n=null,a=Math.ceil(e.Cerner.length/e.DisplayCount);e.Cerner[0].resourceType&&(n=e.Cerner[0].resourceType.toLowerCase());for(var r=0;r<e.Cerner.length&&t.length<e.DisplayCount;r++)r>=e.DisplayIndex&&t.push(e.Cerner[r]);return t.length>0&&console.log("Display: ",t),a>0&&console.log("Pages(Current/Total): ".concat(e.CurrentPage,"/").concat(a)),a>0&&console.log("Index(Current/Total): ".concat(e.DisplayIndex,"/").concat(e.Cerner.length)),a>0&&console.log("DisplayCount: ".concat(e.DisplayCount)),Object(S.jsxs)("div",{className:"Table",children:[Object(S.jsxs)("table",{children:[Object(S.jsx)("thead",{children:A.thead[n]()}),Object(S.jsx)("tbody",{children:t.map((function(e,t){return A.tbody[n]({index:t,entry:e})}))})]}),a>1?Object(S.jsx)(N,{Cerner:e.Cerner,Pages:a,DisplayCount:e.DisplayCount,DisplayIndex:e.DisplayIndex,CurrentPage:e.CurrentPage,SetAppState:e.SetAppState,SetParentState:e.SetParentState}):null]})},P=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={CurrentPage:1},a.SetMainState=a.SetMainState.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"SetMainState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.AccountArray,r=e.MainArray,c=e.MainIndex,i=e.SetAppState;n&&A.client.routeChange({PrevScope:a,Oauth2:t,Cerner:n,Page:r[c],State:"MainIndex",Value:c,SetAppState:i,SetParentState:this.SetMainState})}},{key:"render",value:function(){var e=this,t=this.props,n=t.Oauth2,a=t.Cerner,r=t.MainArray,c=t.MainIndex,i=t.DisplayCount,s=t.DisplayIndex,l=t.SetAppState,d=this.state.CurrentPage;return Object(S.jsxs)("div",{className:"App-Main",children:[Object(S.jsxs)("ul",{className:"Subheader-Nav",children:[r.map((function(t,a){return c===a?Object(S.jsx)("li",{className:"Subheader-Nav-Link Subheader-Nav-Link-Active",onClick:function(){l({Loading:!0}),A.client.request({Oauth2:n,Page:t,State:"MainIndex",Value:a,SetAppState:l,SetParentState:e.SetMainState})},children:t},a):Object(S.jsx)("li",{className:"Subheader-Nav-Link",onClick:function(){l({Loading:!0}),A.client.request({Oauth2:n,Page:t,State:"MainIndex",Value:a,SetAppState:l,SetParentState:e.SetMainState})},children:t},a)})),Object(S.jsx)("li",{className:"Subheader-Nav-Link",children:Object(S.jsxs)("label",{className:"Subheader-Label",children:["Count:",Object(S.jsxs)("select",{className:"Subheader-Select",value:i,onChange:function(t){l({DisplayCount:parseInt(t.target.value),DisplayIndex:0}),e.SetMainState({CurrentPage:1})},children:[Object(S.jsx)("option",{value:25,children:"25"}),Object(S.jsx)("option",{value:50,children:"50"}),Object(S.jsx)("option",{value:100,children:"100"})]})]})})]}),Object(S.jsx)(m,{Cerner:a,DisplayCount:i,DisplayIndex:s,CurrentPage:d,SetAppState:l,SetParentState:this.SetMainState})]})}}]),n}(r.a.Component),D=Object(u.f)((function(){return A.patient(),Object(S.jsx)("div",{className:"App-Launch",children:Object(S.jsx)("h1",{children:"Please wait..."})})})),L=Object(u.f)((function(){return A.provider(),Object(S.jsx)("div",{className:"App-Launch",children:Object(S.jsx)("h1",{children:"Please wait..."})})})),k=(n(132),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Oauth2:null,Cerner:null,MainArray:["Observation","Condition","MedicationStatement","AllergyIntolerance","Patient","Person","RelatedPerson","CarePlan"],MainIndex:0,DisplayCount:25,DisplayIndex:0},a.SetAppState=a.SetAppState.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"SetAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.state.Cerner||(A.client.ready({SetAppState:this.SetAppState}),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Oauth2,a=e.Cerner,r=e.MainArray,c=e.MainIndex,i=e.DisplayCount,s=e.DisplayIndex;return a&&console.log("Cerner:",a),Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(h.a,{basename:"/UMX-DX",children:[t?null:Object(S.jsx)(v,{Oauth2:n,SetAppState:this.SetAppState}),Object(S.jsxs)(u.c,{children:[Object(S.jsx)(u.a,{exact:!0,path:"/",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):n?Object(S.jsx)(f,{CardArray:r,Oauth2:n,SetAppState:this.SetAppState}):Object(S.jsx)("div",{className:"App-Login",children:Object(S.jsx)("h1",{children:"Please select account type to Log-In"})})}),n?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(u.a,{path:"/observation",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):Object(S.jsx)(P,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:i,DisplayIndex:s,SetAppState:this.SetAppState})}),Object(S.jsx)(u.a,{path:"/condition",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):Object(S.jsx)(P,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:i,DisplayIndex:s,SetAppState:this.SetAppState})}),Object(S.jsx)(u.a,{path:"/medication-statement",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):Object(S.jsx)(P,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:i,DisplayIndex:s,SetAppState:this.SetAppState})}),Object(S.jsx)(u.a,{path:"/allergy-intolerance",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):Object(S.jsx)(P,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:i,DisplayIndex:s,SetAppState:this.SetAppState})}),Object(S.jsx)(u.a,{path:"/patient",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):Object(S.jsx)(P,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:i,DisplayIndex:s,SetAppState:this.SetAppState})}),Object(S.jsx)(u.a,{path:"/person",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):Object(S.jsx)(P,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:i,DisplayIndex:s,SetAppState:this.SetAppState})}),Object(S.jsx)(u.a,{path:"/related-person",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):Object(S.jsx)(P,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:i,DisplayIndex:s,SetAppState:this.SetAppState})}),Object(S.jsx)(u.a,{path:"/care-plan",children:t?Object(S.jsx)("div",{className:"App-Loading",children:Object(S.jsx)("h1",{children:"Please wait..."})}):Object(S.jsx)(P,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:c,DisplayCount:i,DisplayIndex:s,SetAppState:this.SetAppState})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(u.a,{path:"/launch-patient",children:Object(S.jsx)(D,{})}),Object(S.jsx)(u.a,{path:"/launch-provider",children:Object(S.jsx)(L,{})})]})]})]})})}}]),n}(r.a.Component)),I=(n(133),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});i.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(k,{})}),document.getElementById("root")),I()}},[[134,1,2]]]);
//# sourceMappingURL=main.833d2d4c.chunk.js.map