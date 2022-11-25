import React, { Component } from 'react'

export default class TournamentBracket extends Component {
    render() {
        if(this.props.data != null && this.props.data.matches != null)
            return (
                <div style={{display: "flex", flexDirection: "row", width: "100%", height: "100%"}}>
                    {this.props.data.matches.map((matchesOfRound, round) => (
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", minWidth: "150px" }} key={round}>
                            {matchesOfRound.map((match) => 
                                match.split("-").map((player) => (
                                    <div style={{padding: "10px", margin: "10px", border: (this.props.data.players[player] > round || match.split('-').length === 1) ? "3px solid lime" : "2px solid black"}}
                                    onClick={()=>{this.props.selectPlayer(player)}} key={player}>
                                        { player }
                                    </div>
                                ))
                            )}
                        </div>
                    ))}
                </div>
            )
        return (
            <div>No matches started yet</div>
        )
    }
}
