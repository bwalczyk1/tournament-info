import React, { Component } from 'react';
import { firebaseConfig } from './firebase-config'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, onValue } from "firebase/database"
import TournamentBracket from './components/TournamentBracket';
import ScoresTable from './components/ScoresTable';
import PlayerInfo from './components/PlayerInfo'

export default class App extends Component {
  constructor(){
    super();
    this.state = { data: {}, selectedPlayer : "" }
    this.selectPlayer = this.selectPlayer.bind(this)
  }

  componentDidMount(){
      const app = initializeApp(firebaseConfig)
      const database = getDatabase(app)

      const dbRef = ref(database)
      onValue(dbRef, (snapshot) => {
          let data = snapshot.val()
          let newData = {data: data}
          if(data != null && data.players !== null && !Object.keys(data.players).includes(this.state.selectedPlayer))
            newData.selectedPlayer = ""
          this.setState(newData)
      })

  }

  selectPlayer(player){
    this.setState({selectedPlayer: player})
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <TournamentBracket 
          data={ this.state.data } 
          selectPlayer={ this.selectPlayer } 
        />
        <div style={{margin: "30px", height: "90%", width: "450px"}}>
          { 
            this.state.selectedPlayer === "" ? (
              <ScoresTable 
                data={ this.state.data } 
                selectPlayer={ this.selectPlayer } 
              />
            ) : (
              <PlayerInfo 
                data={ this.state.data } 
                selectedPlayer={ this.state.selectedPlayer }
                selectPlayer={ this.selectPlayer } 
              />
            )
          }
        </div>
      </div>
    );
  }
}

