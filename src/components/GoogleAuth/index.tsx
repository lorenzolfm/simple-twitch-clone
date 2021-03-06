import { useEffect } from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../../reducers';
import { signIn, signOut } from '../../actions';
import { Button } from './Button';
import { AuthState } from '../../types';

interface Props extends AuthState {
  signIn: typeof signIn;
  signOut: typeof signOut;
}

let auth: gapi.auth2.GoogleAuth;

const _GoogleAuth = ({ signIn, signOut, isSignedIn }: Props): JSX.Element => {
  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId: '408014816730-l0vod3haukfacirhhvmqpq08cidvohgl.apps.googleusercontent.com',
        scope: 'email',
      });

      auth = window.gapi.auth2.getAuthInstance();

      onAuthChange(auth.isSignedIn.get());
      auth.isSignedIn.listen(onAuthChange);
    });
  }, []);

  const onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) signIn(auth.currentUser.get().getId());
    else signOut();
  };

  const renderAuthButton = (): JSX.Element | null => {
    if (isSignedIn === null) return null;
    else if (isSignedIn)
      return <Button onClick={() => auth.signOut()} label="Sign Out"/>;

    return <Button onClick={() => auth.signIn()} label="Sign in with Google" />;
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state: StoreState): AuthState => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export const GoogleAuth = connect(
  mapStateToProps,
  { signIn, signOut },
)(_GoogleAuth);
