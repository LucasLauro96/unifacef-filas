import queues from '../queues';
import * as express from 'express';
import RedisCli from '../redis';

const redis = RedisCli.getInstance();
const router = express.Router();

const getPing = async (_req, res) => {
  const body = { message: 'hello' };
  return res.send(body).status(200);
};

const postLog = async (req, res) => {
  const body = { message: req.body.message };
  await queues.log.add(body);
  return res.send(body);
};

const postEmail = async (req, res) => {
  const body = { message: req.body.message };
  await queues.email.add(body);
  return res.send(body);
};

const postCandidate = async (req, res) => {
  const body: {
    partyNumber: number,
    name: string,
    photo: string,
  } = req.body;
  await queues.candidate.add(body);
  return res.send(body);
};

const postVote = async (req, res) => {
  const body: {
    partyNumber: number
  } = req.body;
  await queues.vote.add({ partyNumber: body.partyNumber });
  return res.send(body);
};

const getCandidates = async (_, res) => {
  const body = await redis.getJSON('candidates');
  return res.send(body);
};

const getVotes = async (_, res) => {
  const body = await redis.getJSON('votes');
  return res.send(body);
};

router.post('/log', postLog);
router.post('/email', postEmail);
router.post('/candidates', postCandidate);
router.post('/votes', postVote);
router.get('/candidates', getCandidates);
router.get('/votes', getVotes);
router.get('/', getPing);

export default router;
