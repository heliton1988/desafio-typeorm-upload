import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransctionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transctionsRepository = getCustomRepository(TransctionsRepository);

    const transaction = await transctionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction not found!');
    }

    await transctionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
