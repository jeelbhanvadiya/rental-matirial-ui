import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Publish from "./components/Publish/Publish";
import ThemePalette from "./components/theme";
import Profile from "./components/Profile/Profile";
import Listing from "./components/Listing/Listing";
import HomeList from "./components/Home/HomeList";
import InquiryList from "./components/InquiryListing/InquiryList";
import Inquiry from "./components/InquiryForm/Inquiry";
import HomeCardDetail from "./components/Home/HomeCardDetail";
import AboutUs from "./components/policies/AboutUs";
import Policy from "./components/policies/Policy";
import Terms from "./components/policies/Terms";
import ProfilePage from "./components/ProfilePage/profile";
import Cookie from "./components/policies/Cookie";
import ScamsAlert from "./components/policies/ScamsAlert";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import { ListingProvider } from "./context/ListingContext";
import { InquiryProvider } from "./context/InquiryContext";

function App() {
  return (
    <ThemePalette>
      <div className="App">
        <CssBaseline />
        <AuthProvider>
          <UserProvider>
            <FavoriteProvider>
              <ListingProvider>
                <InquiryProvider>
                <Grid container>
                  <Grid item xs={12}>
                    <Header />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{
                      minHeight: "calc(100vh - 64px)",
                      padding: "2rem 0",
                    }}
                  >
                    <Switch>
                      <Route path="/aboutus" component={AboutUs}/>
                      <Route path="/policy" component={Policy}/>
                      <Route path="/terms" component={Terms}/>
                      <Route path="/cookie" component={Cookie} />
                      <Route path="/scams" component={ScamsAlert} />
                      <Route exact path="/login">
                        <Login />
                      </Route>
                      <Route path='/profile'>
                        <ProfilePage/>
                      </Route>
                      <Route exact path="/forget-password">
                        <ForgetPassword />
                      </Route>
                      <Route exact path="/signup">
                        <Signup />
                      </Route>
                      <ProtectedRoute
                        path="/profile/edit"
                        component={Profile}
                      />
                      <Route exact path="/">
                        <HomeList/>
                      </Route>
                      <Route exact path="/inquiry-list">
                        <InquiryList/>
                      </Route>
                      <ProtectedRoute path="/inquiry-list/city"  component={InquiryList}/ >
                      <ProtectedRoute path="/favorite"  component={HomeList}/ >
                      <Route exact path="/city">
                        <HomeList/>
                      </Route>
                      <Route path="/room/:id">
                        <HomeCardDetail />
                      </Route>
                      <ProtectedRoute path="/publish/:name?" component={Publish} />
                      <ProtectedRoute
                        path="/listing/:edit?/:id?"
                        component={Listing}
                      />
                      <ProtectedRoute
                        path="/inquiry/:edit?/:id?"
                        component={Inquiry}
                      />
                      <Route path="/">
                        <Redirect to="/" />
                      </Route>
                    </Switch>
                  </Grid>

                  <Grid item xs={12}>
                    <Footer />
                  </Grid>
                </Grid>
                </InquiryProvider>
              </ListingProvider>
            </FavoriteProvider>
          </UserProvider>
        </AuthProvider>
      </div>
    </ThemePalette>
  );
}

export default App;
