import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
  mutation ($name: NonEmptyString!, $email: EmailAddress!) {
    updateUser(name: $name, email: $email) {
      id
      name
      email
      facebookId
      googleId
      appleId
    }
  }
`;
