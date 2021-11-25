import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./component/header";
import Contact from "./component/contact";
import Services from "./component/services";
import NotFound from "./component/notFound";
import Footer from "./component/footer";
import About from "./component/about";
import Home from "./component/home";
import ScrollToTop from "./component/scrollToTop";
import Blog from "./component/blog";
import Service1 from "./component/common/service1";
import Service2 from "./component/common/service2";
import Service3 from "./component/common/service3";
import service4 from "./component/common/service4";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Header />
          <div>
            <Switch>
              <Route exact path="/service1" component={Service1} />
              <Route exact path="/service2" component={Service2} />
              <Route exact path="/service3" component={Service3} />
              <Route exact path="/service4" component={service4} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/home" component={Home} />
              <Route path="/notfound" component={NotFound} />
              <Redirect from="/" exact to="/home" />
              <Redirect from="*" to="/notfound" />
            </Switch>
          </div>

          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
