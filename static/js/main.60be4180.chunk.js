(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=n.n(i),s=n(87),l=n(88),o=n(34),d=n(94),u=n(93),j=n(8),h=n(12),p=n(23),b=n(36),x=n.n(b),O=n(7),y=n(1),g={patient:function(e){x.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},provider:function(e){x.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"user/AllergyIntolerance.read user/Condition.read user/MedicationStatement.read user/Observation.read user/Patient.read user/Person.read user/Practitioner.read user/ProcedureRequest.read launch online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},client:{}};g.client.ready=function(e){x.a.oauth2.ready().then((function(t){t.patient.request("Patient",{pageLimit:0,flat:!0}).then((function(n){e.SetAppState({Loading:!1,Oauth2:t,Patient:n})})).catch((function(){return e.SetAppState({Loading:!1})}))})).catch((function(){return e.SetAppState({Loading:!1})}))},g.client.routeChange=function(e){var t=!1;e.Cerner.forEach((function(n){e.PrevScope.includes(n.resourceType)&&(t=!0)})),t&&(e.SetAppState({Loading:!0}),g.client.request(e))},g.client.request=function(e){x.a.client(e.Oauth2.state).patient.request(e.Page,{pageLimit:0,flat:!0}).then((function(t){var n,a=[],r=!0;t.forEach((function(e){switch(!0){default:r=!0;break;case e.status&&"entered-in-error"===e.status:case e.verificationStatus&&"entered-in-error"===e.verificationStatus:case e.substance&&"Entered In Error"===e.substance:case e.code&&"Entered In Error"===e.code.text:r=!1}r&&a.push(e)})),e.SetAppState((n={Loading:!1,Cerner:a},Object(p.a)(n,e.Property,e.Value),Object(p.a)(n,"CurrentPage",1),Object(p.a)(n,"DisplayIndex",0),n))})).catch((function(){var t;return e.SetAppState((t={Loading:!1},Object(p.a)(t,e.Property,e.Value),Object(p.a)(t,"CurrentPage",1),Object(p.a)(t,"DisplayIndex",0),t))}))},g.thead={},g.thead.observation=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Issued Date"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Report"}),Object(y.jsx)("th",{children:"Context"}),Object(y.jsx)("th",{children:"Status"})]})},g.thead.condition=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Patient"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Report"}),Object(y.jsx)("th",{children:"Verification Status"}),Object(y.jsx)("th",{children:"Clinical Status"}),Object(y.jsx)("th",{children:"Recorded"}),Object(y.jsx)("th",{children:"Dates"})]})},g.thead.medicationstatement=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Recorder"}),Object(y.jsx)("th",{children:"Patient"}),Object(y.jsx)("th",{children:"Medication"}),Object(y.jsx)("th",{children:"Dosage"}),Object(y.jsx)("th",{children:"Status"}),Object(y.jsx)("th",{children:"Taken"}),Object(y.jsx)("th",{children:"Dates"})]})},g.thead.allergyintolerance=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Recorder"}),Object(y.jsx)("th",{children:"Patient"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Substance"}),Object(y.jsx)("th",{children:"Criticality"}),Object(y.jsx)("th",{children:"Status"})]})},g.thead.patient=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"ID"}),Object(y.jsx)("th",{children:"Name"}),Object(y.jsx)("th",{children:"Gender"}),Object(y.jsx)("th",{children:"Birth Date"}),Object(y.jsx)("th",{children:"Marital Status"})]})},g.thead.relatedperson=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Patient"}),Object(y.jsx)("th",{children:"Person"}),Object(y.jsx)("th",{children:"Gender"}),Object(y.jsx)("th",{children:"Birth Date"})]})},g.tbody={},g.tbody.observation=function(e){var t=new Date(e.entry.issued),n=g.value.system(Object(O.getPath)(e.entry,"code.coding"),"http://snomed.info/sct",Object(O.getPath)(e.entry,"code.text")||"Report Error"),a=g.value.system(Object(O.getPath)(e.entry,"valueCodeableConcept.coding"),"http://snomed.info/sct",Object(O.getPath)(e.entry,"valueCodeableConcept.text")||"N/A"),r=Object(O.getPath)(e.entry,"valueQuantity.value")||"N/A",i=Object(O.getPath)(e.entry,"valueQuantity.unit")||"N/A",c=g.value.system(Object(O.getPath)(e.entry,"dataAbsentReason.coding"),"http://hl7.org/fhir/data-absent-reason",Object(O.getPath)(e.entry,"dataAbsentReason.text")||"Absent Report"),s=a;return"N/A"!==r&&(s=r),"N/A"!==r&&"N/A"!==i&&(s="".concat(r," ").concat(i)),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:t.toDateString()||"N/A"}),Object(y.jsx)("td",{children:e.entry.category.text||"N/A"}),Object(y.jsx)("td",{children:e.entry.absentReport?c:n}),Object(y.jsx)("td",{children:s}),Object(y.jsx)("td",{children:e.entry.status||"N/A"})]},e.index)},g.tbody.condition=function(e){var t=new Date(e.entry.dateRecorded),n=new Date(e.entry.onsetDateTime),a=new Date(e.entry.onsetDateTime);return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(y.jsx)("td",{children:e.entry.category.text||"N/A"}),Object(y.jsx)("td",{children:e.entry.code.text||"N/A"}),Object(y.jsx)("td",{children:e.entry.verificationStatus||"N/A"}),Object(y.jsx)("td",{children:e.entry.clinicalStatus||"N/A"}),Object(y.jsx)("td",{children:t.toDateString()||"N/A"}),Object(y.jsx)("td",{children:"Invalid Date"===a?"".concat(n.toDateString()," - Present"):"".concat(n.toDateString()," - ").concat(a.toDateString())||"N/A"})]},e.index)},g.tbody.medicationstatement=function(e){var t=g.value.system(Object(O.getPath)(e.entry,"medicationCodeableConcept.coding")||Object(O.getPath)(e.entry,"medicationCodeableConcept.code.coding"),"http://www.nlm.nih.gov/research/umls/rxnorm",Object(O.getPath)(e.entry,"medicationCodeableConcept.text")||"Unnamed Medication(TM)"),n=Object(O.getPath)(e.entry,"wasNotTaken")?"No":"Yes",a=new Date(Object(O.getPath)(e.entry,"effectivePeriod.start")),r=new Date(Object(O.getPath)(e.entry,"effectivePeriod.end"));return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(O.getPath)(e.entry,"informationSource.display")||"N/A"}),Object(y.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(y.jsx)("td",{children:t||"N/A"}),Object(y.jsx)("td",{children:Object(O.getPath)(e.entry,"dosage.0.text")||"N/A"}),Object(y.jsx)("td",{children:e.entry.status||"N/A"}),Object(y.jsx)("td",{children:n||"N/A"}),Object(y.jsx)("td",{children:"Invalid Date"===r?"".concat(a.toDateString()," - Present"):"".concat(a.toDateString()," - ").concat(r.toDateString())||"N/A"})]},e.index)},g.tbody.allergyintolerance=function(e){var t=g.value.system(Object(O.getPath)(e.entry,"substance.coding")||Object(O.getPath)(e.entry,"substance.code.coding"),"http://snomed.info/sct",e.entry.substance.text||"Unnamed Allergy"),n="CRITH"===e.entry.criticality?"High Risk":"None";return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(O.getPath)(e.entry,"recorder.display")||"N/A"}),Object(y.jsx)("td",{children:Object(O.getPath)(e.entry,"patient.display")||"N/A"}),Object(y.jsx)("td",{children:e.entry.category||"N/A"}),Object(y.jsx)("td",{children:t||"N/A"}),Object(y.jsx)("td",{children:n||"N/A"}),Object(y.jsx)("td",{children:e.entry.status||"N/A"})]})},g.tbody.patient=function(e){var t=g.value.system(Object(O.getPath)(e.entry,"maritalStatus.coding")||Object(O.getPath)(e.entry,"maritalStatus.code.coding"),"http://hl7.org/fhir/v3/Marital",e.entry.maritalStatus.text||"Unavailable"),n=new Date(e.entry.birthDate);return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.entry.id||"N/A"}),Object(y.jsx)("td",{children:g.value.officialName(e.entry.name)}),Object(y.jsx)("td",{children:e.entry.gender||"N/A"}),Object(y.jsx)("td",{children:n.toDateString()||"N/A"}),Object(y.jsx)("td",{children:t||"N/A"})]},e.index)},g.tbody.relatedperson=function(e){var t=new Date(e.entry.birthDate);return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(y.jsx)("td",{children:e.entry.name.text||"N/A"}),Object(y.jsx)("td",{children:e.entry.gender||"N/A"}),Object(y.jsx)("td",{children:t.toDateString()||"N/A"})]},e.index)},g.value={},g.value.capitalize=function(e){return e[0].toUpperCase()+e.subtring(1)},g.value.date=function(e){var t=new Date(e);return t?t.toDateString():e},g.value.officialName=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.find((function(e){return"official"===e.use}))||e[0];return t?t.given.join(" ")+" "+t.family:"N/A"},g.value.system=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=n,r=e.find((function(e){return e.system===t}));return r&&r.display&&(a=r.display),a};var A=g,f=n(169),P=n(172),S=n(171),C=n(173),v=n(170),D=n(92),m=n(174);function I(e){if(e.Patient||e.Cerner)return e.Patient&&console.log("Patient: ",e.Patient),Object(y.jsxs)(f.a,{noGutter:!0,fluid:!0,children:[e.Patient?Object(y.jsx)(C.a,{children:Object(y.jsxs)(C.a.Body,{style:{display:"flex"},children:[Object(y.jsx)(C.a.Title,{children:A.value.officialName(e.Patient.name)}),Object(y.jsx)(C.a.Subtitle,{children:e.Patient.id}),Object(y.jsxs)(v.a,{className:"list-group-flush",children:[Object(y.jsx)(D.a,{children:A.value.date(e.Patient.birthDate)}),Object(y.jsx)(D.a,{children:A.value.capitalize(e.Patient.gender)})]})]})}):null,e.Cerner?Object(y.jsxs)(m.a,{style:{justifyContent:"center",alignItems:"center"},children:[Object(y.jsx)(m.a.Item,{children:Object(y.jsx)(m.a.Link,{as:h.b,to:"/",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Back"})}),e.PageArray.map((function(t,n){return e.PageIndex,Object(y.jsx)(m.a.Item,{children:Object(y.jsx)(m.a.Link,{as:h.b,to:t.path,onClick:function(){e.SetAppState({Loading:!0}),A.client.request({Oauth2:e.Oauth2,Page:t.value,Property:"".concat(e.PageType,"Index"),Value:n,SetAppState:e.SetAppState})},children:t.label},n)})})),Object(y.jsx)(m.a.Item,{children:Object(y.jsxs)(m.a.Link,{as:S.a,title:"Count: ".concat(e.DisplayCount),id:"navbarScrollingDropdown",children:[Object(y.jsx)(S.a.Item,{onClick:function(){return e.SetAppState({DisplayCount:25,CurrentPage:1,DisplayIndex:0})},children:"25"}),Object(y.jsx)(S.a.Item,{onClick:function(){return e.SetAppState({DisplayCount:50,CurrentPage:1,DisplayIndex:0})},children:"50"}),Object(y.jsx)(S.a.Item,{onClick:function(){return e.SetAppState({DisplayCount:100,CurrentPage:1,DisplayIndex:0})},children:"100"})]})})]}):null]})}var N=function(e){return Object(y.jsxs)(f.a,{fluid:!0,children:[e.Oauth2?Object(y.jsxs)(P.a,{style:{justifyContent:"space-between"},children:[Object(y.jsx)(P.a.Brand,{as:h.b,to:"/",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"UMX-DX App"}),Object(y.jsxs)(S.a,{title:"Menu",id:"navbarScrollingDropdown",children:[e.AllOptions.map((function(t,n){return Object(y.jsx)(S.a.Item,{as:h.b,to:t.path,onClick:function(){e.SetAppState({Loading:!0}),A.client.request({Oauth2:e.Oauth2,Page:t.value,Property:"".concat(e.PageType,"Index"),Value:n,SetAppState:e.SetAppState})},children:t.label},n)})),Object(y.jsx)(S.a.Divider,{}),Object(y.jsx)(S.a.Item,{as:h.b,to:"/",onClick:function(){return e.SetAppState({Oauth2:null,Patient:null,Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Log Out"})]})]}):Object(y.jsxs)(P.a,{style:{justifyContent:"space-between"},children:[Object(y.jsx)(P.a.Brand,{as:h.b,to:"/",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"UMX-DX App"}),Object(y.jsxs)(S.a,{title:"Login",id:"navbarScrollingDropdown",children:[Object(y.jsx)(S.a.Item,{as:h.b,to:"/launch-patient",children:"Patient"}),Object(y.jsx)(S.a.Item,{as:h.b,to:"/launch-provider",children:"Provider"})]})]}),I(e)]})},L=function(e){return Object(y.jsx)(f.a,{children:e.AllOptions.map((function(t,n){return Object(y.jsx)(C.a,{children:Object(y.jsx)(h.b,{to:t.path,onClick:function(){return e.RedirectRoute({option:t,index:n})},children:t.label},n)})}))})};function M(e){return Object(y.jsxs)("div",{className:"Footer-Nav",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:1,DisplayIndex:0})},disabled:e.CurrentPage<=1,children:"First"}),Object(y.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.CurrentPage-1,DisplayIndex:e.DisplayIndex-e.DisplayCount})},disabled:e.CurrentPage<=1,children:"Prev"})]}),Object(y.jsx)("div",{className:"Footer-Nav-Link",children:Object(y.jsxs)("label",{className:"Footer-Label",children:[Object(y.jsx)("input",{className:"Footer-Input",type:"text",value:e.CurrentPage,onChange:function(t){return e.SetAppState({CurrentPage:t.target.value})},onKeyPress:function(t){if("Enter"===t.key){if(e.CurrentPage<=1)return e.SetAppState({DisplayIndex:0}),e.SetAppState({CurrentPage:1});if(e.CurrentPage>=e.Pages)return e.SetAppState({DisplayIndex:e.Cerner.length-e.DisplayCount}),e.SetAppState({CurrentPage:e.Pages});e.SetAppState({DisplayIndex:e.DisplayCount*(e.CurrentPage-1)})}}}),"/".concat(e.Pages)]})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.CurrentPage+1,DisplayIndex:e.DisplayIndex+e.DisplayCount})},disabled:e.CurrentPage>=e.Pages,children:"Next"}),Object(y.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.Pages,DisplayIndex:e.DisplayCount*(e.Pages-1)})},disabled:e.CurrentPage>=e.Pages,children:"Last"})]})]})}var k=function(e){var t=[],n=null,a=Math.ceil(e.Cerner.length/e.DisplayCount);e.Cerner[0].resourceType&&(n=e.Cerner[0].resourceType.toLowerCase());for(var r=0;r<e.Cerner.length&&t.length<e.DisplayCount;r++)r>=e.DisplayIndex&&t.push(e.Cerner[r]);return t.length>0&&console.log("Display: ",t),Object(y.jsxs)("div",{className:"App-Table",children:[Object(y.jsxs)("table",{className:"Table",children:[Object(y.jsx)("thead",{children:A.thead[n]()}),Object(y.jsx)("tbody",{children:t.map((function(e,t){return A.tbody[n]({index:t,entry:e})}))})]}),a>1?Object(y.jsx)(M,{Cerner:e.Cerner,Pages:a,DisplayCount:e.DisplayCount,DisplayIndex:e.DisplayIndex,CurrentPage:e.CurrentPage,SetAppState:e.SetAppState,SetParentState:e.SetParentState}):null]})},w=Object(j.g)((function(){return A.patient(),Object(y.jsx)("div",{className:"App-Launch",children:Object(y.jsx)("h1",{children:"Please wait..."})})})),R=Object(j.g)((function(){return A.provider(),Object(y.jsx)("div",{className:"App-Launch",children:Object(y.jsx)("h1",{children:"Please wait..."})})})),T=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Dropdown:null,Oauth2:null,Patient:null,Cerner:null,CurrentPage:0,DisplayIndex:0,DisplayCount:25,MainIndex:0,MainArray:[{label:"Observations",value:"Observation",path:"/observations"},{label:"Conditions",value:"Condition",path:"/conditions"},{label:"Medications",value:"MedicationStatement",path:"/medications"},{label:"Allergies",value:"AllergyIntolerance",path:"/allergies"}],AccountIndex:0,AccountArray:[{label:"Account",value:"Patient",path:"/account"},{label:"Relatives",value:"RelatedPerson",path:"/relatives"},{label:"Care Plan",value:"CarePlan",path:"/care-plan"}]},a.SetAppState=a.SetAppState.bind(Object(o.a)(a)),a.RedirectRoute=a.RedirectRoute.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"SetAppState",value:function(e){this.setState(e)}},{key:"RedirectRoute",value:function(e){var t=[],n=[],a=this.state,r=a.Oauth2,i=a.MainArray,c=a.AccountArray;i.forEach((function(e){return t.push(e.label)})),c.forEach((function(e){return n.push(e.label)})),this.setState({Loading:!0}),n.includes(e.option.label)?A.client.request({Oauth2:r,Page:e.option.value,Property:"AccountIndex",Value:e.index,SetAppState:this.SetAppState}):A.client.request({Oauth2:r,Page:e.option.value,Property:"MainIndex",Value:e.index,SetAppState:this.SetAppState}),j.a,e.option.path}},{key:"componentDidMount",value:function(){this.state.Cerner||(A.client.ready({SetAppState:this.SetAppState}),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.Loading,a=t.Dropdown,r=t.Oauth2,i=t.Patient,c=t.Cerner,s=t.CurrentPage,l=t.DisplayIndex,o=t.DisplayCount,d=t.MainIndex,u=t.MainArray,p=t.AccountIndex,b=t.AccountArray,x=u.concat(b);return c&&console.log("Cerner: ",c),Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(h.a,{basename:"/UMX-DX",children:[Object(y.jsx)(E,{AllOptions:x,Dropdown:a,Oauth2:r,Patient:i,Cerner:c,CurrentPage:s,DisplayIndex:l,DisplayCount:o,MainIndex:d,MainArray:u,AccountIndex:p,AccountArray:b,SetAppState:this.SetAppState}),Object(y.jsxs)(j.d,{children:[Object(y.jsx)(j.b,{exact:!0,path:"/",children:n?Object(y.jsx)("div",{className:"App-Loading",children:Object(y.jsx)("h1",{children:"Please wait..."})}):r?null:Object(y.jsx)("div",{className:"App-Login",children:Object(y.jsx)("h1",{children:"Please Login to Continue"})})}),x.map((function(t,a){return Object(y.jsx)(j.b,{path:t.path,children:n?Object(y.jsx)("div",{className:"App-Loading",children:Object(y.jsx)("h1",{children:"Please wait..."})}):c&&0!==c.length?Object(y.jsx)(k,{Cerner:c,DisplayCount:o,DisplayIndex:l,CurrentPage:s,SetAppState:e.SetAppState}):Object(y.jsx)("div",{className:"App-Error",children:Object(y.jsx)("h1",{children:"Error Retrieveing Data"})})},a)})),r?null:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(j.b,{path:"/launch-patient",children:Object(y.jsx)(w,{})}),Object(y.jsx)(j.b,{path:"/launch-provider",children:Object(y.jsx)(R,{})})]})]}),!n&&r?Object(y.jsx)(L,{AllOptions:x,RedirectRoute:this.RedirectRoute}):null]})})}}]),n}(r.a.Component);function E(e){var t=[],n=[],a=!1;switch(e.MainArray.forEach((function(e){return t.push(e.label)})),e.AccountArray.forEach((function(t){e.Cerner&&t.value===e.Cerner[0].resourceType&&(a=!0),n.push(t.label)})),!0){case a:return Object(y.jsx)(N,{AllOptions:e.AllOptions,Dropdown:e.Dropdown,Oauth2:e.Oauth2,Patient:e.Patient,Cerner:e.Cerner,CurrentPage:e.CurrentPage,DisplayIndex:e.DisplayIndex,DisplayCount:e.DisplayCount,MainLabels:t,AccountLabels:n,PageType:"Account",PageIndex:e.AccountIndex,PageArray:e.AccountArray,SetAppState:e.SetAppState});default:return Object(y.jsx)(N,{AllOptions:e.AllOptions,Dropdown:e.Dropdown,Oauth2:e.Oauth2,Patient:e.Patient,Cerner:e.Cerner,CurrentPage:e.CurrentPage,DisplayIndex:e.DisplayIndex,DisplayCount:e.DisplayCount,MainLabels:t,AccountLabels:n,PageType:"Main",PageIndex:e.MainIndex,PageArray:e.MainArray,SetAppState:e.SetAppState})}}n(86);var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,175)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};n(86),c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root")),F()},86:function(e,t,n){}},[[164,1,2]]]);
//# sourceMappingURL=main.60be4180.chunk.js.map