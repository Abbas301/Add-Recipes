import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreceipeComponent } from './addreceipe/addreceipe.component';
import { DetailsComponent } from './details/details.component';
import { FoodsComponent } from './foods/foods.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"foods",component:FoodsComponent},
  {path:"addrecipe",component:AddreceipeComponent},
  {path:"details",component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
