const { Pool } = require('pg');


// Create a new Pool instance with database connection options
const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "sample",
    user: "postgres",
    password: "12345678"
});

// Export a query function that executes SQL queries using the pool
module.exports = {
    query: async (text, params) => {
        try {
            const client = await pool.connect(); // Get a client from the pool
            const result = await client.query(text, params); // Execute the query
            client.release(); // Release the client back to the pool
            return result; // Return the query result
        } catch (error) {
            console.error('Error executing query:', error.message);
            throw error; // Throw the error to be caught by the caller
        }
    }
};
