import './App.scss';
import { useEffect, useState } from 'react';
import Register from "./pages/Register/Register"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import firebase from "firebase"
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_AUTH_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGED_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_AUTH_APP_ID
};
firebase.initializeApp(firebaseConfig);


function App() {
  const dispatch = useDispatch()
  const characterId = "1011334"
  const [data, setData] = useState([])

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({type:"SignIn", payload:{userId: user.uid}})
      } else {
        dispatch({type:"SignIn", payload:{userId: ""}})
      }
    });
  },[])

  // <button onClick={()=>fetchData("characters", "1011334", "series").then(data=>setData(data))}>Fetch Data</button>
  return (
      <Router>
       <Switch>
          <Route path="/register" component={Register}/>
          {/* <Route path="/users"/> */}
        </Switch>
      </Router>
  );
}

export default App;