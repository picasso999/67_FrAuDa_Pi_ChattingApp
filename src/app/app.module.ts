import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
// Instructions ---->
// Replace configPlaceholder with environment.firebase
// import { environment } from '../environments/environment';
// import configPlaceholder from './env';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

const config = {
  apiKey: 'AIzaSyAdF8NVYvqpuesvxil7id4phi8y931p5uI',
    authDomain: 'angular-portfolio-fd68f.firebaseapp.com',
    databaseURL: 'https://angular-portfolio-fd68f.firebaseio.com',
    projectId: 'angular-portfolio-fd68f',
    storageBucket: 'angular-portfolio-fd68f.appspot.com',
    messagingSenderId: '446735974078'
};

@NgModule({
  declarations: [AppComponent, ChatComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
