// import express module
const express = require("express");
// import body parser module
const bodyParser = require("body-parser");

// import bcrypt module
const bcrypt = require("bcrypt");

// import multer module  (upload tsawer)
const multer = require("multer");

// import path module
const path = require("path");

// import axios module
const axios = require("axios");

// import mongoose module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/chawkiBroDB');

// create  express application
const app = express();

//models importation

const Match = require("./models/match");
const Team = require("./models/team");
const User = require("./models/user");


//**************// confi body-parser//*************** */

// recuperee l'objet du partie front end

app.use(bodyParser.urlencoded({ extended: true }))

// retourne reponse sous format json
app.use(bodyParser.json())


//****************** */ Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

//shortcut path e5tizel(ysahhel destination ki yabdou barcha filchies)

app.use("/myFiles", express.static(path.join("backend/images")));


//les type de media a accepté cote back   Media Types

const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
};


// configuration multer

const storageConfig = multer.diskStorage({
  // destination  

  //callback le retour
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');// badelna kol espace b tiret 6
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});
// Traitement logiq


//*************//matche//************** */
//  business logic :get all matches 

app.get("/api/matches", (req, res) => {

  console.log("hereeeeeeeee intooooo get all matches");

  Match.find().then((docs) => {

    console.log("here documents", docs);


    res.status(200).json({ matches: docs, message: "ok" });
  });

  // res.status(200).json({ matches: matchesTab, message: "ok" });

})

//  business logic :get  matche by id 

app.get("/api/matches/:x", (req, res) => {

  console.log("hereeeeeeeee intooooo get  matche by id ");

  let id = req.params.x;

  Match.findOne({ _id: id }).then((doc) => {

    res.json({ match: doc });
  });

  //let findedMatch = matchesTab.find((elt) => {
  // return elt.id == id;
  //});



});

//  business logic :delete  matche by id

app.delete("/api/matches/:id", (req, res) => {

  console.log("hereeeeeeeee intooooo delete   matche by id ");

  let id = req.params.id;
  Match.deleteOne({ _id: id }).then((result) => {

    console.log("here reultt after delete ", result);

    if (result.deletedCount == 1) {

      res.json({ msg: "deleted with succes" })

    } else {

      res.json({ msg: "not deleted" })
    }


  })

  //let isFounded = fal

  // for (let i = 0; i < matchesTab.length; i++) {

  //if (matchesTab[i].id == id) {
  // isFounded = true;
  // matchesTab.splice(i, 1);
  // break;

  // }

  // }

  // isFounded

  // ? res.json({ message: "success" })

  //   : res.json({ message: "id not found" });

});

//  business logic :add  matche 

app.post("/api/matches", (req, res) => {

  console.log("hereeeeeeeee intooooo add   matche  ");
  //let obj = req.body;

  let obj = new Match(req.body);

  obj.save();

  //obj.id = generateId(matchesTab)

  //matchesTab.push(obj);

  res.status(200).json({ message: "added  with succes" });

})

//  business logic :edit  matche 

app.put("/api/matches", (req, res) => {

  console.log("hereeeeeeeee intooooo edit   matche ", req.body);

  let newMatch = req.body;

  Match.updateOne({ _id: newMatch._id }, newMatch).then((result) => {

    console.log("here result after update", result);

    result.nModified == 1 ?

      res.json({ message: "edited with succes" })

      : res.json({ message: "edited echek" })
  })

  //for (let i = 0; i < matchesTab.length; i++) {
  // if (matchesTab[i].id=req.body.id) {
  //matchesTab[i]=req.body;

  // res.json({message :"edited with succes"});

  // break;


  //} 

  //}

})


//  business logic :add  user ou bien sign up

app.post("/api/users/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {

  console.log("hereeeeeeeee intooooo sign up ", req.body);
  bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
    console.log("here cryted pwd", cryptedPwd);

    req.body.pwd = cryptedPwd;

    //req.body.avatar = `http://localhost:3000/myFiles/${req.file.filename}`;

    // pour que les adresses soit generique exmple on change https au lieu http ou l'adresse 30000 ou 3001
    req.body.avatar = `${req.protocol}://${req.get("host")}/myFiles/${req.file.filename}`;
    let user = new User(req.body);
    user.save((err, doc) => {

      err ?
        res.json({ msg: "error" })
        : res.json({ msg: "added wit success" });
    });

  });

});


// business logic :login
app.post("/api/users/login", (req, res) => {

  console.log("hereeeeeeeee intooooo login ", req.body);

  let user;
  //check if email existe
  User.findOne({ email: req.body.email }).then((doc) => {

    console.log("hereeeeeeeee doc ", doc);

    user = doc;
    //send email message
    if (!doc) {

      res.json({ msg: "please check Email" });
    } else {
      //check pwd

      return bcrypt.compare(req.body.pwd, doc.pwd)
    }
  }).then((isEqual) => {

    console.log("here isEqual", isEqual);
    // send pwd error message 

    if (!isEqual) {

      res.json({ msg: "please check pwd" });

    } else {
      let userToSend = {
        userId: user._id,
        email: user.email,
        fName: user.firstName,
        Lname: user.lastName,
      }
      res.json({ user: userToSend, msg: `welcome ${user.firstName}` });
    }
  });
});


//businee logic serache

