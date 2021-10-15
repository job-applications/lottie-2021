export default function SearchForm() {
  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mt-10">
        Search Form
      </h2>

      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" autoComplete="name" required />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
