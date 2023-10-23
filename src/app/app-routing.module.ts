import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [{
  path: '', component: MainComponent
},{
  path: 'registro/agregar', component: RegisterComponent
},{
  path: 'registro/edicion/:id', component: RegisterComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
