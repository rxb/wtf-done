import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Fragment, useState, useEffect } from 'react';
import {Layout} from '../components/shared';
import TypeWriterEffect from '../components/react-typewriter-effect/typeWriterEffect';
import {things, quips} from '../wtfconfig';

const Button = (props) => {
  return(
    <div 
      onClick={props.onClick}
      className={styles.button}
      >
      {props.children}
    </div>
  );
}

const ThingDone = (props) => {
  
  const [sourceVisible, setSourceVisible] = useState(false);
  const [quipButtonVisible, setQuipButtonVisible] = useState(false);


  const revealExtras = () =>{
    setTimeout(()=>{
      setSourceVisible(true); 
    }, 500);
    setTimeout(()=>{
      setQuipButtonVisible(true);
    }, 1900);
  }

  return(
      <div style={{display: 'flex', flex: 1, height: '100%', justifyContent: 'center', flexDirection: 'column'}}>
        <div className={styles.chunk} style={{maxWidth: 680, margin: '0 auto'}}>
            <TypeWriterEffect
                className={styles.title}
                startDelay={100}
                cursorColor="black"
                text={props.thing.title}
                typeSpeed={30}
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
                Source: <a href={props.thing.sourceUrl} style={{textDecoration: 'underline'}}>{props.thing.sourceName}</a>
            </div>
          </div>
          <div className={styles.chunk}>
            <div style={{
                opacity: (quipButtonVisible) ? 1 : 0,
                transform: `translate(0, ${quipButtonVisible ? 0 : 30}px) scale(${quipButtonVisible ? 1 : 0.9})`,
                transition: 'all 120ms ease-out',
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
    <Layout
      pageTitle=""
      pageDescription="Often the question has been asked, 'WTF Has Biden Done So Far?'"
      >
        { isBrowser ?
          <ThingDone key={thingCursor} thing={thing} quip={quip} onQuipClick={newThing} />
        :
          <div style={{flex: 1}} />
        }
    </Layout>   
  )
}

export default Home;
