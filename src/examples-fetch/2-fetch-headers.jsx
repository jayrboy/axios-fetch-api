import { useState } from 'react'

const url = 'https://icanhazdadjoke.com'
// Accept : 'application/json'

const FetchHeaders = () => {
  const [joke, setJoke] = useState('random dad joke')

  const fetchDadJoke = () => {
    fetch(url, {
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setJoke(data.joke)
      })
  }

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  )
}
export default FetchHeaders
