import express from 'express';
import { router } from './routes/index';

const app = express();

app.use(router);

app.get('/', (req, resp) => {
  resp.status(200).send(resp.greeting);
});

app.get('/students', (req, resp) => {
  console.log('students', req.resText)
  resp.status(200).send(resp.resText);
});

app.get('/students/:major', (req, resp) => {
  console.log('students', req.resText)
  resp.status(200).send(resp.resText);
});

app.listen(1245);

export default app;
