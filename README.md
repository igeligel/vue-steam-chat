# vue-steam-chat - a steam like chat component

![vue steam chat showcase picture in default size](https://i.imgur.com/1mCVWRa.png "vue steam chat showcase picture in default size")

[![CircleCI](https://circleci.com/gh/igeligel/vue-steam-chat.svg?style=shield)](https://circleci.com/gh/igeligel/vue-steam-chat)
[![Coverage Status](https://coveralls.io/repos/github/igeligel/vue-steam-chat/badge.svg?branch=master)](https://coveralls.io/github/igeligel/vue-steam-chat?branch=master)
[![npm version](https://img.shields.io/npm/v/vue-steam-chat.svg)](https://www.npmjs.com/package/vue-steam-chat)
[![npm downloads](https://img.shields.io/npm/dt/vue-steam-chat.svg)](https://www.npmjs.com/package/vue-steam-chat)
 <a href="https://www.paypal.me/kevinpeters96/1"><img src="https://img.shields.io/badge/Donate-Paypal-003087.svg?style=flat" alt="badge Donate" /></a> <a href="https://steamcommunity.com/tradeoffer/new/?partner=68364320&token=CzTCv8JM"><img src="https://img.shields.io/badge/Donate-Steam-000000.svg?style=flat" alt="badge Donate" /></a> <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-1da1f2.svg?style=flat" alt="badge License" /></a>

## Simple integration

vue-steam-chat is designed for an easy integration as a Vue.js component. You just need to install the package and require two dependencies. It is responsive and can be integrated in every Vue.js application.

## Dependencies

No additional dependencies. Just Vue :)

| Dependency | Version  |
| ---------- | -------- |
| Vue.js     | >= 2.0.0 |

## Installation

### Using yarn

`yarn add vue-steam-chat`

### Using npm

`npm i --save vue-steam-chat`

## How to use

Somewhere in your Vue.js single file component, you need to add the dependency to this package and the css file referenced for this component.

```html
<template>
  <div style="height: 600px; width: 300px;">
    <vue-steam-chat
      :messages="messages"
      @vue-steam-chat-on-message="onNewMessage">
    </vue-steam-chat>
  </div>
</template>

<script>
import VueSteamChat from 'vue-steam-chat';

// This is required for styling the component. You can also write your own stylesheet. You can find my styles inside the vue component
require('vue-steam-chat/dist/index.css');

export default {
  name: 'vue-steam-chat',
  components: {
    'vue-steam-chat': VueSteamChat,
  },
  data() {
    return {
      messages: [{
        time: 1506117496,
        username: 'Gaben',
        text: 'I am really rich!!!',
      }, {
        time: 1506117500,
        username: 'Solo',
        text: 'But i am your employee',
      }],
    };
  },
  methods: {
    onNewMessage(message) {
      alert(message);
    },
  },
};
</script>
```

## Development

Download this repository and install all dependencies.

### Using yarn

```bash
yarn install
yarn run serve
```

### Using npm

```bash
npm install
npm run serve
```

This will open a `Vue Styleguidist` under http://localhost:6062 with the component in different use cases.

## Examples

- Live version is work in progress

![vue steam chat showcase picture in default size](https://i.imgur.com/1mCVWRa.png "vue steam chat showcase picture in default size")

![vue steam chat showcase in responsive version](https://i.imgur.com/M8IZ8GT.png "vue steam chat showcase in responsive version")

## Motivation

Found an old codepen of myself and wanted to create a vue component out of it.

## License

*vue-steam-chat* is realeased under the MIT License.
