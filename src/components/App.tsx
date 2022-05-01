import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import history from '../history';

import { Header } from './Header';
import {
  StreamDelete,
  StreamCreate,
  StreamShow,
  StreamList,
  StreamEdit,
} from './streams';

export const App = (): JSX.Element => {
  return (
    <div className="ui container">
      <BrowserRouter history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
