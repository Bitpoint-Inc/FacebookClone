import { BrowserRouter, Route, Switch } from "react-router-dom";

import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { routes } from "./pages/routes";
import WelcomePage from "./pages/WelcomePage";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.welcomePage} exact component={WelcomePage} />
      <Route
        path={routes.forgotPasswordPage}
        exact
        component={ForgotPasswordPage}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
