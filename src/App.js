import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import CreatePage from './components/Create';
import BlogDetails from "./components/BlogDetails";
import { Route, Switch } from 'react-router-dom'


function App() {




  return (
    <div className="App">



      <Navbar />

      <div className="content">

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/create" component={CreatePage} />
          <Route path="/blogs/:id" component={BlogDetails} />
        </Switch>

      </div>



    </div>
  );
}

export default App;
