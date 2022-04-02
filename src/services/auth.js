import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import store from "../store";

export const signup = ({ firstName, lastName, email, password, phone }, onsuccess, onfailure) => {
    console.log("i m here")
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            //Signed in 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: firstName + " " + lastName
            })
            if (onsuccess) {
                onsuccess()
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (onfailure) {
                onfailure(error.message)
            }

        });
}
export const signIn = ({ email, password }, onsuccess, onfailure) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //Signed in 
            const user = userCredential.user;
            console.log("userSignedInSuccessfully",)
            store.user.set({ fullName: user?.displayName, email: user.email, emailVerified: user.emailVerified })
            if (onsuccess) {
                onsuccess()
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("userDidNotSignInSuccessfully")
            if (onfailure) {
                onfailure(error.message)
            }

        });
}
export const resetpassword = ({ email }, onsuccess, onfailure) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then((userCredential) => {
            //Signed in 
            const user = userCredential.user;
            console.log("resetsuccesfully")
            if (onsuccess) {
                onsuccess()
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("passwordNotresetSuccessfully")
            if (onfailure) {
                onfailure(error.message)
            }

        })
}
