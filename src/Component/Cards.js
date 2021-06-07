import { NavLink } from 'react-router-dom';
import {
    Container,
    Card
} from 'react-bootstrap';

const Cards = (props) => {

    return <Container 
        className="d-flex justify-content-around align-items-center flex-wrap"
        fluid
    >
        {props.AllOptions.map((option, i) => {
            return <Card border="primary" className="text-center p-4 m-2" style={{height: '75px', width: '200px'}} >
                <NavLink key={i} 
                    to={option.path}
                    onClick={() => props.RedirectRoute({
                        option: option,
                        index: i
                    })}
                >{option.label}</NavLink>
            </Card>
        })}
    </Container>
}

export default Cards;