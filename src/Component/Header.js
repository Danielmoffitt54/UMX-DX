import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Card,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
import Events from '../Events';

const Header = (props) => {
    
    return <Container fluid>
        {!props.Oauth2 ? (
            <Navbar style={{ justifyContent: 'space-between' }}>
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    onClick={() => props.SetAppState({
                        Cerner: null,
                        MainIndex: 0,
                        AccountIndex: 0,
                        DisplayCount: 25,
                        DisplayIndex: 0
                    })}
                >UMX-DX App</Navbar.Brand>
                <NavDropdown
                    title="Login"
                    id="navbarScrollingDropdown"
                >
                    <NavDropdown.Item as={NavLink} to="/launch-patient">Patient</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        ) : (
            <Navbar style={{ justifyContent: 'space-between' }}>
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    onClick={() => props.SetAppState({
                        Cerner: null,
                        MainIndex: 0,
                        AccountIndex: 0,
                        DisplayCount: 25,
                        DisplayIndex: 0
                    })}
                >UMX-DX App</Navbar.Brand>
                <NavDropdown
                    title="Menu"
                    id="navbarScrollingDropdown"
                >
                    {props.AllOptions.map((option, i) => {
                        return <NavDropdown.Item 
                            key={i}
                            as={NavLink}
                            to={option.path}
                            onClick={() => {
                                props.SetAppState({ Loading: true });
                                Events.client.request({
                                    Oauth2: props.Oauth2,
                                    Page: option.value,
                                    Property: `${props.PageType}Index`,
                                    Value: i,
                                    SetAppState: props.SetAppState
                                });
                            }}
                        >{option.label}</NavDropdown.Item>
                    })}
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        as={NavLink}
                        to="/" 
                        onClick={() => props.SetAppState({
                            Oauth2: null,
                            Patient: null,
                            Cerner: null,
                            MainIndex: 0,
                            AccountIndex: 0,
                            DisplayCount: 25,
                            DisplayIndex: 0
                        })}
                    >Log Out</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        )}
        {SubHeader(props)}
    </Container>
};

function SubHeader(props) {

    if (!props.Patient && !props.Cerner) return
    if (props.Patient) console.log('Patient: ', props.Patient);

    return <Container 
        noGutter
        fluid
    >
        {props.Patient ? (
            <Card style={{ margin: '0 0 5px 0' }}>
                <Card.Body  style={{ 
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center' 
                }}>
                    <div>
                        <Card.Title style={{ margin: '0' }}>{Events.value.officialName(props.Patient.name)}</Card.Title>
                        <Card.Subtitle style={{ margin: '0' }}>{`ID: ${props.Patient.id}`}</Card.Subtitle>
                    </div>
                    <ListGroup 
                        className="list-group-flush"
                        style={{ flexDirection: "row" }}>
                        <ListGroupItem style={{ border: 'none' }}>{`Gender: ${Events.value.capitalize(props.Patient.gender)}`}</ListGroupItem>
                        <ListGroupItem>{`DoB: ${Events.value.date(props.Patient.birthDate)}`}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        ) : null }
        {props.Cerner ? (
            <Nav style={{ justifyContent: "center", alignItems: "center" }}>
                <Nav.Item>
                    <Nav.Link 
                        as={NavLink}
                        to="/" 
                        onClick={() => props.SetAppState({
                            Cerner: null,
                            MainIndex: 0,
                            AccountIndex: 0,
                            DisplayCount: 25,
                            DisplayIndex: 0
                        })}
                    >Back</Nav.Link>
                </Nav.Item>
                {props.PageArray.map((option, i) => {
                    if (props.PageIndex === i) return <Nav.Item>
                        <Nav.Link key={i} 
                            as={NavLink}
                            to={option.path}
                            onClick={() => {
                                props.SetAppState({ Loading: true });
                                Events.client.request({
                                    Oauth2: props.Oauth2,
                                    Page: option.value,
                                    Property: `${props.PageType}Index`,
                                    Value: i,
                                    SetAppState: props.SetAppState
                                });
                            }}
                        >{option.label}</Nav.Link>
                    </Nav.Item>
                    return <Nav.Item>
                        <Nav.Link key={i} 
                            as={NavLink}
                            to={option.path}
                            onClick={() => {
                                props.SetAppState({ Loading: true });
                                Events.client.request({
                                    Oauth2: props.Oauth2,
                                    Page: option.value,
                                    Property: `${props.PageType}Index`,
                                    Value: i,
                                    SetAppState: props.SetAppState
                                });
                            }}
                        >{option.label}</Nav.Link>
                    </Nav.Item>
                })}
                <Nav.Item>
                    <Nav.Link
                        as={NavDropdown}
                        title={`Count: ${props.DisplayCount}`}
                        id="navbarScrollingDropdown"
                    >
                        <NavDropdown.Item
                            onClick={() => props.SetAppState({ DisplayCount: 25, CurrentPage: 1, DisplayIndex: 0 })}
                        >25</NavDropdown.Item>
                        <NavDropdown.Item
                            onClick={() => props.SetAppState({ DisplayCount: 50, CurrentPage: 1, DisplayIndex: 0 })}
                        >50</NavDropdown.Item>
                        <NavDropdown.Item
                            onClick={() => props.SetAppState({ DisplayCount: 100, CurrentPage: 1, DisplayIndex: 0 })}
                        >100</NavDropdown.Item>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        ) : null }
    </Container>

}

export default Header;