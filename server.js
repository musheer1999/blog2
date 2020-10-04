// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true  }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// })


// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });

const express = require('express')
const mongoose = require('mongoose')
const cors =  require('cors')

// require('dotenv').config()
const config = require("./config/key");
const app =  express()




const port =  process.env.PORT||5000

app.use(cors())
app.use(express.json())
// const uri = process.env.ATLAS_URI;

// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true  });
const connect = mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('mongoDb database connection established sucessfully')
})
const blogrouter = require('./routes/blog')
app.use('/blog' ,blogrouter)

if (process.env.NODE_ENV === "production") {

  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server is running on the port: ${port}`)
})