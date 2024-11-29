import { ApolloServer } from "@apollo/server";
import { schema } from "./schema.ts";
import { MongoClient } from "mongodb";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.ts";
import { VueloModelo } from "./types.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  throw new Error("MONGO_URL no encontrada");
}

const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();


const mongoDB = mongoClient.db("vuelos");
const vuelosCollection = mongoDB.collection<VueloModelo>("vuelos");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({ vuelosCollection }),
});

console.info(`Server escuchando en ${url}`);