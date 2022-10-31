import {expect, test} from '@oclif/test'

describe('aws', () => {
  test
  .stdout()
  .command(['aws'])
  .it('runs aws cmd', ctx => {
    expect(ctx.stdout).to.contain('AWS_PROFILE')
  })
})

