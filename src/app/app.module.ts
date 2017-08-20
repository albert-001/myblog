import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OnearticleComponent } from './onearticle/onearticle.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

import { ArticleService } from './services/article.service';
import { NewsService } from './services/news.service';
import { LinkService } from './services/link.service';
import { HttpServiceService } from './services/http-service.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ArticleComponent } from './article/article.component';

import { serverURL } from './shared/server';
import { NewsComponent } from './news/news.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    OnearticleComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ArticleComponent,
    NewsComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ArticleService,
    NewsService,
    LinkService,
    {provide: 'ServerURL', useValue: serverURL},
    HttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
