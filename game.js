// Sistema de escenas del juego - Mundo Hello Kitty
const scenes = {
    start: {
        title: "🌸 Bienvenida al Mundo de Hello Kitty",
        text: "¡Hola! Te encuentras en el mundo mágico de Hello Kitty, buscando algo muy especial: <strong>la respuesta más importante</strong>. Todo está lleno de colores rosados, corazones y kawaii. Hello Kitty te saluda con una sonrisa...",
        image: "start.jpg",
        choices: [
            { text: "Visitar la Casa de Hello Kitty", next: "forest" },
            { text: "Abrir un regalo de Hello Kitty", next: "gift" },
            { text: "Hablar con My Melody", next: "dog" }
        ]
    },
    forest: {
        title: "🏠 La Casa de Hello Kitty",
        text: "Entras a la adorable casa de Hello Kitty. Todo es rosado y kawaii. Ves su habitación llena de corazones y escuchas una melodía suave de Hello Kitty cantando...",
        image: "forest.jpg",
        choices: [
            { text: "Seguir la melodía de Hello Kitty", next: "melody" },
            { text: "Explorar el jardín de Hello Kitty", next: "clearing" },
            { text: "Volver al inicio", next: "start" }
        ]
    },
    gift: {
        title: "🎀 El Regalo de Hello Kitty",
        text: "Encuentras un regalo envuelto con el lazo característico de Hello Kitty. Es rosado y tiene un moño perfecto. Sientes que contiene algo muy especial. Tu corazón late más rápido...",
        image: "gift.jpg",
        choices: [
            { text: "Abrirlo con cuidado", next: "openGift" },
            { text: "Guardarlo para después", next: "keepGift" },
            { text: "Buscar más pistas", next: "start" }
        ]
    },
    dog: {
        title: "🐰 My Melody te Saluda",
        text: "¡Es My Melody! La adorable amiga de Hello Kitty se acerca a ti con su capucha roja. Tiene algo muy importante que decirte. Mueve sus orejitas alegremente...",
        image: "dog.gif",
        choices: [
            { text: "Abrazar a My Melody", next: "petDog" },
            { text: "Escuchar lo que tiene que decir", next: "listenDog" },
            { text: "Seguir tu camino", next: "start" }
        ]
    },
    melody: {
        title: "🎵 La Melodía de Hello Kitty",
        text: "Sigues la melodía y llegas al jardín de Hello Kitty, lleno de flores rosadas y corazones. La música de Hello Kitty viene de todas partes. Sientes una presencia muy especial cerca...",
        image: "garden.jpg",
        choices: [
            { text: "Buscar a Hello Kitty", next: "musicSource" },
            { text: "Sentarse a escuchar la música", next: "listen" },
            { text: "Continuar explorando", next: "forest" }
        ]
    },
    clearing: {
        title: "🌺 El Jardín de Hello Kitty",
        text: "Llegas al hermoso jardín de Hello Kitty con flores rosadas y un pequeño estanque con forma de corazón. El reflejo del agua muestra algo especial...",
        image: "clearing.jpg",
        choices: [
            { text: "Mirar el reflejo en el agua", next: "reflection" },
            { text: "Continuar", next: "forest" }
        ]
    },
    openGift: {
        title: "🎀 Abriendo el Regalo de Hello Kitty",
        text: "Con manos temblorosas, abres el regalo de Hello Kitty. Dentro encuentras una nota con un corazón que dice: 'La respuesta que buscas está más cerca de lo que piensas... Hello Kitty te guiará...'",
        image: "gift.jpg",
        choices: [
            { text: "Leer la nota completa", next: "note" },
            { text: "Buscar más pistas", next: "gift" }
        ]
    },
    keepGift: {
        title: "💝 Guardando el Regalo",
        text: "Decides guardar el regalo de Hello Kitty. Sientes que el momento adecuado llegará pronto. Hello Kitty te sonríe mientras sigues buscando...",
        image: "forest.jpg",
        choices: [
            { text: "Continuar la búsqueda", next: "start" }
        ]
    },
    petDog: {
        title: "💕 Amigas con My Melody",
        text: "Abrazas a My Melody y ella se muestra muy feliz. De repente, te guía hacia un lugar muy especial en el mundo de Hello Kitty...",
        image: "petDog.jpg",
        choices: [
            { text: "Seguir a My Melody", next: "followDog" },
            { text: "Quedarse un poco más", next: "dog" }
        ]
    },
    listenDog: {
        title: "💌 El Mensaje de My Melody",
        text: "My Melody te mira con sabiduría y parece decirte: 'La respuesta que buscas está en tu corazón, pero Hello Kitty te la mostrará en el lugar más especial...'",
        image: "listenDog.jpg",
        choices: [
            { text: "Preguntarle más", next: "askDog" },
            { text: "Reflexionar", next: "start" }
        ]
    },
    musicSource: {
        title: "🌟 Encontrando a Hello Kitty",
        text: "Sigues la música y llegas al lugar más especial del mundo de Hello Kitty. La melodía se vuelve más clara y hermosa. Hello Kitty está cerca...",
        image: "garden.jpg",
        choices: [
            { text: "Avanza hacia Hello Kitty", next: "final" }
        ]
    },
    listen: {
        title: "🎵 Escuchando a Hello Kitty",
        text: "Te sientas y cierras los ojos, dejando que la música de Hello Kitty te envuelva. Sientes paz, amor y una sensación muy especial...",
        image: "garden.jpg",
        choices: [
            { text: "Abrir los ojos", next: "melody" },
            { text: "Seguir escuchando", next: "final" }
        ]
    },
    reflection: {
        title: "💖 El Reflejo Mágico",
        text: "Miras el reflejo en el agua con forma de corazón y ves algo hermoso. El agua parece mostrar el futuro con Hello Kitty...",
        image: "clearing.jpg",
        choices: [
            { text: "Tocar el agua", next: "water" },
            { text: "Continuar", next: "clearing" }
        ]
    },
    note: {
        title: "💌 La Nota de Hello Kitty",
        text: "La nota completa de Hello Kitty dice: 'Has llegado muy lejos en tu búsqueda. La respuesta más importante te espera donde Hello Kitty te está esperando...'",
        image: "note.jpg",
        choices: [
            { text: "Entender el mensaje", next: "final" },
            { text: "Buscar más pistas", next: "start" }
        ]
    },
    followDog: {
        title: "🌸 Siguiendo a My Melody",
        text: "My Melody te guía por un sendero rosado que no habías visto antes. Llegas al lugar más hermoso y especial del mundo de Hello Kitty...",
        image: "garden.jpg",
        choices: [
            { text: "Continuar", next: "final" }
        ]
    },
    askDog: {
        title: "💕 Más Preguntas a My Melody",
        text: "My Melody mueve sus orejitas y te guía con la mirada hacia un camino iluminado con corazones de Hello Kitty...",
        image: "dog.gif",
        choices: [
            { text: "Seguir el camino", next: "final" }
        ]
    },
    water: {
        title: "💖 El Toque Mágico",
        text: "Al tocar el agua con forma de corazón, sientes una energía especial de Hello Kitty. El reflejo cambia y muestra algo hermoso...",
        image: "clearing.jpg",
        choices: [
            { text: "Ver qué muestra", next: "final" }
        ]
    },
    final: {
        title: "🌸🌟 Misión Final con Hello Kitty 🌟🌸",
        text: "Has llegado al final de tu búsqueda en el mundo de Hello Kitty. Después de todos los caminos recorridos, encuentras un mensaje muy especial esperándote...<br><br><div style='text-align: center; padding: 20px; background: rgba(255, 255, 255, 0.3); border-radius: 15px; margin: 20px 0;'><p style='font-size: 1.2em; line-height: 1.8; color: #fff; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);'><strong>Valentina…</strong><br><br>Llevo tiempo sintiendo algo tan fuerte por ti que ya no me cabe en el pecho.<br><br>Me haces reír, me calmas, me importas más de lo que nunca imaginé… y cada día que hablo contigo siento que el mundo se vuelve un poco más bonito.<br><br>Quiero cuidarte, acompañarte, apoyarte y seguir construyendo todo esto juntos.<br><br><strong>Así que… ¿quieres ser mi novia?</strong><br><br>Porque yo, sinceramente, no quiero a nadie más que a ti...</p></div>",
        isFinal: true,
        image: "yes.jpg",
        choices: [
            { text: "💕 Aceptar ser mi novia 💕", next: "yes" }
        ]
    },
    yes: {
        title: "💕🌸 ¡Sí! ¡Felicidades! 🌸💕",
        text: "¡La respuesta más importante ha sido encontrada en el mundo de Hello Kitty! 💕🌸<br><br>Has aceptado la misión más especial de todas. Hello Kitty está muy feliz por ustedes. Esta aventura es solo el comienzo de algo hermoso y kawaii...<br><br>🌟 ¡Felicidades! Que Hello Kitty los acompañe siempre 🌟",
        image: "yes.jpg",
        choices: [
            { text: "🌸 Comenzar de nuevo 🌸", next: "start" }
        ]
    }
};

