# SNUxHCI Webpage

---

### Package Dependencies

- `node` v20.5.0
- `react` v18.2.0
- `react-router-dom` v6.14.2
- `styled-components` v6.0.5

### Code Structure

- React with node-sass (in *.module.scss form)
- **Each *.jsx file utilizes a corresponding *.module.scss file located in the same directory.**

`src`

ㄴ `assets`

  ㄴ `UI` : UI related assets (img, video…)

  ㄴ …(TBD)

ㄴ `components`

  ㄴ `globalStyle.scss` : **🚧 You must import this code into each scss code.**

  ㄴ `StyledLink` : Custom <Link> component without any style on it.

  ㄴ `CommonLayout` : Commonly used Layout components

  ㄴ … (TBD)

ㄴ `pages`

  ㄴ `…` : each directory contains *.jsx file and corresponding *module.scss file.

### Considering Responsive Web

- using `%`, `rem`
- for `px` → use `toRem()` in globalStyle.scss

### Font

- `$smallFontSize`, `$bigFontSize` defined in globalStyle.scss
