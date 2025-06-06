const output = document.getElementById("output");
const prompt = document.querySelector(".cursor");

const responses = {
  "1": `- PRIMARY IDENT: cuntrera
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

  "2": `- Discord for casual communications/coding projects
- For serious communications Press [P] to show PGP key
`,

  "3": `- Air gapped development
- Hardware tokens (YubiHSM)
- Compartmentalized environments
`,

  "p": `-----BEGIN PGP PUBLIC KEY BLOCK-----
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
-----END PGP PUBLIC KEY BLOCK-----`
};

prompt.focus();

prompt.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const input = prompt.innerText.trim().toLowerCase();
    const line = document.createElement("div");
    line.classList.add("line");
    line.textContent = `C:\\Users\\dev> ${input}`;
    output.appendChild(line);

    if (responses[input]) {
      const response = document.createElement("div");
      response.classList.add("line");
      response.innerText = responses[input];
      output.appendChild(response);
    } else {
      const error = document.createElement("div");
      error.classList.add("line");
      error.textContent = `'${input}' is not recognized as an internal or external command.`;
      output.appendChild(error);
    }

    const newPrompt = document.createElement("div");
    newPrompt.classList.add("line");
    newPrompt.innerHTML = `C:\\Users\\dev&gt; <span class="cursor" contenteditable="true"></span>`;
    output.appendChild(newPrompt);

    prompt.removeEventListener("keydown", arguments.callee);
    document.querySelector(".cursor:last-child").focus();
    prompt = document.querySelector(".cursor:last-child");
    prompt.addEventListener("keydown", arguments.callee);
  }
});



