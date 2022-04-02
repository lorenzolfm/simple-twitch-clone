import { BrowserRouter, Route } from 'react-router-dom';

import { Header } from './Header';
import { StreamDelete, StreamCreate, StreamShow, StreamList, StreamEdit } from './streams';

export const App = (): JSX.Element => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
