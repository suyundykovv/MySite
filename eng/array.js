 const players = ['Bukayo Saka', 'Gabriel Jesus', 'Martin Ødegaard', 'Aaron Ramsdale', 'Ben White','Gabriel Magalhães','William Saliba'];

 const playerList = document.getElementById('player-list');

//  players.forEach(function(player) {
//    const li = document.createElement('li');
//    li.textContent = player;
//    playerList.appendChild(li);
//  });


 for (let i = 0; i < players.length; i++) {
   const li = document.createElement('li');
   li.textContent = players[i];
   playerList.appendChild(li);
 }
 