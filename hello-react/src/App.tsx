import TaskCard from "./TaskCard";
import "./TaskCard.css";
interface dueDate{
  title :string,
  dueDate:string,
  assigneeName:string
}
interface completed{
  title :string,
  completedAtDate:string,
  assigneeName:string
}

function App() {
  let due1:dueDate={
    title:"Build website with static content",
    dueDate:"10th April",
    assigneeName:"Rohit S"
  }
  let due2:dueDate={
    title:"Add Blog",
    dueDate:"22nd March",
    assigneeName:"Rohit M"
    
  }
  let done1:completed={
    title:"Design the mockup",
    completedAtDate:"10th April",
    assigneeName:"Rohit M"

  }
  let done2:completed={
    title:"Get Approval from principal",
    completedAtDate:"20th April",
    assigneeName:"Ajay S"
    

  }
 


  return (
    <>
    <h1>Smarter Tasks</h1>
    <h2>Project :Graduation Final year Project(Revamp college Website)</h2>
     <div className='boxes'>
      <div>
        <h1>Pending</h1>
        <TaskCard 
      {
        ...due1
      }
      />

         <h5>________________________</h5>
         <TaskCard
             {
              ...due2
             }
            />
            <h5>____________</h5>
      </div>
      <div>
       <h1>Done</h1>
       <TaskCard
              {
                ...done1
              }
            />
      
      <TaskCard
             {
              ...done2
             }
            />
      </div>
     </div>
      
    </>
  );
}

export default App