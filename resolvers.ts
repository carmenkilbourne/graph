import { Collection, ObjectId } from "mongodb";
import { Vuelo, VueloModelo } from "./types.ts";
import { ModelToVuelo } from "./utils.ts";
import { argsToArgsConfig } from "graphql";
import { ContextualizedQueryLatencyStats } from "../../../AppData/Local/deno/npm/registry.npmjs.org/@apollo/usage-reporting-protobuf/4.1.1/generated/esm/protobuf.d.ts";

export const resolvers = {
    Query: {
        getFlight:async(
            _:unknown,
            {id}: { id: string },
            context: { VueloCollection: Collection<VueloModelo>;},
        ): Promise<Vuelo|null> =>{
            const vuelo = await context.VueloCollection.findOne({_id: new ObjectId(id),});
            if(!vuelo){
                return null;
            }
            return ModelToVuelo(vuelo);
        }
      },
      //getFlights:async (
       // _:unknown,
       // args:{Origen: any,Destino: any},
        //context: {
        //    VueloCollection: Collection<VueloModelo>;
         // },
        //):Promise<Vuelo> => {
         //   const vuelos = await context.VueloCollection.find
       // },
        Mutations:{
            addFlight:async(
                _:unknown,
                {args}:(Origen: string,Destino: string,FechaHora: string),
                context: { VueloCollection: Collection<VueloModelo>;},
            ):Promise<Vuelo> => {
                //poner todas las variables const 
                const vueloanadido = await context.VueloCollection.insertOne({
                 })
            }
        }

  };