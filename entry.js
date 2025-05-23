let emojichat = {
    name: "emojichat",
    displayName: "EmojiChat",

    defaultEmojis: require("modules/toggle-emojichat/default.json"),

    processMessage: (message) => {
        let config = modkeep.get("emojichat/emojis", emojichat.defaultEmojis);
        let out = "";
        let buffer = "";

        for (let c of message.split("")) {
            if (buffer.length == 0) {
                if (c == ":") buffer += c;
                else out += c;
            } else {
                if (c == ":") {
                    let emojiName = buffer.slice(1);
                    if (config[emojiName]) out += config[emojiName];
                    else out += buffer + ":";

                    buffer = "";
                } else buffer += c;
            }
        }

        out += buffer;
        return out;
    },

    onSendMessage: (message) => {
        return emojichat.processMessage(message);
    },

    onActivate: () => {
        modtoggle.registerListener(
            ClientSendMessageEvents.MODIFY_CHAT,
            emojichat.onSendMessage,
            "emojichat-onSend",
            yarnwrap.Core,
        );
    },

    onDeactivate: () => {
        modtoggle.deregisterListener(
            ClientSendMessageEvents.MODIFY_CHAT,
            "emojichat-onSend",
        );
    },
};

modtoggle.registerToggle(emojichat);
