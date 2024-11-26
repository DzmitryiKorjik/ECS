document.addEventListener("DOMContentLoaded", () => {
  // *** Configuration des assistants et des prompts ***
  const assistants = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      responses: [
        "Bonjour, que puis-je faire pour vous ?",
        "Voici une réponse simulée.",
        "Je suis ChatGPT, que voulez-vous savoir ?",
      ],
    },
    {
      id: "mistral",
      name: "Mistral",
      responses: [
        "Salut, je suis Mistral.",
        "Quelle est votre question ?",
        "Voici ma réponse simulée.",
      ],
    },
    {
      id: "claude",
      name: "Claude",
      responses: [
        "Claude à votre service !",
        "Demandez-moi n’importe quoi.",
        "Réponse générée par Claude.",
      ],
    },
    {
      id: "perplexity",
      name: "Perplexity",
      responses: [
        "Je suis Perplexity, comment puis-je aider ?",
        "Voici une réponse possible.",
        "Explorons cela ensemble.",
      ],
    },
    {
      id: "google",
      name: "Google",
      responses: [
        "Recherche effectuée.",
        "Voici ce que j’ai trouvé.",
        "Je suis Google, demandez ce que vous voulez.",
      ],
    },
  ];

  const prompts = [
    {
      title: "Contexte Étudiant en Informatique",
      content: `
        Je suis étudiant en informatique, spécialisé dans le développement web et web mobile, avec un niveau débutant. J’apprends actuellement des langages tels que HTML, CSS, JavaScript, et des frameworks comme Symfony. 
        Je travaille souvent sur des projets en équipe et individuellement, incluant des Évaluations en Cours de Formation (ECF). Mon objectif est d'acquérir des compétences pratiques tout en réussissant mes projets académiques.
  
        Environnement de travail : Visual Studio Code, Windows 10.
        Connaissances de base : HTML, CSS, JavaScript, Java, YAML.
        
        
        Objectif à long terme : Créer des projets complets qui combinent programmation, développement web et mes passions.
  
        Attentes envers l'IA :
        - Réponses précises et pédagogiques adaptées à un niveau débutant, avec des explications claires.
        - Fournir des exemples concrets de code ou d'approches pour résoudre des problèmes.
        - Proposer des projets créatifs et réalistes en lien avec mes compétences et intérêts.
        - Offrir des suggestions pour optimiser mes projets ou améliorer mes compétences techniques.
        - Aider à structurer des projets académiques pour réussir mes évaluations.
  
        Instructions spécifiques pour l'IA :
        - Utiliser un ton formel et encourageant.
        - Expliquer les concepts ou les solutions étape par étape.
        - Fournir des commentaires dans le code pour en faciliter la compréhension.
        - Respecter les bonnes pratiques du développement web.
        - Adapter les conseils et solutions aux langages ou frameworks demandés.
  
        Exemple de demandes :
        1. Aider à créer une maquette pour un site web responsive avec HTML et CSS.
        2. Expliquer comment intégrer un formulaire avec validation en JavaScript.
        3. Proposer des idées de projet individuel combinant impression 3D et développement web.
        4. M’aider à comprendre et utiliser une fonctionnalité spécifique de Symfony.
        5. Réviser mon code pour y apporter des améliorations ou optimiser sa performance.
      `,
    },
    {
      title: "Contexte Étudiant en Design Web UI/UX",
      content: `
        Je suis étudiant en design web, spécialisé dans le **design d'interface utilisateur (UI)** et **l'expérience utilisateur (UX)**, avec un niveau débutant. J'apprends actuellement des outils et langages tels que **Figma**, **Adobe XD**, **HTML**, **CSS**, et des principes de design comme la hiérarchie visuelle, la typographie, et les grilles de mise en page. 
        Je travaille sur des projets en équipe et individuellement, souvent dans le cadre de **projets académiques** ou **Évaluations en Cours de Formation (ECF)**.
  
        **Contexte Technique :**
        - Environnement de travail : Windows 10, Figma, Adobe XD, Visual Studio Code.
        - Connaissances de base : Création de wireframes, maquettes, prototypes interactifs, et animations simples.
        - Projets récents : Création de maquettes pour une application mobile ou un site web.
        - Recherche de projets personnels pour améliorer mes compétences, notamment en design web UI/UX pour des plateformes interactives.
  
        **Objectifs à Long Terme :**
        - Concevoir des interfaces intuitives et esthétiques.
        - Comprendre et appliquer les principes UX pour améliorer l'expérience utilisateur.
        - Créer un portfolio professionnel pour présenter mes projets et mes compétences.
  
        **Attentes envers l'IA :**
        - Fournir des explications claires et pédagogiques sur les concepts UI/UX.
        - Proposer des idées de design réalistes et créatives pour mes projets académiques ou personnels.
        - Offrir des conseils pour structurer un projet UI/UX, du wireframe au prototype interactif.
        - Réviser mes maquettes ou concepts de design pour suggérer des améliorations.
        - Expliquer les bonnes pratiques en design UI/UX, adaptées à des projets réels.
  
        **Instructions spécifiques pour l'IA :**
        - Utiliser un ton formel, académique et structuré.
        - Expliquer les concepts ou les solutions étape par étape.
        - Fournir des exemples visuels ou des descriptions détaillées pour illustrer les idées.
        - Respecter les tendances actuelles du design web UI/UX.
        - S’adapter à mes outils et connaissances actuels.
  
        **Exemple de demandes :**
        1. Expliquer les différences entre **wireframes**, **maquettes**, et **prototypes**.
        2. Donner des idées pour améliorer l'accessibilité d'un site ou d'une application.
        3. Proposer un design simple et moderne pour une page d'accueil responsive.
        4. M’aider à structurer un portfolio professionnel.
        5. Réviser un wireframe ou prototype pour en améliorer l'ergonomie et l'esthétique.
      `,
    },
    {
      title: "Contexte Étudiant en Droit Juridique",
      content: `
        Je suis étudiant en droit, avec un niveau débutant à intermédiaire, et je me spécialise dans l’apprentissage des bases juridiques et des méthodologies d’analyse légale. J’étudie des domaines tels que le **droit civil**, le **droit pénal**, le **droit des affaires**, et le **droit constitutionnel**. Je travaille sur des **cas pratiques**, des **dissertations**, et des **analyses juridiques** dans le cadre de mes études académiques.
  
        **Contexte Technique :**
        - Environnement de travail : Windows 10, Word, Excel, logiciels de gestion juridique (ex. : Lextenso, Doctrine).
        - Connaissances de base : Recherche jurisprudentielle, analyse d’articles de loi, rédaction de commentaires d’arrêts.
        - Projets récents : Étude de cas pratiques, rédaction d’arguments juridiques pour des plaidoiries fictives.
        - Recherche de projets ou exercices pour renforcer mes compétences, notamment en lien avec l’analyse juridique et l’argumentation.
  
        **Objectifs à Long Terme :**
        - Maîtriser la méthodologie de la dissertation et du commentaire d’arrêt.
        - Comprendre les grandes notions de droit et les appliquer à des situations concrètes.
        - Développer des compétences en argumentation écrite et orale pour des concours ou examens.
        - Être capable de synthétiser des informations complexes en arguments clairs et concis.
  
        **Attentes envers l'IA :**
        - Fournir des explications pédagogiques sur les concepts juridiques.
        - Proposer des exercices pratiques pour appliquer les notions apprises.
        - Aider à structurer et rédiger des dissertations, cas pratiques ou commentaires d’arrêts.
        - Offrir des exemples clairs pour illustrer des points de droit spécifiques.
        - Apporter des conseils méthodologiques pour réussir les examens juridiques.
  
        **Instructions spécifiques pour l'IA :**
        - Utiliser un ton formel, académique et structuré.
        - Expliquer les concepts ou solutions étape par étape.
        - Citer des articles de loi ou jurisprudence pertinentes lorsque cela est possible.
        - Respecter les méthodologies juridiques et les bonnes pratiques académiques.
  
        **Exemple de demandes :**
        1. Expliquer les différences entre **droit civil** et **droit pénal**, avec des exemples.
        2. Donner une structure détaillée pour une dissertation juridique.
        3. M’aider à comprendre un arrêt spécifique ou à rédiger un commentaire.
        4. Proposer des exemples de cas pratiques et m’expliquer comment les résoudre.
        5. Fournir des conseils pour organiser une argumentation orale pour un concours de plaidoirie.
      `,
    },
    {
      title: "Contexte Étudiant en Management",
      content: `
        Je suis étudiant en management, avec un niveau débutant à intermédiaire, et j'étudie des disciplines telles que la **gestion de projet**, le **management stratégique**, la **gestion des ressources humaines (GRH)**, et les **techniques de communication et de leadership**. Mes études impliquent souvent des travaux en équipe, des **études de cas**, et la réalisation de **projets pratiques**.
  
        **Contexte Technique :**
        - Environnement de travail : Windows 10, outils collaboratifs (Google Workspace, Microsoft Office, Trello, Notion), et outils de gestion de projet (ex. : Jira, Asana).
        - Connaissances de base : Gestion du temps, organisation de projets, analyse de données, et compréhension des principes de management.
        - Projets récents : Réalisation d’une analyse SWOT, création de plans stratégiques, et simulation de gestion d'équipe.
        - Recherche de projets ou exercices pour renforcer mes compétences, notamment en leadership, gestion de crise, et organisation d'équipe.
  
        **Objectifs à Long Terme :**
        - Développer mes compétences en gestion de projets et en leadership.
        - Apprendre à analyser et résoudre des problématiques managériales complexes.
        - Comprendre et appliquer des outils et méthodologies de gestion modernes.
        - Préparer des études de cas et rapports professionnels.
  
        **Attentes envers l'IA :**
        - Fournir des explications claires et pédagogiques sur les concepts de management.
        - Proposer des exercices pratiques pour appliquer les notions apprises.
        - Donner des conseils méthodologiques pour gérer des projets ou des équipes.
        - Offrir des exemples concrets pour illustrer des concepts managériaux.
        - Aider à structurer des rapports ou présentations académiques.
  
        **Instructions spécifiques pour l'IA :**
        - Utiliser un ton formel, clair et motivant.
        - Expliquer les concepts ou solutions étape par étape.
        - Fournir des méthodologies simples et applicables à des cas concrets.
        - Adapter les conseils à mes outils et contextes actuels.
  
        **Exemple de demandes :**
        1. Expliquer les différences entre **management opérationnel** et **management stratégique**, avec des exemples.
        2. Proposer une méthodologie pour réaliser une analyse SWOT ou PESTEL.
        3. Donner des conseils pour améliorer la communication au sein d’une équipe.
        4. Aider à structurer un rapport ou une présentation sur un sujet de management.
        5. Fournir des exercices pratiques pour développer mes compétences en leadership et en gestion de crise.
      `,
    },
  ];

  // *** Sélecteurs DOM ***
  const mainTopBar = document.querySelector(".main__topbar");
  const chatGPTSection = document.getElementById("chatgpt");
  const allSections = document.querySelectorAll(".assistant__section");
  const backButtons = document.querySelectorAll(".assistant__back");
  const responseChatGPT = document.getElementById("response-chatgpt");
  const inputChatGPT = document.getElementById("input-chatgpt");
  const sendChatGPT = document.getElementById("send-chatgpt");
  const chatHistoryContainer = document.getElementById("chat-history");
  const clearChatBtn = document.getElementById("clear-chat"); // Définit la variable pour le bouton "Effacer l'historique"
  const promptHeader = document.getElementById("prompt-header");
  const promptList = document.querySelector(".prompt-list");
  const promptDetails = document.getElementById("prompt-details");
  const promptContent = document.querySelector(".prompt-content");
  const copyDetailBtn = document.getElementById("copy-detail-btn");

  // Variables globales
  let currentAssistant = null;
  let chatHistory = {};

  // *** Fonctions utilitaires ***
  const buttons = document.querySelectorAll(".assistant__btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
      circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
      circle.classList.add("ripple");
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });

  // Masquer toutes les sections
  function hideAllSections() {
    allSections.forEach((section) => section.classList.remove("active"));
  }

  // Afficher une section spécifique
  function showSection(section) {
    hideAllSections();
    mainTopBar.style.display = "none";
    section.classList.add("active");
  }

  // Récupérer une réponse aléatoire
  function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Afficher l'historique de chat
  function displayChatHistory(assistantId) {
    chatHistoryContainer.innerHTML = "";
    if (chatHistory[assistantId]) {
      chatHistory[assistantId].forEach((entry) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", entry.type);
        messageElement.innerText = entry.message;
        chatHistoryContainer.appendChild(messageElement);
      });
      chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight;
    }
  }

  // *** Initialisation des assistants ***
  assistants.forEach((assistant) => {
    const button = document.getElementById(`card-${assistant.id}`);
    if (button) {
      button.addEventListener("click", () => {
        currentAssistant = assistant;
        showSection(chatGPTSection);
        chatGPTSection.querySelector("h3").innerText = assistant.name;
        displayChatHistory(currentAssistant.id);
        inputChatGPT.value = "";
      });
    }
  });

  // *** Gestion des interactions ***
  sendChatGPT.addEventListener("click", () => {
    const userInput = inputChatGPT.value.trim();
    if (!currentAssistant) return;
    if (userInput) {
      // Sauvegarder l'entrée utilisateur
      if (!chatHistory[currentAssistant.id]) {
        chatHistory[currentAssistant.id] = [];
      }
      chatHistory[currentAssistant.id].push({
        type: "user",
        message: userInput,
      });

      // Générer une réponse
      const response = getRandomResponse(currentAssistant.responses);
      chatHistory[currentAssistant.id].push({
        type: "assistant",
        message: response,
      });

      // Mettre à jour l'affichage
      displayChatHistory(currentAssistant.id);
      inputChatGPT.value = "";
    }
  });

  clearChatBtn.addEventListener("click", () => {
    if (currentAssistant) {
      chatHistory[currentAssistant.id] = [];
      displayChatHistory(currentAssistant.id);
    }
  });

  // *** Initialisation des prompts prédéfinis ***
  promptList.innerHTML = "";
  prompts.forEach((prompt) => {
    const listItem = document.createElement("li");
    listItem.classList.add("prompt-item");

    const titleSpan = document.createElement("span");
    titleSpan.innerText = prompt.title;
    titleSpan.classList.add("prompt-title");
    titleSpan.addEventListener("click", () => {
      if (promptDetails.style.display === "block") {
        // Si les détails sont déjà ouverts, les refermer
        promptDetails.style.display = "none";
      } else {
        // Sinon, afficher le contenu associé
        promptContent.innerText = prompt.content;
        promptDetails.style.display = "block";
      }
    });

    const copyButton = document.createElement("button");
    copyButton.innerText = "Copier";
    copyButton.classList.add("copy-prompt-btn");
    copyButton.setAttribute("data-prompt", prompt.content);
    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(prompt.content).then(() => {
        alert("Prompt copié !");
      });
    });

    listItem.appendChild(titleSpan);
    listItem.appendChild(copyButton);
    promptList.appendChild(listItem);
  });

  copyDetailBtn.addEventListener("click", () => {
    const prompt = copyDetailBtn.getAttribute("data-prompt");
    if (prompt) {
      navigator.clipboard.writeText(prompt).then(() => {
        alert("Prompt copié depuis les détails !");
      });
    }
  });

  // *** Gestion des boutons "Retour" ***
  backButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      mainTopBar.style.display = "flex";
      hideAllSections();
      currentAssistant = null;
    });
  });

  // Bascule entre affichage déplié et replié pour la liste de prompts
  promptHeader.addEventListener("click", () => {
    promptList.classList.toggle("open"); // Ajoute ou enlève la classe "open"
  });
});

