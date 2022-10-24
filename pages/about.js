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
        <div style={{maxWidth: 700, margin: '0 auto', padding: '0 16px', textAlign: 'center'}}>
          <div className={styles.chunk}>
            <h1 className={styles.title}>About this site</h1>
          </div>
          <div className={styles.chunk}>
            <p>Often the question is asked, "What the fuck has Biden done so far?" Maybe it's because he doesn't spend a <a href="https://www.nytimes.com/interactive/2020/11/24/us/politics/trump-twitter-tweets-election-results.html">lot of time tweeting</a> or <a href="https://www.nytimes.com/interactive/2020/04/26/us/politics/trump-coronavirus-briefings-analyzed.html">giving himself compliments</a> in front of TV cameras. Instead, he's been hard at work getting things done. So to pick up the slack, this site is a collection of some of the top accomplishments since January 2021. Let's go, Brandon!</p>
          </div>
          <div className={styles.chunk}>
            <ul style={{listStyle: 'none', margin: 0, padding: 0}}>
              <li><a href="https://twitter.com/shavannam">@shavannam</a></li>
              <li><a href="https://twitter.com/unclehighbrow">@unclehighbrow</a></li>
              <li><a href="https://twitter.com/richardboenigk">@richardboenigk</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>   
  )
}

export default About;
