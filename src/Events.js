import FHIR from 'fhirclient';
import { getPath } from 'fhirclient/lib/lib';
import { 
    Card, 
    ListGroup,
    ListGroupItem 
} from 'react-bootstrap';

const Events = {};

// Launch Events

Events.patient = (props) => {
    FHIR.oauth2.authorize({
        client_id: "efef2e22-0d52-4bfa-ab53-b44456625f2a",
        scope: "user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",
        iss: "https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
        redirectUri: "https://danielmoffitt54.github.io/UMX-DX/"
    }).catch(console.error);
}

// Client Events
Events.client = {};

Events.client.ready = (props) => {
    // Using the values from the authorize return, perform a request using the props Param value.
    // Then always set loading state to false, and if successful set Oauth2 to the authorize return and Cerner to the request return.
    FHIR.oauth2.ready()
        .then(client => {
            client.patient.request("Patient", {
                pageLimit: 0,
                flat: true
            }).then(res => {
                props.SetAppState({ Loading: false, Oauth2: client, Patient: res[0] });
            }).catch(() => props.SetAppState({ Loading: false }));
        }).catch(() => props.SetAppState({ Loading: false }));
}

Events.client.routeChange = (props) => {
    // Test to see if the current Cerner state has another route's resource type.
    // If so, update the Cerner state.
    let newPage = false;
    props.Cerner.forEach(entry => {
        if (props.PrevScope.includes(entry.resourceType)) newPage = true;
    });
    if (newPage) {
        props.SetAppState({ Loading: true });
        Events.client.request(props);
    }
}

Events.client.request = (props) => {
    // Using the current Oauth2 state, perform a request for the route's array at a certain index.
    // Then update the Cerner state, the route's index state, and reset the current display back to 0.
    const client = FHIR.client(props.Oauth2.state);
    client.patient.request(props.Page, {
        pageLimit: 0,
        flat: true
    })
        .then(response => {
            const newRes = [];
            let addEntry = true;
            response.forEach(res => {
                switch (true) {
                    default:
                        addEntry = true;
                        break;
                    case (res.status && res.status === "entered-in-error"):
                    case (res.verificationStatus && res.verificationStatus === "entered-in-error"):
                    case (res.substance && res.substance === "Entered In Error"):
                    case (res.code && res.code.text === "Entered In Error"):
                        addEntry = false;
                        break;
                }
                if (addEntry) newRes.push(res);
            });
            props.SetAppState({ Loading: false, Cerner: newRes, [props.Property]: props.Value, CurrentPage: 1, DisplayIndex: 0 });
        }).catch(() => props.SetAppState({ Loading: false, [props.Property]: props.Value, CurrentPage: 1, DisplayIndex: 0 }));
}

// // Table Head Events
// Events.thead = {};

// Events.thead.observation = () => {
//     return <tr>
//         <th>Issued Date</th>
//         <th>Category</th>
//         <th>Report</th>
//         <th>Context</th>
//         <th>Status</th>
//     </tr>
// }

// Events.thead.condition = () => {
//     return <tr>
//         <th>Patient</th>
//         <th>Category</th>
//         <th>Report</th>
//         <th>Verification Status</th>
//         <th>Clinical Status</th>
//         <th>Recorded</th>
//         <th>Dates</th>
//     </tr>
// }

// Events.thead.medicationstatement = () => {
//     return <tr>
//         <th>Recorder</th>
//         <th>Patient</th>
//         <th>Medication</th>
//         <th>Dosage</th>
//         <th>Status</th>
//         <th>Taken</th>
//         <th>Dates</th>
//     </tr>
// }

// Events.thead.allergyintolerance = () => {
//     return <tr>
//         <th>Recorder</th>
//         <th>Patient</th>
//         <th>Category</th>
//         <th>Substance</th>
//         <th>Criticality</th>
//         <th>Status</th>
//     </tr>
// }

// Events.thead.patient = () => {
//     return <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Gender</th>
//         <th>Birth Date</th>
//         <th>Marital Status</th>
//     </tr>
// }

// Events.thead.relatedperson = () => {
//     return <tr>
//         <th>Patient</th>
//         <th>Person</th>
//         <th>Gender</th>
//         <th>Birth Date</th>
//     </tr>
// }

