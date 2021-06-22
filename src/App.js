import { Grid } from "@material-ui/core";
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import ThemePalette from "./components/theme";
import ProfilePage from "./components/ProfilePage/profile";

function App() {
  return (
    <ThemePalette>
      <div className="App">
          <Grid container>
                  <Grid
                    item
                    xs={12}
                    style={{
                      minHeight: "calc(100vh - 64px)",
                      padding: "2rem 0",
                    }}
                  >
                    <Switch>
                      <Route exact path="/login">
                        <Login />
                      </Route>
                      <Route path='/profile'>
                        <ProfilePage/>
                      </Route>
                    </Switch>
                  </Grid>
                </Grid>
      </div>
    </ThemePalette>
  );
}

export default App;
