const btnSeed = document.querySelector('.nav-btn-seed');
const seedPicker = document.querySelector('.seed-picker');
const seederForm = document.querySelector('.seeder-form');

window.addEventListener('DOMContentLoaded', () => {
  seedPicker.addEventListener('change', async () => {
    console.log(seedPicker.value);
    // action={`/players/seed`}

    let action = "/players/seed"

    switch (seedPicker.value) {
      case 'players':
        // await fetch('/players/seed')
        action = "/players/seed?_method=GET"
        break;
      case 'vehicles':
        // await fetch('/vehicles/seed')
        action = "/vehicles/seed?_method=GET"
        break;
      case 'weapons':
        // await fetch('/weapons/seed')
        action = "/weapons/seed?_method=GET"
        break;
      case 'player-vehicles':
        // await fetch('/players/seedvehicles')
        action = "/players/seedvehicles?_method=GET"
        break;
      case 'player-weapons':
        // await fetch('/players/seedweapons')
        action = "/players/seedweapons?_method=GET"
        break;
    }

    seederForm.setAttribute('action', action);
  });
});