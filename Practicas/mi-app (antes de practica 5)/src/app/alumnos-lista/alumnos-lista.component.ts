import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../alumno';
import { ItemList } from '../ItemList';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {
  @Input() alumnos: Alumno[];
  @Output() Seleccion = new EventEmitter<Alumno>();

  alumnoSeleccionado: Alumno = null;

  perfiles: ItemList[] = [
    new ItemList(0, 'Desarrollador'),
    new ItemList(1, 'IT'),
    new ItemList(2, 'Power User')
  ];

  constructor() { }

  ngOnInit() {
  }

  Perfiles(index: number): string {
    return this.perfiles.find(item => item.index === index).descripcion;
  }
  AlumnoSelect(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    this.Seleccion.emit(this.alumnoSeleccionado);
  }
  EstaSeleccionado(alumno: Alumno) {
    if (this.alumnoSeleccionado) {
      return this.alumnoSeleccionado.id === alumno.id;
    } else {
      return false;
    }
  }
}
