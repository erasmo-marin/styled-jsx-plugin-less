const assert = require('assert')
const stripIndent = require('strip-indent')
const plugin = require('./')

const cleanup = str => stripIndent(str).trim()

describe('styled-jsx-plugin-less', () => {
  it('applies variables', () => {
    assert.equal(
      plugin('@red: #fff; p { img { display: block} color: @red }').trim(),
      cleanup(`
        p {
          color: #fff;
        }
        p img {
          display: block;
        }
      `)
    )
  })

  it('works with expressions placeholders', () => {
    assert.equal(
      plugin('p { img { display: block } color: %%styled-jsx-placeholder-1%%; } %%styled-jsx-placeholder-1%%').trim(),
      cleanup(`
        p {
          color: %%styled-jsx-placeholder-1%%;
        }
        p img {
          display: block;
        }
        %%styled-jsx-placeholder-1%%
      `)
    )
  })

  it('works with @import', () => {
    assert.equal(
      plugin('@import "fixture"; p { color: red }').trim(),
      cleanup(`
        div {
          color: red;
        }
        p {
          color: red;
        }
      `)
    )
  })
})
