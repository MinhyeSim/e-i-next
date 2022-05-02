import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest, unregisterRequest } from '@/modules/auth/register';
import { Register } from '@/components/auth/Register';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  
  const [user, setUser] = useState({
    userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
})
  const dispatch = useDispatch()
  const onChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setUser({...user,[name]: value})
  }
  const onSubmit = e => {
      e.preventDefault()
      alert('회원가입정보:'+JSON.stringify(user))
      dispatch(registerRequest(user))
      window.location.href = "./login"
}

  return (
    <Register onChange={onChange} onSubmit={onSubmit} />
  );
};
const mapStateToProps = state => ({})//이미 회원가입이 되어있는 회원인지 판단
const registerActions = {registerRequest, unregisterRequest}
export default connect(mapStateToProps, registerActions)(RegisterPage);