import { Vuelo, VueloModelo } from "./types.ts";

export const ModelToVuelo = (vueloModelo:VueloModelo):Vuelo => {
    return{
        id:vueloModelo._id!.toString(),
        Origen:vueloModelo.Origen,
        Destino:vueloModelo.Destino,
        FechaHora:vueloModelo.FechaHora

    }
}