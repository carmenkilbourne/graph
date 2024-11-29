export const schema = `#graphql
type Vuelo = {
    id:ID!
    Origen: String!
    Destino:String!
    FechaHora:String!
}
type Query{
    getFlight(id:ID!):Vuelo
    getFligths(Origen:String,Destino:String):[Vuelo!]!
}
type Mutations{
    addFlight(Origen:String!,Destino:String!,FechaHora:String!):Vuelo
}
`;