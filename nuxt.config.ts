import { z } from "zod"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        env: {
            POSTGRES_USER: z.string().parse(process.env.POSTGRES_USER),
            POSTGRES_PASSWORD: z.string().parse(process.env.POSTGRES_PASSWORD),
            POSTGRES_DB: z.string().parse(process.env.POSTGRES_DB),
            DATABASE_HOST: z.string().parse(process.env.DATABASE_HOST),
            DATABASE_PORT: z.string().transform((val) => parseInt(val, 10)).refine((val) => !isNaN(val), {
                message: "DATABASE_PORT must be a valid number"
            }).parse(process.env.DATABASE_PORT),
            DATABASE_URL: z.string().url().parse(process.env.DATABASE_URL),
        },
    },
    nitro: {
        
    },
    experimental: {},
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
        configPath: 'tailwind.config.js',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },
    alias: {
        "@": "/"
    },
    modules: ['@nuxt/eslint', '@nuxt/devtools', '@nuxtjs/tailwindcss'],

})