// // Table Body Events
// Events.tbody = {};

// Events.tbody.observation = (props) => {
//     const issued = new Date(props.entry.issued),
//         report = Events.value.system(getPath(props.entry, "code.coding"), "http://snomed.info/sct", getPath(props.entry, "code.text") || "Report Error"),
//         addReport = Events.value.system(getPath(props.entry ,"valueCodeableConcept.coding"), "http://snomed.info/sct", getPath(props.entry, "valueCodeableConcept.text") || "N/A"),
//         addQty = getPath(props.entry, "valueQuantity.value") || "N/A",
//         addUnit = getPath(props.entry, "valueQuantity.unit") || "N/A",
//         absentReport = Events.value.system(getPath(props.entry, "dataAbsentReason.coding"), "http://hl7.org/fhir/data-absent-reason", getPath(props.entry, "dataAbsentReason.text") || "Absent Report");

//     let context = addReport;
//     if (addQty !== "N/A") context = addQty;
//     if (addQty !== "N/A" && addUnit !== "N/A") context = `${addQty} ${addUnit}`;

//     return <tr key={props.index}>
//         <td>{issued.toDateString() || "N/A"}</td>
//         <td>{props.entry.category.text || "N/A"}</td>
//         <td>{props.entry.absentReport ? absentReport : report }</td>
//         <td>{context}</td>
//         <td>{props.entry.status || "N/A"}</td>
//     </tr>
// }

// Events.tbody.condition = (props) => {
//     const recorded = new Date(props.entry.dateRecorded),
//         onset = new Date(props.entry.onsetDateTime),
//         abatement = new Date(props.entry.onsetDateTime);

//     return <tr key={props.index}>
//         <td>{props.entry.patient.display || "N/A"}</td>
//         <td>{props.entry.category.text || "N/A"}</td>
//         <td>{props.entry.code.text || "N/A"}</td>
//         <td>{props.entry.verificationStatus || "N/A"}</td>
//         <td>{props.entry.clinicalStatus || "N/A"}</td>
//         <td>{recorded.toDateString() || "N/A"}</td>
//         <td>{abatement === "Invalid Date" ? `${onset.toDateString()} - Present` : `${onset.toDateString()} - ${abatement.toDateString()}` || "N/A"}</td>
//     </tr>
// }

// Events.tbody.medicationstatement = (props) => {
//     const medication = Events.value.system(getPath(props.entry, "medicationCodeableConcept.coding") || getPath(props.entry, "medicationCodeableConcept.code.coding"), "http://www.nlm.nih.gov/research/umls/rxnorm", getPath(props.entry, "medicationCodeableConcept.text") || "Unnamed Medication(TM)"),
//         taken = getPath(props.entry, "wasNotTaken") ? "No" : "Yes",
//         start = new Date(getPath(props.entry, "effectivePeriod.start")),
//         end = new Date(getPath(props.entry, "effectivePeriod.end"));

//     return <tr key={props.index}>
//         <td>{getPath(props.entry, "informationSource.display") || "N/A"}</td>
//         <td>{props.entry.patient.display || "N/A"}</td>
//         <td>{medication || "N/A"}</td>
//         <td>{getPath(props.entry, "dosage.0.text") || "N/A"}</td>
//         <td>{props.entry.status || "N/A"}</td>
//         <td>{taken || "N/A"}</td>
//         <td>{end === "Invalid Date" ? `${start.toDateString()} - Present` : `${start.toDateString()} - ${end.toDateString()}` || "N/A"}</td>
//     </tr>
// }

// Events.tbody.allergyintolerance = (props) => {
//     const allergy = Events.value.system(getPath(props.entry, "substance.coding") || getPath(props.entry, "substance.code.coding"), "http://snomed.info/sct", props.entry.substance.text || "Unnamed Allergy"),
//         criticality = props.entry.criticality === "CRITH" ? "High Risk" : "None";

//     return <tr>
//         <td>{getPath(props.entry, "recorder.display") || "N/A"}</td>
//         <td>{getPath(props.entry, "patient.display") || "N/A"}</td>
//         <td>{props.entry.category || "N/A"}</td>
//         <td>{allergy || "N/A"}</td>
//         <td>{criticality || "N/A"}</td>
//         <td>{props.entry.status || "N/A"}</td>
//     </tr>
// }

