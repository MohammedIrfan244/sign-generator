# EFSP Signature Generator 

A simple Node.js utility that loads a `.pfx` certificate, signs the current UTC timestamp using RSA-SHA256, and outputs a Base64-encoded signature.

This signature can be used for Tyler Technologies EFSP (e-filing) integrations where a `tyl-api-auth` header or WS-Security signature is required.

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

