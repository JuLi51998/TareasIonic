import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  onLogout() {
    console.log('Sesion cerrada');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');

  }

}
