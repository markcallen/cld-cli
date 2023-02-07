import { Command } from '@oclif/core';
import { replaceWithAstrisk } from '../../utils';

export default class Aws extends Command {
  static description = 'AWS quick utilities';

  static examples = [
    `$ cld aws 
AWS_ACCESS_KEY_ID=A***************1111
AWS_SECRET_ACCESS_KEY=Z***********************************zzzz
or
AWS_PROFILE=work
`
  ];

  async run(): Promise<void> {
    await this.parse(Aws);

    const {
      AWS_PROFILE: awsProfile,
      AWS_ACCESS_KEY_ID: awsAccessKeyId,
      AWS_SECRET_ACCESS_KEY: awsSecretAccessKey
    } = process.env;
    if (awsAccessKeyId && awsSecretAccessKey) {
      this.log(`AWS_ACCESS_KEY_ID=${replaceWithAstrisk(awsAccessKeyId)}`);
      this.log(
        `AWS_SECRET_ACCESS_KEY=${replaceWithAstrisk(awsSecretAccessKey)}`
      );
    } else if (awsProfile) {
      this.log(`AWS_PROFILE=${awsProfile}`);
    } else {
      this.log('AWS_PROFILE=default');
    }
  }
}
