import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Purchases } from 'src/app/shared/models/Purchases';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases!: Purchases;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserPurchases().subscribe(resp => {
      this.purchases = resp;
      console.log('GOT USER PURCHASED MOVIES');
      console.log(this.purchases);
    })
  }

}
