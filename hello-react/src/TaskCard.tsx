/* eslint-disable react/prop-types */
const TaskCard = (props) =>{
    console.log(props)
      
       if(props.dueDate){
           return (
               <>
              
               <h2> {props.title}</h2>
               <p>Due on:{" "+props.dueDate}</p>
               <p>Assignee:{" "+props.assigneeName}</p>
         
           </>
           )
           
       }
       else{
           return (
               <>
               <h2> {props.title}</h2>
               <p>Completed on:{" "+props.completedAtDate}</p>
               <p>Assignee:{" "+props.assigneeName}</p>
               
           </>
           )
       }
     
     }
     export default TaskCard