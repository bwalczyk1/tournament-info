import React, { Component } from 'react'
import personImg from '../assets/person.jpg'

export default class TournamentBracket extends Component {
    render() {
        if (!this.props.data || !this.props.data.matches) {
            return (
                <div style={{margin: "30px"}}>No matches started yet</div>
            )
        }

        return (
            <div style={{display: "flex", flexDirection: "row", height: "100%"}}>
                {this.props.data.matches.map((matchesOfRound, round) => (
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", minWidth: "150px" }} key={round}>
                        {matchesOfRound.map((match) => 
                            match.split("-").map((player) => (
                                <div 
                                    style={{
                                        display: "flex", 
                                        flexDirection: "row", 
                                        paddingRight: "10px", 
                                        alignItems: "center", 
                                        margin: "10px", 
                                        alignContent: "center", 
                                        border: (this.props.data.players[player] > round || match.split('-').length === 1) ? "3px solid lime" : "2px solid black"
                                    }}
                                    onClick={()=>{this.props.selectPlayer(player)}} key={player}
                                >
                                    <img src={personImg} alt="" style={{height: "44px"}}/>{ player }
                                </div>
                            ))
                        )}
                    </div>
                ))}
            </div>
        )
    }
}
