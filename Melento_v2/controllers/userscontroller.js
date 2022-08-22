//const dbutil=require('../config/database.js')
var tunnel = require("tunnel-ssh");
var MongoClient = require("mongodb").MongoClient;
const utilencrypt = require("../services/encrypt_password");

async function getUsers(req, res) {
  try {
    var server = tunnel(
      {
        host: "190.92.148.77",
        port: 7822,
        username: "kekkar",
        password: "Kekkar@1234",
        dstPort: 27017,
        localPort: 27018,
      },
      function (error, server) {
        if (error) {
          console.log(error);
        }
        MongoClient.connect("mongodb://localhost:27018", function (err, db) {
          var myDB = db.db("Group6");
          var coll = myDB.collection("users");
          console.log("connected");
          console.log("coll obtained");
          //  arr=coll.find();

          //  arr.forEach(item=>{
          //    console.log(item)
          //  })
          //  res.json(arr)
          coll
            .find()
            .toArray()
            .then((data) => {
              console.log(data); //"value"
              //decrypting password

              data.forEach((u) => {
                u.password = utilencrypt.decryptPassword(u.password);
                // console.log("Decrypted password: "+ u.password)
              });
              res.send(data);
              server.close();
            });
          // setTimeout(function(){
          //   server.close();
          // },30000);
        });
      }
    );
    // Use a listener to handle errors outside the callback
    server.on("error", function (err) {
      console.error("Something bad happened:", err);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // console.log("coll obtained")
}

async function addUsers(req, res) {
  var id,n,e
  try {
    var count = 0;
    var server = tunnel(
      {
        host: "190.92.148.77",
        port: 7822,
        username: "kekkar",
        password: "Kekkar@1234",
        dstPort: 27017,
        localPort: 27018,
      },
      function (error, server) {
        if (error) {
          console.log(error);
        }
        MongoClient.connect("mongodb://localhost:27018", function (err, db) {
          var myDB = db.db("Group6");
          var coll = myDB.collection("users");
          console.log("connected", req.body);
          console.log("coll obtained");
          id = req.body._id;
           n = req.body.name;
          var g = req.body.gender;
          var a = req.body.address;
          var ag = req.body.age;
           e = req.body.email;
          var p = req.body.password;

          //////////////////////////
          p = utilencrypt.encryptPassword(p);
          // console.log("Encrypted password "+p)

          // var decryptedpass=utilencrypt.decryptPassword(p)
          // console.log("Decrypted pass: "+decryptedpass)

          var r = req.body.role;
          count = count + 1;

          coll
            .insertOne({
              _id: id,
              name: n,
              gender: g,
              address: a,
              age: ag,
              email: e,
              password: p,
              role: r,
            })
            .then((data) => {
              console.log(data); //"value"
              // res.send("Inserted: " + id);
              // server.close();
            });
          // setTimeout(function(){
          //   if(count>1){
          //     server.close();
          //   }
          // },30000);
          // s
          var myDB = db.db("Group6");
          var coll = myDB.collection("cart")
          console.log("connected",req.body)
          console.log("coll obtained")
          coll.insertOne({_id:id,uname:n,uemail:e,products:[],amount:0})
                .then(data => {
                    console.log(data) //"value"
                    res.send("Inserted: "+id)
                    server.close()
                });
        });
        
      }
    );
    // Use a listener to handle errors outside the callback
    server.on("error", function (err) {
      console.error("Something bad happened:", err);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  // console.log("coll obtained")
  try {
    var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
      if(error){
      console.log(error)
      }
      MongoClient.connect("mongodb://localhost:27018", function(err, db){
  var myDB = db.db("Group6");
  var coll = myDB.collection("cart")
  console.log("connected",req.body)
  console.log("coll obtained")
  coll.insertOne({_id:id,uname:n,uemail:e,products:[],amount:0})
        .then(data => {
            console.log(data) //"value"
            res.send("Inserted: "+id)
            server.close()
        });

});
});
// Use a listener to handle errors outside the callback
server.on('error', function(err){
   console.error('Something bad happened:', err);
});
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
}

async function updateUser(req, res) {
  try {
    var server = tunnel(
      {
        host: "190.92.148.77",
        port: 7822,
        username: "kekkar",
        password: "Kekkar@1234",
        dstPort: 27017,
        localPort: 27018,
      },
      function (error, server) {
        if (error) {
          console.log(error);
        }
        MongoClient.connect("mongodb://localhost:27018", function (err, db) {
          var myDB = db.db("Group6");
          var coll = myDB.collection("users");
          console.log("connected", req.body);
          console.log("coll obtained");
          console.log(req.params.id);
          var id = parseInt(req.params.id.substring(1));
          console.log("updating id: ", id);
          var n = req.body.name;
          var g = req.body.gender;
          var a = req.body.address;
          var ag = req.body.age;
          var e = req.body.email;
          var p = req.body.password;

          //////////////////////////
          p = utilencrypt.encryptPassword(p);
          // console.log("Encrypted password "+p)

          var r = req.body.role;

          coll
            .updateOne(
              { _id: id },
              {
                $set: {
                  _id: id,
                  name: n,
                  gender: g,
                  address: a,
                  age: ag,
                  email: e,
                  password: p,
                  role: r,
                },
              }
            )
            .then((data) => {
              console.log(data); //"value"
              res.send("Updated: " + id);
              server.close();
            });
        });
      }
    );
    // Use a listener to handle errors outside the callback
    server.on("error", function (err) {
      console.error("Something bad happened:", err);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // console.log("coll obtained")
}

async function deleteUser(req, res) {
  try {
    var server = tunnel(
      {
        host: "190.92.148.77",
        port: 7822,
        username: "kekkar",
        password: "Kekkar@1234",
        dstPort: 27017,
        localPort: 27018,
      },
      function (error, server) {
        if (error) {
          console.log(error);
        }
        MongoClient.connect("mongodb://localhost:27018", function (err, db) {
          var myDB = db.db("Group6");
          var coll = myDB.collection("users");
          console.log("connected");
          console.log("coll obtained");
          var uid = parseInt(req.params.id.substring(1)); //comes in the url
          console.log(uid);
          coll
            .deleteOne({ _id: uid }) //import required here for ObjectId from mongodb library
            .then((data) => {
              console.log(data); //"value"
              res.send("Deleted:" + data);
              server.close();
            });
        });
      }
    );
    // Use a listener to handle errors outside the callback
    server.on("error", function (err) {
      console.error("Something bad happened:", err);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  try {
    var server = tunnel({host: '190.92.148.77',port:7822,username:'kekkar',password:'Kekkar@1234', dstPort: 27017,localPort: 27018}, function (error, server) {
      if(error){
      console.log(error)
      }
      MongoClient.connect("mongodb://localhost:27018", function(err, db){
  var myDB = db.db("Group6");
  var coll = myDB.collection("cart")
  console.log("connected")
  console.log("coll obtained") 
  var uid=parseInt(req.params.id.substring(1))//comes in the url
  console.log(uid)
  coll.deleteOne({ "_id" : uid })//import required here for ObjectId from mongodb library
        .then(data => {
            console.log(data) //"value"
            res.send("Deleted:"+data) 
            server.close()
        });
 
});
});
// Use a listener to handle errors outside the callback
server.on('error', function(err){
   console.error('Something bad happened:', err);
});
      } catch (err) {
        res.status(500).json({ error: err.message })
      }

  // console.log("coll obtained")
}

async function getUsersById(req, res) {
  try {
    var server = tunnel(
      {
        host: "190.92.148.77",
        port: 7822,
        username: "kekkar",
        password: "Kekkar@1234",
        dstPort: 27017,
        localPort: 27018,
      },
      function (error, server) {
        if (error) {
          console.log(error);
        }
        MongoClient.connect("mongodb://localhost:27018", function (err, db) {
          var myDB = db.db("Group6");
          var coll = myDB.collection("users");
          console.log("connected", req.body);
          console.log("coll obtained");
          console.log(req.params.id);
          var id = parseInt(req.params.id.substring(1));
          console.log("getting id: ", id);
          coll.findOne({ _id: id }).then((data) => {
            console.log(data); //"value"
            res.send(data);
            server.close();
          });
        });
      }
    );
    // Use a listener to handle errors outside the callback
    server.on("error", function (err) {
      console.error("Something bad happened:", err);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // console.log("coll obtained")
}

module.exports = { getUsers, addUsers, updateUser, deleteUser, getUsersById };
