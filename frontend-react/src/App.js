// import User from './User'
import Header from './Header'
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company from './Company'
// import {user} from './ModuleDemo'               // Named export     
// import sayHello,{calling} from './ModuleDemo'   // default export 
import ToDoList from './ToDo'
import User from './components/user'
import Article from './components/Article';
import Counter from './components/Counter'
import Parent from './components/Parent';
import ParentData from './components/ParentData';
import CounterF from './components/functionalComponent/CounterF'
import EmpForm from './components/functionalComponent/EmpForm'
import UseState from './hooks/UseState'
import UseEffectHook from './hooks/UseEffect';
import AllHooks from './hooks/AllHooks';
import EmployeeClass from './Assignments/EmployeeClass';
import Form from './components/Form'

function App() {
  const scores = [1,2,3,4]
  const add = () =>{
    console.log("I am add inside add")
  }
  // Named export
  // console.log(user)
  
  // // default export -- unlike named export default export can be called by any name  and it can be used only once in a file 
  // sayHello()
  // calling()

  // let msg = "HEllo good morning"
  // let result = `hi ${msg}`  //Template Literals -- used to concatenate two stfings by using `${variable1} ${variable2}` // 
  // console.log(result)

  // // ArrowOperator --- instead of using function keyword we use ()=>
  // const adding = (a,b)=>{ 
  //   console.log(a+b)
  // }
  // adding(10,20)

  // // Destructuring of Object or Array
  // let address = {
  //   state : "Telangana",
  //   city : "Hyderabad",
  //   pin : 508116
  // }

  // const {state,city,pin} = address
  // console.log(state,city,pin)

  // //  ...SpreadOperator
  // function add(a,b,c){
  //   console.log(a+b+c)
  // }
  // const numbers = [10,20,30]
  // add(...numbers)   /// add(...numbers) == add(10,20,30)

  // const [d,e,f] = [...numbers]   /// const [d,e,f] == [10,20,30]
  // console.log(d,e,f)

  // const var1 = [1,2,3,4,5]
  // const var2 = [6,7,8,9,0]
  // console.log(...var1,...var2)  // concatination using spread (...)

  // // ...restOperator

  // function showRest(a,b,...c){ // takes rest of the parameters to a single variable
  //   console.log(a)
  //   console.log(b)
  //   console.log(c)
  // }
  // showRest(1,2,3,4,5)
 

 
  return (
    <div className="App">
       
      {/* <h1>My First React App Hello World</h1> */}
      {/* <User name="--Dileep--" type="text"/>
      <Header/>
      <Employee/> */}
      {/* <EmployeeWithFunction company="careerX"/>
      <Company company="Career"/>
      <Employee company="careerX" scores={scores} add={add}/> */}
      {/* <ToDoList/> */}
      {/* <User/> */}
      {/* <Article/> */}
      {/* <Counter/> */}
      {/* <Parent scores={scores}/> */}
      {/* <ParentData/> */}
      {/* <CounterF name="Dileep"/> */}
      {/* <EmpForm/> */}
      {/* <UseState/> */}
      <AllHooks trainer="sameer"/>
      {/* <EmployeeClass/> */}
      {/* <Form/> */}
    </div>
  );
}

export default App;