// Estado del juego
let currentScene = 'start';

// Función para cargar una escena
function loadScene(sceneId) {
    const scene = scenes[sceneId];
    if (!scene) return;
    
    currentScene = sceneId;
    
    const sceneContent = document.getElementById('scene-content');
    const choicesContainer = document.getElementById('choices-container');
    
    // Limpiar contenido anterior
    sceneContent.innerHTML = '';
    choicesContainer.innerHTML = '';
    
    // Agregar imagen si existe
    if (scene.image) {
        const img = document.createElement('img');
        img.src = `images/${scene.image}`;
        img.alt = scene.title;
        img.className = 'scene-image';
        sceneContent.appendChild(img);
    }
    
    // Agregar título
    const title = document.createElement('h2');
    title.textContent = scene.title;
    sceneContent.appendChild(title);
    
    // Agregar texto
    const text = document.createElement('div');
    text.innerHTML = scene.text;
    sceneContent.appendChild(text);
    
    // Si es la escena final, agregar clase especial
    if (scene.isFinal) {
        sceneContent.classList.add('final-scene');
    } else {
        sceneContent.classList.remove('final-scene');
    }
    
    // Agregar opciones
    scene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = scene.isFinal ? 'choice-button final-button' : 'choice-button';
        button.textContent = choice.text;
        button.onclick = () => loadScene(choice.next);
        choicesContainer.appendChild(button);
    });
}

