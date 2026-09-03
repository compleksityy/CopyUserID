# CopyUserID

A simple Vencord plugin that adds a button to the message hover bar that copies the Discord User ID of the message author.

## What You Need

Before installing CopyUserID, you need:

- Vencord
- Git
- Node.js
- pnpm

If you have not built Vencord from source before, follow the official Vencord guide:

https://docs.vencord.dev/installing/from-source/

## Installing CopyUserID

### 1. Download CopyUserID

Download the `CopyUserID` folder from this GitHub repository.

You only need the plugin. You do not need to download or modify the rest of Vencord.

The folder should contain:

```text
CopyUserID/
└── index.tsx
```

### 2. Create the `userplugins` folder

Vencord requires custom plugins to be placed inside its `src/userplugins` folder.

Follow the official Vencord guide for creating the folder:

https://docs.vencord.dev/installing/custom-plugins/

Your Vencord folder should eventually look like this:

```text
Vencord/
└── src/
    └── userplugins/
        └── CopyUserID/
            └── index.tsx
```

### 3. Rebuild Vencord

After placing CopyUserID inside `src/userplugins`, you need to rebuild Vencord.

Follow the official Vencord build guide:

https://docs.vencord.dev/installing/building/

After the build finishes, restart Discord.

### 4. Enable CopyUserID

Open Discord and go to:

**Settings → Vencord → Plugins**

Find `CopyUserID` and enable it.

## Usage

Hover over a Discord message.

A **Copy User ID** button will appear alongside the other message buttons.

Click it to copy the message author's Discord User ID to your clipboard.

## File Structure

The plugin should be installed like this:

```text
Vencord/
└── src/
    └── userplugins/
        └── CopyUserID/
            └── index.tsx
```

Do not put the plugin in `src/plugins`.

Custom plugins belong in `src/userplugins`.

## Credits

Built for Vencord.

Official Vencord custom plugin guide:

https://docs.vencord.dev/installing/custom-plugins/

## Disclaimer

CopyUserID is a third-party custom plugin and is not affiliated with or officially supported by Vencord.
