import React, {useEffect} from 'react';
import {Layout, Home} from '@/components'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux';


export default function HomePage() {
  return (
    <Layout>
    <Home/>
    </Layout>
  )
}
