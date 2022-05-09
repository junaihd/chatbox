import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Output = () => {

  const [sheetData, setSheetData] = useState([])

  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/15u7z1k8uu49i')
    .then((incomingData) => {
      setSheetData(incomingData.data);
    })
  }, []);

  return (
    <section>
      <h2>Posts</h2>

      <div className="posts">

      {sheetData.map((props) => {
        return (
        <div className="post" key={props.id}>
          <h4>{props.name}</h4>
          <p>{props.message}</p>
        </div>
        )
      })}

      </div>

    </section>
  )
}

export default Output;