import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {
  posts: Post[];
  aboutMe: String
  constructor(private titleService: Title,
    private http: HttpClient
  ) { }

  loadPosts() {
    const baseURL = document.getElementsByTagName('base')[0].href;
    this.http.get(baseURL + 'assets/posts.json')
      .subscribe((data: Post[]) => { this.posts = data; });
  }

  loadAboutMe() {
    const baseURL = document.getElementsByTagName('base')[0].href;
    this.http.get(baseURL + 'assets/aboutme.json')
      .subscribe(data => { this.aboutMe = JSON.stringify(data, null, 2) });
  }

  ngOnInit() {
    this.loadPosts();
    this.loadAboutMe();
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
