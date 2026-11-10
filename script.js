// =========================================================
// Azul Viagens Penápolis — script.js
// WhatsApp da loja: (18) 99106-0000
// (formato: 55 + DDD + número, só dígitos)
// =========================================================
const WHATSAPP_NUMERO = "5518991060000";

// ---------- Formulário de contato → WhatsApp ----------
(function () {
  const form = document.getElementById("form-contato");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const interesse = form.interesse.value;
    const mensagem = form.mensagem.value.trim();

    const texto =
      "Olá! Meu nome é " + nome + ".\n" +
      "Tenho interesse em: " + interesse + ".\n" +
      (mensagem ? mensagem : "");

    const url = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(texto);
    window.open(url, "_blank", "noopener");
  });
})();

// ---------- Links de WhatsApp (data-whats) ----------
document.querySelectorAll("[data-whats]").forEach(function (el) {
  const msg = el.getAttribute("data-whats") || "Olá! Gostaria de mais informações.";
  el.setAttribute("href", "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(msg));
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

// ---------- Ano do rodapé ----------
document.querySelectorAll("[data-ano]").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
