import {Switch, Route,} from "react-router-dom";
import Login from "./components/Login/Login";
import ThemePalette from "./components/theme";
import ProfilePage from "./components/ProfilePage/profile";
import PersonalDetail from "./components/PersonalDetail/PersonalDetail"
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";
import CreateForm from "./components/CreateForm/create";
import Home from "./components/Home/Home";
import  Header  from "./components/Header";
import Footer from "./components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
    return (
        <ThemePalette>
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route path='/profile'>
                    <Header/>
                    <ProfilePage/>
                    <Footer/>
                </Route>
                <Route path='/property-detail'>
                    <Header/>
                    <PropertyDetail/>
                    <Footer/>
                </Route>
                <Route path='/create_form'>
                    <Header/>
                    <CreateForm/>
                    <Footer/>
                </Route>
                <Route path='/personaldetail'>
                    <Header/>
                    <PersonalDetail/>
                    <Footer/>
                </Route>
                <Route path='/home'>
                    <Header/>
                    <Home/>
                    <Footer/>
                </Route>
            </Switch>
        </ThemePalette>
    );
}

export default App;
