cld-cli
=================

cld CLI - managing cloud resources from the command-line

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cld-cli.svg)](https://npmjs.org/package/cld-cli)
[![build](https://img.shields.io/github/actions/workflow/status/markcallen/cld-cli/build-main.yml)](https://github.com/markcallen/cld-cli/tree/main)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/markcallen/cld-cli)
[![Downloads/week](https://img.shields.io/npm/dw/cld-cli.svg)](https://npmjs.org/package/cld-cli)
[![License](https://img.shields.io/npm/l/cld-cli.svg)](https://github.com/markcallen/cld-cli/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cld-cli
$ cld COMMAND
running command...
$ cld (--version)
cld-cli/0.2.2 darwin-x64 node-v16.17.0
$ cld --help [COMMAND]
USAGE
  $ cld COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cld aws`](#cld-aws)
* [`cld aws whoami`](#cld-aws-whoami)
* [`cld help [COMMAND]`](#cld-help-command)
* [`cld plugins`](#cld-plugins)
* [`cld plugins:install PLUGIN...`](#cld-pluginsinstall-plugin)
* [`cld plugins:inspect PLUGIN...`](#cld-pluginsinspect-plugin)
* [`cld plugins:install PLUGIN...`](#cld-pluginsinstall-plugin-1)
* [`cld plugins:link PLUGIN`](#cld-pluginslink-plugin)
* [`cld plugins:uninstall PLUGIN...`](#cld-pluginsuninstall-plugin)
* [`cld plugins:uninstall PLUGIN...`](#cld-pluginsuninstall-plugin-1)
* [`cld plugins:uninstall PLUGIN...`](#cld-pluginsuninstall-plugin-2)
* [`cld plugins update`](#cld-plugins-update)

## `cld aws`

aws credentials

```
USAGE
  $ cld aws

DESCRIPTION
  AWS quick utilities

EXAMPLES
  $ cld aws
  AWS_ACCESS_KEY_ID=A***************1111
  AWS_SECRET_ACCESS_KEY=Z***********************************zzzz
  or
  AWS_PROFILE=work

```

_See code: [dist/commands/aws/index.ts](https://github.com/markcallen/cld-cli/blob/v0.2.2/dist/commands/aws/index.ts)_

## `cld aws whoami`

get Caller Identity

```
USAGE
  $ cld aws whoami

EXAMPLES
  $ cld aws whoami
  UserId: Axxxxxxxxxxxxxxxxxxxx
  Account: 111111111111
  Arn: arn:aws:iam::111111111111:user/cld-cli
```

## `cld help [COMMAND]`

Display help for cld.

```
USAGE
  $ cld help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cld.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.16/src/commands/help.ts)_

## `cld plugins`

List installed plugins.

```
USAGE
  $ cld plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cld plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.6/src/commands/plugins/index.ts)_

## `cld plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cld plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cld plugins add

EXAMPLES
  $ cld plugins:install myplugin 

  $ cld plugins:install https://github.com/someuser/someplugin

  $ cld plugins:install someuser/someplugin
```

## `cld plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cld plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cld plugins:inspect myplugin
```

## `cld plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cld plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cld plugins add

EXAMPLES
  $ cld plugins:install myplugin 

  $ cld plugins:install https://github.com/someuser/someplugin

  $ cld plugins:install someuser/someplugin
```

## `cld plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cld plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cld plugins:link myplugin
```

## `cld plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cld plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cld plugins unlink
  $ cld plugins remove
```

## `cld plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cld plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cld plugins unlink
  $ cld plugins remove
```

## `cld plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cld plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cld plugins unlink
  $ cld plugins remove
```

## `cld plugins update`

Update installed plugins.

```
USAGE
  $ cld plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
