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

app.get('/eric/250930', async c => {
  return c.json(eric);
});

app.get('/clare/250930', async c => {
  return c.json(clare);
});

app.get('/vlatko/250930', async c => {
  return c.json(vlatko);
});

app.get('/bibiana/250930', async c => {
  return c.json(bibiana);
});

app.get('/common/250930', async c => {
  return c.json(common);
});

app.get('/weapon/250930', async c => {
  return c.json(weapon);
});

export default app;
