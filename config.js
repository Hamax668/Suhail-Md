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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_36_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICA5NixcbiAgICAgICAgMTA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDk3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRvSFR3SCtnN2o3OGpEb2FaUDdidkRGMDlxVXdjUVFqV2lSMVhRb0M2bEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJwNlhNckhwUnN5d09UQ0MweHRzNndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmNhNTJlNzItMmExZS00OWU5LWJjNTQtMjMzMWI1ZDRmYmZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgNjEsXG4gICAgICA4NyxcbiAgICAgIDM2LFxuICAgICAgOTYsXG4gICAgICAyMjYsXG4gICAgICA2NyxcbiAgICAgIDEwNyxcbiAgICAgIDI0MixcbiAgICAgIDEwNCxcbiAgICAgIDE4NSxcbiAgICAgIDYxLFxuICAgICAgMTQ0LFxuICAgICAgMTE0LFxuICAgICAgMTU0LFxuICAgICAgNixcbiAgICAgIDE2NSxcbiAgICAgIDIyOCxcbiAgICAgIDE0OSxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDIyMCxcbiAgICAgIDExNSxcbiAgICAgIDIyMSxcbiAgICAgIDIzOCxcbiAgICAgIDIwNCxcbiAgICAgIDExNixcbiAgICAgIDEzNyxcbiAgICAgIDczLFxuICAgICAgMTQsXG4gICAgICAyMTAsXG4gICAgICAyNTEsXG4gICAgICAwLFxuICAgICAgMjE0LFxuICAgICAgMTAxLFxuICAgICAgMjMsXG4gICAgICAxMjUsXG4gICAgICAyNDgsXG4gICAgICAyMjQsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJalUrT01IRVBhSm9MUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIks3dndjMEswb1ZVTDNtd3FZSUtkUlB3cy9Hck9OUFlydUVVN1M4U2t1amM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWlNab2dyeEtTS2ZBZTNORUVGaGVuZWNwTjU1eDZoN1NIUWhrbVFtOC9EUjczZXJFTUxjUW9DZWE2QTZQcTBwakFqN25zZUl3MWE1U0F2N3paUC9QRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK0pzWkZCVVFLOGNYZWR6K2s5VVJrbmNBKy96R01waUVZd2RpejB0ckZRdSsyb2NmdTFWY1p3Z2ZVbEw0OXZ6bXZmaENjK2xqQ3RnbEd1V0w5OWw5Z2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI5NDI4ODk3OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzAzOTA0NjQ5NjQzNzo0OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjk0Mjg4OTc6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTkwMjAyXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
