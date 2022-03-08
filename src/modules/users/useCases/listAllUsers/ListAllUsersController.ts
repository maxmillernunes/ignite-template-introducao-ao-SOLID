import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  private checkString(value: string | string[]): string {
    if (typeof value === 'string') {
      return value;
    }

    return '';
  }

  handle(request: Request, response: Response): Response {
    try {
      const header = request.headers;

      const user_id = this.checkString(header.user_id);

      const user = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(user);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { ListAllUsersController };
