import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './layout/hearder/hearder.component';
import { CategoryNavbarComponent } from './layout/category-navbar/category-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCatogoryComponent } from './pages/single-catogory/single-catogory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermAndConditionComponent } from './pages/term-and-condition/term-and-condition.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PostCardComponent } from './layout/post-card/post-card.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCatogoryComponent,
    SinglePostComponent,
    TermAndConditionComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent,
    ContactUsComponent,
    PostCardComponent,
    SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
