import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';

import { DataService } from './services/data.service';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { WorksComponent } from './components/works/works.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'trivia',
        component: TriviaComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'works',
        component: WorksComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    NavSidebarComponent,
    TriviaComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
