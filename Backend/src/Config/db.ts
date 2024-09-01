import * as dotenv from 'dotenv';

import {createPool} from 'mysql2';

dotenv.config();

export const connection = createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE||'Shadab',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'),
});
