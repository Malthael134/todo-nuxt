import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

const {
    env: {
        POSTGRES_USER,
        POSTGRES_PASSWORD,
        POSTGRES_DB,
        DATABASE_HOST,
        DATABASE_PORT,
    }
} = useRuntimeConfig();
const appConfig = useAppConfig()


const conn = postgres({
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
})

export const db = drizzle(conn, { schema });