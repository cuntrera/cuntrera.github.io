const output = document.getElementById('output');
const userInput = document.getElementById('user-input');
const cursor = document.getElementById('cursor');
const terminal = document.getElementById('terminal');

let inputBuffer = '';

document.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    inputBuffer = inputBuffer.slice(0, -1);
  } else if (e.key === 'Enter') {
    processCommand(inputBuffer.trim());
    inputBuffer = '';
  } else if (e.key.length === 1) {
    inputBuffer += e.key;
  }
  userInput.textContent = inputBuffer;
  scrollToBottom();
});

function scrollToBottom() {
  terminal.scrollTop = terminal.scrollHeight;
}

function printOutput(text, isRaw = false) {
  const div = document.createElement('div');
  div.className = 'line';
  div.innerHTML = isRaw ? text : escapeHtml(text);
  output.appendChild(div);
}

function escapeHtml(unsafe) {
  return unsafe.replace(/[<>&]/g, (c) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;'
  }[c]));
}

function resetOutput() {
  output.innerHTML = '';
}

function processCommand(cmd) {
  printOutput(`C:\\Users\\dev> ${cmd}`);

  if (cmd === '1') {
    printOutput(`- PRIMARY IDENT: <span class="cuntrera">cuntrera</span>`, true);
    printOutput(`- ACTIVE SINCE: 2016\n`);
    printOutput(`[ CORE SKILLS ]`);
    printOutput(`• Advanced Reverse Engineering:`);
    printOutput(`  - Custom shellcode development (x86/x64/ARM)`);
    printOutput(`  - Polymorphic payload engines`);
    printOutput(`  - Anti-sandbox techniques\n`);
    printOutput(`• Network Operations:`);
    printOutput(`  - C2 infrastructure architecture`);
    printOutput(`  - DNS/ICMP covert channels`);
    printOutput(`  - Cloud provider exploitation (AWS/Azure/GCP)\n`);
    printOutput(`• Human Exploitation:`);
    printOutput(`  - Targeted social engineering frameworks`);
    printOutput(`  - OSINT-driven pretext development`);
    printOutput(`  - Technical deception systems\n`);
    printOutput(`• Web Intrusion:`);
    printOutput(`  - Advanced Google dorking (GHDB extended)`);
    printOutput(`  - Blind injection techniques`);
    printOutput(`  - CMS/API vulnerability research\n`);
  } else if (cmd === '2') {
    printOutput(`- Discord for casual communications/coding projects`);
    printOutput(`- For serious communications Press [P] to show PGP key\n`);
  } else if (cmd.toLowerCase() === 'p') {
    printOutput(`-----BEGIN PGP PUBLIC KEY BLOCK-----`);
    printOutput(`mDMEaEJaFBYJKwYBBAHaRw8BAQdACwa2xDEFWFBm2taqfG7fZMvOHH2+TgWWrPvU`);
    printOutput(`fhngqT+0IWN1bnRyZXJhIDxpdHNoZWN0b3IxOTkwQGdtYWkuY29tPoiZBBMWCgBB`);
    printOutput(`FiEEp1uZDtAUxG665eZZKotvgNvZ4qkFAmhCWhQCGwMFCQWkexwFCwkIBwICIgIG`);
    printOutput(`FQoJCAsCBBYCAwECHgcCF4AACgkQKotvgNvZ4qm7EAEAows8gULc+Ebs8GKlv9rD`);
    printOutput(`PMAHJU1NEP+DmqyJhDJGF1oA/Arky4QujC/iUUN3MTc83qWCDNOSmUkRNnDJnNNV`);
    printOutput(`z6YOuDgEaEJaFBIKKwYBBAGXVQEFAQEHQP0XUTlzy0JqH879B15jaqhc1geZpDs7`);
    printOutput(`6FPfngyQwdtqAwEIB4h+BBgWCgAmFiEEp1uZDtAUxG665eZZKotvgNvZ4qkFAmhC`);
    printOutput(`WhQCGwwFCQWkexwACgkQKotvgNvZ4qlCYgD+Oh2BSDbm79JcW8baD0iTfrgfnMN1`);
    printOutput(`W0s+fr+Up9d0IuUBAJjXYakON/5BqEEktUhwUGc+jO7LpbOughJBrH6zeGIB`);
    printOutput(`=yyk0`);
    printOutput(`-----END PGP PUBLIC KEY BLOCK-----\n`);
  } else if (cmd === '3') {
    printOutput(`- Air gapped development`);
    printOutput(`- Hardware tokens (YubiHSM)`);
    printOutput(`- Compartmentalized environments\n`);
  } else {
    printOutput('Unrecognized command.\n');
  }
}


