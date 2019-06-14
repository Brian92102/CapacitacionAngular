export class Alumno {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public sexo: number,
    public activo: boolean,
    public perfil: number
  ) {}
}
