import Head from 'next/head';
import Link from 'next/link'
import { Fragment, useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

export const Button = (props) => {
   const [buttonOpacity, setButtonOpacity] = useState(1);
   return(
      <div 
         style={{opacity: buttonOpacity}}
         onClick={props.onClick}
         onMouseDown={()=>{
         setButtonOpacity(0.75);
         }}
         onTouchStart={()=>{
         setButtonOpacity(0.75);
         }}
         
         className={styles.button}
         >
         {props.children}
      </div>
   );
}

export const Header = (props) => {
   
   const [hasShare, setHasShare] = useState(false);

   const shareIt = async (shareData) => {
      if (navigator.share) {
        try {
          await navigator.share(shareData)
        } catch (err) {
          console.error(err)
        }
      }
    }

    useEffect(()=>{
      if (navigator.share) {
         setHasShare(true);
      }
    }, []);


   return(
      <div className={styles.header} style={{flex: 0, borderBottom: '1px solid black', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
         <div style={{flex: 1}}>
         <Link href="/">
          <div style={{display: 'flex', flex: 0, alignItems: 'center'}} className={styles.clickable}>
            <div 
              className={styles.headerIcon}
              />
            <div className={styles.headerText}>
              What The Fuck Has<br /> 
              Biden Done So Far?
            </div>
          </div>
         </Link>
         </div>
         { hasShare &&
         <div style={{flex: 0, }}>
            <div 
               className={`${styles.headerAction} ${styles.clickable}`}
               onClick={()=>{
                  shareIt({
                     text: "What The Fuck Has Biden Done So Far?",
                     url: 'https://wtf-done-rbgk.vercel.app/'
                  });
               }}
               >
               <img src="/share.svg" />
               share
            </div>
         </div>
         }
         
        </div>
   )
}

export const Footer = (props) => {
   return(
      <div className={styles.footer} style={{flex: 0, borderTop: '1px solid black'}}>
          <div className={styles.footerText} style={{display: 'flex', justifyContent: 'space-between'}}>
            <Link href="/about">
               <span className={styles.link}>About</span>
            </Link>
            <a href="" className={styles.link} onClick={(e)=>{ e.preventDefault(); alert('need to find a good site for this'); }}>
              Find your voting place&hellip;
            </a>
          </div>
        </div>
   );
}

export const Layout = (props) => {
   return(
      <Fragment>
         <Head>
            <title>What The Fuck Has Biden Done So Far? {(props.pageTitle) ? ` - ${props.pageTitle}` : ''}</title>
            <meta name="description" content="Often the question is asked, 'What the fuck has Biden done so far?'" />
            <meta property="og:title" content="What The Fuck Has Biden Done So Far?" />
            <meta property="og:description" content="Often the question is asked..." />
            <meta property="og:image" content="/brandon-social.jpg" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className={styles.outer}>
            <div className={styles.outerPadding}>
            <Header />
            <div className={styles.main} style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
               {props.children}
            </div>
            <Footer />
            </div>
         </div>
      </Fragment>
   )

}