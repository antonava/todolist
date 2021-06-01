const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const mongoose = require('mongoose');

const { Schema } = mongoose;
const app = express();

const PORT = process.env.PORT || 3001;

// Scheme
const taskScheme = new Schema({
  taskName: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// model
const Task = mongoose.model('Task', taskScheme);

const dbURL = 'mongodb+srv://aantonava:271096N@todotasks.plzsa.mongodb.net/ToDoTasks?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => app.listen(PORT))
  .catch(err => console.log('err', err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/all-tasks', (req, res) => {
  Task.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

app.post('/all-tasks', (req, res) => {
  const task = new Task(req.body);

  task.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});

app.delete('/all-tasks/:id', (req, res) => {
  Task.findByIdAndDelete({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
});
