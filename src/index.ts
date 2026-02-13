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

// 250930
app.get('/eric/260213', async c => {
  return c.json(eric);
});

app.get('/clare/260213', async c => {
  return c.json(clare);
});

app.get('/vlatko/260213', async c => {
  return c.json(vlatko);
});

app.get('/bibiana/260213', async c => {
  return c.json(bibiana);
});

app.get('/common/260213', async c => {
  return c.json(common);
});

app.get('/weapon/260213', async c => {
  return c.json(weapon);
});

export default app;
