import { Command } from '@oclif/core';

export default class AwsCld extends Command {
  static description = 'AWS quick utilities';

  static examples = [
    `$ <%= config.bin %> <%= command.id %>
`
  ];

  async run(): Promise<void> {
    await this.parse(AwsCld);
  }
}
