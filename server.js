const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync('**/*.graphql')
const resolversArray = loadFilesSync('**/*.resolvers.js')

const startApolloServer = async () => {
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  })

  const server = new ApolloServer({
    schema,
  })

  const app = express()

  await server.start()

  server.applyMiddleware({ app })

  app.listen({ port: 8000 }, () => console.log('Running GraphQL server...'))
}

startApolloServer()
