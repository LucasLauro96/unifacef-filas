import { Queues } from '../enums';
import BaseQueue from './base.queue';

/**
 * Classe Singleton
 */
export default class CandidateQueue extends BaseQueue {
  private static instance: CandidateQueue;
  public static getInstance(): CandidateQueue {
    if (!CandidateQueue.instance) {
      CandidateQueue.instance = new CandidateQueue();
    }
    return CandidateQueue.instance;
  }

  /**
   * Colocamos como private para impedir a instância via new
   */
  private constructor() {
    super(Queues.candidate);
  }
}
