import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard  from './TaskCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Smarter Tasks</h1>
    <h2>Project :Graduation Final year Project(Revamp college Website)</h2>
     <div className='boxes'>
      <div>
        <h1>Pending</h1>
        <TaskCard title="Building the website with static content"
         dueDate="10th April" 
         AssigneeName="Rohit S"/>

         <h5>________________________</h5>
         <TaskCard
              title="Add a Blog"
              dueDate="22nd March"
              assigneeName="Rohit M"
            />
            <h5>____________</h5>
      </div>
      <div>
       <h1>Done</h1>
       <TaskCard
              title="Design the mockup"
              completedAtDate="10th April"
              assigneeName="Rohit M"
            />
      
      <TaskCard
              title="Get Approval from principal"
              completedAtDate="20th April"
              assigneeName="Ajay S"
            />
      </div>
     </div>
      
    </>
  );
}

export default App
