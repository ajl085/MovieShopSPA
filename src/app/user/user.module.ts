import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PurchasesComponent } from './purchases/purchases.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserComponent } from './user.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PurchasesComponent,
    FavoritesComponent,
    UserComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
