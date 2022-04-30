import { Router as BrowserRouter, Route } from 'react-router-dom';
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
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
