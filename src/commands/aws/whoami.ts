import { Command } from '@oclif/core';
import STS from 'aws-sdk/clients/sts';

export default class Whoami extends Command {
  sts = new STS();

  static examples = [
    `<%= config.bin %> <%= command.id %>
UserId: Axxxxxxxxxxxxxxxxxxxx
Account: 111111111111
Arn: arn:aws:iam::111111111111:user/cld-cli
`
  ];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    this.sts.getCallerIdentity({}, (err, data) => {
      if (err) throw err;
      else {
        const { UserId: userId, Account: account, Arn: arn } = data;
        this.log(`UserId: ${userId}
Account: ${account}
Arn: ${arn}`);
      }
    });
  }
}
