import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAuth,signInWithPopup,GithubAuthProvider } from 'firebase/auth'
import { app } from './firebase'
function App() {
  const auth = getAuth(app);
  const provider = new GithubAuthProvider();
const ConnectWithGithub = ()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
console.log("Logged In Succesfully !")
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
}
  return (
    <>
    <button onClick={ConnectWithGithub}>Click to SignupWithGithub</button>
    </>
  )
}

export default App
