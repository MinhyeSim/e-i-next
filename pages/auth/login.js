import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { loginRequest, loginCancelled, logoutRequest } from '@/modules/auth/login';
import { Login } from '@/components/auth/Login';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const LoginPage = () => {

  const[user, setUser] = useState({userid:'', password:''})
  const dispatch = useDispatch()
  const router = useRouter()
  const onChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setUser({...user,[name]: value})
  }
  const {isLoggined, loginUser} = useSelector(state => state.login)
  const onSubmit = e => {
      e.preventDefault()
      alert('로그인 정보:'+JSON.stringify(user))
      console.log(history)
      dispatch(loginRequest(user))
      //console.log('모듈에 저장된 로그인값 :' +JSON.stringify(loginuser))
      //router.push('/user/profile') 이동식 데이터 소실
  }
 
  return (isLoggined ? 
    <Profile loginUser={loginUser}/>
  :<Login onChange={onChange} onSubmit={onSubmit}/>);
};

const mapStateToProps = state => ({isLoggined: state.login.isLoggined})
const loginActions = {loginRequest, loginCancelled, logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);