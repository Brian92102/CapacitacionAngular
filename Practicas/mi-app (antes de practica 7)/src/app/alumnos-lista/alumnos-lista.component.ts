import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../alumno';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrls: ['./alumnos-lista.component.css']
})
export class AlumnosListaComponent implements OnInit {
  @Input() alumnos: Alumno[];
  @Input() alumnoSeleccionado: Alumno = null;
  @Output() Seleccion = new EventEmitter<Alumno>();
  @Output() AgregarAlumno = new EventEmitter<void>();
  @Output() FiltrarAlumnos = new EventEmitter<string>();

  constructor(public ItemListSrv: ItemListService) {}

  ngOnInit() {}

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

  Agregar() {
    this.AgregarAlumno.emit();
  }

  Filtrar(filtro: string) {
    this.FiltrarAlumnos.emit(filtro);
  }
}
