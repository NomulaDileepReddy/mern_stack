import {BrowserRouter,Routes,Route} from "react-router-dom"
import EmployeePage from "./Pages/EmployeePage";
import CoursePage from "./Pages/CoursePage";
import StudentPage from "./Pages/StudentPage";
import Header from "./Pages/Header";
import StudentList from "./Pages/StudentList";
import UsersCrud from "./Pages/UserCrud";
import UserPage from "./Pages/UserPage";
function MainApp(){
    return(
        <div className="App">
            
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<EmployeePage/>}></Route>
                    <Route path="/course" element={<CoursePage/>}></Route>
                    <Route path="/student" element={<StudentPage/>}></Route>
                    <Route path="/employee" element={<EmployeePage/>}></Route>
                    <Route path="/studentlist" element={<StudentList/>}></Route>
                    <Route path="/userscrud" element={<UsersCrud/>}></Route>
                    <Route path="/users" element={<UserPage/>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainApp;