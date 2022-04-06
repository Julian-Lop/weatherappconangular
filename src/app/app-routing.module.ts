import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path: '', component: CardsComponent},
  {path: 'detail/:name', component: DetailComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }