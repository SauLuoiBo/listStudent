import Theme from "./style/Theme";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ListStudentPage from "./pages/ListStudentPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddStudentPage from "./pages/AddStudentPage";
import StudentDetail from "./components/StudentDetail/StudentDetail";

function App() {
  return (
    <Router>
      <Theme>
        <Layout>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/liststudent' render={ListStudentPage} />
            <Route exact path='/addstudent' render={AddStudentPage} />
            <Route exact path='/addstudent/:id' component={StudentDetail} />
          </Switch>
        </Layout>
      </Theme>
    </Router>
  );
}

export default App;
