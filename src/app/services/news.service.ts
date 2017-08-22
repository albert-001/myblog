import { Injectable } from '@angular/core';
import { News } from '../news';
import { Http, Response } from '@angular/http';
import { serverURL } from '../shared/server';
import { HttpServiceService } from './http-service.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NewsService {

  constructor(private http: Http,
    private httpService: HttpServiceService) { }

    getNews(): Observable<News[]> {
      return this.http.get(serverURL + 'news').map(res => {
        return this.httpService.extractData(res);
      }).catch(err => {
        console.log('error in getNews');
        return Observable.of<News[]>([]);
      });
    }

}
