// WBC Chat (slackwebsitechat) — the chat bubble and every website form both
// deliver into the church's Slack channel through this one connection.
//
// The api key is public by design: it ships in the widget's <script> tag.
// Slack credentials live in the WBC backend, never here.
export const CHAT = {
  origin: "https://slackwebsitechat.vercel.app",
  apiKey: "wbc_e155e2623027739c4cd9f38d93d55d0d43ce8dca1f926fae",
} as const;
