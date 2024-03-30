import React, { useState, useEffect } from 'react'

// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FetchRequest = () => {
  let [list, setList] = useState([])

  const fetchData = () => {
    // fetch.get(), fetch.post()
    fetch(url)
      .then((response) => response.json())
      .then((data) => setList(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h2 className="text-center">fetch request</h2>
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
export default FetchRequest
