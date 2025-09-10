document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal-text");
  const perCharDelay = 0.15; // 文字ごとの遅延
  const betweenLinesDelay = 0.3; // 行間の待機時間

  elements.forEach((el, index) => {
    const text = el.dataset.text || "";
    el.textContent = "";

    // 遅延オフセット（前の行の文字数×遅延＋行間の待機時間）
    let delayOffset = 0;
    if (index > 0) {
      const prev = elements[index - 1];
      const prevTextLength = prev.dataset.text.length;
      delayOffset = prevTextLength * perCharDelay + betweenLinesDelay;
    }

    [...text].forEach((ch, i) => {
      const span = document.createElement("span");
      span.textContent = ch;
      span.classList.add("char");
      span.style.animation = `fadeInUp 0.5s ease forwards ${delayOffset + i * perCharDelay}s`;
      el.appendChild(span);
    });
  });
});

// ===== トップへ戻るボタン =====
const backBtn = document.getElementById("backToTop");
const SHOW_AFTER = 300; // 300pxスクロールしたら表示

window.addEventListener("scroll", () => {
  if (window.scrollY > SHOW_AFTER) {
    backBtn.classList.add("show");
  } else {
    backBtn.classList.remove("show");
  }
}, { passive: true });

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});