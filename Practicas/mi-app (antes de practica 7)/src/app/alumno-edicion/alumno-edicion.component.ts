import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Alumno } from '../alumno';
import { ItemListService } from '../item-list.service';
import { Operaciones } from '../operaciones';

@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})
export class AlumnoEdicionComponent implements OnInit {
  @Input() alumnoSeleccionado: Alumno = null;
  @Output() FinDeEdicion: EventEmitter<Operaciones> = new EventEmitter();

  constructor(public ItemListSrv: ItemListService) {}

  ngOnInit() {}

  Regresar() {
    // this.alumnoSeleccionado = null;
    this.FinDeEdicion.emit('cancelar');
  }

  Guardar(form: any) {
    // this.alumnoSeleccionado.nombre = form.nombre;
    // this.alumnoSeleccionado.apellido = form.apellido;
    // this.alumnoSeleccionado.sexo = form.sexo;
    // this.alumnoSeleccionado.perfil = form.perfil;
    // this.alumnoSeleccionado.activo = form.activo;

    Object.keys(form).forEach(
      (key, index) => (this.alumnoSeleccionado[key] = form[key])
    );

    if (this.alumnoSeleccionado.id === 0) {
      this.FinDeEdicion.emit('agregar');
      } else {
      this.FinDeEdicion.emit('editar');
      }
  }
}
