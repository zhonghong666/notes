// const getState = require('./state');
// // import getState from './state';

// setInterval(getState, 1000);

const express = require('./myExpress');
const app = express();
app.get('/', (req, res) => {
    res.end('Hello World..');
});
app.get('/users', (req, res) => {
    res.end(JSON.stringify({name: 'abc'}));
});
app.listen(3000, () => {
    console.log('Application listen at 3000');
})