import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../alumnos.service';

import { Alumno } from '../alumno';
import { ItemListService } from '../item-list.service';
import { Operaciones } from '../operaciones';

@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})
export class AlumnoEdicionComponent implements OnInit {
  alumnoSeleccionado: Alumno = null;
  // @Output() FinDeEdicion: EventEmitter<Operaciones> = new EventEmitter();

  constructor(
    public ItemListSrv: ItemListService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private alumnosSrv: AlumnosService
  ) {}

  ngOnInit() {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    const operacion = this.activeRoute.snapshot.paramMap.get('operacion');
    switch (operacion) {
      case 'editar': {
        this.alumnoSeleccionado = this.alumnosSrv.Get(id);
        break;
      }
      case 'agregar': {
        this.alumnoSeleccionado = new Alumno(0, '', '', 1, true, 1);
        break;
      }
      case 'eliminar': {
        this.alumnosSrv.Delete(id);
        this.Regresar();
        break;
      }
      default: {
        this.Regresar();
      }
    }
  }

  Regresar() {
    // this.alumnoSeleccionado = null;
    // this.FinDeEdicion.emit('cancelar');
    this.router.navigate(['/alumnos']);
  }

  Guardar(form: any) {
    console.log(form);
    Object.keys(form).forEach(
      (key, index) => (this.alumnoSeleccionado[key] = form[key])
    );

    if (this.alumnoSeleccionado.id === 0) {
      // 	this.FinDeEdicion.emit('agregar');
      this.alumnosSrv.Add(this.alumnoSeleccionado);
    } else {
      // 	this.FinDeEdicion.emit('editar');
      this.alumnosSrv.Update(this.alumnoSeleccionado);
    }
    this.Regresar();
  }
}
