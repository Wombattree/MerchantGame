const SeedItemTypes = require('./itemTypeSeed');
const SeedUsers = require('./userSeed');
const SeedCities = require('./citySeed');

const sequelize = require('../config/connection');

async function SeedAll()
{
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await SeedItemTypes();
  console.log('\n----- ITEM TYPES SEEDED -----\n');

  await SeedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

SeedAll();