// Events.tbody.patient = (props) => {
//     const maritalStatus = Events.value.system(getPath(props.entry, "maritalStatus.coding") || getPath(props.entry, "maritalStatus.code.coding"), "http://hl7.org/fhir/v3/Marital", props.entry.maritalStatus.text || "Unavailable"),
//         birthDate = new Date(props.entry.birthDate);

//     return <tr key={props.index}>
//         <td>{props.entry.id || "N/A"}</td>
//         <td>{Events.value.officialName(props.entry.name)}</td>
//         <td>{props.entry.gender || "N/A"}</td>
//         <td>{birthDate.toDateString() || "N/A"}</td>
//         <td>{maritalStatus || "N/A"}</td>
//     </tr>
// }

// Events.tbody.relatedperson = (props) => {
//     const birthDate = new Date(props.entry.birthDate);

//     return <tr key={props.index}>
//         <td>{props.entry.patient.display || "N/A"}</td>
//         <td>{props.entry.name.text || "N/A"}</td>
//         <td>{props.entry.gender || "N/A"}</td>
//         <td>{birthDate.toDateString() || "N/A"}</td>
//     </tr>
// }


// Main Events
Events.main = {};

Events.main.observation = (props) => {
    const status = Events.value.capitalize(props.entry.status),
        category = Events.dataType.codeableConcept(props.entry.category),
        code = Events.dataType.codeableConcept(props.entry.code, "http://snomed.info/sct"),
        effective = Events.value.multiValue(props.entry, "effective"),
        issued = Events.dataType.date(props.entry.issued),
        value = Events.value.multiValue(props.entry, "value"),
        absent = Events.dataType.codeableConcept(props.entry.dataAbsentReason, "http://hl7.org/fhir/data-absent-reason"),
        inter = Events.dataType.codeableConcept(props.entry.interpretation),
        note = Events.dataType.annotation(props.entry.note),
        bodySite = Events.dataType.codeableConcept(props.entry.bodySite),
        method = Events.dataType.codeableConcept(props.entry.method),
        refRange = Events.value.backbone(props.entry.referenceRange),
        component = Events.value.backbone(props.entry.component);

    return <Card key={props.index} style={{ marginBottom: '10px' }}>
        <Card.Header
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {category ? (
                <Card.Text style={{ margin: '0' }}>{`Observations: ${category}`}</Card.Text>
            ) : (
                <Card.Text style={{ margin: '0' }}>Observations</Card.Text>
            )}
            <Card.Text style={{ margin: '0' }}>{`Status: ${status || "N/A"}`}</Card.Text>
        </Card.Header>
        <Card.Body 
            as={ListGroup}
            style={{ padding: "0" }}
        >
            {issued ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Date Recorded: ${issued}`}</Card.Text> : null }
            {absent ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Incomplete Reason: ${absent}`}</Card.Text> : null }
            {bodySite ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Location: ${bodySite}`}</Card.Text> : null }
            {method ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Method: ${method}`}</Card.Text> : null }
            {code ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Report: ${code}`}</Card.Text> : null }
            {component ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Report: ${component}`}</Card.Text> : null }
            {value ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Value: ${value}`}</Card.Text> : null }
            {effective ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Effective: ${effective}`}</Card.Text> : null }
            {inter ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Interpretation: ${inter}`}</Card.Text> : null }
            {refRange ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Reference: ${refRange}`}</Card.Text> : null }
        </Card.Body>
        {note ? (
            <Card.Footer
                as={ListGroup}
                style={{ padding: "0" }}
            >
                <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Side Note: ${note}`}</Card.Text>
            </Card.Footer>
        ): null }
    </Card>
}

Events.main.condition = (props) => {
    const category = Events.dataType.codeableConcept(props.entry.category),
        verStatus = Events.value.capitalize(props.entry.verificationStatus),
        clinStatus = Events.value.capitalize(props.entry.clinicalStatus),
        recorded = Events.dataType.date(props.entry.dateRecorded),
        code = Events.dataType.codeableConcept(props.entry.code),
        bodySite = Events.dataType.codeableConcept(props.entry.bodySite),
        severity = Events.dataType.codeableConcept(props.entry.severity),
        onset = Events.value.multiValue(props.entry, 'onset'),
        abatement = Events.value.multiValue(props.entry, 'abatement'),
        summary = Events.dataType.codeableConcept(getPath(props.entry, 'stage.summary')),
        evidence = Events.dataType.codeableConcept(getPath(props.entry, 'evidence.code'));

    return <Card key={props.index} style={{ marginBottom: '10px' }}>
        <Card.Header
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {category ? (
                <Card.Text style={{ margin: '0' }}>{`Conditions: ${category}`}</Card.Text>
            ) : (
                <Card.Text style={{ margin: '0' }}>Conditions</Card.Text>
            )}
            <div style={{ display: 'flex' }}>
                <Card.Text style={{ margin: '0' }}>{`Verify: ${verStatus || "N/A"}`}</Card.Text>
                <Card.Text style={{ margin: '0 0 0 8px' }}>{`Clinical: ${clinStatus || "N/A"}`}</Card.Text>
            </div>
        </Card.Header>
        <Card.Body 
            as={ListGroup}
            style={{ padding: "0" }}
        >
            {recorded ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Date Recorded: ${recorded}`}</Card.Text> : null }
            {code ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Report: ${code}`}</Card.Text> : null }
            {bodySite ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Location: ${bodySite}`}</Card.Text> : null }
            {severity ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Severity: ${severity}`}</Card.Text> : null }
            {onset ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Start: ${onset}`}</Card.Text> : null }
            {abatement ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`End: ${abatement}`}</Card.Text> : null }
        </Card.Body>
        {summary || evidence ? (
            <Card.Footer
                as={ListGroup}
                style={{ padding: "0" }}
            >
                {summary ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Summary: ${summary}`}</Card.Text> : null }
                {evidence ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Symptoms: ${evidence}`}</Card.Text> : null }
            </Card.Footer>
        ): null }
    </Card>
}

