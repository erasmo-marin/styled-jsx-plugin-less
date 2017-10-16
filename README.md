# styled-jsx-plugin-less

Use [less](http://lesscss.org/) with [styled-jsx](https://github.com/zeit/styled-jsx) 💥

## Usage

Install the package first.

```bash
npm install --save-dev styled-jsx-plugin-less@alpha
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
