const express = require('express');
const path = require('path');
// const routes = require('./routes');

const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');

const app = express();

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);



app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
