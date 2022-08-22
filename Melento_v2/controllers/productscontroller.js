var tunnel = require("tunnel-ssh");
var MongoClient = require("mongodb").MongoClient;

async function listProducts(req, res) {
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
          console.log("HEREEEEEEEE" + error);
        }
        MongoClient.connect("mongodb://localhost:27018", function (err, db) {
          var myDB = db.db("Group6");
          var coll = myDB.collection("products");
          console.log("connected");
          console.log("coll obtained");
          coll
            .find()
            .toArray()
            .then((data) => {
              console.log(data); //"value"
              res.send(data);
              server.close();
            });
        });
      }
    );
    // Use a listener to handle errors outside the callback
    server.on("error", function (err) {
      console.log("hereeeeeeeeeee");
      console.error("Something bad happened:", err);
      if (err.code === "EADDRINUSE") console.log("...");
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // console.log("coll obtained")
}

async function addProducts(req, res) {
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
          var coll = myDB.collection("products");
          console.log("connected", req.body);
          console.log("coll obtained");
          var id = req.body._id;
          var pN = req.body.pName;
          var pS = req.body.pStyle;
          var pB = req.body.pBattery;
          var pF = req.body.pFittingRange;
          var pR = req.body.pRemarks;
          var pP = req.body.price;
          var pSupp = req.body.supplier_id;
          var pManu = req.body.manufacturer_id;
          var img = req.body.img_path;

          coll
            .insertOne({
              _id: id,
              pName: pN,
              pStyle: pS,
              pBattery: pB,
              pFittingRange: pF,
              pRemarks: pR,
              price: pP,
              supplier_id: pSupp,
              manufacturer_id: pManu,
              img_path: img,
            })
            .then((data) => {
              console.log(data); //"value"
              res.send("Inserted: " + id);
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

async function deleteProducts(req, res) {
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
          var coll = myDB.collection("products");
          console.log("connected");
          console.log("coll obtained");
          var did = req.params.id; //comes in the url
          console.log(did);
          coll
            .deleteOne({ _id: ObjectId(did) }) //import required here for ObjectId from mongodb library
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

  // console.log("coll obtained")
}

async function getProductById(req, res) {
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
          var coll = myDB.collection("products");
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

module.exports = { listProducts, addProducts, deleteProducts, getProductById };
