const terminal = document.getElementById('terminal');
const cursor = document.getElementById('cursor');

let stage = 0;

document.addEventListener('keydown', (e) => {
  if (stage === 0 && ['1', '2', '3'].includes(e.key)) {
    cursor.remove();
    const command = `C:\\Users\\dev> ${e.key}`;
    terminal.innerHTML += `\n${command}`;

    if (e.key === '1') {
      terminal.innerHTML += `\n\n- PRIMARY IDENT: cuntrera\n- ACTIVE SINCE: 2016\n\n[ CORE SKILLS ]\n• Advanced Reverse Engineering:\n  - Custom shellcode development (x86/x64/ARM)\n  - Polymorphic payload engines\n  - Anti-sandbox techniques\n\n• Network Operations:\n  - C2 infrastructure architecture\n  - DNS/ICMP covert channels\n  - Cloud provider exploitation (AWS/Azure/GCP)\n\n• Human Exploitation:\n  - Targeted social engineering frameworks\n  - OSINT-driven pretext development\n  - Technical deception systems\n\n• Web Intrusion:\n  - Advanced Google dorking (GHDB extended)\n  - Blind injection techniques\n  - CMS/API vulnerability research\n`;
    }

    if (e.key === '2') {
      terminal.innerHTML += `\n\n[ NETWORK - Communications ]\nAll serious inquiries and conversations are to be had **over PGP only**. Do not communicate over clearnet.\n\nDiscord: @(id):1184187714862592014\n\nPress [P] to show PGP public key.`;
      stage = 'awaitingPGP';
    }

    if (e.key === '3') {
      terminal.innerHTML += `\n\n[ OPSEC - Protocols ]\n(Placeholder for operational security content)`;
    }

    terminal.innerHTML += `\n\nC:\\Users\\dev><span id="cursor">_</span>`;
    scrollToBottom();
  }

  if (stage === 'awaitingPGP' && (e.key === 'p' || e.key === 'P')) {
    cursor.remove();
    terminal.innerHTML += `\n\n-----BEGIN PGP PUBLIC KEY BLOCK-----\n\nmDMEaEJaFBYJKwYBBAHaRw8BAQdACwa2xDEFWFBm2taqfG7fZMvOHH2+TgWWrPvU\nfhngqT+0IWN1bnRyZXJhIDxpdHNoZWN0b3IxOTkwQGdtYWkuY29tPoiZBBMWCgBB\nFiEEp1uZDtAUxG665eZZKotvgNvZ4qkFAmhCWhQCGwMFCQWkexwFCwkIBwICIgIG\nFQoJCAsCBBYCAwECHgcCF4AACgkQKotvgNvZ4qm7EAEAows8gULc+Ebs8GKlv9rD\nPMAHJU1NEP+DmqyJhDJGF1oA/Arky4QujC/iUUN3MTc83qWCDNOSmUkRNnDJnNNV\nz6YOuDgEaEJaFBIKKwYBBAGXVQEFAQEHQP0XUTlzy0JqH879B15jaqhc1geZpDs7\n6FPfngyQwdtqAwEIB4h+BBgWCgAmFiEEp1uZDtAUxG665eZZKotvgNvZ4qkFAmhC\nWhQCGwwFCQWkexwACgkQKotvgNvZ4qlCYgD+Oh2BSDbm79JcW8baD0iTfrgfnMN1\nW0s+fr+Up9d0IuUBAJjXYakON/5BqEEktUhwUGc+jO7LpbOughJBrH6zeGIB\n=yyk0\n\n-----END PGP PUBLIC KEY BLOCK-----`;
    terminal.innerHTML += `\n\nC:\\Users\\dev><span id="cursor">_</span>`;
    scrollToBottom();
    stage = 0;
  }
});

function scrollToBottom() {
  terminal.scrollTop = terminal.scrollHeight;
}
