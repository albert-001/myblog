import { Injectable } from '@angular/core';
import { Link } from '../link';
import { Http, Response } from '@angular/http';
import { serverURL } from '../shared/server';
import { HttpServiceService } from './http-service.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LinkService {

  constructor(private http: Http,
    private httpService: HttpServiceService) { }

    getLinks(): Observable<Link[]> {
      return this.http.get(serverURL + 'links').map(res => {
        return this.httpService.extractData(res);
      }).catch(err => {
        console.log('error in getLinks');
        return Observable.of<Link[]>([]);
      });
    }

}
