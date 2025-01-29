import { ProposalCreated, VoteCast } from "../generated/Governance/Governance";
import { Proposal, Vote } from "../generated/schema";

export function handleProposalCreated(event: ProposalCreated): void {
  let proposal = new Proposal(event.params.proposalId.toHex());
  proposal.proposer = event.params.proposer;
  proposal.description = event.params.description;
  proposal.voteStart = event.params.voteStart;
  proposal.voteEnd = event.params.voteEnd;
  proposal.executed = false;
  proposal.save();
}

export function handleVoteCast(event: VoteCast): void {
  let voteId = event.params.voter.toHex() + "-" + event.params.proposalId.toHex();
  let vote = new Vote(voteId);
  vote.voter = event.params.voter;
  vote.support = event.params.support;
  vote.weight = event.params.weight;
  vote.proposal = event.params.proposalId.toHex();
  vote.save();
}