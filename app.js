const express = require('express');


//Import Routes
const authRoute = require('./routes/auth');


// app.use('/', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
