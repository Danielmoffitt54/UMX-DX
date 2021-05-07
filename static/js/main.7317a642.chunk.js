(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(66),i=n.n(r),s=n(8),o=n(9),u=n(15),d=n(11),l=n(10),h=n(12),j=n(2),p=n(0),b=function(e){return Object(p.jsxs)("header",{className:"App-Header",children:[Object(p.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(p.jsx)("div",{className:"Header-Navbar",children:Object(p.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Account"})}):Object(p.jsxs)("div",{className:"Header-Navbar",children:[Object(p.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Patient"}),Object(p.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Provider"})]})]})},O=n(16),f=n.n(O),x={patient:{}};x.patient.launch=function(e){f.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},x.patient.ready=function(e){f.a.oauth2.ready().then((function(t){t.request("Patient").then((function(n){return e({Loading:!1,Oauth2:t,Cerner:n})})).catch((function(){return e({Loading:!1})}))})).catch((function(){return e({Loading:!1})}))},x.provider={},x.provider.launch=function(e){f.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},x.provider.ready=function(e){f.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(){return e({Loading:!1})}))},x.client={},x.client.request=function(e,t,n){f.a.client(e.state).request(n).then((function(e){return t({Loading:!1,Data:e})})).catch((function(){return t({Loading:!1})}))};var v=x,m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Data:null},a.setMainState=a.setMainState.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.Oauth2,n=e.MainArray,a=e.MainIndex;!this.state.Data&&t&&(v.client.request(t,this.setMainState,n[a]),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.props,t=e.Oauth2,n=e.MainArray,a=e.MainIndex,c=e.SetAppState,r=this.state,i=r.Loading,s=r.Data;return s&&console.log("Data:",s),t?i?Object(p.jsx)("div",{className:"App-Main",children:Object(p.jsx)("h1",{children:"Please wait..."})}):Object(p.jsxs)("div",{className:"App-Main",children:[Object(p.jsx)("ul",{className:"Main-Nav",children:n.map((function(e,t){return a===t?Object(p.jsx)("li",{className:"Main-Nav-Link Main-Nav-Link-Active",onClick:function(){return c({MainIndex:t})},children:e},t):Object(p.jsx)("li",{className:"Main-Nav-Link",onClick:function(){return c({MainIndex:t})},children:e},t)}))}),Object(p.jsx)("div",{className:"Main-Table"})]}):Object(p.jsx)("div",{className:"App-Main",children:Object(p.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(c.a.Component),A=Object(j.f)((function(){return v.patient.launch(),Object(p.jsx)("div",{className:"App-Launch",children:Object(p.jsx)("h1",{children:"Please wait..."})})})),N=Object(j.f)((function(){return v.provider.launch(),Object(p.jsx)("div",{className:"App-Launch",children:Object(p.jsx)("h1",{children:"Please wait..."})})})),g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.Data,t=[];return e.map((function(e){return Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case t.includes(e):return;default:return t.push(e)}}))})),Object(p.jsx)("table",{className:"MiniTable",children:Object(p.jsx)("tbody",{className:"MiniTable-Body",children:e.map((function(e,n){return Object(p.jsx)("tr",{className:"MiniTable-Body-Row",children:t.map((function(t,n){switch(!0){case"relationship"===t:return Object(p.jsx)("td",{children:e[t][0].text},n);case"name"===t:case"address"===t:return Object(p.jsx)("td",{children:e[t].text},n);case"string"===typeof e[t]:return Object(p.jsx)("td",{children:e[t]},n);default:return null}}))},n)}))})})}}]),n}(c.a.Component),y=(c.a.Component,function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).RenderTable=function(e,t){t.resource.resourceType,t.resource.gender,t.resource.birthDate,t.resource.address[0].text,t.resource.communication[0].language.coding[0].display,t.resource.maritalStatus.text;return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"An error has occured."})})},a.state={Loading:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Cerner,n=e.AccountArray,a=e.AccountIndex,c=e.SetAppState,r=this.state.Loading,i=t.entry[0];return r?Object(p.jsx)("div",{className:"App-Account",children:Object(p.jsx)("h1",{children:"Please wait..."})}):Object(p.jsxs)("div",{className:"App-Account",children:[Object(p.jsx)("ul",{className:"Account-Nav",children:n.map((function(e,t){return a===t?Object(p.jsx)("li",{className:"Account-Nav-Link Account-Nav-Link-Active",onClick:function(){return c({AccountIndex:t})},children:e},t):Object(p.jsx)("li",{className:"Account-Nav-Link",onClick:function(){return c({AccountIndex:t})},children:e},t)}))}),this.RenderTable(n[a],i)]})}}]),n}(c.a.Component)),M=(n(131),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Oauth2:null,Cerner:null,AccountArray:["Patient","Person","RelatedPerson","CarePlan"],MainArray:["Observation","Condition","MedicationStatement","AllergyIntolerance"],AccountIndex:0,MainIndex:0},a.setAppState=a.setAppState.bind(Object(u.a)(a)),a}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.state.Cerner||(v.patient.ready(this.setAppState),v.provider.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Oauth2,a=e.Cerner,c=e.AccountArray,r=e.MainArray,i=e.AccountIndex,s=e.MainIndex;return n&&console.log("Oauth2:",n),a&&console.log("Cerner:",a),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(h.a,{basename:"/UMX-DX",children:[t?Object(p.jsx)("header",{className:"App-Header"}):Object(p.jsx)(b,{Cerner:a}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",children:t?Object(p.jsx)("div",{className:"App-Main",children:Object(p.jsx)("h1",{children:"Please wait..."})}):Object(p.jsx)(m,{Oauth2:n,MainArray:r,MainIndex:s,SetAppState:this.setAppState})}),Object(p.jsx)(j.a,{path:"/launch-patient",children:Object(p.jsx)(A,{})}),Object(p.jsx)(j.a,{path:"/launch-provider",children:Object(p.jsx)(N,{})}),Object(p.jsx)(j.a,{path:"/account",children:Object(p.jsx)(y,{Cerner:a,AccountArray:c,AccountIndex:i,SetAppState:this.setAppState})})]})]})})}}]),n}(c.a.Component)),L=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))});i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),L()}},[[133,1,2]]]);
//# sourceMappingURL=main.7317a642.chunk.js.map