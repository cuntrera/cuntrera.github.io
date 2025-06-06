const input = document.getElementById('input');
const terminal = document.getElementById('terminal');

let buffer = "";

document.addEventListener('keydown', (e) => {
  if (e.key === "Backspace") {
    buffer = buffer.slice(0, -1);
    input.textContent = buffer;
    return;
  }

  if (e.key === "Enter") {
    handleCommand(buffer.trim());
    buffer = "";
    input.textContent = "";
    return;
  }

  if (e.key.length === 1) {
    buffer += e.key;
    input.textContent = buffer;
  }
});

function appendLine(text) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.textContent = text;
  terminal.appendChild(line);
  window.scrollTo(0, document.body.scrollHeight);
}

function handleCommand(cmd) {
  appendLine("C:\\Users\\dev> " + cmd);

  switch (cmd.toLowerCase()) {
    case "1":
      appendLine("- PRIMARY IDENT: cuntrera");
      appendLine("- ACTIVE SINCE: 2016\n");
      appendLine("[ CORE SKILLS ]");
      appendLine("• Advanced Reverse Engineering:");
      appendLine("  - Custom shellcode development (x86/x64/ARM)");
      appendLine("  - Polymorphic payload engines");
      appendLine("  - Anti-sandbox techniques\n");
      appendLine("• Network Operations:");
      appendLine("  - C2 infrastructure architecture");
      appendLine("  - DNS/ICMP covert channels");
      appendLine("  - Cloud provider exploitation (AWS/Azure/GCP)\n");
      appendLine("• Human Exploitation:");
      appendLine("  - Targeted social engineering frameworks");
      appendLine("  - OSINT-driven pretext development");
      appendLine("  - Technical deception systems\n");
      appendLine("• Web Intrusion:");
      appendLine("  - Advanced Google dorking (GHDB extended)");
      appendLine("  - Blind injection techniques");
      appendLine("  - CMS/API vulnerability research");
      break;

    case "2":
      appendLine("- Discord for casual communications/coding projects");
      appendLine("- For serious communications Press [P] to show PGP key");
      break;

    case "3":
      appendLine("- Air gapped development");
      appendLine("- Hardware tokens (YubiHSM)");
      appendLine("- Compartmentalized environments");
      break;

    case "p":
      appendLine("-----BEGIN PGP PUBLIC KEY BLOCK-----");
      appendLine("mDMEaEJaFBYJKwYBBAHaRw8BAQdACwa2xDEFWFBm2taqfG7fZMvOHH2+TgWWrPvU");
      appendLine("fhngqT+0IWN1bnRyZXJhIDxpdHNoZWN0b3IxOTkwQGdtYWkuY29tPoiZBBMWCgBB");
      appendLine("FiEEp1uZDtAUxG665eZZKotvgNvZ4qkFAmhCWhQCGwMFCQWkexwFCwkIBwICIgIG");
      appendLine("FQoJCAsCBBYCAwECHgcCF4AACgkQKotvgNvZ4qm7EAEAows8gULc+Ebs8GKlv9rD");
      appendLine("PMAHJU1NEP+DmqyJhDJGF1oA/Arky4QujC/iUUN3MTc83qWCDNOSmUkRNnDJnNNV");
      appendLine("z6YOuDgEaEJaFBIKKwYBBAGXVQEFAQEHQP0XUTlzy0JqH879B15jaqhc1geZpDs7");
      appendLine("6FPfngyQwdtqAwEIB4h+BBgWCgAmFiEEp1uZDtAUxG665eZZKotvgNvZ4qkFAmhC");
      appendLine("WhQCGwwFCQWkexwACgkQKotvgNvZ4qlCYgD+Oh2BSDbm79JcW8baD0iTfrgfnMN1");
      appendLine("W0s+fr+Up9d0IuUBAJjXYakON/5BqEEktUhwUGc+jO7LpbOughJBrH6zeGIB");
      appendLine("=yyk0");
      appendLine("-----END PGP PUBLIC KEY BLOCK-----");
      break;

    default:
      appendLine(`'${cmd}' is not recognized as an internal or external command.`);
      break;
  }

  appendLine(""); // Blank line after output
}