// Gère la copie des prompts
const copyButtons = document.querySelectorAll(".copy-prompt-btn");
copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.getAttribute("data-prompt");
    navigator.clipboard.writeText(prompt).then(() => {
      alert("Prompt copié !");
    });
  });
});
clearChatBtn.addEventListener("click", () => {
  if (currentAssistant) {
    chatHistory[currentAssistant.id] = [];
    displayChatHistory(currentAssistant.id);
  }
});

// *** Initialisation des prompts prédéfinis ***
promptList.innerHTML = "";
prompts.forEach((prompt) => {
  const listItem = document.createElement("li");
  listItem.classList.add("prompt-item");

  const titleSpan = document.createElement("span");
  titleSpan.innerText = prompt.title;
  titleSpan.classList.add("prompt-title");
  titleSpan.addEventListener("click", () => {
    promptContent.innerText = prompt.content;
    promptDetails.style.display = "block";
    copyDetailBtn.setAttribute("data-prompt", prompt.content);
  });

  const copyButton = document.createElement("button");
  copyButton.innerText = "Copier";
  copyButton.classList.add("copy-prompt-btn");
  copyButton.setAttribute("data-prompt", prompt.content);
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(prompt.content).then(() => {
      alert("Prompt copié !");
    });
  });

  listItem.appendChild(titleSpan);
  listItem.appendChild(copyButton);
  promptList.appendChild(listItem);
});

