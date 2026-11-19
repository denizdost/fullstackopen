const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

  return <b>total of {total} exercises</b>
}

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name}/>
      {props.course.parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id} />)}
      <Total parts={props.course.parts} />
    </div>
  )
}

export default Course