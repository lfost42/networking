const tasks = require("./routes/tasks");
const mongoose = require('mongoose')
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());

const db='mongodb://localhost:27017/tasks'

mongoose.connect(db, ({ useNewUrlParser: true}))
	.then(console.log('Connected to MongoDb'))
	.catch(err => console.log(err))

app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));