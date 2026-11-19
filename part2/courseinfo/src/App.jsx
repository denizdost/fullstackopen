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
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course course={course} key={course.id}/>)}
    </div>
  )
}

export default App