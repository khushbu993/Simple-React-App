import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Club from './Components/Club/Club';
import Player from './Components/Player/Player';


function App() {
  // players data load
  const [players, setPlayers] = useState([]);
  const [clubPlayers, setClubPlayers] = useState([]);

  //API using useEffect
  useEffect(() => {
    fetch('https://api.mocki.io/v1/7606397b')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.log(error))

  }, []);

  // Event Handler
  const handleAddPlayers = (player) => {
    const selectedClubPlayers = [...clubPlayers, player];
    setClubPlayers(selectedClubPlayers);
  }

  //Total Budget using Reduce
  const totalBudget = clubPlayers.reduce((total, player) => total + player.salary, 0);

  return (
    <div className="App">

      <div className="container">
        <h1><span style={{ color: 'red' }}>Bangladesh</span> <span style={{ color: '#0dcf88' }}>Cricket Players</span></h1>

        <div className="row">
          <div className="col-6">
            <div className="player-container">
              {
                players.map(player => <Player player={player} handleAddPlayers={handleAddPlayers} key={player.id}></Player>)
              }
            </div>
          </div>

          <div className="col-6">
            <div className="cart">
              <h3>Total Player: <span style={{ color: 'red' }}>{clubPlayers.length}</span></h3>
              <h3>Total Budget: <span style={{ color: 'red' }}>BDT {totalBudget} Taka</span></h3>
            </div>
            <div className="club-player">
              {
                clubPlayers.map(clubPlayer => <Club clubPlayer={clubPlayer}></Club>)
              }
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
