import {OptionalId} from "mongodb"
export type Vuelo ={
    id:string;
    Origen:string;
    Destino:string;
    FechaHora:string;
}
export type VueloModelo = OptionalId<{
    Origen:string;
    Destino:string;
    FechaHora:string;
}>