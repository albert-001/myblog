import { Injectable } from '@angular/core';
import { Article } from '../article';
import { Http, Response } from '@angular/http';
import { serverURL } from '../shared/server';
import { HttpServiceService } from './http-service.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArticleService {

  constructor(private http: Http,
    private httpService: HttpServiceService) { }

  getArticles(pageNum: number): Observable<Article[]> {
    return this.http.get(serverURL + pageNum).map(res => {
      return this.httpService.extractData(res);
    }).catch(err => {
      console.log('error in getArticles');
      return Observable.of<Article[]>([]);
    });
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get(serverURL + 'article/' + id).map(res => {
      return this.httpService.extractData(res);
    }).catch(err => {
      console.log('error in getArticle');
      return Observable.of<Article>();
    });
  }

}