copyDetailBtn.addEventListener("click", () => {
  const prompt = copyDetailBtn.getAttribute("data-prompt");
  if (prompt) {
    navigator.clipboard.writeText(prompt).then(() => {
      alert("Prompt copié depuis les détails !");
    });
  }
});

// *** Gestion des boutons "Retour" ***
backButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    mainTopBar.style.display = "flex";
    hideAllSections();
    currentAssistant = null;
  });
});

const mainTopBar = document.querySelector(".main__topbar");
const searchBotSection = document.getElementById("searchbot");
const chatGPTSection = document.getElementById("chatgpt");
const allSections = document.querySelectorAll(".assistant__section");
const backButtons = document.querySelectorAll(".assistant__back");
const responseChatGPT = document.getElementById("response-chatgpt");
const inputChatGPT = document.getElementById("input-chatgpt");
const sendChatGPT = document.getElementById("send-chatgpt");
let currentAssistant = null; // Stocke l'assistant actif

const settingsIcon = document.getElementById("settings-icon");
const settingsModal = document.getElementById("settings-modal");
const closeButton = document.getElementById("close-button");

const apiSelect = document.getElementById("api-select");
const viewHistoryButton = document.getElementById("view-history");
const deleteHistoryButton = document.getElementById("delete-history");
const customInstructionsButton = document.getElementById("custom-instructions");

