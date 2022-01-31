import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import ConfirmPage from "./pages/confirmPage";
import AnketaPage from "./pages/AnketaPage";
import SignIn from "./pages/SignIn";
import MainPage from "./pages/mainPage";
import PersonalPage from "./pages/personalPage";
import Skills from "./pages/Skills";

function App() {
    return (
       <div>
           <Routes>
               <Route path={'/'} element={<LoginPage/>}/>
               <Route path={'/confirm'} element={<ConfirmPage/>}/>
               <Route path={'/anketa'} element={<AnketaPage/>}/>
               <Route path={'/signin'} element={<SignIn/>}/>
               <Route path={'/mainPage'} element={<MainPage/>}/>
               <Route path={'/personal'} element={<PersonalPage/>}/>
               <Route path={'/skills'} element={<Skills/>}/>
           </Routes>
       </div>
    );
};

export default App;
