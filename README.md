# CopyUserID

A Vencord userplugin that adds a button to Discord's message hover bar that copies the message author's Discord User ID.

## Requirements

- Git
- Node.js 22 or newer
- pnpm
- Vencord

## Installation

### 1. Set up Vencord

If you have not already set up Vencord from source, follow the official Vencord guide:

https://docs.vencord.dev/installing/custom-plugins/

You need a source build of Vencord because custom plugins are compiled into Vencord when it is built.

### 2. Download CopyUserID

Clone this repository into Vencord's `src/userplugins` folder.

From your Vencord directory, run:

    git clone https://github.com/compleksityy/CopyUserID.git src/userplugins/CopyUserID

Your folder structure should look like:

    Vencord/
    └── src/
        └── userplugins/
            └── CopyUserID/
                └── index.tsx

### 3. Install dependencies

If you have not already installed Vencord's dependencies, run:

    cd Vencord
    pnpm install

### 4. Build Vencord

Run:

    pnpm build

This compiles Vencord with CopyUserID included.

### 5. Inject your custom Vencord build

For the Discord Desktop client, run:

    pnpm inject

Follow the prompts to select your Discord installation.

### 6. Enable CopyUserID

Restart Discord.

Open:

**Discord Settings → Vencord → Plugins**

Find **CopyUserID** and enable it.

## Usage

Hover over any Discord message.

A **Copy User ID** button will appear alongside the other message buttons.

Click it to copy the message author's Discord User ID to your clipboard.

## Updating

To update CopyUserID, go into the plugin directory and run:

    cd Vencord/src/userplugins/CopyUserID
    git pull

Then rebuild Vencord:

    cd ../../..
    pnpm build

If necessary, run:

    pnpm inject

and restart Discord.

## License

GPL-3.0
