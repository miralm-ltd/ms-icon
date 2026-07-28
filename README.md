# MS(Material Symbols) Icon

This library provides Google Material Symbols icons as components, SVGs, and icon fonts.  
If you need to look up all icon names, please refer to [https://fonts.google.com/icons](https://fonts.google.com/icons).

```shell
npm install ms-icon
```

## Use

```js
import 'ms-icon/home'
import 'ms-icon/home-fill'

function App() {
  return (
    <ms-icon name="home"></ms-icon>
    <ms-icon name="home-fill"></ms-icon>
  )
}
```

Different styles

```js
//Rounded
import 'ms-icon/rounded/home'
import 'ms-icon/rounded/home-fill'
//Sharp
import 'ms-icon/sharp/home'
import 'ms-icon/sharp/home-fill'

function App() {
  return (
    //Rounded
    <ms-icon name="rounded/home"></ms-icon>
    <ms-icon name="rounded/home-fill"></ms-icon>
    //Rounded
    <ms-icon name="sharp/home"></ms-icon>
    <ms-icon name="sharp/home-fill"></ms-icon>
  )
}
```

If you want to load all icons (not recommended, large file size)

```js
import 'ms-icon/outlined'
import 'ms-icon/outlined-fill'
//Rounded
import 'ms-icon/rounded'
import 'ms-icon/sharp-fill'
//Sharp
import 'ms-icon/sharp'
import 'ms-icon/sharp-fill'
```

Options

```js
import 'ms-icon/home'
import { options } from 'ms-icon'

options.attributes = {
  class: 'icon',
  icon: ''
}
```

After the component is mounted

```html
<ms-icon class="icon" icon></ms-icon>
```

## Import SVG

Your bundler needs to support this.

```js
import MenuIcon from 'ms-icon/outlined/home.svg'
import MenuFillIcon from 'ms-icon/outlined/home-fill.svg'
//Rounded
import MenuRoundedIcon from 'ms-icon/rounded/home.svg'
import MenuFillRoundedIcon from 'ms-icon/rounded/home-fill.svg'
//Sharp
import MenuSharpIcon from 'ms-icon/sharp/home.svg'
import MenuFillSharpIcon from 'ms-icon/sharp/home-fill.svg'

console.log(typeof MenuIcon) //string
```

Different styles

```js
//Rounded
import MenuRoundedIcon from 'ms-icon/rounded/home.svg'
import MenuFillRoundedIcon from 'ms-icon/rounded/home-fill.svg'
//Sharp
import MenuSharpIcon from 'ms-icon/sharp/home.svg'
import MenuFillSharpIcon from 'ms-icon/sharp/home-fill.svg'

console.log(typeof MenuRoundedIcon) //string
```

## import Font Icon

The icons are configured with `size: 24` and `weight: 400`.

```css
@font-face {
  font-family: 'Material Symbols Outlined';
  src: url('ms-icon/outlined.woff2') format('woff2'); /*446kb*/
}
.icon{
  display: inline-block;
  font-family: 'Material Symbols Outlined';
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  white-space: nowrap;
  word-wrap: normal;
  vertical-align: middle;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
.icon.fill{
  font-variation-settings: "FILL" 1;
}
```

Different styles

```css
/*Rounded*/
@font-face {
  font-family: 'Material Symbols Rounded';
  src: url('ms-icon/rounded.woff2') format('woff2'); /*524kb*/
}
.icon{
  display: inline-block;
  font-family: 'Material Symbols Rounded';
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  white-space: nowrap;
  word-wrap: normal;
  vertical-align: middle;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
.icon.fill{
  font-variation-settings: "FILL" 1;
}
/*Sharp*/
@font-face {
  font-family: 'Material Symbols Sharp';
  src: url('ms-icon/sharp.woff2') format('woff2'); /*423kb*/
}
.icon{
  display: inline-block;
  font-family: 'Material Symbols Sharp';
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  white-space: nowrap;
  word-wrap: normal;
  vertical-align: middle;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
.icon.fill{
  font-variation-settings: "FILL" 1;
}
```
