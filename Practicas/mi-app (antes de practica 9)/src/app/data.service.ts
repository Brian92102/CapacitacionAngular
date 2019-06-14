import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Observable string sources
  private tituloPrincipalSource = new Subject<string>();

  // Observable string streams
  public tituloPrincipal$ = this.tituloPrincipalSource.asObservable();

  constructor() {}

  // Service message commands
  tituloPrincipal(titulo: string) {
    this.tituloPrincipalSource.next(titulo);
  }
}
