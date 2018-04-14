import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//add router module
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : 'home', component : HomeComponent},
      {path : '', redirectTo : 'home', pathMatch : 'full'},
      {path : "about", component : AboutComponent},
      {path : 'blog/:blogId', component : BlogViewComponent}, //using ids
      {path : 'create', component : BlogCreateComponent },
      {path : 'edit/:blogId', component: BlogEditComponent},
      {path : "**", component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
