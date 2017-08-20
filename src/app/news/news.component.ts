import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews()  {
    this.news = this.newsService.getNews();
  }

}
