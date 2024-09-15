import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://wesol_owner:cmG8TWCDpH9t@ep-noisy-forest-a71kl6ma.ap-southeast-2.aws.neon.tech/wesol?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
