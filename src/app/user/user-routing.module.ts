import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path:'', component: UserComponent,
    children: [
      { path:"purchases", component: PurchasesComponent },
      { path:"favorites", component: FavoritesComponent },
      { path:"reviews", component: ReviewsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
