import { Injectable } from '@angular/core';
import { News } from '../news';

@Injectable()
export class NewsService {

  constructor() { }

  getNews() {
    return [{'id': 1, 'date': '2017-07-31', 'liner': '增加Router'},
            {'id': 2, 'date': '2017-07-30', 'liner': '发布到Github Pages'},
            {'id': 3, 'date': '2017-07-28', 'liner': '前端移植到Angular'},
            {'id': 4, 'date': '2016-06-26', 'liner': '制作网站logo，增加样式'},
            {'id': 5, 'date': '2016-06-26', 'liner': '搭建开发环境，创建html'}];
  }

}
