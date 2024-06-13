import { Command } from '@oclif/core';

export default class AwsCld extends Command {
  static description = 'AWS quick utilities';

  static examples = [
    `$ <%= config.bin %> <%= command.id %>
aws-cld
`
  ];

  async run(): Promise<void> {
    await this.parse(AwsCld);

    this.log('aws-cld');
  }
}
