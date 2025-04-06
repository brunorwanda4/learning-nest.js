import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    schema : './src/**/schema.ts',
    out: "./drizzle",
    dialect: 'postgresql',
    dbCredentials:{
        url: process.env.DB_URL || "postgres://postgres:0004@localhost:5432/todo",
    }
})