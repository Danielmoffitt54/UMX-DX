import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Events from './Events';
import Header from './Component/Header';
import Cards from './Component/Cards';
import Main from './Component/Main';
import LaunchPatient from './Component/Launch/LaunchPatient';
// import Spinner from 'react-bootstrap/Spinner'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Loading: false,
      Dropdown: null,
      Oauth2: null,
      Patient: null,
      Cerner: null,
      CurrentPage: 0,
      DisplayIndex: 0,
      DisplayCount: 25,
      MainIndex: 0,
      MainArray: [
        {
          label: "Observations",
          value: "Observation",
          path: "/observations"
        }, {
          label: "Conditions",
          value: "Condition",
          path: "/conditions"
        }, {
          label: "Medications",
          value: "MedicationStatement",
          path: "/medications"
        }, {
          label: "Allergies",
          value: "AllergyIntolerance",
          path: "/allergies"
        }
      ],
      AccountIndex: 0,
      AccountArray: [
        {
          label: "Patient",
          value: "Patient",
          path: "/patient"
        }, {
          label: "Relatives",
          value: "RelatedPerson",
          path: "/relatives"
        }
      ]
    }
    this.SetAppState = this.SetAppState.bind(this);
    this.RedirectRoute = this.RedirectRoute.bind(this);
  }

  SetAppState(event) {
    this.setState(event);
  }

  RedirectRoute(props) {
    const MainLabels = [],
      AccountLabels = [],
      { Oauth2, MainArray, AccountArray } = this.state;

    MainArray.forEach(option => MainLabels.push(option.label));
    AccountArray.forEach(option => AccountLabels.push(option.label));

    this.setState({ Loading: true });
    if (AccountLabels.includes(props.option.label)) {
      Events.client.request({
        Oauth2: Oauth2,
        Page: props.option.value,
        Property: "AccountIndex",
        Value: props.index,
        SetAppState: this.SetAppState
      });
    } else {
      Events.client.request({
        Oauth2: Oauth2,
        Page: props.option.value,
        Property: "MainIndex",
        Value: props.index,
        SetAppState: this.SetAppState
      });
    }
    <Redirect to={props.option.path} />
  }

  componentDidMount() {
    const { Cerner } = this.state;
    if (!Cerner) {
      Events.client.ready({
        SetAppState: this.SetAppState
      });
      this.setState({ Loading: true });
    }
  }

  render() {
    const {
      Loading,
      Dropdown,
      Oauth2,
      Patient,
      Cerner,
      CurrentPage,
      DisplayIndex,
      DisplayCount,
      MainIndex,
      MainArray,
      AccountIndex,
      AccountArray,
    } = this.state,
      AllOptions = MainArray.concat(AccountArray);

    if (Cerner) console.log("Cerner: ", Cerner);

    return <div className="App">
      <Router basename="/UMX-DX">
        <GetHeader
          AllOptions={AllOptions}
          Dropdown={Dropdown}
          Oauth2={Oauth2}
          Patient={Patient}
          Cerner={Cerner}
          CurrentPage={CurrentPage}
          DisplayIndex={DisplayIndex}
          DisplayCount={DisplayCount}
          MainIndex={MainIndex}
          MainArray={MainArray}
          AccountIndex={AccountIndex}
          AccountArray={AccountArray}
          SetAppState={this.SetAppState}
        />
        <Switch>
          <Route exact path='/'>
            {Loading ? (
              <div className="App-Loading">
                <h1>Please wait...</h1>
                {/* <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner> */}
              </div>
            ) : (
              !Oauth2 ? (
                <div className="App-Login">
                  <h1>Please Login to Continue</h1>
                </div>
              ) : null
            )}
          </Route>
          {AllOptions.map((option, index) => {
            return <Route key={index} path={option.path}>
              {Loading ? (
                <div className="App-Loading">
                  <h1>Please wait...</h1>
                  {/* <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner> */}
                </div>
              ) : (
                !Cerner || Cerner.length === 0 ? (
                  <div className="App-Error">
                    <h1>Error Retrieveing Data</h1>
                  </div>
                ) : (
                  <Main
                    Cerner={Cerner}
                    DisplayCount={DisplayCount}
                    DisplayIndex={DisplayIndex}
                    CurrentPage={CurrentPage}
                    SetAppState={this.SetAppState}
                  />
                )
              )}
            </Route>
          })}
          {!Oauth2 ? (
            <>
              <Route path="/launch-patient">
                <LaunchPatient />
              </Route>
            </>
          ) : null}
        </Switch>
        {!Loading && Oauth2 ? (
          <Cards
            AllOptions={AllOptions}
            RedirectRoute={this.RedirectRoute}
          />
        ) : null}
      </Router>
    </div>
  }
};

function GetHeader(props) {
  const MainLabels = [],
    AccountLabels = [];
  let includedAccount = false;

  props.MainArray.forEach(option => MainLabels.push(option.label));
  props.AccountArray.forEach(option => {
    if (props.Cerner && option.value === props.Cerner[0].resourceType) includedAccount = true;
    AccountLabels.push(option.label)
  });

  switch (true) {
    case includedAccount:
      return <Header
        AllOptions={props.AllOptions}
        Dropdown={props.Dropdown}
        Oauth2={props.Oauth2}
        Patient={props.Patient}
        Cerner={props.Cerner}
        CurrentPage={props.CurrentPage}
        DisplayIndex={props.DisplayIndex}
        DisplayCount={props.DisplayCount}
        MainLabels={MainLabels}
        AccountLabels={AccountLabels}
        PageType="Account"
        PageIndex={props.AccountIndex}
        PageArray={props.AccountArray}
        SetAppState={props.SetAppState}
      />
    default:
      return <Header
        AllOptions={props.AllOptions}
        Dropdown={props.Dropdown}
        Oauth2={props.Oauth2}
        Patient={props.Patient}
        Cerner={props.Cerner}
        CurrentPage={props.CurrentPage}
        DisplayIndex={props.DisplayIndex}
        DisplayCount={props.DisplayCount}
        MainLabels={MainLabels}
        AccountLabels={AccountLabels}
        PageType="Main"
        PageIndex={props.MainIndex}
        PageArray={props.MainArray}
        SetAppState={props.SetAppState}
      />
  }
}