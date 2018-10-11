import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: Post;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
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
}
