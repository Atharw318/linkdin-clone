import React,{useState} from 'react'
import {useDispatch } from "react-redux"
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import "./Login.css"

function Login() {

    

    const [email,setEmail] = useState( "");
    const [password , setPassword] = useState("");
    const [name, setName] = useState("")
    const [profilePic, setprofilePic] = useState("")
    const dispatch = useDispatch();
  
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoURL:userAuth.user.photoURL
            }))
        }).catch((error)=> alert(error)) ;
    }

    const register = () => {
        if (!name) {

            return alert("Pease enter a full name");
        }

        auth.createUserWithEmailAndPassword(email,password
            ).then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName:name,
                    photoURL:profilePic

                }).then(() => {
                    dispatch(login({
                        email:userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName:name,
                        photoURL:profilePic

                    }))

                })
            })
            .catch((error) => alert(error));

    }
    return (
        <div className="login">
        <img src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-linkedin-logo.png" alt=""/>
            
            <form >
                <input value={name} onChange={e => setName(e.target.value)}  type="text" placeholder="Full name "/>
                <input value={profilePic} onChange={e => setprofilePic(e.target.value)} type="text" placeholder="Profile pic Url (optional)" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)}  type="password" placeholder="password" />
              
              <button type="submit" onClick={loginToApp} >Sign In</button>
            </form>

            <p>Not a member?</p>
            <span className="login__register" onClick={register}>Register Now</span>
        </div>
    )
}

export default Login
