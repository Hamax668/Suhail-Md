const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124415916";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_15_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3LFxuICAgICAgICA2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYwLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVzVMamg0TWtnUGRBUGNtcVJyczJDTkF5a3BHYW94OVo3K29IcURKR0lkdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic2tRV3hhZVVRZG04dTB2UVVqc3UzQVwiLFxuICBcInBob25lSWRcIjogXCJiMTk4OTJhNS1lNTFlLTQxNjQtYTkxOS1jYzE2ZDc5ZDU3ZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTM4LFxuICAgICAgNTksXG4gICAgICAxODAsXG4gICAgICAyMjQsXG4gICAgICAxNzMsXG4gICAgICAxODgsXG4gICAgICAyNDAsXG4gICAgICAxNDAsXG4gICAgICAyMyxcbiAgICAgIDEzMSxcbiAgICAgIDMwLFxuICAgICAgMTExLFxuICAgICAgMTYzLFxuICAgICAgMTgxLFxuICAgICAgMjM4LFxuICAgICAgMTAsXG4gICAgICAyMDgsXG4gICAgICAxNzgsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMjIwLFxuICAgICAgMTY1LFxuICAgICAgNDcsXG4gICAgICAxMzIsXG4gICAgICAxMzEsXG4gICAgICAxNjUsXG4gICAgICAyMzEsXG4gICAgICAzOCxcbiAgICAgIDIyNSxcbiAgICAgIDIyNyxcbiAgICAgIDE2OCxcbiAgICAgIDE4OCxcbiAgICAgIDEzMyxcbiAgICAgIDE0MyxcbiAgICAgIDIzMCxcbiAgICAgIDUxLFxuICAgICAgMjQwLFxuICAgICAgMTU2LFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2ZncG9vREVNekR5YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMV0p6ZlZuZmVzT1QwbmtCTUlWM3ZLanA5K0FSLzZmTkp4dmRHNTdCTVZJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhSbmxDd0lUZy91RDk3Z0ZwWGdwSndjb1puNmFsZVRSQVBoYSs2K0ZKWVRaeER2aFZHSlBkdjFvOTc5eEFxYURzRlZwMStqSHlwKy9JeDRkdE5sWkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVxSGJkUzI2ZVQ1K1NCREcvNzd2N1lkZUo2WjJwRUtpSWlTaVNoZ3B6b3c3UG1nS09ia3RaMisreTFnc0wwQTBaNStocDZUSG11MWVCNzJFMXVJUmh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyNDQxNTkxNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjM4ODY4MTczMjE0MDoxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNDQxNTkxNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODY5MzM0XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "king Hamax",
  ownername:process.env.OWNER_NAME|| "killer lucky🏴‍☠️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
