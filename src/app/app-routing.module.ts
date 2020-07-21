import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/public/public.module').then(m => m.PublicModule),
    component: IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
