import React, { Component } from 'react';
import personImg from "../assets/person.jpg"

export default class PlayerInfo extends Component {
  render() {
    let selectedPlayer = this.props.selectedPlayer
    let opponents = []
    for(let round of this.props.data.matches){
        for(let match of round){
            let matchPlayers = match.split('-')
            if(matchPlayers.length > 1 && matchPlayers.includes(selectedPlayer)){
                if(matchPlayers[0] === selectedPlayer)
                    opponents.push(matchPlayers[1])
                else
                    opponents.push(matchPlayers[0])
                break
            }
        }
    }
    console.log(opponents)
    return (
      <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <img src={personImg} alt='person' style={{height: "100px", width: "100px"}}/>
            <div style={{fontSize: "22px", textAlign: "right"}}>
                <b>{ selectedPlayer }</b>
                <br/>
                { this.props.data.players[selectedPlayer] }
            </div>
        </div>
        <ul>
            {opponents.map((opponent) => (
                <li onClick={()=>this.props.selectPlayer(opponent)}>{ opponent }</li>
            ))}
        </ul>
      </div>
    );
  }
}