Events.main.medicationstatement = (props) => {
    const status = Events.value.capitalize(props.entry.status),
        medication = Events.dataType.codeableConcept(props.entry.medicationCodeableConcept, "http://www.nlm.nih.gov/research/umls/rxnorm"),
        dosage = Events.value.dosage(props.entry.dosage),
        taken = Events.value.wasNotTaken(props.entry.wasNotTaken),
        effperiod = Events.dataType.period(props.entry.effectivePeriod);

    console.log("Dosage: ", dosage);

    return <Card key={props.index} style={{ marginBottom: '10px' }}>
        <Card.Header
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Card.Text style={{ margin: '0' }}>Medications</Card.Text>
            <Card.Text style={{ margin: '0' }}>{`Status: ${status || "N/A"}`}</Card.Text>
        </Card.Header>
        <Card.Body 
            as={ListGroup}
            style={{ padding: "0" }}
        >
            {medication ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Name: ${medication}`}</Card.Text> : null }
            {dosage ? dosage.map((dose, i) => {
                return <Card.Text key={i} as={ListGroupItem} style={{ textAlign: 'left' }}>{"Dosage: " + dose}</Card.Text>
            }) : null }
            {taken ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Taken: ${taken}`}</Card.Text> : null }
            {effperiod ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Period: ${effperiod}`}</Card.Text> : null }
        </Card.Body>
    </Card>
}

Events.main.allergyintolerance = (props) => {
    const category = Events.value.capitalize(props.entry.category),
        status = Events.value.capitalize(props.entry.status),
        allergy = Events.dataType.codeableConcept(props.entry.substance, "http://snomed.info/sct"),
        criticality = Events.value.criticality(props.entry.criticality);

    return <Card key={props.index} style={{ marginBottom: '10px' }}>
        <Card.Header
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {category ? (
                <Card.Text style={{ margin: '0' }}>{`Allergies: ${category}`}</Card.Text>
            ) : (
                <Card.Text style={{ margin: '0' }}>Allergies</Card.Text>
            )}
            <Card.Text style={{ margin: '0' }}>{`Status: ${status || "N/A"}`}</Card.Text>
        </Card.Header>
        <Card.Body 
            as={ListGroup}
            style={{ padding: "0" }}
        >
            {allergy ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Allergy: ${allergy}`}</Card.Text> : null }
            {criticality ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Risk: ${criticality}`}</Card.Text> : null }
        </Card.Body>
    </Card>
}

Events.main.patient = (props) => {
    const address = getPath(props.entry, "address.0.text") || null,
        telecom = Events.value.telecom(props.entry.telecom) || null;

    return <Card key={props.index} style={{ marginBottom: '10px' }}>
        <Card.Header
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Card.Text style={{ margin: '0' }}>Patient</Card.Text>
        </Card.Header>
        <Card.Body 
            as={ListGroup}
            style={{ padding: "0" }}
        >
            {address ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Address: ${address}`}</Card.Text> : null }
            {telecom ? telecom.map(com => {
                const use = Events.value.capitalize(com.use);
                return <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`${use}: ${com.value}`}</Card.Text>
            }) : null }
        </Card.Body>
    </Card>
}

