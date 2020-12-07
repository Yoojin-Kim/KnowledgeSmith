import { firestore, auth, signInWithGoogle } from '../../firebase';

import React, { useContext, useEffect, useState } from "react";
import "../../App.css";
import Text from "../../components/Text";
import { UserContext } from "../../providers/UserProvider";

import * as colors from '../../data/constants';

import { Name } from '../../data/images/index';

const LoginPage = ({history}) => {
  const {user, language} = useContext(UserContext);

  
  const googleLogin = async () => {
    try {
        signInWithGoogle()
    } catch (e) {
        console.log(e)
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged(function(userData){
    if(userData){
      console.log('userData :' , userData);
      console.log('user: ', user);
      console.log('local: ', localStorage.getItem('uid'))
      history.push(`/game/${language}`)
    }else{
      // alert('로그인이 필요합니다.')
    }
  });
  }, [])

  return (
    <div style={{display: 'flex', flex: 1}}>
        <div className="background" style={{marginBottom: 200}}>
            {/* <Text size={40} bold color={'pink'}>
                Knowledgesmith
            </Text> */}
            <Name onClick={() => history.push('/')} />
            <div className="line" style={{marginTop: 12}} />

            <div className="result-card-back">
                <div className="styled-btn" 
                style={{height: 40, marginTop: 150}}
                onClick={() => googleLogin()}>
                    <Text size={20} color={'pink'}>Login with Google</Text>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default LoginPage;