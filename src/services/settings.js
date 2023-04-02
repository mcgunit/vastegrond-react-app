const host = window.location.hostname;
const proto = window.location.protocol;
const port = window.location.port;
let loc = `${proto}//${host}`;
let BASIC_URL = loc;
//development
if (port === "3000" || port === "3001" || port === "8080") {
  loc = `${proto}//${host}`;
  BASIC_URL = `${proto}//${host}:${port}`
}

const API_URL = `${BASIC_URL}/api/`;

export default {
  BASIC_URL,
  API_URL,
};
