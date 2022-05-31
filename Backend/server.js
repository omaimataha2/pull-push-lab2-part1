const express = require('express');

var cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

let messages = [];

app.post('/messages/short', (req, res) => {
  const {message} = req.body;

  messages.push(message);

  res.json({
    message: 'submitted success',
    data: message,
  });
});

app.get('/messages/short', (req, res) => {
  const {index} = req.query;

  res.json({
    message: 'submitted success',
    data: messages,
  });

  res.status(204).end();
});

//  Long Polling get & Post Methods

let subscribes = {};

app.get('/messages/long', (req, res) => {
  const ID = Math.ceil(Math.random() * 100000);

  subscribes[ID] = res;

  res.on('close', () => {
    delete subscribes[ID];
  });
});

app.post('/messages/long', (req, res) => {
  const {body} = req;

  for (let id in subscribes) {
    result = subscribes[id];
    result.json({message: 'submitted succussfully', data: body});
    delete subscribes[id];
  }

  res.status(204).end();
});

app.listen(8001, () => {
  console.log('Server is running...');
});
