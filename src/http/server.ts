import { buildSchema } from 'drizzle-graphql'
import { startStandaloneServer } from '@apollo/server/standalone'
import { db } from '../db'
import { ApolloServer } from '@apollo/server'

const { schema } = buildSchema(db)

const server = new ApolloServer({ schema })

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      res?.setHeader(
        'Access-Control-Allow-Origin',
        'https://echovolt-ui-matheusf.netlify.app'
      )
      res?.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      res?.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
      )
      res?.setHeader('Access-Control-Allow-Credentials', 'true')

      return {}
    },
  })
  console.log(`🚀 Server running at ${url}`)
}

startServer().catch(err => {
  console.error('Error starting server:', err)
})
