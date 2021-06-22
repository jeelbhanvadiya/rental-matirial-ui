import {Switch, Route,} from "react-router-dom";
import Login from "./components/Login/Login";
import ThemePalette from "./components/theme";
import ProfilePage from "./components/ProfilePage/profile";
import PropertyDetail from "./components/PropertyDetail/PropertyDetail";
import CreateForm from "./components/CreateForm/create";
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
            </Switch>
        </ThemePalette>
    );
}

export default App;
