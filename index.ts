import { createDatabase } from "db0"
import postgresql from "db0/connectors/postgresql"

const { dbUrl,  } = useRuntimeConfig()

const db = createDatabase(
    postgresql({
        url: dbUrl
    })
)