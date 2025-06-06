document.addEventListener('DOMContentLoaded', function () {
  const terminal = document.getElementById('terminal');
  const cursor = document.createElement('span');
  cursor.classList.add('cursor');
  cursor.textContent = ' ';
  terminal.appendChild(cursor);
  terminal.focus();

  const audio = new Audio('sound.mp3');
  audio.loop = true;
  audio.volume = 0.4;
  audio.play();

  let currentLine = '';
  let outputHistory = [];
  let scrollIndex = 0;

  const whoamiContent = `
███████████████████████████████████████
█                                     █
█             Cuntrera               █
█                                     █
███████████████████████████████████████

- PRIMARY IDENT: Cuntrera (OpSec handle)
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
`;

  const networkContent = `
[ NETWORK - Secure Comms ]

• PGP (4096-bit RSA)
• Signal Protocol
• OTR Messaging
• Encrypted SMTP relays
• DNS over HTTPS (DoH)
• Blockchain-based messaging (experimental)
`;

  const opsecContent = `
[ OPSEC - Protocols ]

• Air-gapped development
• Hardware tokens (YubiHSM, Nitrokey)
• Isolated VMs with no persistence
• VPN chaining + Tor
• MAC spoofing, randomized
• Time-based traffic obfuscation
`;

  function addOutput(text) {
    const line = document.createElement('div');
    line.className = 'output';
    line.textContent = text;
    terminal.insertBefore(line, cursor);
    outputHistory.push(line);
    scrollIndex = outputHistory.length - 1;
    scrollToBottom();
  }

  function updatePrompt() {
    const prompt = document.createElement('div');
    prompt.className = 'input-line';
    prompt.textContent = 'C:\\Users\\dev> ' + currentLine;
    terminal.insertBefore(prompt, cursor);
  }

  function scrollToBottom() {
    terminal.scrollTop = terminal.scrollHeight;
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace') {
      e.preventDefault();
      currentLine = currentLine.slice(0, -1);
      updateInputLine();
    } else if (e.key === 'Enter') {
      addOutput('C:\\Users\\dev> ' + currentLine);
      processCommand(currentLine.trim());
      currentLine = '';
      updatePrompt();
      updateInputLine();
    } else if (e.key.length === 1) {
      currentLine += e.key;
      updateInputLine();
    } else if (e.key === 'ArrowUp') {
      if (scrollIndex > 0) scrollIndex--;
      outputHistory[scrollIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (e.key === 'ArrowDown') {
      if (scrollIndex < outputHistory.length - 1) scrollIndex++;
      outputHistory[scrollIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  function updateInputLine() {
    let existing = terminal.querySelector('.input-line');
    if (existing) terminal.removeChild(existing);

    const newLine = document.createElement('div');
    newLine.className = 'input-line';
    newLine.textContent = 'C:\\Users\\dev> ' + currentLine;
    terminal.insertBefore(newLine, cursor);
    scrollToBottom();
  }

  function processCommand(cmd) {
    if (cmd === '1') {
      addOutput(whoamiContent);
    } else if (cmd === '2') {
      addOutput(networkContent);
    } else if (cmd === '3') {
      addOutput(opsecContent);
    } else {
      addOutput(`'${cmd}' is not recognized as an internal or external command`);
    }
  }

  // Initial screen
  addOutput('Microsoft Windows [Version 10.0.19045.5854]');
  addOutput('(c) Microsoft Corporation. All rights reserved.\n');
  addOutput('[1] WHOAMI - Technical Profile');
  addOutput('[2] NETWORK - Secure Comms');
  addOutput('[3] OPSEC - Protocols\n');
  updatePrompt();
});
