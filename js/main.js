/* =========================================================
   CONFIGURAÇÃO DA LANDING PAGE TRILHA2027
   ========================================================= */
const CONFIG = {
  price: "29,90",               // preço exibido em toda a página
  installments: "",             // ex.: "ou 3x de R$ 10,50" (deixe vazio para ocultar)
  pages: "38",                  // número de páginas do PDF
  checkoutUrl: "https://pay.hotmart.com/R107923167E?sck=HOTMART_PRODUCT_PAGE&off=1y2xkw7x&hotfeature=32&_gl=1*fsosai*_gcl_aw*R0NMLjE3OTEzMzM1ODQuQ2owS0NRand1SkxXQmhEX0FSSXNBSUJjUlV3VndDVS1Lc1VGcmczVG5XMHNEVXZTeVBSRUQ3NWRmbmlVYXROSldNRkR1VHJpeHZKT0V6Y2FBcHZpRUFMd193Y0I.*_gcl_au*ODEzNzQ4ODY5LjE3OTEwODE2OTQ.*FPAU*MTE3ODcxMjAxMC4xNzkxMDgxNjkx*_ga*MTYxMDUzNTg2MS4xNzkxMDgxNjg5*_ga_GQH2V1F11Q*czE3OTEzNDA5NzQkbzUkZzEkdDE3OTEzNDIzNjIkajU5JGwwJGgzMjI3NjUzNTg.&bid=1791342445198", // link de checkout
  passParams: ["src", "sck", "xcod", "fbclid", "gclid", "ttclid"], // além de utm_*, repassados ao checkout
};

/* =========================================================
   CONTEÚDO DINÂMICO
   ========================================================= */
const STEPS = [
  { n: 0, t: "Foco e ambiente", d: "Antes de qualquer conteúdo, você prepara o terreno: Pomodoro (25 minutos de foco e 5 de pausa), mesa limpa, celular longe e o computador organizado. Comece pequeno: só um pomodoro.", out: "Você começa a estudar em minutos, sem ficar negociando consigo mesmo.", cap: "Capítulo 4" },
  { n: 1, t: "Pesquisar lendo", d: "Vale a pena estudar isso agora? Você lê sobre o assunto, só lendo, para criar um mapa inicial e descobrir o que ainda não sabe. Sem vídeos nesta etapa.", out: "Uma lista de 3 a 5 dúvidas para levar ao vídeo.", cap: "Capítulo 5" },
  { n: 2, t: "Vídeos e anotações", d: "Agora sim, o vídeo. Você assiste a 1 ou 2 aulas com as suas dúvidas na mão, anota com as suas palavras e pausa para tentar resolver antes do professor.", out: "Anotações suas, e não uma cópia da tela.", cap: "Capítulo 6" },
  { n: 3, t: "Pausa e síntese", d: "Descanse alguns minutos. Depois, escreva um resumo de memória, registre 3 insights e monte um mapa mental. É aqui que o conteúdo passa a ser seu.", out: "Um resumo e um mapa que mostram o que você realmente absorveu.", cap: "Capítulo 6" },
  { n: 4, t: "Prática e revisão", d: "Questões, caderno de erros e revisão espaçada (1, 7 e 30 dias). Você testa o que aprendeu e transforma cada erro em informação útil.", out: "Clareza sobre o que você aprendeu de verdade e o que ainda precisa de atenção.", cap: "Capítulo 7" },
];

