import React, { useEffect, useState } from 'react'
import axios from 'axios'

// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const AxiosRequest = () => {
  let [list, setList] = useState([])

  const fecthData = async () => {
    try {
      // axios.get(), axios.post(),axios.put(), axios.delete()
      const response = await axios(url)
      const data = response.data

      // console.log(data)
      setList(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fecthData()
  }, [])

  return (
    <>
      <h2 className="text-center">axios request</h2>
      {list.map((data) => (
        <React.Fragment key={data.id}>
          <article>
            <center>
              {data.name} {data.price}
            </center>
          </article>
        </React.Fragment>
      ))}
    </>
  )
}
export default AxiosRequest
