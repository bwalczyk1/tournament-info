import React, { Component } from 'react';

export default class ScoresTable extends Component {
    render() {
        if(this.props.data !== null && this.props.data.players !== null){
            let players = this.props.data.players
            let playerArrays = []
            for(let playerName in players){
                playerArrays.push([playerName, players[playerName]])
            }
            playerArrays.sort(function(a, b){
                return b[1] - a[1]
            })
            return (
                <table style={{margin: "10px", borderCollapse: "collapse", width: "300px"}}>
                    <tbody>
                        { playerArrays.map((playerArray) => (
                            <tr style={{color: (this.props.data.matches !== undefined && playerArray[1] < this.props.data.matches.length - 1) ? "#C5C6D0" : "black", border: "2px solid black", padding: "10px"}}  
                                onClick={()=>this.props.selectPlayer(playerArray[0])} key={playerArray[0]}>
                                <td>{ playerArray[0] }</td>
                                <td>{ playerArray[1] }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
        return (
            <div>No players added yet</div>
        )
    }
}
