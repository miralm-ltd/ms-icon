# Material Symbols Icons

This is the SVG icon library of Google Material Symbols Icons.  
If you need to look up all icon names, please refer to [https://fonts.google.com/icons](https://fonts.google.com/icons). Note that this repository only supports Material Symbols icons.

```shell
npm install material-symbols-icons
```

## Use

```js
import 'material-symbols-icons/home'
import 'material-symbols-icons/home-fill'

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
import 'material-symbols-icons/rounded/home'
import 'material-symbols-icons/rounded/home-fill'
//Sharp
import 'material-symbols-icons/sharp/home'
import 'material-symbols-icons/sharp/home-fill'

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
import MenuIcon from 'material-symbols-icons/outlined/home.svg'
import MenuFillIcon from 'material-symbols-icons/outlined/home-fill.svg'
//Rounded
import MenuRoundedIcon from 'material-symbols-icons/rounded/home.svg'
import MenuFillRoundedIcon from 'material-symbols-icons/rounded/home-fill.svg'
//Sharp
import MenuSharpIcon from 'material-symbols-icons/sharp/home.svg'
import MenuFillSharpIcon from 'material-symbols-icons/sharp/home-fill.svg'

console.log(typeof MenuIcon) //string
```

## Component Mount Configuration

```js
import 'material-symbols-icons/home'
import { options } from 'material-symbols-icons'

options.attributes = {
  class: 'icon',
  icon: ''
}
```

After the component is mounted

```html
<ms-menu class="icon" icon></ms-menu>
```
