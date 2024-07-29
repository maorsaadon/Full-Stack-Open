
const Header = (props) => {
  return (
    <div> 
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part name = {props.part[0]} exerciseNum = {props.exercise[0]}/>
      <Part name = {props.part[1]} exerciseNum = {props.exercise[1]}/>
      <Part name = {props.part[2]} exerciseNum = {props.exercise[2]}/>
    </div>
    
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.name} {props.exerciseNum}</p> 
    </div>
    
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercise {props.sum}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const sum = exercises1+exercises2+exercises3

  return (
    <div>
      <Header course={course} />
      <Content part = {[part1, part2, part3]} exercise = {[exercises1, exercises1, exercises1]}/>
      <Total sum = {sum}/>
    </div>
  )
}

export default App




