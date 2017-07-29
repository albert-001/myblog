import { Injectable } from '@angular/core';
import { Article } from '../article'
import { ARTICLES } from '../articles'

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    return ARTICLES;
  }

}
