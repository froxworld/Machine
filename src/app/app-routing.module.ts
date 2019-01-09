import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsComponent} from './models/models.component';
import {ResumeComponent} from './resume/resume.component';
import {ModelDetailComponent} from './model-detail/model-detail.component';

const routes: Routes = [ // premier path est le boot
  { path: '', redirectTo: '/models', pathMatch: 'full' },
  {path : 'resume', component : ResumeComponent}, // resumer des modeles
  {path : 'models', component : ModelsComponent}, // les modeles
  {path : 'detail/:modelId', component : ModelDetailComponent} // detail des modeles
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
