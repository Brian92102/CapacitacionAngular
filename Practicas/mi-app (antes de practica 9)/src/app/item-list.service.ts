import { Injectable } from '@angular/core';

import { ItemList } from './itemList';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  private sexos: ItemList[] = [
    new ItemList(0, 'Femenino'),
    new ItemList(1, 'Masculino'),
    new ItemList(2, 'Otro')
  ];
  private perfiles: ItemList[] = [
    new ItemList(0, 'Desarrollador'),
    new ItemList(1, 'IT'),
    new ItemList(2, 'Power User')
  ];

  constructor() {}

  Sexos(index: number): string {
    return this.sexos.find(item => item.index === index).descripcion;
  }

  Perfiles(index: number): string {
    return this.perfiles.find(item => item.index === index).descripcion;
  }
  GetSexos(): ItemList[] {
    return this.sexos;
  }

  GetPerfiles(): ItemList[] {
    return this.perfiles;
  }
}
