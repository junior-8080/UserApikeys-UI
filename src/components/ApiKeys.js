import React from 'react';
import {connect} from 'react-redux'
import ApiKey from './ApiKey';

function ApiKeys({keys}) {
  const apiKeys = keys.map(item => <ApiKey apiKey ={item.key} />)
  return (
    <div>
     <h1 className='text-center'>API Key</h1>
      {
       apiKeys
      }
    </div>
  )
}

const mapStateProps = state => {
}

export default connect(mapStateProps)(ApiKeys)