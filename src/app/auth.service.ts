import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, getAuth, Auth } from 'firebase/auth';
import { auth } from '../firebase-config';  // Import the auth object

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = auth;

  async login(email: string, password: string): Promise<string | null> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user ? await userCredential.user.getIdToken() : null;
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  }

  async getIdToken(): Promise<string | null> {
    const user = this.auth.currentUser;
    return user ? await user.getIdToken() : null;
  }
}
