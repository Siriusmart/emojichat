# [Toggle] EmojiChat

Toggle for Discord-style emoji syntax in Minecraft chat.

`Hello world :wave:` → `Hello world 👋`

### Installation

#### Using [pully](https://github.com/FabricCore/pully)

```
/pully install toggle-emojichat
```

#### Require as Dependency

```json
{
  "dependencies": {
    "toggle-emojichat": "0.1.0"
  }
}
```

## Usage

### Toggle On/Off EmojiChat

```
/toggle emojichat
```

See [modtoggle](https://github.com/FabricCore/modtoggle).

### Adding an Entry

To add `:nice:` as an alias to the emoji 👍.

```
/keep update 'emojichat/emojis' entry.nice = '👍'
```

### Removing an Entry

To remove the emoji alias `:nice:`.

```
/keep update `emojichat/emojis' delete entry.nice
```

See [modkeep](https://github.com/FabricCore/modkeep).

## Library Functions

This library provides the toggle **emojichat**, no public functions are available.
