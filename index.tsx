import { CopyIdIcon } from "@components/Icons";
import { copyToClipboard } from "@utils/clipboard";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "CopyUserID",
    description: "Adds a button to copy the user ID of a message author.",
    authors: [],
    messagePopoverButton: {
        label: "Copy User ID",
        icon: CopyIdIcon,
        onClick: message => {
            copyToClipboard(message.author.id);
        }
    }
});
