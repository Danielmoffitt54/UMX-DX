(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(63),i=n.n(c),s=n(64),l=n(65),d=n(19),o=n(68),u=n(67),h=n(3),p=n(5),j=n(11),b=n(20),x=n.n(b),O=n(2),y=n(0),g={};function A(e){if("string"!==typeof e)return e;var t=e.split("-");return(t=(t=t.push(t[0])).splice(0,1)).join("-")}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.find((function(e){return"official"===e.use}))||e[0];if(t)return t.given.join(" ")+" "+t.family}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=n,r=e.find((function(e){return e.system===t}));return r&&r.display&&(a=r.display),a}g.patient=function(e){x.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},g.provider=function(e){x.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},g.client={},g.client.ready=function(e){x.a.oauth2.ready().then((function(t){t.patient.request("Patient",{pageLimit:0,flat:!0}).then((function(n){e.SetAppState({Loading:!1,Oauth2:t,Patient:n})})).catch((function(){return e.SetAppState({Loading:!1})}))})).catch((function(){return e.SetAppState({Loading:!1})}))},g.client.routeChange=function(e){var t=!1;e.Cerner.forEach((function(n){e.PrevScope.includes(n.resourceType)&&(t=!0)})),t&&(e.SetAppState({Loading:!0}),g.client.request(e))},g.client.request=function(e){x.a.client(e.Oauth2.state).patient.request(e.Page,{pageLimit:0,flat:!0}).then((function(t){var n,a=[],r=!0;t.forEach((function(e){switch(!0){default:r=!0;break;case e.status&&"entered-in-error"===e.status:case e.verificationStatus&&"entered-in-error"===e.verificationStatus:case e.substance&&"Entered In Error"===e.substance:case e.code&&"Entered In Error"===e.code.text:r=!1}r&&a.push(e)})),e.SetAppState((n={Loading:!1,Cerner:a},Object(j.a)(n,e.Property,e.Value),Object(j.a)(n,"CurrentPage",1),Object(j.a)(n,"DisplayIndex",0),n))})).catch((function(){var t;return e.SetAppState((t={Loading:!1},Object(j.a)(t,e.Property,e.Value),Object(j.a)(t,"CurrentPage",1),Object(j.a)(t,"DisplayIndex",0),t))}))},g.thead={},g.thead.observation=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Issued Date"}),Object(y.jsx)("th",{children:"Report"}),Object(y.jsx)("th",{children:"Context"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Status"})]})},g.thead.condition=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Patient"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Report"}),Object(y.jsx)("th",{children:"Verification Status"}),Object(y.jsx)("th",{children:"Clinical Status"}),Object(y.jsx)("th",{children:"Recorded"}),Object(y.jsx)("th",{children:"Dates"})]})},g.thead.medicationstatement=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Recorder"}),Object(y.jsx)("th",{children:"Patient"}),Object(y.jsx)("th",{children:"Medication"}),Object(y.jsx)("th",{children:"Dosage"}),Object(y.jsx)("th",{children:"Status"}),Object(y.jsx)("th",{children:"Taken"}),Object(y.jsx)("th",{children:"Dates"})]})},g.thead.allergyintolerance=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Recorder"}),Object(y.jsx)("th",{children:"Patient"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Substance"}),Object(y.jsx)("th",{children:"Criticality"}),Object(y.jsx)("th",{children:"Status"})]})},g.thead.patient=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"ID"}),Object(y.jsx)("th",{children:"Name"}),Object(y.jsx)("th",{children:"Gender"}),Object(y.jsx)("th",{children:"Birth Date"}),Object(y.jsx)("th",{children:"Marital Status"})]})},g.thead.relatedperson=function(){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Patient"}),Object(y.jsx)("th",{children:"Person"}),Object(y.jsx)("th",{children:"Gender"}),Object(y.jsx)("th",{children:"Birth Date"})]})},g.tbody={},g.tbody.observation=function(e){var t=new Date(e.entry.issued),n=v(Object(O.getPath)(e.entry,"code.coding"),"http://snomed.info/sct",Object(O.getPath)(e.entry,"code.text")||"Report Error"),a=v(Object(O.getPath)(e.entry,"valueCodeableConcept.coding"),"http://snomed.info/sct",Object(O.getPath)(e.entry,"valueCodeableConcept.text")||"N/A"),r=Object(O.getPath)(e.entry,"valueQuantity.value")||"N/A",c=Object(O.getPath)(e.entry,"valueQuantity.unit")||"N/A",i=v(Object(O.getPath)(e.entry,"dataAbsentReason.coding"),"http://hl7.org/fhir/data-absent-reason",Object(O.getPath)(e.entry,"dataAbsentReason.text")||"Absent Report"),s=a;return"N/A"!==r&&(s=r),"N/A"!==r&&"N/A"!==c&&(s="".concat(r," ").concat(c)),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:t.toDateString()||"N/A"}),Object(y.jsx)("td",{children:e.entry.absentReport?i:n}),Object(y.jsx)("td",{children:s}),Object(y.jsx)("td",{children:e.entry.category.text||"N/A"}),Object(y.jsx)("td",{children:e.entry.status||"N/A"})]},e.index)},g.tbody.condition=function(e){var t=new Date(A(e.entry.dateRecorded)),n=new Date(A(e.entry.onsetDateTime)),a=new Date(A(e.entry.onsetDateTime));return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(y.jsx)("td",{children:e.entry.category.text||"N/A"}),Object(y.jsx)("td",{children:e.entry.code.text||"N/A"}),Object(y.jsx)("td",{children:e.entry.verificationStatus||"N/A"}),Object(y.jsx)("td",{children:e.entry.clinicalStatus||"N/A"}),Object(y.jsx)("td",{children:t.toDateString()||"N/A"}),Object(y.jsx)("td",{children:"Invalid Date"===a?"".concat(n.toDateString()," - Present"):"".concat(n.toDateString()," - ").concat(a.toDateString())||"N/A"})]},e.index)},g.tbody.medicationstatement=function(e){var t=v(Object(O.getPath)(e.entry,"medicationCodeableConcept.coding")||Object(O.getPath)(e.entry,"medicationCodeableConcept.code.coding"),"http://www.nlm.nih.gov/research/umls/rxnorm",Object(O.getPath)(e.entry,"medicationCodeableConcept.text")||"Unnamed Medication(TM)"),n=Object(O.getPath)(e.entry,"wasNotTaken")?"No":"Yes",a=new Date(Object(O.getPath)(e.entry,"effectivePeriod.start")),r=new Date(Object(O.getPath)(e.entry,"effectivePeriod.end"));return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(O.getPath)(e.entry,"informationSource.display")||"N/A"}),Object(y.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(y.jsx)("td",{children:t||"N/A"}),Object(y.jsx)("td",{children:Object(O.getPath)(e.entry,"dosage.0.text")||"N/A"}),Object(y.jsx)("td",{children:e.entry.status||"N/A"}),Object(y.jsx)("td",{children:n||"N/A"}),Object(y.jsx)("td",{children:"Invalid Date"===r?"".concat(a.toDateString()," - Present"):"".concat(a.toDateString()," - ").concat(r.toDateString())||"N/A"})]},e.index)},g.tbody.allergyintolerance=function(e){var t=v(Object(O.getPath)(e.entry,"substance.coding")||Object(O.getPath)(e.entry,"substance.code.coding"),"http://snomed.info/sct",e.entry.substance.text||"Unnamed Allergy"),n="CRITH"===e.entry.criticality?"High Risk":"None";return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(O.getPath)(e.entry,"recorder.display")||"N/A"}),Object(y.jsx)("td",{children:Object(O.getPath)(e.entry,"patient.display")||"N/A"}),Object(y.jsx)("td",{children:e.entry.category||"N/A"}),Object(y.jsx)("td",{children:t||"N/A"}),Object(y.jsx)("td",{children:n||"N/A"}),Object(y.jsx)("td",{children:e.entry.status||"N/A"})]})},g.tbody.patient=function(e){var t=v(Object(O.getPath)(e.entry,"maritalStatus.coding")||Object(O.getPath)(e.entry,"maritalStatus.code.coding"),"http://hl7.org/fhir/v3/Marital",e.entry.maritalStatus.text||"Unavailable"),n=new Date(e.entry.birthDate);return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.entry.id||"N/A"}),Object(y.jsx)("td",{children:S(e.entry.name)||"N/A"}),Object(y.jsx)("td",{children:e.entry.gender||"N/A"}),Object(y.jsx)("td",{children:n.toDateString()||"N/A"}),Object(y.jsx)("td",{children:t||"N/A"})]},e.index)},g.tbody.relatedperson=function(e){var t=new Date(e.entry.birthDate);return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(y.jsx)("td",{children:e.entry.name.text||"N/A"}),Object(y.jsx)("td",{children:e.entry.gender||"N/A"}),Object(y.jsx)("td",{children:t.toDateString()||"N/A"})]},e.index)};var f=g;function C(e){if(e.Patient||e.Cerner)return Object(y.jsxs)("div",{className:"Header-Subheader",children:[e.Patient?Object(y.jsxs)("table",{children:[Object(y.jsx)("thead",{children:f.thead.patient()}),Object(y.jsx)("tbody",{children:e.Patient.map((function(e,t){return f.tbody.patient({index:t,entry:e})}))})]}):null,e.Cerner?Object(y.jsxs)("div",{className:"Subheader-Nav",children:[Object(y.jsx)(p.b,{to:"/",className:"Subheader-Nav-Link",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Back"}),e.PageArray.map((function(t,n){return e.PageIndex,Object(y.jsx)(p.b,{to:t.path,className:"Subheader-Nav-Link",activeClassName:"Subheader-Nav-Link-Active",onClick:function(){e.SetAppState({Loading:!0}),f.client.request({Oauth2:e.Oauth2,Page:t.value,Property:"".concat(e.PageType,"Index"),Value:n,SetAppState:e.SetAppState})},children:t.label},n)})),Object(y.jsx)("div",{className:"Subheader-Nav-Link",children:Object(y.jsxs)("label",{className:"Subheader-Label",children:["Count:",Object(y.jsxs)("select",{className:"Subheader-Select",value:e.DisplayCount,onChange:function(t){return e.SetAppState({DisplayCount:parseInt(t.target.value),CurrentPage:1,DisplayIndex:0})},children:[Object(y.jsx)("option",{value:25,children:"25"}),Object(y.jsx)("option",{value:50,children:"50"}),Object(y.jsx)("option",{value:100,children:"100"})]})]})})]}):null]})}var P=function(e){return Object(y.jsxs)("header",{id:"Header",className:"App-Header",children:[e.Oauth2?Object(y.jsxs)("div",{className:"Header-Main",children:[Object(y.jsx)(p.b,{to:"/",className:"Header-Link",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"UMX-DX App"}),Object(y.jsxs)("div",{className:"Header-Nav",children:[Object(y.jsx)("button",{className:"Header-Link",onClick:function(){return e.SetAppState({Dropdown:null})},onMouseOver:function(){return e.SetAppState({Dropdown:"Header-Nav"})},children:"Menu"}),"Header-Nav"===e.Dropdown?Object(y.jsxs)("div",{className:"Header-Nav-Dropdown",children:[e.AllOptions.map((function(t,n){return Object(y.jsx)(p.b,{to:t.path,className:"Header-Nav-Dropdown-Link",activeClassName:"Header-Nav-Dropdown-Link-Active",onClick:function(){e.SetAppState({Loading:!0,Dropdown:null}),f.client.request({Oauth2:e.Oauth2,Page:t.value,Property:"".concat(e.PageType,"Index"),Value:n,SetAppState:e.SetAppState})},children:t.label},n)})),Object(y.jsx)(p.b,{to:"/",className:"Header-Nav-Dropdown-Link",onClick:function(){return e.SetAppState({Dropdown:null,Oauth2:null,Patient:null,Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Log Out"})]}):null]})]}):Object(y.jsxs)("div",{className:"Header-Main",children:[Object(y.jsx)(p.b,{to:"/",className:"Header-Link",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"UMX-DX App"}),Object(y.jsxs)("div",{className:"Header-Nav",children:[Object(y.jsx)("button",{className:"Header-Link",onClick:function(){return e.SetAppState({Dropdown:null})},onMouseOver:function(){return e.SetAppState({Dropdown:"Header-Nav"})},children:"Login"}),"Header-Nav"===e.Dropdown?Object(y.jsxs)("div",{className:"Header-Nav-Dropdown",children:[Object(y.jsx)(p.b,{to:"/launch-patient",className:"Header-Nav-Dropdown-Link",activeClassName:"Header-Nav-Dropdown-Link-Active",onClick:function(){return e.SetAppState({Dropdown:null})},children:"Patient"}),Object(y.jsx)(p.b,{to:"/launch-provider",className:"Header-Nav-Dropdown-Link",activeClassName:"Header-Nav-Dropdown-Link-Active",onClick:function(){return e.SetAppState({Dropdown:null})},children:"Provider"})]}):null]})]}),C(e)]})},D=function(e){return Object(y.jsx)("div",{className:"App-Cards",children:e.AllOptions.map((function(t,n){return Object(y.jsx)(p.b,{to:t.path,className:"Card",onClick:function(){return e.RedirectRoute({option:t,index:n})},children:t.label},n)}))})};function N(e){return Object(y.jsxs)("div",{className:"Footer-Nav",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:1,DisplayIndex:0})},disabled:e.CurrentPage<=1,children:"First"}),Object(y.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.CurrentPage-1,DisplayIndex:e.DisplayIndex-e.DisplayCount})},disabled:e.CurrentPage<=1,children:"Prev"})]}),Object(y.jsx)("div",{className:"Footer-Nav-Link",children:Object(y.jsxs)("label",{className:"Footer-Label",children:[Object(y.jsx)("input",{className:"Footer-Input",type:"text",value:e.CurrentPage,onChange:function(t){return e.SetAppState({CurrentPage:t.target.value})},onKeyPress:function(t){if("Enter"===t.key){if(e.CurrentPage<=1)return e.SetAppState({DisplayIndex:0}),e.SetAppState({CurrentPage:1});if(e.CurrentPage>=e.Pages)return e.SetAppState({DisplayIndex:e.Cerner.length-e.DisplayCount}),e.SetAppState({CurrentPage:e.Pages});e.SetAppState({DisplayIndex:e.DisplayCount*(e.CurrentPage-1)})}}}),"/".concat(e.Pages)]})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.CurrentPage+1,DisplayIndex:e.DisplayIndex+e.DisplayCount})},disabled:e.CurrentPage>=e.Pages,children:"Next"}),Object(y.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.Pages,DisplayIndex:e.DisplayCount*(e.Pages-1)})},disabled:e.CurrentPage>=e.Pages,children:"Last"})]})]})}var m=function(e){var t=[],n=null,a=Math.ceil(e.Cerner.length/e.DisplayCount);e.Cerner[0].resourceType&&(n=e.Cerner[0].resourceType.toLowerCase());for(var r=0;r<e.Cerner.length&&t.length<e.DisplayCount;r++)r>=e.DisplayIndex&&t.push(e.Cerner[r]);return t.length>0&&console.log("Display: ",t),Object(y.jsxs)("div",{className:"App-Table",children:[Object(y.jsxs)("table",{className:"Table",children:[Object(y.jsx)("thead",{children:f.thead[n]()}),Object(y.jsx)("tbody",{children:t.map((function(e,t){return f.tbody[n]({index:t,entry:e})}))})]}),a>1?Object(y.jsx)(N,{Cerner:e.Cerner,Pages:a,DisplayCount:e.DisplayCount,DisplayIndex:e.DisplayIndex,CurrentPage:e.CurrentPage,SetAppState:e.SetAppState,SetParentState:e.SetParentState}):null]})},I=Object(h.g)((function(){return f.patient(),Object(y.jsx)("div",{className:"App-Launch",children:Object(y.jsx)("h1",{children:"Please wait..."})})})),L=Object(h.g)((function(){return f.provider(),Object(y.jsx)("div",{className:"App-Launch",children:Object(y.jsx)("h1",{children:"Please wait..."})})})),k=(n(132),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Dropdown:null,Oauth2:null,Patient:null,Cerner:null,CurrentPage:0,DisplayIndex:0,DisplayCount:25,MainIndex:0,MainArray:[{label:"Observations",value:"Observation",path:"/observations"},{label:"Conditions",value:"Condition",path:"/conditions"},{label:"Medications",value:"MedicationStatement",path:"/medications"},{label:"Allergies",value:"AllergyIntolerance",path:"/allergies"}],AccountIndex:0,AccountArray:[{label:"Account",value:"Patient",path:"/account"},{label:"Relatives",value:"RelatedPerson",path:"/relatives"},{label:"Care Plan",value:"CarePlan",path:"/care-plan"}]},a.SetAppState=a.SetAppState.bind(Object(d.a)(a)),a.RedirectRoute=a.RedirectRoute.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"SetAppState",value:function(e){this.setState(e)}},{key:"RedirectRoute",value:function(e){var t=[],n=[],a=this.state,r=a.Oauth2,c=a.MainArray,i=a.AccountArray;c.forEach((function(e){return t.push(e.label)})),i.forEach((function(e){return n.push(e.label)})),this.setState({Loading:!0}),n.includes(e.option.label)?f.client.request({Oauth2:r,Page:e.option.value,Property:"AccountIndex",Value:e.index,SetAppState:this.SetAppState}):f.client.request({Oauth2:r,Page:e.option.value,Property:"MainIndex",Value:e.index,SetAppState:this.SetAppState}),h.a,e.option.path}},{key:"componentDidMount",value:function(){this.state.Cerner||(f.client.ready({SetAppState:this.SetAppState}),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.Loading,a=t.Dropdown,r=t.Oauth2,c=t.Patient,i=t.Cerner,s=t.CurrentPage,l=t.DisplayIndex,d=t.DisplayCount,o=t.MainIndex,u=t.MainArray,j=t.AccountIndex,b=t.AccountArray,x=u.concat(b);return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(p.a,{basename:"/UMX-DX",children:[Object(y.jsx)(w,{AllOptions:x,Dropdown:a,Oauth2:r,Patient:c,Cerner:i,CurrentPage:s,DisplayIndex:l,DisplayCount:d,MainIndex:o,MainArray:u,AccountIndex:j,AccountArray:b,SetAppState:this.SetAppState}),Object(y.jsxs)(h.d,{children:[Object(y.jsx)(h.b,{exact:!0,path:"/",children:n?Object(y.jsx)("div",{className:"App-Loading",children:Object(y.jsx)("h1",{children:"Please wait..."})}):r?null:Object(y.jsx)("div",{className:"App-Login",children:Object(y.jsx)("h1",{children:"Please Login to Continue"})})}),x.map((function(t,a){return Object(y.jsx)(h.b,{path:t.path,children:n?Object(y.jsx)("div",{className:"App-Loading",children:Object(y.jsx)("h1",{children:"Please wait..."})}):i&&0!==i.length?Object(y.jsx)(m,{Cerner:i,DisplayCount:d,DisplayIndex:l,CurrentPage:s,SetAppState:e.SetAppState}):Object(y.jsx)("div",{className:"App-Error",children:Object(y.jsx)("h1",{children:"Error Retrieveing Data"})})},a)})),r?null:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(h.b,{path:"/launch-patient",children:Object(y.jsx)(I,{})}),Object(y.jsx)(h.b,{path:"/launch-provider",children:Object(y.jsx)(L,{})})]})]}),!n&&r?Object(y.jsx)(D,{AllOptions:x,RedirectRoute:this.RedirectRoute}):null]})})}}]),n}(r.a.Component));function w(e){var t=[],n=[],a=!1;switch(e.MainArray.forEach((function(e){return t.push(e.label)})),e.AccountArray.forEach((function(t){e.Cerner&&t.value===e.Cerner[0].resourceType&&(a=!0),n.push(t.label)})),!0){case a:return Object(y.jsx)(P,{AllOptions:e.AllOptions,Dropdown:e.Dropdown,Oauth2:e.Oauth2,Patient:e.Patient,Cerner:e.Cerner,CurrentPage:e.CurrentPage,DisplayIndex:e.DisplayIndex,DisplayCount:e.DisplayCount,MainLabels:t,AccountLabels:n,PageType:"Account",PageIndex:e.AccountIndex,PageArray:e.AccountArray,SetAppState:e.SetAppState});default:return Object(y.jsx)(P,{AllOptions:e.AllOptions,Dropdown:e.Dropdown,Oauth2:e.Oauth2,Patient:e.Patient,Cerner:e.Cerner,CurrentPage:e.CurrentPage,DisplayIndex:e.DisplayIndex,DisplayCount:e.DisplayCount,MainLabels:t,AccountLabels:n,PageType:"Main",PageIndex:e.MainIndex,PageArray:e.MainArray,SetAppState:e.SetAppState})}}n(133);var M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(k,{})}),document.getElementById("root")),M()}},[[134,1,2]]]);
//# sourceMappingURL=main.b01d0531.chunk.js.map