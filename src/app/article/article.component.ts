import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(private articleservice: ArticleService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.articleservice.getArticle(id).subscribe(res => this.article = res);
  }

  goBack(): void {
    this.location.back();
  }

}