Events.main.relatedperson = (props) => {
    const name = getPath(props.entry, "name.text") || null,
        gender = Events.value.capitalize(props.entry.gender) || null,
        birthDate = Events.dataType.date(props.entry.birthDate) || null,
        address = getPath(props.entry, "address.0.text") || null,
        telecom = Events.value.telecom(props.entry.telecom) || null;

    return <Card key={props.index} style={{ marginBottom: '10px' }}>
        <Card.Header
            style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {name ? (
                <Card.Text style={{ margin: '0' }}>{`Relatives: ${name}`}</Card.Text>
            ) : (
                <Card.Text style={{ margin: '0' }}>Relatives</Card.Text>
            )}
            <div style={{ display: 'flex' }}>
                <Card.Text style={{ margin: '0' }}>{`Gender: ${gender || "N/A"}`}</Card.Text>
                <Card.Text style={{ margin: '0 0 0 8px' }}>{`DOB: ${birthDate || "N/A"}`}</Card.Text>
            </div>
        </Card.Header>
        <Card.Body 
            as={ListGroup}
            style={{ padding: "0" }}
        >
            {address ? <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`Address: ${address || "N/A"}`}</Card.Text> : null }
            {telecom ? telecom.map(com => {
                const use = Events.value.capitalize(com.use);
                return <Card.Text as={ListGroupItem} style={{ textAlign: 'left' }}>{`${use}: ${com.value}`}</Card.Text>
            }) : null }
        </Card.Body>
    </Card>
}

// Value Events
Events.value = {};

Events.value.backbone = (obj) => {
    if (!obj) return null;
    const code = Events.dataType.codeableConcept(obj.code),
        value = Events.dataType.multiValue(obj.value, 'value'),
        absent = Events.dataType.codeableConcept(obj.dataAbsentReason),
        inter = Events.dataType.codeableConcept(obj.interpretation),
        type = Events.dataType.codeableConcept(obj.type),
        appliesTo = Events.dataType.codeableConcept(obj.appliesTo),
        text = obj.text;
    
    switch (true) {
        case code:
            return code;
        case value:
            return value;
        case absent:
            return absent;
        case inter:
            return inter;
        case type:
            return type;
        case appliesTo:
            return appliesTo;
        case text:
            return text;
        default:
            return null;
    }

}

Events.value.capitalize = (str) => {
    if (typeof str !== 'string') return null;
    return str[0].toUpperCase() + str.substring(1);
}

Events.value.criticality = (str) => {
    if (typeof str !== 'string') return null;
    switch (str) {
        // case value:
        //     return "Low Risk";
        case 'CRITH':
            return "High Risk";
        case (typeof str === 'string'):
            return "Unable to Assess Risk";
        default:
            return null;
    }
}

Events.value.dosage = (array) => {
    if (!array || array.length === 0) return null;
    const out = [];

    array.forEach(med => {
        if (med.text) out.push(med.text);
    });
    if (out.length === 0) return null;
    return out;
}

Events.value.officialName = (array) => {
    let entry = array.find(arrayRecord => arrayRecord.use === "official") || array[0];
    if (entry) return entry.given.join(" ") + " " + entry.family;
    return null;
}

