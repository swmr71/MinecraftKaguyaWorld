import { world } from "@minecraft/server";

world.afterEvents.chatSend.subscribe((event) => {
    const player = event.sender.name;
    const msg = event.message;
    // console.warn を使うのがコツです（標準出力に確実に流すため）
    console.warn(`[CHAT_LOG] ${player}: ${msg}`);
});
