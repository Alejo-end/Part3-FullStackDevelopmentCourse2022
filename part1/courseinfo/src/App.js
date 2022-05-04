
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = () => {
    return (
      <h1>{course}</h1>
    )
  }
  const Part = (part, exercise) => {
    <p>
      {part} {exercise}
    </p>
  }
  const Content = (parts) => {

    return (
      <>
        <Part part={parts[0].name} exercise={parts[0].exercises1} />
        <Part part={parts[1].name} exercise={parts[1].exercises2} />
        <Part part={parts[2].name} exercise={parts[2].exercises3} />
      </>
    )
  }


  const Total = () => {
    return (
      <p>Number of exercises {course.parts[0].exercises1 + course.parts[1].exercises2 + course.parts[2].exercises3}</p>
    )
  }


  return (
    <div>
      <Header />
      <Content parts={course} />
      <Total />
    </div>
  )
}

export default App