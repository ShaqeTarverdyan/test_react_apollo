import gql from 'graphql-tag';

export const GET_INFO = gql`
{
    allUsers{
        id
        name
        email
      }
}`;