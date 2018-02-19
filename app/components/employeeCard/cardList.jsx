import React from 'react';
import Card from './card.jsx';

class CardList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (          
            <div className="col-md-12 col-md-offset-1" style={{ paddingTop: 20 }}>
                {this.props.cards.map(card => <Card {...card} key={card.Id} changeStateInTeam={this.props.changeStateInTeam} name={this.props.name} team = {this.props.team} />)}
            </div>
        )   
    }
}
module.exports = CardList;