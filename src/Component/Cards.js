import { NavLink } from 'react-router-dom';
import {
    Container,
    Card
} from 'react-bootstrap';

const Cards = (props) => {

    return <Container>
        {props.AllOptions.map((option, i) => {
            return <Card>
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