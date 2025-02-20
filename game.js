document.addEventListener("DOMContentLoaded", function () {
  const imageSrc = localStorage.getItem("selectedImage"); // Lấy ảnh từ localStorage
  if (!imageSrc) {
    alert("Chưa chọn ảnh!");
    window.location.href = "index.html";
  }

  const rows = 3,
    cols = 3; // Chia ảnh thành 3x3 mảnh
  const board = document.getElementById("puzzle-board");

  let pieces = [];

  // Tạo mảng mảnh ghép
  for (let i = 0; i < rows * cols; i++) {
    let piece = document.createElement("div");
    piece.className = "puzzle-piece";
    piece.style.backgroundImage = `url('${imageSrc}')`;

    let x = (i % cols) * (100 / cols);
    let y = Math.floor(i / cols) * (100 / rows);

    piece.style.backgroundPosition = `${x}% ${y}%`;
    piece.setAttribute("data-index", i);
    piece.draggable = true;
    pieces.push(piece);
  }

  pieces.sort(() => Math.random() - 0.5); // Xáo trộn mảnh ghép

  pieces.forEach((piece) => board.appendChild(piece));

  let draggedPiece = null;

  // Xử lý kéo thả
  board.addEventListener("dragstart", (e) => {
    draggedPiece = e.target;
  });

  board.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  board.addEventListener("drop", (e) => {
    e.preventDefault();
    let targetPiece = e.target;

    if (targetPiece.className === "puzzle-piece") {
      let tempIndex = draggedPiece.getAttribute("data-index");
      draggedPiece.setAttribute(
        "data-index",
        targetPiece.getAttribute("data-index")
      );
      targetPiece.setAttribute("data-index", tempIndex);

      let tempBg = draggedPiece.style.backgroundPosition;
      draggedPiece.style.backgroundPosition =
        targetPiece.style.backgroundPosition;
      targetPiece.style.backgroundPosition = tempBg;
    }
  });

  // Kiểm tra chiến thắng
  function checkWin() {
    let correct = 0;
    document.querySelectorAll(".puzzle-piece").forEach((piece) => {
      if (piece.getAttribute("data-index") == piece.style.order) correct++;
    });

    if (correct === rows * cols) {
      alert("Chúc mừng! Bạn đã ghép đúng bức ảnh.");
    }
  }

  board.addEventListener("dragend", checkWin);
});

// Chơi lại game
function resetGame() {
  window.location.reload();
}
