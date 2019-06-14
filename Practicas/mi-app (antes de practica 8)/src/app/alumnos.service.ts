import { Injectable } from '@angular/core';

import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      sexo: 1,
      perfil: 0,
      activo: true
    },
    {
      id: 2,
      nombre: 'Pedro',
      apellido: 'Garcia',
      sexo: 1,
      perfil: 1,
      activo: true
    },
    {
      id: 3,
      nombre: 'Ana',
      apellido: 'Romero',
      sexo: 0,
      perfil: 2,
      activo: true
    },
    {
      id: 4,
      nombre: 'Maria',
      apellido: 'Gutierrez',
      sexo: 0,
      perfil: 2,
      activo: true
    },
    {
      id: 5,
      nombre: 'Esteban',
      apellido: 'Smith',
      sexo: 1,
      perfil: 0,
      activo: true
    }
  ];

  constructor() {}
  GetAll(): Alumno[] {
    return this.alumnos;
  }

  Get(id: number): Alumno {
    const index = this.alumnos.findIndex(a => a.id === id);
    if (index < 0) {
      return null;
    }
    return this.alumnos[index];
  }

  Add(alumno: Alumno): number {
    alumno.id = new Date().valueOf(); // "unique" id

    this.alumnos.push(alumno);
    return alumno.id;
  }

  Delete(id: number): void {
    const index = this.alumnos.findIndex(a => a.id === id);
    this.alumnos.splice(index, 1);
  }

  Update(alumno: Alumno) {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index >= 0) {
      this.alumnos[index] = alumno;
    } else {
      throw new Error('alumno inexistente');
    }
  }

  FindbyNombreOApellido(nombre: string) {
    return this.alumnos.filter(
      a =>
        (a.nombre + ' ' + a.apellido)
          .toLowerCase()
          .indexOf(nombre.toLocaleLowerCase()) >= 0
    );
  }
}
