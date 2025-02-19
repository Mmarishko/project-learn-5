import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then(mod => mod.PageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
