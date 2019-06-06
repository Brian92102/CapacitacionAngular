import { Component } from '@angular/core';

import { Alumno } from './alumno';
import { ItemList } from './ItemList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumno: Alumno = {
    nombre: 'Juan',
    apellido: 'Perez',
    sexo: 1,
    perfil: 0,
    activo: true
  };

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

  Sexos(index: number): string {
    return this.sexos.find(item => item.index === index).descripcion;
  }
  Perfiles(index: number): string {
    return this.perfiles.find(item => item.index === index).descripcion;
  }
}
