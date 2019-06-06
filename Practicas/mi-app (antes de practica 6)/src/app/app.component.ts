import { Component } from '@angular/core';

import { Alumno } from './alumno';
import { ItemList } from './ItemList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: Alumno[] = [
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
  alumnoSeleccionado: Alumno = null;

  Seleccionar(alumno: Alumno): void {
    this.alumnoSeleccionado = alumno;
  }

  FinEdicion(): void{
    this.alumnoSeleccionado = null;
  }
}
