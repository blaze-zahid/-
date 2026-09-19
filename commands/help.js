const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
*╭┈──〔 𓆩♡𓆪 𝐙𝐀𝐇𝐈𝐃-𝐗 𓆩♡𓆪 〕──┈⊷
*┃* 💎 *${settings.botName || '— 𝚳 𝚨 Ꭱ 𝐂 𝚶 ⤹ ☕'}*
*┃* 💎 *Version:* ${settings.version || '3.0.0'}
*┃* 💎 *By:* ${settings.botOwner || 'Mr Shahin Rana'}
*┃* 💎 *YT:* 𝐄𝐫𝐫𝐨𝐫 ࿐
*╰─➤* 💗 *𝐓ᴇᴅᴅʏ.. ♡*

❒ Available Commands♡

╭────❒ General Command ❒
├◈ 🩷➪ .help / .menu
├◈ 🩷➪ .ping
├◈ 🩷➪ .alive
├◈ 🩷➪ .tts <text>
├◈ 🩷➪ .owner
├◈ 🩷➪ .joke
├◈ 🩷➪ .quote
├◈ 🩷➪ .fact
├◈ 🩷➪ .weather <city>
├◈ 🩷➪ .news
├◈ 🩷➪ .attp <text>
├◈ 🩷➪ .lyrics <song_title>
├◈ 🩷➪ .8ball <question>
├◈ 🩷➪ .groupinfo
├◈ 🩷➪ .staff / .admins
├◈ 🩷➪ .vv
├◈ 🩷➪ .trt <text> <lang>
├◈ 🩷➪ .ss <link>
├◈ 🩷➪ .jid
├◈ 🩷➪ .url
┕──────────────────❒

╭────❒ Admin Command ❒
├◈ 🩷➪ .ban @user
├◈ 🩷➪ .promote @user
├◈ 🩷➪ .demote @user
├◈ 🩷➪ .mute <minutes>
├◈ 🩷➪ .unmute
├◈ 🩷➪ .delete / .del
├◈ 🩷➪ .kick @user
├◈ 🩷➪ .warnings @user
├◈ 🩷➪ .warn @user
├◈ 🩷➪ .antilink
├◈ 🩷➪ .antibadword
├◈ 🩷➪ .clear
├◈ 🩷➪ .tag <message>
├◈ 🩷➪ .tagall
├◈ 🩷➪ .tagnotadmin
├◈ 🩷➪ .hidetag <message>
├◈ 🩷➪ .chatbot
├◈ 🩷➪ .reset
├◈ 🩷➪ .antitag <on/off>
├◈ 🩷➪ .welcome <on/off>
├◈ 🩷➪ .goodbye <on/off>
├◈ 🩷➪ .setgdesc <description>
├◈ 🩷➪ .setgname <new name>
├◈ 🩷➪ .setgpp (reply to image)
┕──────────────────❒

╭────❒ Owner Command ❒
├◈ 🩷➪ .mode <public/private>
├◈ 🩷➪ .clearsession
├◈ 🩷➪ .antidelete
├◈ 🩷➪ .cleartmp
├◈ 🩷➪ .update
├◈ 🩷➪ .settings
├◈ 🩷➪ .setpp <reply to image>
├◈ 🩷➪ .autoreact <on/off>
├◈ 🩷➪ .autostatus <on/off>
├◈ 🩷➪ .autostatus react <on/off>
├◈ 🩷➪ .autotyping <on/off>
├◈ 🩷➪ .autoread <on/off>
├◈ 🩷➪ .anticall <on/off>
├◈ 🩷➪ .pmblocker <on/off/status>
├◈ 🩷➪ .pmblocker setmsg <text>
├◈ 🩷➪ .setmention <reply to msg>
├◈ 🩷➪ .mention <on/off>
┕──────────────────❒

╭────❒ Image / Sticker Command ❒
├◈ 🩷➪ .blur <image>
├◈ 🩷➪ .simage <reply to sticker>
├◈ 🩷➪ .sticker <reply to image>
├◈ 🩷➪ .removebg
├◈ 🩷➪ .remini
├◈ 🩷➪ .crop <reply to image>
├◈ 🩷➪ .tgsticker <link>
├◈ 🩷➪ .meme
├◈ 🩷➪ .take <packname>
├◈ 🩷➪ .emojimix <emoji1>+<emoji2>
├◈ 🩷➪ .igs <insta link>
├◈ 🩷➪ .igsc <insta link>
┕──────────────────❒

╭────❒ Pies Command ❒
├◈ 🩷➪ .pies <country>
├◈ 🩷➪ .china
├◈ 🩷➪ .indonesia
├◈ 🩷➪ .japan
├◈ 🩷➪ .korea
├◈ 🩷➪ .hijab
┕──────────────────❒

