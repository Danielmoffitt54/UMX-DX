import FHIR from 'fhirclient';

const Events = {};

// Patient events
Events.patient = {};

Events.patient.launch = (props) => {
    FHIR.oauth2.authorize({
        client_id: "efef2e22-0d52-4bfa-ab53-b44456625f2a",
        scope: "user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",
        iss: "https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
        redirectUri: "https://danielmoffitt54.github.io/UMX-DX/"
    }).catch(console.error);
}

Events.patient.ready = (props) => {
    // Using the values from the authorize return, perform a request using the props Param value.
    // Then always set loading state to false, and if successful set Oauth2 to the authorize return and Cerner to the request return.
    FHIR.oauth2.ready()
        .then(client => {
            client.patient.request(props.Param)
                .then(res => props.SetAppState({ Loading: false, Oauth2: client, Cerner: res }))
                .catch(() => props.SetAppState({ Loading: false }));
        }).catch(() => props.SetAppState({ Loading: false }));
}

// Provider events
Events.provider = {};

Events.provider.launch = (props) => {
    FHIR.oauth2.authorize({
        client_id: "4cfb74e7-deb2-4151-9c22-16eba93fd1ec",
        scope: "patient/Patient.read patient/Observation.read launch online_access openid profile",
        redirectUri: "https://danielmoffitt54.github.io/UMX-DX/"
    }).then(console.log).catch(console.error);
}

Events.provider.ready = (props) => {
    FHIR.oauth2.ready()
        .then(client => client.request("Provider"))
        .then(res =>  props.SetAppState({ Loading: false, Cerner: res }))
        .catch(() => props.SetAppState({ Loading: false }));
}

// Client Events
Events.client = {};

// Events.client.refresh = (Oauth2, setComponentState) => {
//     const client = FHIR.client(Oauth2.state);

//     client.refreshIfNeeded()
//         .then(console.log, console.error);
// }

Events.client.request = (props) => {
    // Using the current Oauth2 state, perform a request for the route's array at a certain index.
    // Then update the Cerner state, the route's index state, and reset the current display back to 0.
    const client = FHIR.client(props.Oauth2.state);
    client.patient.request(props.Page)
        .then(res => props.SetAppState({ Cerner: res, [props.State]: props.Value, DisplayIndex: 0 }))
        .catch(console.error);
}

Events.client.routeChange = (props) => {
    // Test to see if the current Cerner state has another route's resource type.
    // If so, update the Cerner state.
    let newPage = false;
    props.Cerner.entry.forEach(entry => {
        if (props.PrevScope.includes(entry.resource.resourceType)) newPage = true;
    });
    if (newPage) Events.client.request(props);
}

export default Events;