import { type Config } from "drizzle-kit";

const { env: { DATABASE_URL } } = useRuntimeConfig()

export default {
    schema: "./src/server/db/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: DATABASE_URL,
    },
    tablesFilter: ["app_*"],
} satisfies Config;