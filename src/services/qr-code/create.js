import prompt from "prompt";
import promptSchemaQRCode from "../../schema/qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
  prompt.get(promptSchemaQRCode, handle);
  prompt.start();
}

export default createQRCode;