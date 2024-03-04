require('dotenv').config();
const cors = require('cors');
const express = require('express');
const router = require('./router/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3000);