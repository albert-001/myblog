import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles : Article[];

  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
