import './App.scss';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import store from './redux/redux_store';
import News from './components/news/News';

function App() {
  return (
    <div className="">
      <Switch>
        <Route path="/news" render={() => <News />} />
        <Route path="/" render={() => <News />} />
        <Route exact path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  );
}
let WrappedApp = withRouter(App);
const MainApp = (props) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
    // <HashRouter></HashRouter>
    <HashRouter>
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