const historyModal = document.getElementById("history-modal");
const closeHistoryButton = document.getElementById("close-history-button");
const downloadHistoryButton = document.getElementById("download-history");
const confirmDeleteHistoryButton = document.getElementById(
  "confirm-delete-history"
);

const instructionsModal = document.getElementById("instructions-modal");
const closeInstructionsButton = document.getElementById(
  "close-instructions-button"
);
const customInstructionsForm = document.getElementById(
  "custom-instructions-form"
);

const backToSettingsFromHistoryButton = document.getElementById(
  "back-to-settings-from-history"
);
const backToSettingsFromInstructionsButton = document.getElementById(
  "back-to-settings-from-instructions"
);

// *** Gestion des paramètres ***
settingsIcon.addEventListener("click", () => {
  console.log("Settings icon clicked"); // Log for debugging
  settingsModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  settingsModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === settingsModal) {
    settingsModal.style.display = "none";
  }
});

// *** Gestion des instructions personnalisées ***
customInstructionsButton.addEventListener("click", () => {
  settingsModal.style.display = "none";
  instructionsModal.style.display = "block";
});

closeInstructionsButton.addEventListener("click", () => {
  instructionsModal.style.display = "none";
});

customInstructionsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const whoYouAre = document.getElementById("who-you-are").value;
  const whatYouWant = document.getElementById("what-you-want").value;
  const howAiResponds = document.getElementById("how-ai-responds").value;
  const whoAiIs = document.getElementById("who-ai-is").value;
  alert(`Instructions enregistrées pour ${apiSelect.value}`);
  // Logic to save custom instructions
  instructionsModal.style.display = "none";
});

