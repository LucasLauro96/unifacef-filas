import { Queues } from '../enums';
import BaseQueue from './base.queue';

/**
 * Classe Singleton
 */
export default class EmailQueue extends BaseQueue {
  private static instance: EmailQueue;
  public static getInstance(): EmailQueue {
    if (!EmailQueue.instance) {
      EmailQueue.instance = new EmailQueue();
    }
    return EmailQueue.instance;
  }

  /**
   * Colocamos como private para impedir a instância via new
   */
  private constructor() {
    super(Queues.email);
  }
}
