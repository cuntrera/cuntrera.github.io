const inputSpan = document.getElementById("cmd-input");
const output = document.getElementById("output");
let command = "";

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    command = command.slice(0, -1);
  } else if (e.key.length === 1) {
    command += e.key;
  } else if (e.key === "Enter") {
    handleCommand(command);
    command = "";
  }
  inputSpan.textContent = command;
});

function handleCommand(cmd) {
  let out = "";

  switch (cmd.trim()) {
    case "0":
      out = "Alias: buccelleta\nOccupation: ethereal net-being\nLinks: press 1\n";
      break;
    case "1":
      out = `
        <img id="pfp" src="pfp.png" alt="pfp"/>\n
        <a class="link-button" href="https://twitter.com/YOUR_HANDLE" target="_blank">Twitter</a>
        <a class="link-button" href="https://github.com/YOUR_HANDLE" target="_blank">GitHub</a>
        <a class="link-button" href="https://t.me/YOUR_HANDLE" target="_blank">Telegram</a>
        <a class="link-button" href="https://linktr.ee/YOUR_HANDLE" target="_blank">Linktree</a>
        <a class="link-button" href="https://etherscan.io/address/YOUR_CRYPTO_ADDR" target="_blank">ETH Wallet</a>
      `;
      break;
    default:
      out = `Unknown command: ${cmd}`;
  }

  const outBlock = document.createElement("div");
  outBlock.innerHTML = out.replace(/\n/g, "<br>");
  output.appendChild(outBlock);

  const newLine = document.createElement("div");
  newLine.className = "line";
  newLine.innerHTML = `C:\\Users\\dev&gt;<span id="cmd-input"></span><span class="cursor">_</span>`;
  document.querySelector(".terminal").appendChild(newLine);

  document.getElementById("cmd-input").textContent = "";
}

