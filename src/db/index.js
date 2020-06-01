// src/usingDB/models/index.js
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();
// if (process.env.NODE_ENV === 'test') {
//   Pool({
//     connectionString: process.env.DATABASE_TEST,
//   });
// }

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default {
  /**
   * DB Query
   * @param {object} req
   * @param {object} res
   * @returns {object} object
   */
  query(text, params) {
    return new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
