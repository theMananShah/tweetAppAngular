import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './components/LoginPage/login/login.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './components/LoginPage/register-page/register-page.component';
import { ForgotPasswordComponent } from './components/LoginPage/forgot-password/forgot-password.component';
import { PostTweetComponent } from './components/post-tweet/post-tweet.component';
import { MyTweetsComponent } from './components/my-tweets/my-tweets.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AllUsersComponent,
    TweetComponent,
    FooterComponent,
    RegisterPageComponent,
    ForgotPasswordComponent,
    PostTweetComponent,
    MyTweetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
