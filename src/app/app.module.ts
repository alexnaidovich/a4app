import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { TriviaComponent } from './components/trivia/trivia.component';
import { WorksComponent } from './components/works/works.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
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
    NavSidebarComponent,
    TriviaComponent,
    WorksComponent,
    BlogComponent,
    ContactComponent,
    WelcomeComponent
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
