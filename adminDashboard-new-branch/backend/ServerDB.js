const express = require('express');
const app = express();
const fb = require('./db');
const port = 8080;
const cors= require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())

const { toFetchDataFromDb, collectionRef, collectionComplain } = require('./db');

// to render the data on the client side
app.get('/maps/markers', async (req, res) => {
    try {
      fb.toFetchDataFromDb(collectionRef,(data) => {
        res.json(data);
      });
    } 
    catch (error) {
      console.error("Error in fetching data", error);
      res.status(500).json({ error: "Internal server issue" });
    }
  });

  
  // to show the complaines to the user 
  app.get('/maps/complains',(req, res)=>{
    try {
      fb.toFetchDataFromDb(collectionComplain,(data) => {
        res.json(data);
      });   
    } catch (error) {
          console.error("Error in fetching data", error);
          res.status(500).json({ error: "Internal server issue" });
        }
  })


  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });