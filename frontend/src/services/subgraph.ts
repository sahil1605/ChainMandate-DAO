import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
  cache: new InMemoryCache(),
});

export const GET_ACTIVE_PROPOSALS = gql`
  query GetActiveProposals {
    proposals(where: { status: "ACTIVE" }) {
      id
      description
      voteStart
      voteEnd
      votes {
        voter
        support
        weight
      }
    }
  }
`;

export const fetchProposals = async () => {
  const { data } = await client.query({
    query: GET_ACTIVE_PROPOSALS,
  });
  return data.proposals;
};