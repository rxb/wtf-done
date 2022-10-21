import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment, useState, useEffect } from 'react';
import {Layout} from '../components/shared';

function About() {

  return (
    <Layout
      pageTitle="About"
      pageDescription=""
      >
      <div style={{display: 'flex', flex: 1, height: '100%', justifyContent: 'center', flexDirection: 'column'}}>
        <div style={{width: 700, margin: '0 auto', textAlign: 'center'}}>
          <div className={styles.chunk}>
            <h1 className={styles.title}>About this site</h1>
          </div>
          <div className={styles.chunk}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </div>
    </Layout>   
  )
}

export default About;
