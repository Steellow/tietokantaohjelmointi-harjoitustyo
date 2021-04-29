import Header from "./components/Header";
import PostMapper from "./components/PostMapper";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import NewPost from "./pages/NewPost";

const App = () => {
  return (
    <Router>
      <div className="max-w-4xl p-6 mx-auto App">
        <Header />
        <Switch>
          <Route exact path="/">
            <PostMapper />
          </Route>
          <Route path="/post/:id">
            <BlogPost />
          </Route>
          <Route path="/new">
            <NewPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
