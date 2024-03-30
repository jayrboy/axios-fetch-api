import { useEffect } from 'react'

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const FetchGlobal = () => {
  const fetchData = () => {
    fetch(productsUrl)
      .then((response) => response.json())
      .then((data) => console.log(data))

    fetch(randomUserUrl)
      .then((response) => response.json())
      .then((data) => console.log(data.results))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">global instance</h2>
}
export default FetchGlobal
