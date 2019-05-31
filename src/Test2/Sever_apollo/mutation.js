import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation createUser($name: String!) {
    createUser(name: $name) {
      name
    }
  }
`;