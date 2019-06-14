import { Component, OnInit } from '@angular/core';

import { AlumnosService } from './alumnos.service';
import { Alumno } from './alumno';
import { Operaciones } from './operaciones';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo: string;
  alumnos: Alumno[];
  alumnoSeleccionado: Alumno = null;

  constructor(
    private alumnosService: AlumnosService,
    private DataSrv: DataService
  ) {}

  ngOnInit() {
    this.alumnos = this.alumnosService.GetAll();
    this.DataSrv.tituloPrincipal$.subscribe( titulo => this.titulo = titulo );
  }

  Seleccionar(alumno: Alumno): void {
    this.alumnoSeleccionado = alumno;
  }

  FinDeEdicion(): void {
    this.alumnoSeleccionado = null;
  }

  FiltrarAlumnos(filtro: string): void {
    this.alumnos = this.alumnosService.FindbyNombreOApellido(filtro);
  }

  AgregarAlumno(): void {
    this.alumnoSeleccionado = new Alumno(0, '', '', 0, true, 0);
  }

  ActualizarAlumno(operacion: Operaciones): void {
    if (operacion === 'agregar') {
      this.alumnosService.Add(this.alumnoSeleccionado);
    }
    this.alumnoSeleccionado = null;
  }
}
