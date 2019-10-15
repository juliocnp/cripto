import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaComponent } from './tela/tela.component';


const routes: Routes = [
  {
    path: '',
    component: TelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
