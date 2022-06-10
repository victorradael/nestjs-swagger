import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { message: 'Hello World!' };
  }

  punch(): object {
    return { message: 'One Punch Man!' };
  }
}
