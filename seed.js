require('dotenv').config();
require('./config/database');

const userSchema = require('./models/user')

// IIFE - Immediately Invoked Function Expression
/*
(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Sandwiches', sortOrder: 10},
    {name: 'Seafood', sortOrder: 20},
    {name: 'Mexican', sortOrder: 30},
    {name: 'Italian', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);
  
  console.log(items)
  
  process.exit();
  
})();
*/