(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(66),i=a.n(r),s=a(8),o=a(9),l=a(16),d=a(11),u=a(10),h=a(12),j=a(2),b=a(0),p=function(e){return Object(b.jsxs)("header",{className:"App-Header",children:[Object(b.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Account"})}):Object(b.jsxs)("div",{className:"Header-Navbar",children:[Object(b.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Patient"}),Object(b.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Provider"})]})]})},O=a(14),f=a.n(O),x={patient:{}};x.patient.launch=function(e){f.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},x.patient.ready=function(e){f.a.oauth2.ready().then((function(t){t.request("Patient").then((function(a){return e({Loading:!1,Oauth2:t,Cerner:a})})).catch((function(){return e({Loading:!1})}))})).catch((function(){return e({Loading:!1})}))},x.provider={},x.provider.launch=function(e){f.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},x.provider.ready=function(e){f.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(){return e({Loading:!1})}))},x.client={},x.client.refresh=function(e,t){f.a.client(e.state).refreshIfNeeded().then(console.log,console.error)},x.client.request=function(e,t,a){f.a.client(e.state).request(a).then(console.log,console.error)};var m=x,v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={Loading:!1,Data:null},n.setMainState=n.setMainState.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){!this.state.Data&&this.props.Cerner&&(m.client.request(this.setMainState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.props,t=e.Cerner,a=e.MainArray,n=e.MainIndex,c=e.SetAppState,r=this.state,i=r.Loading,s=r.Data;return s&&console.log("Data:",s),t?i?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsxs)("div",{className:"App-Main",children:[Object(b.jsx)("ul",{className:"Main-Nav",children:a.map((function(e,t){return n===t?Object(b.jsx)("li",{className:"Main-Nav-Link Main-Nav-Link-Active",onClick:function(){return c({MainIndex:t})},children:e},t):Object(b.jsx)("li",{className:"Main-Nav-Link",onClick:function(){return c({MainIndex:t})},children:e},t)}))}),Object(b.jsx)("div",{className:"Main-Table"})]}):Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),a}(c.a.Component),A=Object(j.f)((function(){return m.patient.launch(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),N=Object(j.f)((function(){return m.provider.launch(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.Data,t=[];return e.map((function(e){return Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case t.includes(e):return;default:return t.push(e)}}))})),Object(b.jsx)("table",{className:"MiniTable",children:Object(b.jsx)("tbody",{className:"MiniTable-Body",children:e.map((function(e,a){return Object(b.jsx)("tr",{className:"MiniTable-Body-Row",children:t.map((function(t,a){switch(!0){case"relationship"===t:return Object(b.jsx)("td",{children:e[t][0].text},a);case"name"===t:case"address"===t:return Object(b.jsx)("td",{children:e[t].text},a);case"string"===typeof e[t]:return Object(b.jsx)("td",{children:e[t]},a);default:return null}}))},a)}))})})}}]),a}(c.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.Title,n=t.Data,c=[];return n.map((function(e){return Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case c.includes(e):return;default:return c.push(e)}}))})),Object(b.jsxs)("table",{className:"Table",children:[Object(b.jsxs)("thead",{className:"Table-Head",children:[a?Object(b.jsx)("tr",{children:Object(b.jsx)("th",{className:"Table-Title",children:this.FormatTitle(a)})}):null,Object(b.jsx)("tr",{className:"Table-Head-Row",children:c.map((function(t,a){switch(!0){case"display"===t:return Object(b.jsx)("th",{className:"Table-Head-Data"},a);case!isNaN(t):return Object(b.jsx)("th",{className:"Table-Head-Data",children:"".concat(parseInt(t)+1,".)")},a);default:return Object(b.jsx)("th",{className:"Table-Head-Data",children:e.FormatTitle(t)},a)}}))})]}),Object(b.jsx)("tbody",{className:"Table-Body",children:n.map((function(e,t){return Object(b.jsx)("tr",{className:"Table-Body-Row",children:c.map((function(a,n){switch(!0){case"display"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:"".concat(t+1,".) ").concat(e[a])},n);case"relationship"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a][0].text},n);case"name"===a:case"address"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a].text},n);case"string"===typeof e[a]:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a]},n);case"object"===typeof e[a]:return Object(b.jsx)("td",{className:"Table-Body-Data",children:Object(b.jsx)(y,{Data:e[a]})},n);default:return null}}))},t)}))})]})}}]),a}(c.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).RenderTable=function(e,t){var a=[{account:t.resource.resourceType,gender:t.resource.gender,birthDate:t.resource.birthDate,address:t.resource.address[0].text,language:t.resource.communication[0].language.coding[0].display,maritalStatus:t.resource.maritalStatus.text}];switch(!0){case"Personal"===e:return Object(b.jsx)(g,{Title:e,Data:a});case"Care Provider"===e&&t.resource.careProvider.length>0:return Object(b.jsx)(g,{Title:e,Data:t.resource.careProvider});case"Communication"===e&&t.resource.telecom.length>0:return Object(b.jsx)(g,{Title:e,Data:t.resource.telecom});case"Contact"===e&&t.resource.contact.length>0:return Object(b.jsx)(g,{Title:e,Data:t.resource.contact});default:return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"An error has occured."})})}},n.state={Loading:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.Cerner,a=e.AccountArray,n=e.AccountIndex,c=e.SetAppState,r=this.state.Loading,i=t.entry[0];return r?Object(b.jsx)("div",{className:"App-Account",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsxs)("div",{className:"App-Account",children:[Object(b.jsx)("ul",{className:"Account-Nav",children:a.map((function(e,t){return n===t?Object(b.jsx)("li",{className:"Account-Nav-Link Account-Nav-Link-Active",onClick:function(){return c({AccountIndex:t})},children:e},t):Object(b.jsx)("li",{className:"Account-Nav-Link",onClick:function(){return c({AccountIndex:t})},children:e},t)}))}),this.RenderTable(a[n],i)]})}}]),a}(c.a.Component),T=(a(131),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={Loading:!1,Oauth2:null,Cerner:null,AccountArray:["Personal","Care Provider","Communication","Contact"],MainArray:["Observation","Tab2","Tab3"],AccountIndex:0,MainIndex:0},n.setAppState=n.setAppState.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.state.Cerner||(m.patient.ready(this.setAppState),m.provider.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,a=e.Oauth2,n=e.Cerner,c=e.AccountArray,r=e.MainArray,i=e.AccountIndex,s=e.MainIndex;return a&&console.log("Oauth2:",a),n&&console.log("Cerner:",n),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{basename:"/UMX-DX",children:[t?Object(b.jsx)("header",{className:"App-Header"}):Object(b.jsx)(p,{Cerner:n}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:t?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsx)(v,{Cerner:n,MainArray:r,MainIndex:s,SetAppState:this.setAppState})}),Object(b.jsx)(j.a,{path:"/launch-patient",children:Object(b.jsx)(A,{})}),Object(b.jsx)(j.a,{path:"/launch-provider",children:Object(b.jsx)(N,{})}),Object(b.jsx)(j.a,{path:"/account",children:Object(b.jsx)(C,{Cerner:n,AccountArray:c,AccountIndex:i,SetAppState:this.setAppState})})]})]})})}}]),a}(c.a.Component)),M=(a(132),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))});i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),M()}},[[133,1,2]]]);
//# sourceMappingURL=main.378d6c93.chunk.js.map