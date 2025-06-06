document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const prompt = document.getElementById("prompt");
  const cursor = prompt.querySelector(".cursor");

  cursor.focus();

  const responses = {
    "1": `
- PRIMARY IDENT: cuntrera
- ACTIVE SINCE: 2016

[ CORE SKILLS ]

• Advanced Reverse Engineering:
  - Custom shellcode development (x86/x64/ARM)
  - Polymorphic payload engines
  - Anti-sandbox techniques

• Network Operations:
  - C2 infrastructure architecture
  - DNS/ICMP covert channels
  - Cloud provider exploitation (AWS/Azure/GCP)

• Human Exploitation:
  - Targeted social engineering frameworks
  - OSINT-driven pretext development
  - Technical deception systems

• Web Intrusion:
  - Advanced Google dorking (GHDB extended)
  - Blind injection techniques
  - CMS/API vulnerability research
`,
    "2": `
- Discord for casual communications/coding projects
- For serious communications Press [P] to show PGP key
`,
    "p": `
-----BEGIN PGP PUBLIC KEY BLOCK-----
mDMEaEJaFBYJKwYBBAHaRw8BAQdACwa2xDEFWFBm2taqfG7fZMvOHH2+TgWWrPvU
fhngqT+0IWN1bnRyZXJhIDxpdHNoZWN0b3IxOTkwQGdtYWkuY29tPoiZBBMWCgBB
FiEEp1uZDtAUxG665eZZKotvgNvZ4qkFAmhCWhQCGwMFCQWkexwFCwkIBwICIgIG
FQoJCAsCBBYCAwECHgcCF4AACgkQKotvgNvZ4qm7EAEAows8gULc+Ebs8GKlv9rD
PMAHJU1NEP+DmqyJhDJGF1oA/Arky4QujC/iUUN3MTc83qWCDNOSmUkRNnDJnNNV
z6YOuDgEaEJaFBIKKwYBBAGXVQEFAQEHQP0XUTlzy0JqH879B15jaqhc1geZpDs7
6FPfngyQwdtqAwEIB4h+BBgWCgAmFiEEp1uZDtAUxG665eZZKotvgNvZ4qkFAmhC
WhQCGwwFCQWkexwACgkQKotvgNvZ4qlCYgD+Oh2BSDbm79JcW8baD0iTfrgfnMN1
W0s+fr+Up9d0IuUBAJjXYakON/5BqEEktUhwUGc+jO7LpbOughJBrH6zeGIB
=yyk0
-----END PGP PUBLIC KEY BLOCK-----
`
  };

  cursor.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = cursor.innerText.trim().toLowerCase();

      const newBlock = document.createElement("div");
      newBlock.classList.add("line");
      newBlock.innerHTML = `C:\\Users\\dev&gt; ${input}`;
      output.appendChild(newBlock);

      const response = responses[input];
      if (response) {
        const result = document.createElement("div");
        result.classList.add("line");
        result.innerText = response.trim();
        output.appendChild(result);
      }

      cursor.innerText = "";
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
});


