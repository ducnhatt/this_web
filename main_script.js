(async function checkForUpdates() {
  const currentVersion = "1.0";
  const versionUrl =
    "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

  try {
    const response = await fetch(versionUrl);
    if (!response.ok) {
      console.warn("Could not fetch version information.");
      return;
    }
    const data = await response.json();
    const latestVersion = data.version;
    const updateMessage = data.updateMessage;

    if (currentVersion !== latestVersion) {
      alert(updateMessage);
    } else {
      console.log("You are using the latest version.");
    }
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;
    
    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/

// ...existing code...

const noSound = new Audio("move.wav");

function handleNoSoundAndMove() {
  moveNoButton();
  noSound.play(); // Phát âm thanh khi di chuột hoặc bấm vào nút
}

function handleNoMouseOver() {
  moveNoButton();
  noSound.play(); // Phát âm thanh
}

function moveNoButton() {
  const noButton = document.querySelector(".no-button");
  const container = document.querySelector(".container"); // Chọn container chứa nút

  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  // Tạo vị trí ngẫu nhiên nhưng đảm bảo không bị tràn khỏi container
  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Lắng nghe sự kiện di chuột vào nút "khong"
document.querySelector(".no-button");
document
  .querySelector(".no-button")
  .addEventListener("mouseover", handleNoSoundAndMove);
document
  .querySelector(".no-button")
  .addEventListener("click", handleNoSoundAndMove);

// ...existing code...

function handleYesClick() {
  window.location.href = "main.html";
}
