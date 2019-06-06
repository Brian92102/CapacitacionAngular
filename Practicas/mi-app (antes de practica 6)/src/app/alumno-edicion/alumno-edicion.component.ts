import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Alumno } from '../alumno';
import { ItemList } from '../ItemList';

@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})
export class AlumnoEdicionComponent implements OnInit {
  constructor() {}

  @Input() alumnoSeleccionado: Alumno = null;
  @Output() finEdicion: EventEmitter<any> = new EventEmitter();

  sexos: ItemList[] = [
    new ItemList(0, 'Femenino'),
    new ItemList(1, 'Masculino'),
    new ItemList(2, 'Otro')
  ];
  perfiles: ItemList[] = [
    new ItemList(0, 'Desarrollador'),
    new ItemList(1, 'IT'),
    new ItemList(2, 'Power User')
  ];

  ngOnInit() {}

  Sexos(index: number): string {
    return this.sexos.find(item => item.index === index).descripcion;
  }
  Perfiles(index: number): string {
    return this.perfiles.find(item => item.index === index).descripcion;
  }
  Regresar() {
    this.alumnoSeleccionado = null;
    this.finEdicion.emit();
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

    this.Regresar();
  }
}
