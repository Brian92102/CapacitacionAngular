import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AlumnosListaComponent } from './alumnos-lista/alumnos-lista.component';
import { AlumnoEdicionComponent } from './alumno-edicion/alumno-edicion.component';

@NgModule({
  declarations: [AppComponent, AlumnosListaComponent, AlumnoEdicionComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
