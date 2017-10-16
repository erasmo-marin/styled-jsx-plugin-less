# styled-jsx-plugin-sass

[![Build Status](https://travis-ci.org/giuseppeg/styled-jsx-plugin-sass.svg?branch=master)](https://travis-ci.org/giuseppeg/styled-jsx-plugin-sass)
[![npm](https://img.shields.io/npm/v/styled-jsx-plugin-sass.svg)](https://www.npmjs.com/package/styled-jsx-plugin-sass)

Use [less](http://lesscss.org/) with [styled-jsx](https://github.com/zeit/styled-jsx) 💥

## Usage

Install the package first.

```bash
npm install --save-dev styled-jsx-plugin-less
```

Install `less` (it is a peer dependency).

```bash
npm install --save-dev less
```

Next, add `styled-jsx-plugin-less` to the `styled-jsx`'s `plugins` in your babel configuration:

```json
{
  "plugins": [
    [
      "styled-jsx/babel",
      { "plugins": ["styled-jsx-plugin-less"] }
    ]
  ]
}
```

#### Notes

`styled-jsx-plugin-less` uses `styled-jsx`'s plugin system which is supported from version 2.

Read more on their repository for further info.

## License

MIT