const WEEKS = {
  leve: {
    label: "Leve", hours: "3 a 6 h",
    note: "Para semanas corridas, com muito trabalho ou cansaço. Também é estudo.",
    days: [["Seg", "Teoria leve", "1 a 2 h", "Um conteúdo, só o essencial."], ["Ter", "Descanso", "—", "Dia livre."], ["Qua", "Prática", "1 a 2 h", "Questões do que viu na segunda."], ["Qui", "Descanso", "—", "Dia livre."], ["Sex", "Descanso", "—", "Dia livre."], ["Sáb", "Descanso", "—", "Lazer e família."], ["Dom", "Revisão e planejamento", "1 a 2 h", "Revisar e montar a próxima semana."]],
  },
  base: {
    label: "Base", hours: "7 a 14 h",
    note: "A semana modelo do livro, para a rotina normal.",
    days: [["Seg", "Teoria", "2 a 4 h", "Até 2 conteúdos novos (etapas 0 a 3)."], ["Ter", "Descanso", "—", "Dia livre de estudo obrigatório."], ["Qua", "Prática", "2 a 4 h", "Praticar o que aprendeu na segunda."], ["Qui", "Descanso", "—", "Dia livre de estudo obrigatório."], ["Sex", "Consolidação leve", "1 a 2 h", "Revisar anotações e organizar o material."], ["Sáb", "Descanso", "—", "Lazer, família, esporte e cuidar de si."], ["Dom", "Revisão global", "2 a 4 h+", "Teoria de manhã, prática à tarde e planejamento à noite."]],
  },
  intenso: {
    label: "Intenso", hours: "10 a 19 h",
    note: "Para a reta final, por poucas semanas. O descanso continua protegido.",
    days: [["Seg", "Teoria", "2 a 4 h", "Conteúdos novos."], ["Ter", "Descanso", "—", "Dia inteiro sem estudar."], ["Qua", "Prática", "2 a 4 h", "Exercícios e questões."], ["Qui", "Prática leve", "1 a 2 h", "Caderno de erros."], ["Sex", "Consolidação", "1 a 2 h", "Revisar e ajustar."], ["Sáb", "Simulado e redação", "2 a 3 h", "De manhã. À tarde, descanso."], ["Dom", "Revisão global", "2 a 4 h", "Revisão e planejamento da semana."]],
  },
};

const PARTS = [
  {
    name: "Parte 1", title: "Ponto de partida", chapters: [
      ["1", "Por que estudar com método", "O problema do estudo no improviso, a ideia do tijolo por tijolo e um diagnóstico dos seus hábitos."],
      ["2", "O Enem 2027 em foco", "Como a prova é organizada, a redação, a nota e como transformar objetivo em meta de estudo."],
      ["3", "Diagnóstico: onde você está hoje", "O semáforo de prioridades, a prova-diagnóstico e como escolher seus primeiros tijolos."],
    ]
  },
  {
    name: "Parte 2", title: "O método de 5 etapas", chapters: [
      ["4", "Foco e ambiente: a Etapa 0", "Pomodoro, ambiente físico e a limpeza lógica do computador e do celular."],
      ["5", "O ciclo e a Etapa 1: pesquisar lendo", "As três perguntas de “vale a pena?”, a leitura exploratória e como checar o que você lê."],
      ["6", "Etapas 2 e 3: vídeos, anotações e síntese", "Como anotar, o resumo de memória, os 3 insights e o mapa mental."],
      ["7", "Etapa 4: praticar e revisar", "Caderno de erros, revisão espaçada, testar-se de verdade e simulados."],
    ]
  },
  {
    name: "Parte 3", title: "Organização da rotina", chapters: [
      ["8", "Seu cronograma semanal", "A semana modelo, as versões Leve, Base e Intenso e o planejamento de domingo à noite."],
      ["9", "Estudar trabalhando", "Micromomentos de 10 a 15 minutos e como usar o tempo no deslocamento."],
      ["10", "Descanso, saúde e imprevistos", "Plano B para semanas ruins e a regra dos 10 minutos para recomeçar."],
    ]
  },
  {
    name: "Parte 4", title: "Ferramentas e plano de ação", chapters: [
      ["11", "Fontes e ferramentas", "A ferramenta certa em cada etapa e como checar informação (inclusive de IA)."],
      ["12", "Seu plano de 30 dias", "Um plano de 4 semanas, a revisão mensal e como manter o ritmo até a prova."],
    ]
  },
];

