import React from 'react';
import Card from './card.jsx';
import CenterText from '../home/centerText.jsx';

class CardList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (this.props.cards.length==0 ? <CenterText text="There are no people on your team"/> :                
            <div className="col-md-12 col-md-offset-1" style={{ paddingTop: 20 }}>
                {this.props.cards.map(card => <Card {...card} key={card.Id} changeStateInTeam={this.props.changeStateInTeam} team = {this.props.team} />)}
            </div>
        )   
    }
}
module.exports = CardList;