import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemListService } from '../item-list.service';
import { AlumnosService } from '../alumnos.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { Alumno } from '../alumno';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {
  alumnos: Alumno[];
  alumnoSeleccionado: Alumno = null;
  dataSource: MatTableDataSource<Alumno>;
  displayedColumns = [
    'id',
    'nombre',
    'apellido',
    'perfil',
    'sexo',
    'activo',
    'acciones'
  ];

  constructor(
    public ItemListSrv: ItemListService,
    public AlumnosSrv: AlumnosService,
    private router: Router,
    private DataSrv: DataService,
  ) {}

  ngOnInit() {
    this.alumnos = this.AlumnosSrv.GetAll();
    this.dataSource = new MatTableDataSource(this.alumnos);
    this.DataSrv.tituloPrincipal('Lista de Alumnos');
  }

  AlumnoSelect(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    // this.Seleccion.emit(this.alumnoSeleccionado);
  }

  EstaSeleccionado(alumno: Alumno) {
    if (this.alumnoSeleccionado) {
      return this.alumnoSeleccionado.id === alumno.id;
    } else {
      return false;
    }
  }

  AgregarAlumno() {
    this.router.navigate(['/alumno', 'agregar', 0]);
  }

  Filtrar(filtro: string) {
    this.alumnos = this.AlumnosSrv.FindbyNombreOApellido(filtro);
    this.dataSource = new MatTableDataSource(this.alumnos);
  }

  EditarAlumno(alumno: Alumno) {
    this.router.navigate(['/alumno', 'editar', alumno.id]);
  }

  EliminarAlumno(alumno: Alumno) {
    this.router.navigate(['/alumno', 'eliminar', alumno.id]);
  }

}
