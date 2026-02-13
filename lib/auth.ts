import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { auth } from './firebase';

WebBrowser.maybeCompleteAuthSession();

// TODO: Replace with your Google OAuth client ID from Firebase console
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';

const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
};

export function useGoogleAuth() {
  const redirectUri = AuthSession.makeRedirectUri({ scheme: 'ether' });

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: GOOGLE_CLIENT_ID,
      scopes: ['openid', 'profile', 'email'],
      redirectUri,
      responseType: AuthSession.ResponseType.IdToken,
    },
    discovery,
  );

  const signInWithGoogle = async () => {
    const result = await promptAsync();
    if (result.type === 'success') {
      const { id_token } = result.params;
      const credential = GoogleAuthProvider.credential(id_token);
      return signInWithCredential(auth, credential);
    }
    return null;
  };

  return { request, signInWithGoogle };
}

export async function signOut() {
  await auth.signOut();
}
