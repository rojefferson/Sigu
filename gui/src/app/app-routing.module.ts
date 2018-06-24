import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CoordenacaoComponent } from './coordenacao/coordenacao.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '/Aluno',component: AlunoComponent},
  { path: '/Corrdenacao', component: CoordenacaoComponent}
  ];

@NgModule({
  exports : [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

