import React, { useState, useEffect, useRef } from 'react';

const RevealText = (props) => {
   
   const [charsStr, setCharsStr] = useState();
   const [chars, setChars] = useState();
   const [revealCursor, setRevealCursor] = useState(0);
   const revealCursorRef = useRef(revealCursor);
   revealCursorRef.current = revealCursor;
   
   const startStyle = { opacity: 0 };
   const revealStyle = { opacity: 1 };

   const populateChars = () => {
      const thisChars = [...props.str].map((s, i) => {
         return {
            text: s,
            style: startStyle
         }
      });
      setChars(thisChars);
      setCharsStr(props.str);
   }

   let revealNonce;
   const startReveal = () => {
      const localRevealNonce = revealNonce = new Object();
      const revealNextChar = () => {
         if(localRevealNonce !== revealNonce){ return; }
         const newChars = [...chars];
         newChars[revealCursorRef.current].style = revealStyle;
         setChars(newChars);
         const newRevealCursor = revealCursorRef.current + 1;
         if(newRevealCursor < chars.length){
            setRevealCursor(newRevealCursor); 
            setTimeout(revealNextChar, 20);
         }
         else{
            if(props.afterTextComplete){
               props.afterTextComplete();
            }
         }
      }
      revealNextChar();
   }

   useEffect(()=>{
      populateChars();
   }, []);
   
   useEffect(()=>{
      populateChars();
   }, [ props.str ]);
   
   useEffect(()=>{
      if(charsStr){
         setTimeout(()=>{
            startReveal();
         }, 200);
      }
   }, [ charsStr ]);

   return(
      <div className={props.className}>
         {chars && chars.map((char, i)=>{
            return <span key={i} style={char.style}>{char.text}</span>
         })}
      </div>
   );
}

export default RevealText;