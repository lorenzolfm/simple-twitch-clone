import { useEffect, useState } from 'react';
import { Button } from './Button';

export const GoogleAuth = (): JSX.Element => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  let auth: gapi.auth2.GoogleAuth;

  useEffect(() => {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId: '408014816730-l0vod3haukfacirhhvmqpq08cidvohgl.apps.googleusercontent.com',
        scope: 'email',
      });

      auth = window.gapi.auth2.getAuthInstance();

      onAuthChange();
      auth.isSignedIn.listen(onAuthChange);
    });
  });

  const onAuthChange = () => setIsSignedIn(auth.isSignedIn.get());

  const renderAuthButton = (): JSX.Element | null => {
    if (isSignedIn === null) return null;
    else if (isSignedIn)
      return <Button onClick={() => auth.signOut()} label="Sign Out"/>;

    return <Button onClick={() => auth.signIn()} label="Sign in with Google" />;
  };

  return <div>{renderAuthButton()}</div>;
};
