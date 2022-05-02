import React, {useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { loginRequest, loginCancelled, logoutRequest } from '@/modules/auth/login';
import { Login } from '@/components/auth/Login';
import { useRouter } from 'next/router';

const LoginPage = () => {

  const[user, setUser] = useState({userid:'', password:''})
  const dispatch = useDispatch()
  const router = useRouter()
  const onChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setUser({...user,[name]: value})
  }
  const onSubmit = e => {
      e.preventDefault()
      alert('로그인 확인:'+JSON.stringify(user))
      dispatch(loginRequest(user))
      router.push('/user/profile')
  }
 
  return (<Login onChange={onChange} onSubmit={onSubmit}/>);
};

const mapStateToProps = state => ({isLoggined: state.login.isLoggined})
const loginActions = {loginRequest, loginCancelled, logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);