// S'assurer que l'icône de réglages est cliquable
settingsIcon.style.cursor = "pointer";

// Fonction pour masquer toutes les sections
function hideAllSections() {
  allSections.forEach((section) => section.classList.remove("active"));
}

// Fonction pour afficher une section spécifique
function showSection(section) {
  hideAllSections();
  mainTopBar.style.display = "none"; // Cache les boutons principaux
  section.classList.add("active"); // Affiche la section sélectionnée
}

// Fonction pour gérer les réponses simulées
function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Ajouter des événements pour chaque assistant IA
assistants.forEach((assistant) => {
  const button = document.getElementById(`card-${assistant.id}`);
  button.addEventListener("click", () => {
    currentAssistant = assistant; // Définit l'assistant actif
    showSection(chatGPTSection); // Affiche la section ChatGPT pour toutes les IA
    chatGPTSection.querySelector("h3").innerText = assistant.name; // Met à jour le titre avec le nom de l'IA
    displayChatHistory(currentAssistant.id); // Charge l'historique de l'assistant
    inputChatGPT.value = ""; // Réinitialise le champ d'entrée
  });
});

let chatHistory = {}; // Historique des discussions par assistant

// Ajouter un événement pour le bouton "Envoyer"
sendChatGPT.addEventListener("click", () => {
  const userInput = inputChatGPT.value.trim(); // Récupère la saisie de l'utilisateur
  if (!currentAssistant) {
    responseChatGPT.innerText =
      "Aucun assistant actif. Veuillez en sélectionner un.";
    responseChatGPT.classList.add("active");
    return;
  }
  if (userInput) {
    // Sauvegarder l'entrée utilisateur dans l'historique
    if (!chatHistory[currentAssistant.id]) {
      chatHistory[currentAssistant.id] = [];
    }
    chatHistory[currentAssistant.id].push({
      type: "user",
      message: userInput,
    });

    // Génère une réponse aléatoire pour l'assistant actif
    const response = getRandomResponse(currentAssistant.responses);
    chatHistory[currentAssistant.id].push({
      type: "assistant",
      message: response,
    });

    // Afficher l'historique mis à jour
    displayChatHistory(currentAssistant.id);

    // Effacer le champ d'entrée
    inputChatGPT.value = "";
  } else {
    responseChatGPT.innerText = "Veuillez entrer une question !";
    responseChatGPT.classList.add("active");
  }
});
// Effacer l'historique d'un assistant spécifique
document.getElementById("clear-chat").addEventListener("click", () => {
  if (currentAssistant) {
    // Réinitialise l'historique de l'assistant actuel
    chatHistory[currentAssistant.id] = [];
    displayChatHistory(currentAssistant.id);
  }
});

