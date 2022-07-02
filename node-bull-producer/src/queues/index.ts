import CandidateQueue from './candidate.queue';
import LogQueue from './console.queue';
import EmailQueue from './email.queue';
import VoteQueue from './vote.queue';

const queues = {
  candidate: CandidateQueue.getInstance().queue,
  log: LogQueue.getInstance().queue,
  email: EmailQueue.getInstance().queue,
  vote: VoteQueue.getInstance().queue,
};

export default queues;
