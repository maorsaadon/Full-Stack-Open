
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hellow world {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      greeting app created by <a href='https://github.com/maorsaadon'>Maor Florentin</a>
    </div>
  )
}


const App = () => {
  const friends = ["Maor", "Aviya", "Ron"]
  return (
    <>
      <h1>Greeting</h1>
      <p>{friends}</p>
      <Footer />
    </>
  )
}

export default App




