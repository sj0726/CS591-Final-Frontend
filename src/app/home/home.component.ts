import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
tweets: any;
  constructor(private http: HttpClient) { }
getTweets() {
  this.http.get('http://127.0.0.1:3000/auth/showTweets')
    .subscribe(
      data => this.tweets = data,
      err => console.log('Error: ${err}'),
      () => console.log(`Completed Request`)
    );
}
  ngOnInit() {
  }

}
