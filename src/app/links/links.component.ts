import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { LinkService } from '../services/link.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links: Link[];

  constructor(private linkService: LinkService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.links = this.linkService.getLinks();
  }

}