const FAQ = [
  ["Serve para quem não vai fazer o Enem?", "Sim. O método funciona para faculdade, curso técnico e cursos livres. Basta trocar “Enem” por “minha prova” e “edital” por “plano de ensino”. O livro explica como."],
  ["Preciso trabalhar com programação?", "Não. Plataformas de programação aparecem apenas como uma opção de prática para quem estuda tecnologia. O método é o mesmo para qualquer área."],
  ["O livro garante aprovação?", "Não, e desconfie de quem garante. O Trilha2027 organiza o seu estudo: o que fazer em cada dia, como estudar cada conteúdo e como retomar quando algo dá errado. O resultado depende da sua base, do seu tempo, da sua constância e dos seus materiais de conteúdo."],
  ["Em que formato eu recebo?", "Em PDF, que abre no celular, tablet ou computador. O acesso é liberado pela plataforma de pagamento assim que o pagamento é confirmado."],
  ["Posso imprimir os modelos?", "Sim. O Apêndice A reúne 9 modelos prontos para imprimir ou copiar em um caderno: diagnóstico, registro de pomodoros, caderno de erros, planilha da semana, revisão mensal e outros."],
  ["Tenho pouquíssimo tempo. Funciona?", "Foi pensado para isso. A versão Leve da semana usa de 3 a 6 horas, e o livro tem um capítulo inteiro sobre aproveitar janelas curtas de 10 a 15 minutos."],
  ["As informações sobre o Enem estão atualizadas?", "O livro explica a estrutura da prova conforme as edições recentes e deixa claro que datas e regras só valem quando o Inep publica o edital de cada ano. Confirme sempre no edital oficial."],
  ["Como funciona a garantia?", "Você tem 7 dias para pedir o reembolso pela plataforma de pagamento, conforme a política dela e o Código de Defesa do Consumidor."],
];

/* =========================================================
   FUNÇÕES DE INICIALIZAÇÃO
   ========================================================= */
