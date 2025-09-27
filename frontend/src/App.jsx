import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAuth,signInWithPopup,GithubAuthProvider } from 'firebase/auth'
import { app } from './firebase'
import axios from 'axios'
function App() {
  const auth = getAuth(app);
  const provider = new GithubAuthProvider();
const ConnectWithGithub = ()=>{
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user.reloadUserInfo.screenName;
    // console.log(user)
    const payload = {
      uid:result.user.uid,
      username:user,
      token :token,
    }
    axios.post("http://localhost:3000/user",payload)
    .then((res) => console.log("Backend response:", res.data) )
    .catch((err) => console.error("Backend error:", err));
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
  });
}
  return (
    <>
    <button onClick={ConnectWithGithub}>Click to SignupWithGithub</button>
    </>
  )
}

export default App
