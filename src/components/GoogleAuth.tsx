import { Component } from 'react';

declare global {
  interface Window {
    gapi: unknown,
  }
}

type Props = Record<string, unknown>;

interface State {
  isSignedIn: boolean
}

export class GoogleAuth extends Component<Props, State> {
  state = { isSignedIn: false };
  auth!: gapi.auth2.GoogleAuth;

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '408014816730-l0vod3haukfacirhhvmqpq08cidvohgl.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null)
      return null;
    else if (this.state.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon"/>
          Sign Out
        </button>
      );
    else
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
