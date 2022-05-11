import { gql } from '@apollo/client';

export const SIGN_UP_WITH_EMAIL = gql`
  mutation (
    $name: NonEmptyString!
    $email: EmailAddress!
    $password: Password!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;
