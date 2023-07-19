fetch('db.json')
  .then(response => response.json())
  .then(data => {
    renderManager(data.manager);
    renderPlayers(data.players);
  })
  .catch(error => console.error('Error:', error));

function createPlayerElement(player) {
  const container = document.createElement('div');
  container.className = 'container';

  const img = document.createElement('img');
  img.src = player.img;

  const position = document.createElement('p');
  position.textContent = player.position;

  const name = document.createElement('p');
  name.textContent = player.name;

  const nationality = document.createElement('p');
  nationality.textContent = player.nationality;

  if (player.number) {
    const number = document.createElement('p');
    number.textContent = `No: ${player.number}`;
    container.appendChild(number);
  }

  container.appendChild(img);
  container.appendChild(position);
  container.appendChild(name);
  container.appendChild(nationality);

  return container;
}

function renderManager(manager) {
  const managerElement = createPlayerElement(manager);
  document.getElementById('manager').appendChild(managerElement);
}

function renderPlayers(players) {
  const playersContainer = document.getElementById('players');
  players.forEach(player => {
    const playerElement = createPlayerElement(player);
    playersContainer.appendChild(playerElement);
  });
}
 