import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TweetRequest } from '../model/TweetRequest';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  user!: string
  delete!: string
  base = environment.base;

  constructor(private http: HttpClient,) { }

  getAllTweets() {
    return this.http.get(this.base + '/tweets/all');
  }
  postTweet(TweetRequest: TweetRequest) {
    this.user = JSON.parse(localStorage.getItem('userId') || '{}');
    return this.http.post<any>(this.base + "/tweets/add/" + this.user, TweetRequest);
  }
  getUserTweet() {
    this.user = JSON.parse(localStorage.getItem('userId') || '{}');
    return this.http.get(this.base + "/tweets/" + this.user);
  }
  deleteTweet(del: String) {
    this.user = JSON.parse(localStorage.getItem('userId') || '{}');
    return this.http.delete<any>(this.base + "/tweets/" + this.user + "/delete/" + del);
  }

}
