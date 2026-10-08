# 📚 Trilha2027 — Landing Page & Repositório do Projeto

Repositório oficial e estruturado da Landing Page e acervo digital do livro **Trilha2027: O método de 5 etapas para estudar com rotina, foco e descanso**.

---

## 📌 Visão Geral

O **Trilha2027** é um método prático de organização de estudos voltado a estudantes do Enem 2027, faculdade, cursos técnicos e cursos livres. A landing page foi construída com foco em alta conversão, performance de carregamento, design limpo, acessibilidade e integração direta com plataformas de checkout (Hotmart, Eduzz, Kirvano) e pixels de rastreamento (Meta Pixel, Google Tag Manager, GA4).

---

## 📁 Estrutura de Pastas do Repositório

O projeto foi reorganizado seguindo os padrões profissionais de arquitetura web para facilitar a manutenção, escalabilidade e hospedagem em servidores web (GitHub Pages, Netlify, Vercel, Apache, Nginx):

```text
Site_Trilha2027/
├── index.html                           # Página principal do site (Entry Point)
├── trilha2027-landing-page.html         # Cópia raiz para compatibilidade de rotas
├── README.md                            # Documentação completa do projeto
│
├── css/                                 # Folhas de Estilos CSS
│   └── style.css                        # Design System, variáveis, layout e animações
│
├── js/                                  # Lógica e Scripts JavaScript
│   └── main.js                          # Configurações, manipuladores DOM e rastreamento
│
├── html/                                # Módulos e Páginas HTML isoladas
│   └── trilha2027-landing-page.html     # Página estruturada para acesso relativo
│
└── assets/                              # Ativos Digitais, Mídias e Documentos
    ├── logo/                            # Logotipos e Ícones em SVG e JPG
    │   ├── trilha2027-logo.svg          # Logo oficial versão clara
    │   ├── trilha2027-logo-fundo-escuro.svg # Logo oficial para fundos escuros
    │   ├── trilha2027-icone.svg         # Favicon / Ícone dos tijolos
    │   ├── trilha2027-icone-perfil.svg  # Ícone quadrado para redes sociais
    │   ├── logo_editada.jpg             # Versão JPG da logo
    │   └── logo_editada(Editado).jpg    # Versão JPG tratada
    │
    ├── images/                          # Imagens promocionais do projeto
    │   ├── ChatGPT Image...png          # Ilustrações promocionais
    │   └── Gemini_Generated_Image...jpg # Arte gráfica adicional
    │
    ├── criativos/                       # Materiais de Marketing e Anúncios
    │   ├── Davi Silva.jpg               # Imagem de anúncio/depoimento
    │   ├── ElevenLabs_...mp3            # Áudios e locuções para criativos
    │   ├── narracao-criativo.mp3        # Narração oficial
    │   └── generated_video.mp4          # Vídeo promocional de alta conversão
    │
    └── materiais/                       # Documentos, Planilhas e Fontes do Ebook
        ├── Metodologia de Estudos.md    # Rascunho da metodologia
        ├── metodologia-de-estudos-capitulo.md # Capítulo detalhado
        ├── Links_das_plataformas_venda.odt # Tabela de links de vendas
        ├── Trilha2027_Calculadora_do_Funil.xlsx # Calculadora de métricas de tráfego
        ├── Trilha2027_Ebook.docx        # Documento do Ebook
        ├── Trilha2027_Estrutura_Revisada.docx / .odt # Estrutura de conteúdo
        ├── Trilha2027_Henrique_Pacheco_2026.odt / .pdf # Edições e exportações
        └── versoes_ebook/              # Histórico e PDF final do Ebook
            ├── Trilha2027_Ebook.pdf
            ├── Trilha2027_Henrique_Pacheco.odt
            └── Trilha2027_Henrique_Pacheco_2026_logo_oficial.pdf
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com uso de `<header>`, `<main>`, `<section>`, `<article>`, `<details>`, `<footer>` e marcações ARIA.
- **CSS3 Vanilla**: Estilização baseada em custom properties (`:root`), Grid Layout, Flexbox, media queries para responsividade e animações fluidas (`IntersectionObserver`).
- **JavaScript (ES6+)**: Lógica desacoplada em `js/main.js`, gerenciando renderização dinâmica de dados (passos, cronograma interativo, capítulos, FAQ), controle de parâmetros UTM e envio de eventos de checkout.
- **Vetorização SVG**: Logotipos e ícones otimizados sem perda de resolução.

---

## ⚙️ Como Configurar o Checkout e os Preços

Toda a configuração da Landing Page é centralizada no objeto `CONFIG` localizado no topo do arquivo [`js/main.js`](file:///home/brain/Documentos/Brain/Projetos/Cursos%20PDFs/EBOOK%20TRILHA2027/Site_Trilha2027/js/main.js):

```javascript
const CONFIG = {
  price: "29,90",               // Preço exibido em todas as seções
  installments: "",             // Ex: "ou 3x de R$ 10,50" (deixe vazio para ocultar)
  pages: "38",                  // Número de páginas do PDF
  checkoutUrl: "https://pay.hotmart.com/...", // Seu link de checkout Hotmart/Eduzz/Kirvano
  passParams: ["src", "sck", "xcod", "fbclid", "gclid", "ttclid"], // Parâmetros repassados ao checkout
};
```

---

## 📊 Rastreamento e Tráfego Pago

A landing page repassa automaticamente parâmetros de URL (`utm_source`, `utm_medium`, `utm_campaign`, `fbclid`, `gclid`, etc.) para o link do checkout e dispara eventos:
1. **Google Tag Manager / GA4**: Evento `begin_checkout` no clique dos botões CTA.
2. **Meta Pixel (Facebook Ads)**: Evento `InitiateCheckout` ativado nos cliques.

---

## 🚀 Como Executar Localmente

Como o projeto é estático (HTML/CSS/JS nativos), você pode executá-lo de várias maneiras:

1. **Via Navegador**:
   Basta abrir o arquivo `index.html` em qualquer navegador web.

2. **Via Servidor Local (Recomendado)**:
   - **VS Code**: Utilize a extensão *Live Server*.
   - **Python 3**:
     ```bash
     python3 -m http.server 8000
     ```
     Depois acesse `http://localhost:8000` no navegador.
   - **Node.js**:
     ```bash
     npx serve .
     ```

---

## 📝 Licença e Direitos Reservados

© 2026 **Trilha2027**. Todos os direitos reservados.
Material educativo de organização de estudos por Henrique Pacheco.
