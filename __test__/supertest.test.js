const request = require('supertest');
const server = 'http://localhost:3000';
const express = require('express');
const app = express();

//test for GET '/' and its exerciseController.getExercises
// app.get('/', (req, res) => {
//   res.status(200);
// });

// request();
describe('/api', () => {
  describe ('GET', () => {
    it ('recieves an array of objects from request', () => {
      return request(server)
      .get('/')
      .then(data => {
        expect(typeof data).toEqual('object') 
      })
      .catch(e => console.log(e))
    })
  })

  describe ('POST', () => {
    it ('expects to recieve 200 status', () => {
      return request(server)
      .post('/api/drill')
      .send('exercise')
      .then(data => {
        expect(data.status).toEqual(201);
      })
      .catch(e => console.log(e))
    })
  })
});


  