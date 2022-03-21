import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // get top 30 movies from API and send the data to view
  // call the API https://localhost:7237/api/Movies/top-grossing =>
  // <partial name="moviecard" ></partial>
}
