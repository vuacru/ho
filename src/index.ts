import { Hono } from 'hono';
import eric from './data/eric.json';
import clare from './data/clare.json';
import vlatko from './data/vlatko.json';
import bibiana from './data/bibiana.json';
import common from './data/common.json';
import weapon from './data/weapon.json';

const app = new Hono();

app.get('/', c => {
  return c.text('Hello Hono!');
});

app.get('/', async c => {
  return c.render(<h1>Hello!!</h1>);
});

app.get('/eric', async c => {
  return c.json(eric);
});

app.get('/clare', async c => {
  return c.json(clare);
});

app.get('/vlatko', async c => {
  return c.json(vlatko);
});

app.get('/bibiana', async c => {
  return c.json(bibiana);
});

app.get('/common', async c => {
  return c.json(common);
});

app.get('/weapon', async c => {
  return c.json(weapon);
});

export default app;
