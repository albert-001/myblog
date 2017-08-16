import { Routes } from '@angular/router';

import { BlogComponent } from '../blog/blog.component';
import { AboutComponent } from '../about/about.component';
import { ArticleComponent } from '../article/article.component';

export const routes: Routes = [
    {path: 'home', component: BlogComponent},
    {path: 'about', component: AboutComponent},
    {path: 'articles/:id', component: ArticleComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