Events.value.multiValue = (obj, base) => {
    if (!obj || !base) return null;
    const keys = [`${base}Quantity`, `${base}Timing`, `${base}Instant`, `${base}CodeableConcept`, `${base}Boolean`, `${base}Integer`, `${base}DateTime`, `${base}Time`, `${base}Age`, `${base}Period`, `${base}Range`, `${base}Ratio`, `${base}SampleData`, `${base}String`];
    let out = null;

    keys.forEach(key => {
        if (!obj[key]) return

        switch (key) {
            case `${base}CodeableConcept`:
                return out = Events.dataType.codeableConcept(obj[key]);
            case `${base}Instant`:
            case `${base}Time`:
            case `${base}DateTime`:
                return out = Events.dataType.date(obj[key]);
            case `${base}Period`:
                return out = Events.dataType.period(obj[key]);
            case `${base}Quantity`:
                return out = Events.dataType.quantity(obj[key]);
            case `${base}Ratio`:
                return out = Events.dataType.ratio(obj[key]);
            case `${base}String`:
            case `${base}Integer`:
                return out = obj[key];
            default:
                return
        }
    });
    return out
}

Events.value.telecom = (array) => {
    const used = [],
        out = [];
    let phone = null;
    
    array.forEach(com => {
        if (!com.system || !com.value) return
        phone = Events.dataType.phone(com.value);
        if (used.includes(phone) || used.includes(com.value)) return

        switch (com.system) {
            case 'phone':
                used.push(phone);
                return out.push(com);
            case 'email':
                used.push(com.value);
                return out.push(com);
            default:
                return;
        }
    });

    if (out.length === 0) return null;
    return out
}

Events.value.wasNotTaken = (bool) => {
    if (typeof bool !== 'boolean') return null;
    if (bool) {
        return "Medicaiton has not been taken."
    } else return "Medicaiton has been taken."
}

// DataType Events
Events.dataType = {};

Events.dataType.annotation = (obj) => {
    if (!obj) return null;
    const author = Events.value.multiValue(obj, "author"),
        text = obj.text;
    if (author && text) return author + ": " + text;
    return null;
}

Events.dataType.coding = (coding, sys) => {
    if (!coding) return null;
    const firstEntry = coding[0],
        checkSys = sys ? coding.find(c => c.system === sys) : null;

    switch (true) {
        case (checkSys && checkSys.display):
            return checkSys.display;
        case (firstEntry && firstEntry.display):
            return firstEntry.display;
        default:
            return null;
    }
}

Events.dataType.codeableConcept = (obj, sys) => {
    if (!obj) return null;
    const text = obj.text || null,
        coding = Events.dataType.coding(obj.coding, sys);

    switch (true) {
        case (coding):
            return coding;
        default:
            return text;
    }
}

Events.dataType.date = (str) => {
    if (typeof str !== 'string') return null;
    const date = new Date(str).toDateString();
    if (date !== "Invalid Date") return date;
    return null;
}

Events.dataType.period = (obj) => {
    if (!obj) return null;
    const start = Events.dataType.date(obj.start),
        end = Events.dataType.date(obj.end);
    let out = null;

    if (start) out = start;
    if (start && end) {
        out += " - " + end;
        
    } else if (start && end === null) out += " - Present";
    return out;
}

Events.dataType.phone = (str) => {
    if (typeof str !== 'string') return null
    // const regex = /^[0-9]/;
    // let out = str.replace(regex, "");
    // str.split("");
    // out.splice(6, 0, ".");
    // out.splice(3, 0, ".");
    // return out.join("");
    return str
}

Events.dataType.quantity = (obj) => {
    if (!obj) return null;
    let out = null;
    if (obj.value && obj.unit) out = obj.value + " " + obj.unit;
    if (obj.comparator) out = obj.comparator;
    return out;
}

Events.dataType.ratio = (obj) => {
    if (!obj) return null;
    const numerator = obj.numerator,
        denominator = obj.denominator;
    let out = null;

    if (numerator && denominator) out = numerator + ' / ' + denominator;
    return out;
}

Events.dataType.range = (obj) => {
    // Temporary copy and paste from period.
    if (!obj) return null;
    const low = obj.low,
        high = obj.high;
    let out = null;

    if (low) out = low;
    if (low && high) {
        out += " - " + high;
        
    } else if (low && high === null) out += " - Present";
    return out;
}

export default Events;