import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import WelcomePage from "./pages/WelcomePage";

import {routes} from "./pages/routes";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.welcomePage} exact component={WelcomePage}></Route>
      <Route path={routes.forgotPasswordPage} exact component={ForgotPasswordPage}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;