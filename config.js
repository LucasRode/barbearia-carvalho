/* Site Cinematográfico · © 2026 Labrego IA · LBG-SC-2026-v1 */
window.SITE = {
  nome: "Barbearia Carvalho",
  assinatura: "LBG-SC-20261103-1C3B8B615E",

  whatsapp: {
    numero: "5554997114006", // só dígitos
    mensagem: "Olá! Vim pelo site e quero agendar um horário.",
  },

  contato: {
    // Sem e-mail definido: o formulário abre o WhatsApp com a mensagem pronta.
    // Quando tiver o e-mail, preencha aqui e o envio passa a ir por e-mail (FormSubmit).
    email: "",
    // Opcional: chave do Web3Forms (https://web3forms.com). Se vazio, usa FormSubmit.
    web3formsChave: "",
    assunto: "Novo contato pelo site Barbearia Carvalho",
  },

  frames: {
    total: 140, // valor impresso pelo fatiar_frames.sh
    desktop: "assets/frames/desktop/f_{n}.webp",
    mobile: "assets/frames/mobile/f_{n}.webp",
  },
};
