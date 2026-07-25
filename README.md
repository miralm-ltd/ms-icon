# MS(Material Symbols) Icon

This is the SVG icon library of Google Material Symbols Icons.  
If you need to look up all icon names, please refer to [https://fonts.google.com/icons](https://fonts.google.com/icons). Note that this repository only supports Material Symbols icons.

```shell
npm install ms-icon
```

## Use

```js
import 'ms-icon/home'
import 'ms-icon/home-fill'

function App() {
  return (
    <ms-home></ms-home>
    <ms-home-fill></ms-home-fill>
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
    <ms-rounded-home></ms-rounded-home>
    <ms-rounded-home-fill></ms-rounded-home-fill>
    //Rounded
    <ms-sharp-home></ms-sharp-home>
    <ms-sharp-home-fill></ms-sharp-home-fill>
  )
}
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

## Component Mount Configuration

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
<ms-menu class="icon" icon></ms-menu>
```
