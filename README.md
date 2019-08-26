# Storybook External Links
Decorator to add external links to storybook components after DOM rendering.

## Install

```
npm install storybook-external-links
```

## How to use it?

### React

```js

import withExternalLinks from 'storybook-external-links'
```

### Vue

```js

import withExternalLinks from 'storybook-external-links/vue'
```
### Use

```js

const url = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'

// script tag arguments - optional
const options = {
 async: true,
}

const externalLinkDecorator = withExternalLinks(url, options)

storiesOf('Button')
 .addDecorator(externalLinkDecorator)
 .add(myStory)
```

### Result after story mounting:

```html
<script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async=""></script>
```
