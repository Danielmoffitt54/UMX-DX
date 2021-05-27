import { NavLink } from 'react-router-dom';
import {
    CardDeck,
    Container,
    Card
} from 'react-bootstrap';

const Cards = (props) => {

    return <CardDeck>
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
    </CardDeck>
}

export default Cards;