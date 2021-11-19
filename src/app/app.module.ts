import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// imports google firebase//
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NavbarComponent } from './navbar/navbar.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'produtos', component: ProdutosComponent },

      { path: 'integrantes', component: IntegrantesComponent },
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBG1YDs7ZyCXb7LX67y5YzmF98U7jdwOxw',
      authDomain: 'projeto-front99.firebaseapp.com',
      projectId: 'projeto-front99',
      storageBucket: 'projeto-front99.appspot.com',
      messagingSenderId: '48744459402',
      appId: '1:48744459402:web:5e20f439dbf7231cbbd173',
    }),
    AngularFireAuthModule,
  ],
  declarations: [AppComponent, HelloComponent, NavbarComponent],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
