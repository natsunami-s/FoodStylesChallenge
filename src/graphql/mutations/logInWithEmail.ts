import { gql } from '@apollo/client';

export const LOG_IN_WITH_EMAIL = gql`
  mutation ($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
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