app.post("/api/matches/search", (req, res) => {

  console.log("hereeeeeeeee intooooo busunes logic :searche all match ", req.body);

  Match.find({
    $or: [{ scoreOne: req.body.scoreOne }, { scoreTwo: req.body.scoreTwo }]

  }).then(

    //Match.find({scoreOne : req.body.scoreOne , scoreTwo : req.body.scoreTwo }).then(

    (docs) => {

      res.json({ findedMatches: docs, msg: "done" });


    });



});


//  business logic :search weather from API

app.get("/api/weather/:city", (req, res) => {

  console.log("hereeeeeeeee search weather by city ", req.params.city);

  let key = "88b632f0ed02be51e60bffbbbd61eb2f";

  let apiURL =
    `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}&units=metric`;

  axios.get(apiURL).then((weatherResponse) => {

    let data = weatherResponse.data;

    // [ { id: 500, main: 'Rain', description: 'light rain', icon: '10n' } ]
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;

    let result = {

      temperature: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      icone: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      description: description,
      sunrise: new Date(data.sys.sunrise *1000),
      sunset: new Date(data.sys.sunset *1000),

    };

    
res.json({result : result});

// res.status(404).json({})


  });



});
















//*************//team//************** */


//  business logic :add  TEAM 

app.post("/api/teams", (req, res) => {

  console.log("hereeeeeeeee intooooo add   teams ", req.body);


  let teamObj = new Team({

    teamName: req.body.name,
    teamStadium: req.body.stadium,
    teamOwner: req.body.owner,
  });

  teamObj.save((err, doc) => {
    console.log("here error", err);
    console.log("here doc", doc);

    (err) ?

      res.json({ msg: "error" })
      : res.json({ msg: "added wit success" });


  });

});


























//*************//player//************** */
//  business logic :get all matches 

app.get("/api/players", (req, res) => {

  console.log("hereeeeeeeee intooooo get all player");
  res.status(200).json({ players: playerTab, message: "ok" })

})

//  business logic :get  matche by id 

app.get("/api/players/:x", (req, res) => {

  console.log("hereeeeeeeee intooooo get  player by id ");

  let id = req.params.x;

  let findedPlayer = playerTab.find((elt) => {
    return elt.id == id;
  });

  res.json({ player: findedPlayer });

});

//  business logic :delete  matche by id

app.delete("/api/players/:id", (req, res) => {

  console.log("hereeeeeeeee intooooo delete   player by id ");

  let id = req.params.id;

  let isFounded = false;

  for (let i = 0; i < playerTab.length; i++) {

    if (playerTab[i].id == id) {
      isFounded = true;
      playerTab.splice(i, 1);
      break;

    }

  }

  isFounded

    ? res.json({ message: "success" })

    : res.json({ message: "id not found" });

});

//  business logic :add  matche 

app.post("/api/players", (req, res) => {

  console.log("hereeeeeeeee intooooo add   player  ");
  let obj = req.body;

  console.log("here obj", obj);
  playerTab.push(obj);

  res.status(200).json({ message: "added  with succes" });

})

//  business logic :edit  matche 

app.put("/api/players", (req, res) => {

  console.log("hereeeeeeeee intooooo edit   player ");

})


//  business logic :edit  matche 




























































//make application exportable
module.exports = app;










































//data base simulation (just pour test )
//let matchesTab = [
//{ id: 1, scoreOne: 1, scoreTwo: 3, teamOne: "CA", teamTwo: "EST" }
//,{ id: 2, scoreOne: 0, scoreTwo: 2, teamOne: "Css", teamTwo: "tatawin" }
//, { id: 3, scoreOne: 0, scoreTwo: 0, teamOne: "maknessy", teamTwo: "juv" }
//, { id: 4, scoreOne: 7, scoreTwo: 0, teamOne: "maknessy", teamTwo: "bazda" }

// ];

// function generateId(T) {
//let max = 0;

// if (T.length == 0) {

//  max = 0;

// } else {
// max = T[0].id;

// for (let i = 1; i < T.length; i++) {

//  if (T[i].id > max) {
//   max = T[i].id + 1;
// }
//}

//}
// return max + 1;



//}






// let teamTab = [
// { id: 1, name: "taraji", stadium: "allianz arina", owner: "bilel" }
//, { id: 2, name: "maknessy", stadium: "allianz arina", owner: "mohammed" }
// , { id: 3, name: "sfax", stadium: "allianz arina", owner: "nizar" }
// , { id: 4, name: "benzart", stadium: "allianz arina", owner: "neder" }

// ];

// let playerTab = [

// { name: "messi", position: "atk", nbr: 10, img: "" },
// { name: "cr7", position: "gbk", nbr: 7, img: "" }
//];













//  business logic :get all teams 

app.get("/api/teams", (req, res) => {

  console.log("hereeeeeeeee intooooo get all teams");
  res.status(200).json({ teams: teamTab, message: "ok" })

})

//  business logic :get  matche by id 

app.get("/api/teams/:x", (req, res) => {

  console.log("hereeeeeeeee intooooo get  matche by id ");

  let id = req.params.x;

  let findedTeam = teamTab.find((elt) => {
    return elt.id == id;
  });

  res.json({ team: findedTeam });

});

//  business logic :delete  matche by id

app.delete("/api/teams/:id", (req, res) => {

  console.log("hereeeeeeeee intooooo delete   team by id ");

  let id = req.params.id;

  let isFounded = false;

  for (let i = 0; i < teamTab.length; i++) {

    if (teamTab[i].id == id) {
      isFounded = true;
      teamTab.splice(i, 1);
      break;

    }

  }

  isFounded

    ? res.json({ message: "success" })

    : res.json({ message: "id not found" });

});










