import { Button } from "antd";
import React, { useState } from "react";
import { openNotification } from "../redux/actions/userAction";

export default function ApiKey(props) { // eslint-disable-next-line
  const [keyCopy, setKeyCopy] = useState(props.apiKey); // eslint-disable-next-line
  const [isHidden, setHidden] = useState(true);  
  const copyApiKey = () => {
    navigator.clipboard.writeText(keyCopy);
   openNotification("Copied")
  };
  return (
    <>
      <div>
        <input value={keyCopy} className="border-solid border-2 border-black-300 px-8 py-1 rounded-sm" type="password"/>
        <Button onClick={copyApiKey} style={{background:"#CC8800",color:"#fff"}}  className="mr-8 ml-2">Copy</Button>
        <Button onClick={() => setHidden(false)} style={{background:"#CC8800",color:"#fff"}}>Show</Button>
      </div>
      {/* <Button className="mt-4">Add Key</Button> */}
    </>
  );
}
