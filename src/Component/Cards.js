import { NavLink } from 'react-router-dom';
import {
    CardColumns,
    CardDeck,
    CardGroup,
    Container,
    Card
} from 'react-bootstrap';

const Cards = (props) => {

    return <CardDeck className="d-flex justify-content-around align-items-center flex-wrap m-4">
        {props.AllOptions.map((option, i) => {
            return <Card border="primary" className="text-center p-4" style={{height: '75px', width: '200px'}} >
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