import { User } from 'models/user';

type UserById = Map<number, User>;

export default class UserService {
  private static _sampleUserData: UserById = new Map([
    [
      101,
      {
        id: 101,
        firstName: 'Jeff',
        lastName: 'Stamos',
        email: 'jeff.stamos@whytwo.gov',
      },
    ],
    [
      102,
      {
        id: 102,
        firstName: 'Terry',
        lastName: 'Babbins',
        email: 'terry.babbins@anchor.io',
      },
    ],
    [
      103,
      {
        id: 103,
        firstName: 'Kazon',
        lastName: 'Galaxar',
        email: 'kazon.galaxar@empire.tv',
      },
    ],
  ]);

  public static getUserById(id: number | undefined): User {
    if (typeof id === 'undefined') {
      throw new Error('No User Specified');
    }

    const user = this._sampleUserData.get(id);

    if (typeof user === 'undefined') {
      throw new Error('No User Found');
    }

    return user;
  }
}
