import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AlunoModule } from './aluno/aluno.module';
import { CoordenacaoModule } from './coordenacao/coordenacao.module';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HomeModule,
    AlunoModule,
    CoordenacaoModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