// Emoticonos relacionados con Hello Kitty
const emojis = ['🌸', '💕', '💖', '💗', '💝', '🌟', '✨', '🎀', '🦋', '🌺', '💐', '🌷', '🌹', '💌', '🎁', '🎈', '🎊', '🎉', '💫', '⭐'];

// Función para crear emoticonos flotantes
function createFloatingEmoji() {
    const emojiContainer = document.getElementById('floating-emojis');
    if (!emojiContainer) return;
    
    const emoji = document.createElement('div');
    emoji.className = 'floating-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Posición inicial aleatoria en el ancho de la pantalla
    const startX = Math.random() * window.innerWidth;
    emoji.style.left = startX + 'px';
    
    // Velocidad y dirección aleatorias
    const duration = 10 + Math.random() * 10; // 10-20 segundos
    const delay = Math.random() * 1;
    emoji.style.animationDuration = duration + 's';
    emoji.style.animationDelay = delay + 's';
    
    // Movimiento horizontal aleatorio (más amplio)
    const moveX = (Math.random() - 0.5) * 300; // -150px a +150px
    emoji.style.setProperty('--move-x', moveX + 'px');
    
    // Tamaño aleatorio
    const size = 1.5 + Math.random() * 1; // 1.5em a 2.5em
    emoji.style.fontSize = size + 'em';
    
    emojiContainer.appendChild(emoji);
    
    // Remover el emoticono después de la animación
    setTimeout(() => {
        if (emoji.parentNode) {
            emoji.parentNode.removeChild(emoji);
        }
    }, (duration + delay) * 1000);
}

// Función para crear múltiples emoticonos
function startFloatingEmojis() {
    // Crear un emoticono cada 1.5-3 segundos
    setInterval(() => {
        createFloatingEmoji();
    }, 1500 + Math.random() * 1500);
    
    // Crear algunos emoticonos iniciales
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingEmoji();
        }, i * 400);
    }
}

// Inicializar el juego
document.addEventListener('DOMContentLoaded', () => {
    loadScene('start');
    startFloatingEmojis();
});