function displayChatHistory(assistantId) {
  const chatContainer = document.getElementById("chat-history");
  chatContainer.innerHTML = ""; // Efface le contenu précédent

  // Afficher uniquement l'historique correspondant à l'assistant actif
  if (chatHistory[assistantId]) {
    chatHistory[assistantId].forEach((entry) => {
      const messageElement = document.createElement("div");
      messageElement.classList.add("chat-message", entry.type);
      messageElement.innerText = entry.message;
      chatContainer.appendChild(messageElement);
    });

    // Scroller automatiquement vers le bas
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
}

// Ajouter un événement pour la Recherche Interne
const searchBotButton = document.getElementById("card-searchbot");
if (searchBotButton) {
  searchBotButton.addEventListener("click", () => {
    currentAssistant = null; // Réinitialise l'assistant actif
    showSection(searchBotSection); // Affiche la section Recherche Interne
  });
}

// Boutons "Retour"
backButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    mainTopBar.style.display = "flex"; // Réaffiche les boutons principaux
    hideAllSections(); // Masque toutes les sections
    responseChatGPT.classList.remove("active"); // Réinitialise l'affichage de la réponse
    inputChatGPT.value = ""; // Réinitialise le champ de saisie
    currentAssistant = null; // Réinitialise l'assistant actif
  });
});

viewHistoryButton.addEventListener("click", () => {
  settingsModal.style.display = "none";
  historyModal.style.display = "block";
  // Logic to load and display history
});

closeHistoryButton.addEventListener("click", () => {
  historyModal.style.display = "none";
});

downloadHistoryButton.addEventListener("click", () => {
  // Logic to download history
});

confirmDeleteHistoryButton.addEventListener("click", () => {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet historique ?")) {
    // Logic to delete history
  }
});

