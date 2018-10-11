import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {
  posts: Post[];
  constructor(
    private http: HttpClient
  ) { }

  loadPosts() {
    const baseURL = document.getElementsByTagName('base')[0].href;
    this.http.get(baseURL + 'assets/posts.json')
      .subscribe((data: Post[]) => { this.posts = data; });
  }

  ngOnInit() {
    this.loadPosts();
  }
}
