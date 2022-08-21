import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

interface RegisLog {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: AngularFireAuth) {
  }

  async register(userInfo: RegisLog) {
    try {
      await this.auth.createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    } catch (e) {
    }
  }

  async login(userInfo: RegisLog) {
    try {
      await this.auth.signInWithEmailAndPassword(userInfo.email, userInfo.password);
    } catch (error) {
    }
  }

  async logOut() {
    await this.auth.signOut();
  }

}