customInstructionsButton.addEventListener("click", () => {
  settingsModal.style.display = "none";
  instructionsModal.style.display = "block";
});

closeInstructionsButton.addEventListener("click", () => {
  instructionsModal.style.display = "none";
});

backToSettingsFromHistoryButton.addEventListener("click", () => {
  historyModal.style.display = "none";
  settingsModal.style.display = "block";
});

backToSettingsFromInstructionsButton.addEventListener("click", () => {
  instructionsModal.style.display = "none";
  settingsModal.style.display = "block";
});

customInstructionsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const whoYouAre = document.getElementById("who-you-are").value;
  const whatYouWant = document.getElementById("what-you-want").value;
  const howAiResponds = document.getElementById("how-ai-responds").value;
  const whoAiIs = document.getElementById("who-ai-is").value;
  alert(`Instructions enregistrées pour ${apiSelect.value}`);
  // Logic to save custom instructions
});

// Logic for reordering AI cards
const topbarItems = document.querySelectorAll(".main__topbar_item");
topbarItems.forEach((item) => {
  item.draggable = true;
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
});

const topbar = document.querySelector(".main__topbar");
topbar.addEventListener("dragover", (event) => {
  event.preventDefault();
});

topbar.addEventListener("drop", (event) => {
  event.preventDefault();
  const draggedId = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(draggedId);
  const dropTarget = event.target.closest(".main__topbar_item");
  if (dropTarget && dropTarget !== draggedElement) {
    const bounding = dropTarget.getBoundingClientRect();
    const offset = event.clientY - bounding.top;
    if (offset > bounding.height / 2) {
      topbar.insertBefore(draggedElement, dropTarget.nextSibling);
    } else {
      topbar.insertBefore(draggedElement, dropTarget);
    }
  }
});
// Fonction JavaScript pour rechercher des labels spécifiques dans les pages "Documentation" et "Projets"
document.addEventListener("DOMContentLoaded", () => {
  // Sélecteurs pour les sections "Documentation" et "Projets"
  const documentationSection = document.querySelector(".documentation");
  const projetsSection = document.querySelector(".projets");

  // Fonction pour rechercher un label spécifique
  function rechercherLabel(terme) {
    const resultat = [];

    // Rechercher dans la section Documentation
    if (documentationSection) {
      const labelsDocumentation =
        documentationSection.querySelectorAll("label");
      labelsDocumentation.forEach((label) => {
        if (label.textContent.toLowerCase().includes(terme.toLowerCase())) {
          resultat.push({
            section: "Documentation",
            element: label,
          });
        }
      });
    }

    // Rechercher dans la section Projets
    if (projetsSection) {
      const labelsProjets = projetsSection.querySelectorAll("label");
      labelsProjets.forEach((label) => {
        if (label.textContent.toLowerCase().includes(terme.toLowerCase())) {
          resultat.push({
            section: "Projets",
            element: label,
          });
        }
      });
    }

    return resultat;
  }

  // Gestionnaire de soumission de recherche
  const searchForm = document.querySelector(".head__search form");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const searchTerm = event.target.querySelector(
        'input[type="search"]'
      ).value;
      if (searchTerm) {
        const resultats = rechercherLabel(searchTerm);
        afficherResultats(resultats);
      }
    });
  }

  // Fonction pour afficher les résultats de la recherche
  function afficherResultats(resultats) {
    // Conteneur pour afficher les résultats
    const resultContainer = document.querySelector(".result-container");
    if (resultContainer) {
      resultContainer.innerHTML = ""; // Efface les résultats précédents

      if (resultats.length > 0) {
        resultats.forEach((resultat) => {
          const divResultat = document.createElement("div");
          divResultat.classList.add("result-item");
          divResultat.textContent = `Résultat trouvé dans la section ${resultat.section} : ${resultat.element.textContent}`;
          resultContainer.appendChild(divResultat);
        });
      } else {
        resultContainer.innerHTML =
          "<p>Aucun résultat trouvé pour votre recherche.</p>";
      }
    }
  }
});

// Add event listener for the return button
const returnButton = document.querySelector(".return-button a");
returnButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "settings.html";
});