╭────❒ Game Command ❒
├◈ 🩷➪ .tictactoe @user
├◈ 🩷➪ .hangman
├◈ 🩷➪ .guess <letter>
├◈ 🩷➪ .trivia
├◈ 🩷➪ .answer <answer>
├◈ 🩷➪ .truth
├◈ 🩷➪ .dare
┕──────────────────❒

╭────❒ AI Command ❒
├◈ 🩷➪ .gpt <question>
├◈ 🩷➪ .gemini <question>
├◈ 🩷➪ .imagine <prompt>
├◈ 🩷➪ .flux <prompt>
├◈ 🩷➪ .sora <prompt>
┕──────────────────❒

╭────❒ Fun Command ❒
├◈ 🩷➪ .compliment @user
├◈ 🩷➪ .insult @user
├◈ 🩷➪ .flirt
├◈ 🩷➪ .shayari
├◈ 🩷➪ .goodnight
├◈ 🩷➪ .roseday
├◈ 🩷➪ .character @user
├◈ 🩷➪ .wasted @user
├◈ 🩷➪ .ship @user
├◈ 🩷➪ .simp @user
├◈ 🩷➪ .stupid @user [text]
┕──────────────────❒

╭────❒ Text Marker Command ❒
├◈ 🩷➪ .metallic <text>
├◈ 🩷➪ .ice <text>
├◈ 🩷➪ .snow <text>
├◈ 🩷➪ .impressive <text>
├◈ 🩷➪ .matrix <text>
├◈ 🩷➪ .light <text>
├◈ 🩷➪ .neon <text>
├◈ 🩷➪ .devil <text>
├◈ 🩷➪ .purple <text>
├◈ 🩷➪ .thunder <text>
├◈ 🩷➪ .leaves <text>
├◈ 🩷➪ .1917 <text>
├◈ 🩷➪ .arena <text>
├◈ 🩷➪ .hacker <text>
├◈ 🩷➪ .blackpink <text>
├◈ 🩷➪ .glitch <text>
├◈ 🩷➪ .fire <text>
┕──────────────────❒

╭────❒ Downloader ❒
├◈ 🩷➪ .play <song_name>
├◈ 🩷➪ .song <song_name>
├◈ 🩷➪ .spotify <query>
├◈ 🩷➪ .instagram <link>
├◈ 🩷➪ .facebook <link>
├◈ 🩷➪ .tiktok <link>
├◈ 🩷➪ .video <song name>
├◈ 🩷➪ .<link>
┕──────────────────❒

╭────❒ Miscellaneous ❒
├◈ 🩷➪ .heart
├◈ 🩷➪ .horney
├◈ 🩷➪ .circle
├◈ 🩷➪ .lgbt
├◈ 🩷➪ .lolice
├◈ 🩷➪ .lts-so-stupid
├◈ 🩷➪ .namecard
├◈ 🩷➪ .oogway
├◈ 🩷➪ .tweet
├◈ 🩷➪ .ytcomment
├◈ 🩷➪ .comrade
├◈ 🩷➪ .gay
├◈ 🩷➪ .glass
├◈ 🩷➪ .jail
├◈ 🩷➪ .passed
├◈ 🩷➪ .triggered
┕──────────────────❒

╭────❒ Anime ❒
├◈ 🩷➪ .nom
├◈ 🩷➪ .poke
├◈ 🩷➪ .cry
├◈ 🩷➪ .kiss
├◈ 🩷➪ .pat
├◈ 🩷➪ .hug
├◈ 🩷➪ .wink
├◈ 🩷➪ .facepalm
┕──────────────────❒

╭────❒ GitHub Command❒
├◈ 🩷➪ .git
├◈ 🩷➪ .github
├◈ 🩷➪ .sc
├◈ 🩷➪ .script
├◈ 🩷➪ .repo
┕──────────────────❒

💖 *Made with love by — 𝚳 𝚨 Ꭱ 𝐂 𝚶 ⤹ ☕*`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');

        const contextInfo = {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363161513685998@newsletter',
                newsletterName: 'SHAHIN RANA',
                serverMessageId: -1
            }
        };

        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);

            await sock.sendMessage(
                chatId,
                {
                    image: imageBuffer,
                    caption: helpMessage,
                    contextInfo
                },
                { quoted: message }
            );
        } else {
            console.error('Bot image not found at:', imagePath);

            await sock.sendMessage(
                chatId,
                {
                    text: helpMessage,
                    contextInfo
                },
                { quoted: message }
            );
        }
    } catch (error) {
        console.error('Error in help command:', error);

        await sock.sendMessage(
            chatId,
            { text: helpMessage },
            { quoted: message }
        );
    }
}

module.exports = helpCommand;
