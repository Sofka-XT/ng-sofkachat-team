import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyBL-7a50DkjpV2R1h3YpxHuJZIkrFUYLqE",
  authDomain: "sofkachat-team.firebaseapp.com",
  projectId: "sofkachat-team",
  storageBucket: "sofkachat-team.appspot.com",
  messagingSenderId: "716971991738",
  appId: "1:716971991738:web:85e3a4d57d79eda0a11883"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
