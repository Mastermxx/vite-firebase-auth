import { defineStore } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
export const useAuthStore = defineStore('auth', {
  state: (): any => ({
    count: 30
  }),
  // functions
  actions: {
    increment() {
      this.count--
    },
    signUp(email: string, password: string) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const userUid = user.uid;
          console.log(user.uid)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    },
    signIn(email: string, password: string) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    signInState() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // console.log(user)
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
  }
})
