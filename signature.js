import fs from "fs";
import crypto from "crypto";
import forge from "node-forge";

/**
 * Simple EFSP Signature Generator
 * -------------------------------
 * Loads a PFX file, extracts the private key,
 * signs the current UTC timestamp using RSA-SHA256,
 * and prints a base64 signature.
 */

const CONFIG = {
  // Replace with your PFX file and password
  pfxFile: "./Expediteconsults.pfx",
  passwordFile: "./Expediteconsults-password.txt",
};

function loadPrivateKey(pfxPath, password) {
  const pfxData = fs.readFileSync(pfxPath);
  const p12Asn1 = forge.asn1.fromDer(forge.util.createBuffer(pfxData));
  const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, password);

  for (const safeContents of p12.safeContents) {
    for (const bag of safeContents.safeBags) {
      if (bag.key) {
        return forge.pki.privateKeyToPem(bag.key);
      }
    }
  }
  throw new Error("Private key not found in PFX.");
}

function generateSignature() {
  const pfxPassword = fs.readFileSync(CONFIG.passwordFile, "utf8").trim();
  const privateKeyPem = loadPrivateKey(CONFIG.pfxFile, pfxPassword);

  const timestamp = new Date().toISOString();
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(timestamp);
  const signature = signer.sign(privateKeyPem);
  const base64Signature = signature.toString("base64");

  console.log("Timestamp:", timestamp);
  console.log("\nBase64 Signature:\n", base64Signature);
}

try {
  generateSignature();
} catch (err) {
  console.error("❌ Error:", err.message);
}
