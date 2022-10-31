import {expect, test} from '@oclif/test'

describe('aws whoami', () => {
  test
  .stdout()
  .command(['aws:whoami'])
  .it('runs aws whoami cmd', ctx => {
    expect(ctx.stdout).to.be.a('string')
  })
})