function initApp() {
  document.documentElement.classList.add('js');

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Atualizar variáveis dinâmicas de configuração no HTML
  $$("[data-price]").forEach((e) => (e.textContent = CONFIG.price));
  $$("[data-pages]").forEach((e) => (e.textContent = CONFIG.pages));
  $$("[data-installments]").forEach((e) => (e.textContent = CONFIG.installments ? "· " + CONFIG.installments : ""));
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sistema de rastreamento e checkout
  function track(name, data) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, data));
    if (typeof window.fbq === "function") window.fbq("track", "InitiateCheckout");
    if (typeof window.gtag === "function") window.gtag("event", "begin_checkout", data);
  }

  function checkoutHref() {
    if (!CONFIG.checkoutUrl) return null;
    try {
      const url = new URL(CONFIG.checkoutUrl, location.href);
      const here = new URLSearchParams(location.search);
      here.forEach((v, k) => {
        if (k.startsWith("utm_") || CONFIG.passParams.includes(k)) url.searchParams.set(k, v);
      });
      return url.toString();
    } catch (e) {
      return CONFIG.checkoutUrl;
    }
  }

  const checkout = checkoutHref();
  if (!checkout) console.warn("Trilha2027: defina CONFIG.checkoutUrl com o link da Hotmart, Eduzz ou Kirvano.");
  $$("[data-cta]").forEach((a) => {
    const place = a.dataset.cta;
    if (checkout) a.href = checkout;
    a.addEventListener("click", () => track("cta_click", { place, price: CONFIG.price }));
  });

  // Renderizar Etapas do Método (Tabs)
  (function () {
    const list = $("#stepList"), panels = $("#stepPanels");
    if (!list || !panels) return;
    list.innerHTML = "";
    panels.innerHTML = "";
    STEPS.forEach((s, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "step-btn"; b.id = "tab" + i;
      b.setAttribute("role", "tab"); b.setAttribute("aria-controls", "panel" + i);
      b.setAttribute("aria-selected", i === 0 ? "true" : "false");
      b.tabIndex = i === 0 ? 0 : -1;
      b.innerHTML = `<span class="n">${s.n}</span><span class="t">${esc(s.t)}</span>`;
      list.appendChild(b);

      const p = document.createElement("div");
      p.className = "step-panel"; p.id = "panel" + i; p.setAttribute("role", "tabpanel");
      p.setAttribute("aria-labelledby", "tab" + i); p.hidden = i !== 0;
      p.innerHTML = `<span class="eyebrow">Etapa ${s.n}</span><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p><div class="out"><strong>O que você leva:</strong> ${esc(s.out)}</div><span class="cap">Detalhado no ${esc(s.cap)}</span>`;
      panels.appendChild(p);
    });

    const tabs = $$(".step-btn", list);
    function select(i, focus) {
      tabs.forEach((t, k) => { t.setAttribute("aria-selected", k === i); t.tabIndex = k === i ? 0 : -1; });
      $$(".step-panel", panels).forEach((p, k) => (p.hidden = k !== i));
      if (focus) tabs[i].focus();
    }
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(i));
      t.addEventListener("keydown", (e) => {
        const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (k) { e.preventDefault(); select((i + k + tabs.length) % tabs.length, true); }
      });
    });
  })();

  // Renderizar Cronograma Semanal Interativo
  (function () {
    const seg = $("#weekSeg"), grid = $("#weekGrid");
    if (!seg || !grid) return;
    seg.innerHTML = "";
    const render = (key) => {
      const w = WEEKS[key];
      grid.innerHTML = w.days.map(([d, f, h, s]) => {
        const rest = f === "Descanso";
        return `<div class="day${rest ? " rest" : ""}"><span class="d">${d}</span><span class="f">${esc(f)}</span><small>${esc(s)}</small><span class="h">${esc(h)}</span></div>`;
      }).join("");
      const hoursEl = $("#weekHours");
      const noteEl = $("#weekNote");
      if (hoursEl) hoursEl.textContent = w.hours;
      if (noteEl) noteEl.textContent = w.note;
      $$("button", seg).forEach((b) => b.setAttribute("aria-pressed", b.dataset.k === key));
    };

    Object.keys(WEEKS).forEach((k) => {
      const b = document.createElement("button");
      b.type = "button"; b.dataset.k = k; b.textContent = WEEKS[k].label;
      b.addEventListener("click", () => render(k));
      seg.appendChild(b);
    });
    render("base");
  })();

  // Renderizar Conteúdo dos Capítulos
  const partsEl = $("#parts");
  if (partsEl) {
    partsEl.innerHTML = PARTS.map((p) => `
    <div class="part"><header><span>${esc(p.name)}</span>${esc(p.title)}</header>
    ${p.chapters.map(([n, t, d]) => `<details><summary><span class="cn">${n}</span>${esc(t)}</summary><div class="body">${esc(d)}</div></details>`).join("")}
    </div>`).join("");
  }

  // Renderizar FAQ
  const faqEl = $("#faqList");
  if (faqEl) {
    faqEl.innerHTML = FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="body">${esc(a)}</div></details>`).join("");
  }

  // Animação de Entrada (Scroll Reveal)
  (function () {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
  })();

  // Barra Fixa Mobile
  (function () {
    const bar = $("#sticky"), hero = $(".hero"), offer = $("#oferta");
    if (!bar || !hero || !offer || !("IntersectionObserver" in window)) return;
    let heroOut = false, offerIn = false;
    const update = () => {
      const show = heroOut && !offerIn;
      bar.classList.toggle("show", show);
      bar.setAttribute("aria-hidden", show ? "false" : "true");
      const btn = $("a", bar);
      if (btn) btn.tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(([e]) => { heroOut = !e.isIntersecting; update(); }).observe(hero);
    new IntersectionObserver(([e]) => { offerIn = e.isIntersecting; update(); }, { threshold: 0.15 }).observe(offer);
  })();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
