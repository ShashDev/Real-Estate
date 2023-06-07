const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.URI,
  ssl: true,
  keepAlive: true,
});

const connectDB = async function () {
  try {
    await pool.connect();
    console.log("Successfully connected to the database .");
  } catch (error) {
    console.log("Error in connecting to the database .");
  }
};

module.exports = { pool, connectDB };
