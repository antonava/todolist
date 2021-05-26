const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express();

const PORT = process.env.PORT || 3001;

//Scheme
const taskScheme = new Schema({
  taskName: {
    type: String,
    required: true
  }
}, { timestamps: true })

//model
const Task = mongoose.model('Task', taskScheme);

//obj


const dbURL = 'mongodb+srv://aantonava:271096N@todotasks.plzsa.mongodb.net/ToDoTasks?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(result => app.listen(PORT))
  .catch(err => console.log('err', err));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/all-tasks', (req, res) => {
  Task.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
});


app.post('/all-tasks', (req, res) => {
  // console.log(req.body);
  const task = new Task(req.body);

  task.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });

});


// app.delete('/all-tasks/', (req, res) => {
//   const id = req.param.id;
//   console.log(id);

//   // Task.findByIdAndDelete(id) 
//   //   .then((result) => {
//   //     res.json();
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });
// })