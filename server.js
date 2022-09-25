const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Players = require('./models/player');
const Weapons = require('./models/weapon');
const Vehicles = require('./models/vehicle');

const app = new express();
const PORT = process.env.PORT || 4000;
require('dotenv').config();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
  // console.log(mongoose.connection);     
  console.log('connected to mongo');
});

// INDEX
app.get('/', (req, res) => {
  res.redirect('/dash');
})

/*
  name: { type: String, required: true },
  class: { type: String, required: true },
  level: { type: Number, required: true },
  weapons: [{
    type: Schema.Types.ObjectId,
    ref: "Weapon"
  }],
  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: "Vehicle"
  }]
*/
app.get('/players/seed', (req, res) => {
  Players.create([
    {
      name: "lothar",
      class: "paladin",
      level: 11,
      // see what happens if an empty array is initialized vs sending no value at all
      weapons: [],
      vehicles: [],
    },
    {
      name: "jafar",
      class: "bard",
      level: 2,
    },
    {
      name: "jiffylube",
      class: "mage",
      level: 18,
    }
  ],
    (err, data) => {
      res.redirect("/dash");
      // res.redirect("/players");
    })
})
/*
  name: { type: String, required: true },
  class: { type: String, required: true },
  damage: { type: Number, required: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Player"
  }
*/
app.get('/weapons/seed', (req, res) => {
  Weapons.create([
    {
      name: "plasma flinger",
      class: "blaster",
      damage: 6,
    },
    {
      name: "bandit's bane",
      class: "shiv",
      damage: 3,
    },
    {
      name: "thumper",
      class: "blackjack",
      damage: 2,
    }
  ],
    (err, data) => {
      res.redirect("/dash");
      // res.redirect("/weapons");
    })
})


/*
const vehicleSchema = new Schema({
  class: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: false },
  owner: {
    type: Schema.types.ObjectId,
    ref: "Player",
  }
});
*/
app.get('/vehicles/seed', (req, res) => {
  Vehicles.create([
    {
      class: "car",
      make: "ford",
      model: "pinto",
      owner: "632f0e73e2b958f280641c4b"
    },
    {
      class: "car",
      make: "audi",
      model: "x11",
      owner: "632f0e73e2b958f280641c4c"

    },
    {
      class: "starship",
      make: "acme",
      model: "eco-thruster",
      owner: "632f0e73e2b958f280641c4d"
    }
  ],
    (err, data) => {
      res.redirect("/dash");
      // res.redirect("/vehicles");
    })
})


app.get('/players/seedvehicles', async (req, res) => {
  const vehicleIds = [];

  // There must be a way to ONLY return the _id field from the find(all)
  // but as of now I can't find it. This seems inefficient.
  await Vehicles.find()
    .then((foundVehicles) => {
      foundVehicles.forEach((vehicle) => {
        vehicleIds.push(vehicle.id);
      })
    })
    .catch((err) => {
      console.log(err);
    })

  await Players.find()
    .then((playerIds) => {
      playerIds.forEach((player, index) => {
        let rndIdx = Math.floor(Math.random() * vehicleIds.length);

        Players.findByIdAndUpdate(player.id,
          { $push: { vehicles: vehicleIds[rndIdx] } },
          { new: true, useFindAndModify: false })
          .then((foundPlayer) => {
            res.render('players/Player', {
              player: foundPlayer,
            });
          })

      })
    })
    .catch((err) => {
      res.json(err);
    })
})


// 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
//  DASH ROUTE
app.get('/dash', (req, res) => {
  res.render('Dash')
})

// 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
//  PLAYER ROUTES
app.get('/players', async (req, res) => {
  await Players.find()
    .then((allPlayers) => {
      res.render('players/Index', {
        players: allPlayers,
      });
    })
    .catch((err) => {
      res.json(err);
    });
})

app.get('/player/new', (req, res) => {
  res.render('players/Player');
})

app.get('/player/:id', async (req, res) => {

  await Players.findById(req.params.id).populate("vehicles")
    .then((result) => {
      res.render('players/Player', {
        player: result,
      })
    })
});




app.patch('/player/:id/new-vehicle/:vid', async (req, res) => {
  await Players.findByIdAndUpdate(req.params.id,
    { $push: { vehicles: req.params.vid } },
    { new: true, useFindAndModify: false })
    .then((foundPlayer) => {
      res.render('/players/Player', {
        player: foundPlayer,
      });
    })
    .catch((err) => {
      res.json(err);
    })
})


// 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
//  WEAPON ROUTES
app.get('/weapons', (req, res) => {
  Weapon.find({}, (err, allWeapons) => {
    console.log(err);

    res.render("das", {
      weapons: allWeapons,
    });
  });
})

// 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
//  VEHICLE ROUTES
app.get('/vehicles', async (req, res) => {
  await Vehicles.find()
    .then((allVehicles) => {
      res.render('vehicles/Index', {
        vehicles: allVehicles,
      });
    })
    .catch((err) => {
      res.json(err);
    });
})


app.get('/vehicle/:id', async (req, res) => {

  await Vehicle.findById(req.params.id).populate("vehicles")
    .then((result) => {
      res.render('vehicles/Vehicle', {
        vehicle: result,
      })
    })
});


app.listen(PORT, () => {
  console.log(`server listens on ${PORT}`);
})