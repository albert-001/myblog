import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: Article[];
  page = 1;
  totalPages = 2;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles(this.page);
  }

  pageIncr() { this.page += 1; this.getArticles(this.page); }

  pageDecr() { this.page -= 1; this.getArticles(this.page); }

  getArticles(pageNum: number) {
    this.articleService.getArticles(pageNum).subscribe(res => this.articles = res);
  }

}
