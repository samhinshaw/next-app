export interface Name {
  firstName: string;
  lastName: string;
}

export abstract class User implements Name {
  abstract id: number;
  abstract firstName: string;
  abstract lastName: string;
  abstract email: string;
}
