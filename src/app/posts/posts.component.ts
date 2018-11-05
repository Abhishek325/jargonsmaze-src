import { Component, OnInit, Injectable } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

@Injectable()
export class PostsComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: Title
  ) { }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const baseURL = document.getElementsByTagName('base')[0].href;
    this.http.get(baseURL + 'assets/posts.json')
      .subscribe((data: Post[]) => { this.post = data.find(post => post.id === parseInt(id)) });
  }

  ngOnInit() {
    this.getPost();
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
