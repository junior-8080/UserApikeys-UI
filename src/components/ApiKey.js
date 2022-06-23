import React, { useState } from "react";

export default function ApiKey(props) {
 const [keyCopy,setKeyCopy] = useState(props.apiKey);
 const [isHidden,setHidden] = useState(true);
 const copyApiKey = () => {
   navigator.clipboard.writeText(keyCopy);
   alert('Copied');
 }
  return (
    <div>
      <input value={keyCopy}  />
      <button onClick={copyApiKey}>Copy</button>
      <button onClick={()=> setHidden(false)}>Show</button>
    </div>
  );
}
