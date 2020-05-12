import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../shared/user.class";
import { Storage } from '@ionic/storage';
import { isDefined } from '@angular/compiler/src/util';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  public isLogged: any = false;
  public token: any;

  constructor(public afAuth: AngularFireAuth, private storage: Storage, private router: Router) {
    //this.tokenValidation();
    afAuth.authState.subscribe(user => {this.token = user.refreshToken; this.isLogged = user; console.log(this.token);});
  }

  async onLogin(user: User) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    } catch(error) {
      console.log('Error al loguear ', error);
    }
  }

  async onRegister(user: User) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log("Error al registrarse ", error);
    }
  }

  async tokenValidation() {
    await this.storage.get('token').then((val) => {
      this.token = val;
    });

    if(this.token) {
      return this.token;
    } else {
      return this.token;
    }
  }
}

