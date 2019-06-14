import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private DataSrv: DataService) { }

  ngOnInit() {
    this.DataSrv.tituloPrincipal('Lista de Cursos');
  }

}
