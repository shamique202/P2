const mongoose = require('mongoose');

// database connection string here
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//mongoose.connection obj.
const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
