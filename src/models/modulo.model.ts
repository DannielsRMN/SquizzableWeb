import { Dificultad } from "./dificultad.model"
import { Especialidad } from "./especialidad.model"

export class Modulo{
  idModulo? : number
  nombreModulo : string
  dif : Dificultad
  espe: Especialidad
}
