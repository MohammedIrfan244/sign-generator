# .pfx Signature Generator 

A lightweight Node.js utility that loads a `.pfx` certificate, signs the current UTC timestamp (or any arbitrary text) using RSA-SHA256, and outputs a Base64-encoded digital signature.

---

##  Features

- Reads a `.pfx` file and its password
- Extracts the private key automatically
- Signs a timestamp using **RSA-SHA256**
- Prints the Base64 signature to the console
- Lightweight — only uses the `node-forge` dependency

---

##  Folder Structure

root-folder/
├─ package.json
├─ signature.js
├─ .gitignore
├─ expediteconsults.pfx
├─ expediteconsults-password.txt
└─ README.md



## Now your setup supports

| Action | Command |
|--------|----------|
| Run the signer | `npm start` |
| Install dependencies | `npm install` |

