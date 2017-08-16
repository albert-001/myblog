import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuIcon: string = '=';

  constructor(private elementRef: ElementRef) {
    Observable.fromEvent(window, 'resize').subscribe(e => {
      if(window.innerWidth>640) {
        if(this.elementRef.nativeElement.querySelector('.menu').style.display == 'none') {
          this.elementRef.nativeElement.querySelector('.menu').style.display = 'block';
        }
      } else {
        if((this.elementRef.nativeElement.querySelector('.menu').style.display == 'block') && (this.menuIcon == '=')) {
          this.elementRef.nativeElement.querySelector('.menu').style.display = 'none';
        }
      }
    });
  }

  ngOnInit() {}

  toggleMenu() {
    if(this.menuIcon == '=') {
      this.menuIcon = 'x';
      this.elementRef.nativeElement.querySelector('.menu').style.display = 'block';
    } else {
      this.menuIcon = '=';
      this.elementRef.nativeElement.querySelector('.menu').style.display = 'none';
    }
  }

}
