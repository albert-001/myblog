import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-onearticle',
  templateUrl: './onearticle.component.html',
  styleUrls: ['./onearticle.component.css']
})
export class OnearticleComponent implements OnInit {
  @Input()
  article: Article;

  constructor() { }

  ngOnInit() {
  }

}
