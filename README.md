# Autogit Plugin - Push

A plugin for pushing to a remote.

## Install

```sh
npm install --save autogit-plugin-push
```

## Usage

#### Options

This plugin uses the following options object:

```js
{
  remote: 'origin', // The remote to push to
  branch: '' // The branch to push to, if not set the current branch will be used
}
```

#### Configuration

Add this plugin to a command:

```js
const push = require ( 'autogit-plugin-push' );

module.exports = {
  commands: {
    'my-command': [
      push ({ /* YOUR OPTIONS */ })
    ]
  }
}
```

## License

MIT © Fabio Spampinato
