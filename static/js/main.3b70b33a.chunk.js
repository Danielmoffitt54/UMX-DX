(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),l=n(88),s=n(89),o=n(34),u=n(95),d=n(94),p=n(7),y=n(12),j=n(23),x=n(48),b=n.n(x),h=n(20),g=n(174),f=n(169),O=n(90),C=n(1),m={patient:function(e){b.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},client:{}};m.client.ready=function(e){b.a.oauth2.ready().then((function(t){t.patient.request("Patient",{pageLimit:0,flat:!0}).then((function(n){e.SetAppState({Loading:!1,Oauth2:t,Patient:n[0]})})).catch((function(){return e.SetAppState({Loading:!1})}))})).catch((function(){return e.SetAppState({Loading:!1})}))},m.client.routeChange=function(e){var t=!1;e.Cerner.forEach((function(n){e.PrevScope.includes(n.resourceType)&&(t=!0)})),t&&(e.SetAppState({Loading:!0}),m.client.request(e))},m.client.request=function(e){b.a.client(e.Oauth2.state).patient.request(e.Page,{pageLimit:0,flat:!0}).then((function(t){var n,a=[],r=!0;t.forEach((function(e){switch(!0){default:r=!0;break;case e.status&&"entered-in-error"===e.status:case e.verificationStatus&&"entered-in-error"===e.verificationStatus:case e.substance&&"Entered In Error"===e.substance:case e.code&&"Entered In Error"===e.code.text:r=!1}r&&a.push(e)})),e.SetAppState((n={Loading:!1,Cerner:a},Object(j.a)(n,e.Property,e.Value),Object(j.a)(n,"CurrentPage",1),Object(j.a)(n,"DisplayIndex",0),n))})).catch((function(){var t;return e.SetAppState((t={Loading:!1},Object(j.a)(t,e.Property,e.Value),Object(j.a)(t,"CurrentPage",1),Object(j.a)(t,"DisplayIndex",0),t))}))},m.main={},m.main.observation=function(e){var t=m.dataType.codeableConcept(e.entry.category),n=m.dataType.codeableConcept(e.entry.code,"http://snomed.info/sct"),a=m.value.multiValue(e.entry,"effective"),r=m.dataType.date(e.entry.issued),c=m.value.multiValue(e.entry,"value"),i=m.dataType.codeableConcept(e.entry.dataAbsentReason,"http://hl7.org/fhir/data-absent-reason"),l=m.dataType.codeableConcept(e.entry.interpretation),s=m.dataType.annotation(e.entry.note),o=m.dataType.codeableConcept(e.entry.bodySite),u=m.dataType.codeableConcept(e.entry.method),d=m.value.backbone(e.entry.referenceRange),p=m.value.backbone(e.entry.component);return Object(C.jsxs)(g.a,{style:{marginBottom:"10px"},children:[Object(C.jsxs)(g.a.Header,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.resourceType||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:t||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.status||"N/A"})]}),Object(C.jsxs)(g.a.Body,{as:f.a,style:{padding:"0"},children:[r?Object(C.jsx)(g.a.Text,{as:O.a,children:"Date Recorded: ".concat(r)}):null,i?Object(C.jsx)(g.a.Text,{as:O.a,children:"Incomplete Reason: ".concat(i)}):null,o?Object(C.jsx)(g.a.Text,{as:O.a,children:"Location: ".concat(o)}):null,u?Object(C.jsx)(g.a.Text,{as:O.a,children:"Method: ".concat(u)}):null,n?Object(C.jsx)(g.a.Text,{as:O.a,children:"Report: ".concat(n)}):null,p?Object(C.jsx)(g.a.Text,{as:O.a,children:"Report: ".concat(p)}):null,c?Object(C.jsx)(g.a.Text,{as:O.a,children:"Value: ".concat(c)}):null,a?Object(C.jsx)(g.a.Text,{as:O.a,children:"Effective: ".concat(a)}):null,l?Object(C.jsx)(g.a.Text,{as:O.a,children:"Interpretation: ".concat(l)}):null,d?Object(C.jsx)(g.a.Text,{as:O.a,children:"Reference: ".concat(d)}):null]}),s?Object(C.jsx)(g.a.Footer,{as:f.a,style:{padding:"0"},children:Object(C.jsx)(g.a.Text,{as:O.a,children:"Side Note: ".concat(s)})}):null]},e.index)},m.main.condition=function(e){var t=m.dataType.codeableConcept(e.entry.category),n=m.dataType.codeableConcept(e.entry.verificationStatus),a=m.dataType.codeableConcept(e.entry.clinicalStatus),r=m.dataType.date(e.entry.dateRecorded),c=m.dataType.codeableConcept(e.entry.code),i=m.dataType.codeableConcept(e.entry.bodySite),l=m.dataType.codeableConcept(e.entry.severity),s=m.value.multiValue(e.entry,"onset"),o=m.value.multiValue(e.entry,"abatement"),u=m.dataType.codeableConcept(Object(h.getPath)(e.entry,"stage.summary")),d=m.dataType.codeableConcept(Object(h.getPath)(e.entry,"evidence.code"));return Object(C.jsxs)(g.a,{style:{marginBottom:"10px"},children:[Object(C.jsxs)(g.a.Header,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.resourceType||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:t||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:n||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:a||"N/A"})]}),Object(C.jsxs)(g.a.Body,{as:f.a,style:{padding:"0"},children:[r?Object(C.jsx)(g.a.Text,{as:O.a,children:"Date Recorded: ".concat(r)}):null,c?Object(C.jsx)(g.a.Text,{as:O.a,children:"Report: ".concat(c)}):null,i?Object(C.jsx)(g.a.Text,{as:O.a,children:"Location: ".concat(i)}):null,l?Object(C.jsx)(g.a.Text,{as:O.a,children:"Severity: ".concat(l)}):null,s?Object(C.jsx)(g.a.Text,{as:O.a,children:"Start: ".concat(s)}):null,o?Object(C.jsx)(g.a.Text,{as:O.a,children:"End: ".concat(o)}):null]}),u||d?Object(C.jsxs)(g.a.Footer,{as:f.a,style:{padding:"0"},children:[u?Object(C.jsx)(g.a.Text,{as:O.a,children:"Summary: ".concat(u)}):null,d?Object(C.jsx)(g.a.Text,{as:O.a,children:"Symptoms: ".concat(d)}):null]}):null]},e.index)},m.main.medicationstatement=function(e){var t=m.dataType.codeableConcept(e.entry.medicationCodeableConcept,"http://www.nlm.nih.gov/research/umls/rxnorm"),n=m.value.dosage(e.entry.dosage),a=m.value.wasNotTaken(e.entry.wasNotTaken),r=m.dataType.period(e.entry.effectivePeriod);return console.log("Dosage: ",n),Object(C.jsxs)(g.a,{style:{marginBottom:"10px"},children:[Object(C.jsxs)(g.a.Header,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.resourceType||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.status||"N/A"})]}),Object(C.jsxs)(g.a.Body,{as:f.a,style:{padding:"0"},children:[t?Object(C.jsx)(g.a.Text,{as:O.a,children:"Medication: ".concat(t)}):null,n?n.map((function(e,t){return Object(C.jsx)(g.a.Text,{as:O.a,children:"Dosage: "+e},t)})):null,a?Object(C.jsx)(g.a.Text,{as:O.a,children:"Taken: ".concat(a)}):null,r?Object(C.jsx)(g.a.Text,{as:O.a,children:"Period: ".concat(r)}):null]})]},e.index)},m.main.allergyintolerance=function(e){var t=m.dataType.codeableConcept(e.entry.substance,"http://snomed.info/sct"),n=m.value.criticality(e.entry.criticality);return Object(C.jsxs)(g.a,{style:{marginBottom:"10px"},children:[Object(C.jsxs)(g.a.Header,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.resourceType||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.category||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.status||"N/A"})]}),Object(C.jsxs)(g.a.Body,{as:f.a,style:{padding:"0"},children:[t?Object(C.jsx)(g.a.Text,{as:O.a,children:"Allergy: ".concat(t)}):null,n?Object(C.jsx)(g.a.Text,{as:O.a,children:"Risk: ".concat(n)}):null]})]},e.index)},m.main.patient=function(e){var t=Object(h.getPath)(e.entry,"address.0.text")||null,n=m.value.telecom(e.entry.telecom)||null;return Object(C.jsxs)(g.a,{style:{marginBottom:"10px"},children:[Object(C.jsx)(g.a.Header,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.resourceType||"N/A"})}),Object(C.jsxs)(g.a.Body,{as:f.a,style:{padding:"0"},children:[t?Object(C.jsx)(g.a.Text,{as:O.a,children:"Address: ".concat(t)}):null,n?n.map((function(e){var t=m.value.capitalize(e.use);return Object(C.jsx)(g.a.Text,{as:O.a,children:"".concat(t,": ").concat(e.value)})})):null]})]},e.index)},m.main.relatedperson=function(e){var t=Object(h.getPath)(e.entry,"name.text")||null,n=m.value.capitalize(e.entry.gender)||null,a=m.dataType.date(e.entry.birthDate)||null,r=Object(h.getPath)(e.entry,"address.0.text")||null,c=m.value.telecom(e.entry.telecom)||null;return Object(C.jsxs)(g.a,{style:{marginBottom:"10px"},children:[Object(C.jsxs)(g.a.Header,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:e.entry.resourceType||"N/A"}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:"Name: ".concat(t||"N/A")}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:"Gender: ".concat(n||"N/A")}),Object(C.jsx)(g.a.Text,{style:{margin:"0"},children:"DoB: ".concat(a||"N/A")})]}),Object(C.jsxs)(g.a.Body,{as:f.a,style:{padding:"0"},children:[r?Object(C.jsx)(g.a.Text,{as:O.a,children:"Address: ".concat(r||"N/A")}):null,c?c.map((function(e){var t=m.value.capitalize(e.use);return Object(C.jsx)(g.a.Text,{as:O.a,children:"".concat(t,": ").concat(e.value)})})):null]})]},e.index)},m.value={},m.value.backbone=function(e){if(!e)return null;var t=m.dataType.codeableConcept(e.code),n=m.dataType.multiValue(e.value,"value"),a=m.dataType.codeableConcept(e.dataAbsentReason),r=m.dataType.codeableConcept(e.interpretation),c=m.dataType.codeableConcept(e.type),i=m.dataType.codeableConcept(e.appliesTo),l=e.text;switch(!0){case t:return t;case n:return n;case a:return a;case r:return r;case c:return c;case i:return i;case l:return l;default:return null}},m.value.capitalize=function(e){return"string"!==typeof e?null:e[0].toUpperCase()+e.substring(1)},m.value.criticality=function(e){if("string"!==typeof e)return null;switch(e){case"CRITH":return"High Risk";case"string"===typeof e:return"Unable to Assess Risk";default:return null}},m.value.dosage=function(e){if(!e||0===e.length)return null;var t=[];return e.forEach((function(e){e.text&&t.push(e.text)})),0===t.length?null:t},m.value.officialName=function(e){var t=e.find((function(e){return"official"===e.use}))||e[0];return t?t.given.join(" ")+" "+t.family:null},m.value.multiValue=function(e,t){if(!e||!t)return null;var n=["".concat(t,"Quantity"),"".concat(t,"Timing"),"".concat(t,"Instant"),"".concat(t,"CodeableConcept"),"".concat(t,"Boolean"),"".concat(t,"Integer"),"".concat(t,"DateTime"),"".concat(t,"Time"),"".concat(t,"Age"),"".concat(t,"Period"),"".concat(t,"Range"),"".concat(t,"Ratio"),"".concat(t,"SampleData"),"".concat(t,"String")],a=null;return n.forEach((function(n){if(e[n])switch(n){case"".concat(t,"CodeableConcept"):return a=m.dataType.codeableConcept(e[n]);case"".concat(t,"Instant"):case"".concat(t,"Time"):case"".concat(t,"DateTime"):return a=m.dataType.date(e[n]);case"".concat(t,"Period"):return a=m.dataType.period(e[n]);case"".concat(t,"Quantity"):return a=m.dataType.quantity(e[n]);case"".concat(t,"Ratio"):return a=m.dataType.ratio(e[n]);case"".concat(t,"String"):case"".concat(t,"Integer"):return a=e[n];default:return}})),a},m.value.telecom=function(e){var t=[],n=[],a=null;return e.forEach((function(e){if(e.system&&e.value&&(a=m.dataType.phone(e.value),!t.includes(a)&&!t.includes(e.value)))switch(e.system){case"phone":return t.push(a),n.push(e);case"email":return t.push(e.value),n.push(e);default:return}})),0===n.length?null:n},m.value.wasNotTaken=function(e){return"boolean"!==typeof e?null:e?"Medicaiton has not been taken.":"Medicaiton has been taken."},m.dataType={},m.dataType.annotation=function(e){if(!e)return null;var t=m.value.multiValue(e,"author"),n=e.text;return t&&n?t+": "+n:null},m.dataType.coding=function(e,t){if(!e)return null;var n=e[0],a=t?e.find((function(e){return e.system===t})):null;switch(!0){case a&&a.display:return a.display;case n&&n.display:return n.display;default:return null}},m.dataType.codeableConcept=function(e,t){if(!e)return null;var n=e.text||null,a=m.dataType.coding(e.coding,t);switch(!0){case a:return a;default:return n}},m.dataType.date=function(e){if("string"!==typeof e)return null;var t=new Date(e).toDateString();return"Invalid Date"!==t?t:null},m.dataType.period=function(e){if(!e)return null;var t=m.dataType.date(e.start),n=m.dataType.date(e.end),a=null;return t&&(a=t),t&&n?a+=" - "+n:t&&null===n&&(a+=" - Present"),a},m.dataType.phone=function(e){if("string"!==typeof e)return null;var t=e.replace(/^[0-9]/,"");return e.split(""),t.splice(6,0,"."),t.splice(3,0,"."),t.join("")},m.dataType.quantity=function(e){if(!e)return null;var t=null;return e.value&&e.unit&&(t=e.value+" "+e.unit),e.comparator&&(t=e.comparator),t},m.dataType.ratio=function(e){if(!e)return null;var t=e.numerator,n=e.denominator,a=null;return t&&n&&(a=t+" / "+n),a},m.dataType.range=function(e){if(!e)return null;var t=e.low,n=e.high,a=null;return t&&(a=t),t&&n?a+=" - "+n:t&&null===n&&(a+=" - Present"),a};var v=m,S=n(170),A=n(173),T=n(172),P=n(175);function D(e){if(e.Patient||e.Cerner)return e.Patient&&console.log("Patient: ",e.Patient),Object(C.jsxs)(S.a,{noGutter:!0,fluid:!0,children:[e.Patient?Object(C.jsx)(g.a,{style:{margin:"0 0 5px 0"},children:Object(C.jsxs)(g.a.Body,{style:{padding:"10px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(g.a.Title,{style:{margin:"0"},children:v.value.officialName(e.Patient.name)}),Object(C.jsx)(g.a.Subtitle,{style:{margin:"0"},children:"ID: ".concat(e.Patient.id)})]}),Object(C.jsxs)(f.a,{className:"list-group-flush",style:{flexDirection:"row"},children:[Object(C.jsx)(O.a,{style:{border:"none"},children:"Gender: ".concat(v.value.capitalize(e.Patient.gender))}),Object(C.jsx)(O.a,{children:"DoB: ".concat(v.dataType.date(e.Patient.birthDate))})]})]})}):null,e.Cerner?Object(C.jsxs)(P.a,{style:{justifyContent:"center",alignItems:"center"},children:[Object(C.jsx)(P.a.Item,{children:Object(C.jsx)(P.a.Link,{as:y.b,to:"/",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Back"})}),e.PageArray.map((function(t,n){return e.PageIndex,Object(C.jsx)(P.a.Item,{children:Object(C.jsx)(P.a.Link,{as:y.b,to:t.path,onClick:function(){e.SetAppState({Loading:!0}),v.client.request({Oauth2:e.Oauth2,Page:t.value,Property:"".concat(e.PageType,"Index"),Value:n,SetAppState:e.SetAppState})},children:t.label},n)})})),Object(C.jsx)(P.a.Item,{children:Object(C.jsxs)(P.a.Link,{as:T.a,title:"Count: ".concat(e.DisplayCount),id:"navbarScrollingDropdown",children:[Object(C.jsx)(T.a.Item,{onClick:function(){return e.SetAppState({DisplayCount:25,CurrentPage:1,DisplayIndex:0})},children:"25"}),Object(C.jsx)(T.a.Item,{onClick:function(){return e.SetAppState({DisplayCount:50,CurrentPage:1,DisplayIndex:0})},children:"50"}),Object(C.jsx)(T.a.Item,{onClick:function(){return e.SetAppState({DisplayCount:100,CurrentPage:1,DisplayIndex:0})},children:"100"})]})})]}):null]})}var I=function(e){return Object(C.jsxs)(S.a,{fluid:!0,children:[e.Oauth2?Object(C.jsxs)(A.a,{style:{justifyContent:"space-between"},children:[Object(C.jsx)(A.a.Brand,{as:y.b,to:"/",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"UMX-DX App"}),Object(C.jsxs)(T.a,{title:"Menu",id:"navbarScrollingDropdown",children:[e.AllOptions.map((function(t,n){return Object(C.jsx)(T.a.Item,{as:y.b,to:t.path,onClick:function(){e.SetAppState({Loading:!0}),v.client.request({Oauth2:e.Oauth2,Page:t.value,Property:"".concat(e.PageType,"Index"),Value:n,SetAppState:e.SetAppState})},children:t.label},n)})),Object(C.jsx)(T.a.Divider,{}),Object(C.jsx)(T.a.Item,{as:y.b,to:"/",onClick:function(){return e.SetAppState({Oauth2:null,Patient:null,Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Log Out"})]})]}):Object(C.jsxs)(A.a,{style:{justifyContent:"space-between"},children:[Object(C.jsx)(A.a.Brand,{as:y.b,to:"/",onClick:function(){return e.SetAppState({Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"UMX-DX App"}),Object(C.jsx)(T.a,{title:"Login",id:"navbarScrollingDropdown",children:Object(C.jsx)(T.a.Item,{as:y.b,to:"/launch-patient",children:"Patient"})})]}),D(e)]})},N=n(171),w=function(e){return Object(C.jsx)(N.a,{className:"d-flex justify-content-around align-items-center flex-wrap m-4",children:e.AllOptions.map((function(t,n){return Object(C.jsx)(g.a,{border:"primary",className:"text-center p-4",style:{height:"75px",width:"200px"},children:Object(C.jsx)(y.b,{to:t.path,onClick:function(){return e.RedirectRoute({option:t,index:n})},children:t.label},n)})}))})};function k(e){return Object(C.jsxs)("div",{className:"Footer-Nav",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:1,DisplayIndex:0})},disabled:e.CurrentPage<=1,children:"First"}),Object(C.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.CurrentPage-1,DisplayIndex:e.DisplayIndex-e.DisplayCount})},disabled:e.CurrentPage<=1,children:"Prev"})]}),Object(C.jsx)("div",{className:"Footer-Nav-Link",children:Object(C.jsxs)("label",{className:"Footer-Label",children:[Object(C.jsx)("input",{className:"Footer-Input",type:"text",value:e.CurrentPage,onChange:function(t){return e.SetAppState({CurrentPage:t.target.value})},onKeyPress:function(t){if("Enter"===t.key){if(e.CurrentPage<=1)return e.SetAppState({DisplayIndex:0}),e.SetAppState({CurrentPage:1});if(e.CurrentPage>=e.Pages)return e.SetAppState({DisplayIndex:e.Cerner.length-e.DisplayCount}),e.SetAppState({CurrentPage:e.Pages});e.SetAppState({DisplayIndex:e.DisplayCount*(e.CurrentPage-1)})}}}),"/".concat(e.Pages)]})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.CurrentPage+1,DisplayIndex:e.DisplayIndex+e.DisplayCount})},disabled:e.CurrentPage>=e.Pages,children:"Next"}),Object(C.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){return e.SetAppState({CurrentPage:e.Pages,DisplayIndex:e.DisplayCount*(e.Pages-1)})},disabled:e.CurrentPage>=e.Pages,children:"Last"})]})]})}var L=function(e){var t=[],n=null,a=Math.ceil(e.Cerner.length/e.DisplayCount);e.Cerner[0].resourceType&&(n=e.Cerner[0].resourceType.toLowerCase());for(var r=0;r<e.Cerner.length&&t.length<e.DisplayCount;r++)r>=e.DisplayIndex&&t.push(e.Cerner[r]);return t.length>0&&console.log("Display: ",t),Object(C.jsxs)(S.a,{children:[Object(C.jsx)(S.a,{children:t.map((function(e,t){return v.main[n]({index:t,entry:e})}))}),a>1?Object(C.jsx)(k,{Cerner:e.Cerner,Pages:a,DisplayCount:e.DisplayCount,DisplayIndex:e.DisplayIndex,CurrentPage:e.CurrentPage,SetAppState:e.SetAppState,SetParentState:e.SetParentState}):null]})},R=function(){return v.patient(),Object(C.jsx)("div",{className:"App-Launch",children:Object(C.jsx)("h1",{children:"Please wait..."})})},M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Dropdown:null,Oauth2:null,Patient:null,Cerner:null,CurrentPage:0,DisplayIndex:0,DisplayCount:25,MainIndex:0,MainArray:[{label:"Observations",value:"Observation",path:"/observations"},{label:"Conditions",value:"Condition",path:"/conditions"},{label:"Medications",value:"MedicationStatement",path:"/medications"},{label:"Allergies",value:"AllergyIntolerance",path:"/allergies"}],AccountIndex:0,AccountArray:[{label:"Account",value:"Patient",path:"/account"},{label:"Relatives",value:"RelatedPerson",path:"/relatives"}]},a.SetAppState=a.SetAppState.bind(Object(o.a)(a)),a.RedirectRoute=a.RedirectRoute.bind(Object(o.a)(a)),a}return Object(s.a)(n,[{key:"SetAppState",value:function(e){this.setState(e)}},{key:"RedirectRoute",value:function(e){var t=[],n=[],a=this.state,r=a.Oauth2,c=a.MainArray,i=a.AccountArray;c.forEach((function(e){return t.push(e.label)})),i.forEach((function(e){return n.push(e.label)})),this.setState({Loading:!0}),n.includes(e.option.label)?v.client.request({Oauth2:r,Page:e.option.value,Property:"AccountIndex",Value:e.index,SetAppState:this.SetAppState}):v.client.request({Oauth2:r,Page:e.option.value,Property:"MainIndex",Value:e.index,SetAppState:this.SetAppState}),p.a,e.option.path}},{key:"componentDidMount",value:function(){this.state.Cerner||(v.client.ready({SetAppState:this.SetAppState}),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.Loading,a=t.Dropdown,r=t.Oauth2,c=t.Patient,i=t.Cerner,l=t.CurrentPage,s=t.DisplayIndex,o=t.DisplayCount,u=t.MainIndex,d=t.MainArray,j=t.AccountIndex,x=t.AccountArray,b=d.concat(x);return i&&console.log("Cerner: ",i),Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(y.a,{basename:"/UMX-DX",children:[Object(C.jsx)(B,{AllOptions:b,Dropdown:a,Oauth2:r,Patient:c,Cerner:i,CurrentPage:l,DisplayIndex:s,DisplayCount:o,MainIndex:u,MainArray:d,AccountIndex:j,AccountArray:x,SetAppState:this.SetAppState}),Object(C.jsxs)(p.d,{children:[Object(C.jsx)(p.b,{exact:!0,path:"/",children:n?Object(C.jsx)("div",{className:"App-Loading",children:Object(C.jsx)("h1",{children:"Please wait..."})}):r?null:Object(C.jsx)("div",{className:"App-Login",children:Object(C.jsx)("h1",{children:"Please Login to Continue"})})}),b.map((function(t,a){return Object(C.jsx)(p.b,{path:t.path,children:n?Object(C.jsx)("div",{className:"App-Loading",children:Object(C.jsx)("h1",{children:"Please wait..."})}):i&&0!==i.length?Object(C.jsx)(L,{Cerner:i,DisplayCount:o,DisplayIndex:s,CurrentPage:l,SetAppState:e.SetAppState}):Object(C.jsx)("div",{className:"App-Error",children:Object(C.jsx)("h1",{children:"Error Retrieveing Data"})})},a)})),r?null:Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(p.b,{path:"/launch-patient",children:Object(C.jsx)(R,{})})})]}),!n&&r?Object(C.jsx)(w,{AllOptions:b,RedirectRoute:this.RedirectRoute}):null]})})}}]),n}(r.a.Component);function B(e){var t=[],n=[],a=!1;switch(e.MainArray.forEach((function(e){return t.push(e.label)})),e.AccountArray.forEach((function(t){e.Cerner&&t.value===e.Cerner[0].resourceType&&(a=!0),n.push(t.label)})),!0){case a:return Object(C.jsx)(I,{AllOptions:e.AllOptions,Dropdown:e.Dropdown,Oauth2:e.Oauth2,Patient:e.Patient,Cerner:e.Cerner,CurrentPage:e.CurrentPage,DisplayIndex:e.DisplayIndex,DisplayCount:e.DisplayCount,MainLabels:t,AccountLabels:n,PageType:"Account",PageIndex:e.AccountIndex,PageArray:e.AccountArray,SetAppState:e.SetAppState});default:return Object(C.jsx)(I,{AllOptions:e.AllOptions,Dropdown:e.Dropdown,Oauth2:e.Oauth2,Patient:e.Patient,Cerner:e.Cerner,CurrentPage:e.CurrentPage,DisplayIndex:e.DisplayIndex,DisplayCount:e.DisplayCount,MainLabels:t,AccountLabels:n,PageType:"Main",PageIndex:e.MainIndex,PageArray:e.MainArray,SetAppState:e.SetAppState})}}n(87);var E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,176)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(87),i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(M,{})}),document.getElementById("root")),E()},87:function(e,t,n){}},[[164,1,2]]]);
//# sourceMappingURL=main.3b70b33a.chunk.js.map