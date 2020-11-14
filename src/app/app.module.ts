import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubComponent } from './github/github.component';
import { DateCountPipe } from './date-count.pipe';
import { GithubFormComponent } from './github-form/github-form.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    DateCountPipe,
    GithubFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
