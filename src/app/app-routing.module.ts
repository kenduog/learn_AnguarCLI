import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCatogoryComponent } from './pages/single-catogory/single-catogory.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermAndConditionComponent } from './pages/term-and-condition/term-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: SingleCatogoryComponent },
  { path: 'post', component: SinglePostComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'term-conditon', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
