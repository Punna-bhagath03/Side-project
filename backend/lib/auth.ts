import {betterAuth} from "better-auth"
import {prismaAdapter} from "better-auth/adapters/prisma"
import prisma from "./prisma-client"

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }) ,
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            enabled: true,
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }
    }
})