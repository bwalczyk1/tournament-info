import React, { Component } from 'react';
import personImg from "../assets/person.jpg"
import redCrossImg from "../assets/red-cross.png"

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

    return (
      <div style={{display: "flex", flexDirection: "column", width: "100%", border: "5px solid black"}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <img src={personImg} alt='' style={{height: "100px", width: "100px"}}/>
            <div style={{fontSize: "22px", textAlign: "center", alignSelf: 'center', maxWidth: "50%"}}>
                <b>{ selectedPlayer }</b>
                <br/>
                Score: { this.props.data.players[selectedPlayer] }
            </div>
            <img src={redCrossImg} alt="[X]" style={{height: "30px", alignSelf: "flex-start", margin: "5px"}} onClick={()=>this.props.selectPlayer("")}/>
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
