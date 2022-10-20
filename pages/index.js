import Head from 'next/head'
import Image from 'next/image'
import dynamic from "next/dynamic"
import styles from '../styles/Home.module.css'
import { Fragment, useState, useEffect } from 'react';
import TypeWriterEffect from '../components/react-typewriter-effect/typeWriterEffect';
import {things, quips} from '../wtfconfig';

const Button = (props) => {
  return(
    <div 
      onClick={props.onClick}
      style={{
        textAlign: 'center',
        display: "inline-block",
        minWidth: 0,
        textAlign: 'center',
        borderRadius: 36,
        background: 'white',
        padding: '12px 16px',
        cursor: 'pointer',
        fontWeight: 500
      }}>
      {props.children}
    </div>
  );
}

const ThingDone = (props) => {
  
  const [sourceVisible, setSourceVisible] = useState(false);
  const [quipButtonVisible, setQuipButtonVisible] = useState(false);

  const titleStyle = {
    fontSize: 48,
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: 1.1,
    margin: '12px 0'
  }

  const revealExtras = () =>{
    setTimeout(()=>{
      setSourceVisible(true); 
    }, 400);
    setTimeout(()=>{
      setQuipButtonVisible(true);
    }, 1800);
  }

  return(
      <div style={{display: 'flex', flex: 1, height: '100%', maxHeight: '100%', justifyContent: 'center', flexDirection: 'column'}}>
        <div className={styles.chunk} style={{maxWidth: 700, margin: '0 auto'}}>
            <TypeWriterEffect
                textStyle={titleStyle}
                startDelay={100}
                cursorColor="black"
                text={props.thing.title}
                typeSpeed={25}
                multiTextDisplay={false}
                afterTextComplete={ revealExtras }
              />
              
            <div style={{
                opacity: (sourceVisible) ? 1 : 0,
                transform: `translate(0, ${sourceVisible ? 0 : -10}px)`,
                opacity: (sourceVisible) ? 1 : 0,
                transition: 'all 150ms ease-out',
                textAlign: 'center',
                color: 'rgba(0,0,0,.5)'
              }}>
                Source: <a href="{props.thing.sourceUrl}" style={{textDecoration: 'underline'}} target="_blank">{props.thing.sourceName}</a>
            </div>
          </div>
          <div className={styles.chunk}>
            <div style={{
                opacity: (quipButtonVisible) ? 1 : 0,
                transform: `translate(0, ${quipButtonVisible ? 0 : 30}px) scale(${quipButtonVisible ? 1 : 0.9})`,
                transition: 'all 100ms ease-out',
                textAlign: 'center'
              }}>
              <Button onClick={props.onQuipClick}>
                {props.quip}
              </Button>        
            </div>
          </div>

        
      </div>
  );
}


function Home() {
  
  

  const [thingCursor, setThingCursor] = useState(0);
  const [thing, setThing] = useState(things[0]);
  const [quip, setQuip] = useState(quips[0]);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect( () =>{
    setIsBrowser(true);
  }, [])

  const newThing = () => {

    const thisThingCursor = (thingCursor + 1 < things.length) ? thingCursor + 1 : 0; 
    setThingCursor(thisThingCursor);
    setThing(things[thisThingCursor]);

    const thisQuipCursor = Math.floor(Math.random() * quips.length);
    setQuip(quips[thisQuipCursor]);
  }

  return (
    <Fragment>
      <Head>
        <title>What The Fuck Has Brandon Done So Far?</title>
        <meta name="description" content="This is a description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>

        <div style={{flex: 0, borderBottom: '1px solid black', padding: 16}}>
        What The Fuck Has<br /> Brandon Done So Far?
        </div>

        { isBrowser ?
          <ThingDone key={thingCursor} thing={thing} quip={quip} onQuipClick={newThing} />
        :
          <div style={{flex: 1}} />
        }
        
        <div style={{flex: 0, borderTop: '1px solid black'}}>
          Footer
        </div>

      </div>
    </Fragment>
  )
}

export default Home;
