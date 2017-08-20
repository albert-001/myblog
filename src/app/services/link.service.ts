import { Injectable } from '@angular/core';

@Injectable()
export class LinkService {

  constructor() { }

  getLinks() {
    return [{'id': 1, 'text': 'HTML5 rocks', 'url': 'http://www.html5rocks.com/zh/'},
            {'id': 2, 'text': 'Stackoverflow', 'url': 'http://stackoverflow.com/'},
            {'id': 3, 'text': 'Pythonanywhere', 'url': 'https://www.pythonanywhere.com/'},
            {'id': 4, 'text': 'Django', 'url': 'https://www.djangoproject.com/'},
            {'id': 5, 'text': 'Github', 'url': 'https://github.com/'},
            {'id': 6, 'text': 'Django Girls Tutorial', 'url': 'http://tutorial.djangogirls.org/en/'},
            {'id': 7, 'text': 'Angular', 'url': 'https://angular.io/'}];
  }

}
