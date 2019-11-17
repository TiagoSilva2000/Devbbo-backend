require('dotenv/config');
const Express = require('express');
const Routes = require('./routes');
require('./database/index');

const app = Express();
const PORT = process.env.PORT | 3000;

app.use(Express.json());
app.use(Routes);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})