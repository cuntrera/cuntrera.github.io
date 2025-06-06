const terminal = document.getElementById('terminal');
const output = document.getElementById('output');
const userInput = document.getElementById('userInput');
const audio = document.getElementById('bg-audio');

let inputBuffer = '';
let hasPlayedAudio = false;

const responses = {
  '1': `
- PRIMARY IDENT: CUNTRERA
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

  '2': `
- Discord for casual communications/coding projects
- For serious communications Press [P] to show PGP key
`,

  'p': `
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
`,

  '3': `
- Air gapped development
- Hardware tokens (YubiHSM)
- Compartmentalized environments
`
};

document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'Enter') {
    const trimmedInput = inputBuffer.trim().toLowerCase();
    const inputLine = document.createElement('div');
    inputLine.className = 'line';
    inputLine.textContent = `C:\\Users\\dev> ${trimmedInput}`;
    output.innerHTML = '';
    output.appendChild(inputLine);

    if (trimmedInput === '4') {
      window.open('https://telegra.ph/Declaration-of-Non-Liability-for-Online-Presence-06-06', '_blank');
    } else if (responses[trimmedInput]) {
      const responseBlock = document.createElement('pre');
      responseBlock.className = 'line';
      responseBlock.textContent = responses[trimmedInput];
      output.appendChild(responseBlock);
    }

    terminal.scrollTop = terminal.scrollHeight;

    if (!hasPlayedAudio) {
      audio.volume = 0.6;
      audio.play().catch(err => console.error('Audio failed:', err));
      hasPlayedAudio = true;
    }

    inputBuffer = '';
    userInput.textContent = '';
  } else if (key === 'Backspace') {
    inputBuffer = inputBuffer.slice(0, -1);
    userInput.textContent = inputBuffer;
  } else if (key.length === 1) {
    inputBuffer += key;
    userInput.textContent = inputBuffer;
  }
});
