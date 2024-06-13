import { Command, Flags } from '@oclif/core';
import fs from 'node:fs';
import { render } from 'template-file';

const bootstrapTemplate = `module "bootstrap" {
  source = "github.com/markcallen/aws-cld//bootstrap/"
  project = "{{ project }}"
}

output "project" {
  value = module.bootstrap.project_name
}
`;

export default class Bootstrap extends Command {
  static description = 'AWS quick utilities';

  static examples = [
    `$ <%= config.bin %> <%= command.id %>
`
  ];

  static flags = {
    directory: Flags.string({ char: 'd', required: true }),
    project: Flags.string({ char: 'p', required: true })
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Bootstrap);

    const { directory, project } = flags;

    if (fs.existsSync(directory)) {
      this.error(`${directory} exists`);
    }

    fs.mkdirSync(directory);

    // Make the boostrap, infra and env directories
    fs.mkdirSync(`${directory}/bootstrap`);
    fs.mkdirSync(`${directory}/infra`);
    fs.mkdirSync(`${directory}/env`);

    const bootstrapData = { project };
    fs.writeFileSync(
      `${directory}/bootstrap/main.tf`,
      render(bootstrapTemplate, bootstrapData)
    );

    // TODO: add in terraform init, plan and apply
  }
}
