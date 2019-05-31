import { Component, OnInit, Input } from '@angular/core';

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
}
