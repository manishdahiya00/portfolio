import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://username:password@abc/portfolio?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
