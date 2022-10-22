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
   return(
      <div className={styles.header} style={{flex: 0, borderBottom: '1px solid black', /*alignItems: 'center',*/ display: 'flex', flexDirection: 'column'}}>
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
            <meta name="description" content={props.pageDescription} />
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