import { useRef } from 'react'

const url = 'https://course-api.com/axios-tutorial-post'

const FetchPost = () => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(form.current)
    const formEnt = Object.fromEntries(formData.entries())

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formEnt),
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return (
    <section>
      <h2 className="text-center">fetch post request</h2>
      <form className="form" onSubmit={handleSubmit} ref={form}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </form>
    </section>
  )
}
export default FetchPost
