import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class HttpServiceService {

  constructor() { }

  public extractData(res: Response) {
    const data = res.json();
    return data;
  }

}
