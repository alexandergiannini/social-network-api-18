const request = require('supertest');
//const app = require('../server');
const createServer = require('../utils/server')
const mongoose = require('mongoose');
//const mongoose = require('../server');
const PORT = process.env.PORT || 3001;
const app = createServer();
const SECONDS = 1000;
jest.setTimeout(70 * SECONDS);
jest.useFakeTimers('legacy');

describe('GET /users', () => {
    beforeAll(async () => {
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/3001', {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
       });
       mongoose.set('debug', true);
       app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT} winky`));
       console.log(app);
    });

    describe("given I try to return all users" , () => {
      test("should respond with a 200 status code", async () => {
        const response = await request(app).get('/api/users');
        //const response = app.get
        console.log('below is my response!')
        console.log(response);
        expect(response.statusCode).toBe(200);
      })

    });
  
  })
