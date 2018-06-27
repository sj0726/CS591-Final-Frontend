import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  tweets: any;

  constructor(private http: HttpClient) {
    http.get('http://127.0.0.1:3000/auth/showTweets')
      .subscribe(
        data => this.tweets = data,
        err => console.log('Error: ${err}'),
        () => console.log(`Completed Request`)
 );
  }

  getData() {

  }

  ngOnInit() {
  }

}
