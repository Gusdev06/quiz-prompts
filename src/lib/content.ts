// All copy in neutral Latin-American Spanish (used in MX/CO/AR/UY/CL).
// Original source: https://blackbox.xquiz.io/ (captured 2026-05-14)

export type Choice = { id: string; label: string; imageUuid?: string };

export type StepCopy = {
  title?: string;
  body: string;
  /** Green tagline rendered AFTER the hero image and BEFORE the CTA (step 1 pattern). */
  tagline?: string;
  cta?: string;
  choices?: Choice[];
  /** Main image rendered after the title/body. */
  heroUuid?: string;
  /** Additional images rendered after the hero. */
  inlineUuids?: string[];
};

export const STEPS: StepCopy[] = [
  {
    // 0 / Step 1 — Hook
    body: `¡Esta es la forma más inteligente de dejar de **TIRAR DINERO** en créditos y de **PERDER TIEMPO** intentando crear imágenes realistas con I.A para tus anuncios y contenidos de forma **AMATEUR**!`,
    heroUuid: '41836010-80c6-4bfa-bc67-720600381a49',
    tagline: 'Descubre **los comandos correctos para generar imágenes con I.A donde hasta tú dudarás si son reales o no** 👇',
    cta: 'Esto me interesa, gustagoat...',
  },
  {
    // 1 / Step 2 — Perception test
    title: '¡Antes de seguir, pon a prueba tu percepción!',
    body: '¿Cuál imagen es real?',
    choices: [
      { id: 'a', label: 'La A es real', imageUuid: '1f70987e-61e8-47b2-b49a-fa0117e36251' },
      { id: 'b', label: 'La B es real', imageUuid: '8d080422-db0a-4a5f-9757-00a85df542a8' },
      { id: 'c', label: 'La C es real', imageUuid: 'f0c83f84-c57c-48af-9802-138b3726faed' },
    ],
  },
  {
    // 2 / Step 3 — Reveal AI
    title: 'Las 3 son I.A',
    body: `Ninguna de estas imágenes es real, todas fueron creadas con mi estructura de Prompts Realistas...

**(Quédate hasta el final, tengo un regalo para ti 🎁)**`,
    inlineUuids: ['e3b2464d-1704-4480-9e97-340073713ce4'],
    cta: 'Quiero ver más...',
  },
  {
    // 3 / Step 4 — Qualifier
    title: '¿Ya intentaste crear un influencer/persona o imagen realista con I.A?',
    body: '',
    choices: [
      { id: 'never', label: 'Nunca lo intenté' },
      { id: 'tried', label: 'Ya lo intenté, pero gasté un montón de créditos y quedó pésimo' },
      { id: 'have', label: 'Ya tengo una influencer' },
    ],
  },
  {
    // 4 / Step 5 — Paid or free
    title: 'Dime una cosa...',
    body: '¿Crees que las imágenes que te mostré hasta aquí fueron hechas con [red:herramientas pagas] o [green:gratuitas]?',
    choices: [
      { id: 'paid', label: 'Por el realismo y la perfección, pagas' },
      { id: 'free', label: '¿Con herramienta gratuita? 👀' },
    ],
  },
  {
    // 5 / Step 6 — Free tool reveal
    title: 'Lo que te voy a decir puede parecer mentira...',
    body: `Pero generé todas las imágenes con una herramienta **GRATUITA**, y a propósito, ¡para mostrarte que el secreto del realismo con I.A no está en la herramienta, sino en la **ESTRUCTURA DEL PROMPT USADO**!

Déjame mostrarte algo... [haz clic en continuar]👇`,
    cta: 'Continuar...',
  },
  {
    // 6 / Step 7 — Case study
    title: 'Mira esta imagen de abajo...👇',
    heroUuid: '39ab87e4-3d19-46d7-8313-14837ffb343c',
    inlineUuids: ['9956a40d-f54c-445a-8114-f39b60b1b56b'],
    body: `La imagen no se ve **"perfecta"**, hecha con una cámara profesional, sino con un celular como el tuyo, que estás sosteniendo, y ese es el secreto de un **PROMPT** con estructura **PROFESIONAL DE REALISMO**;
    
    ¡La imagen parece de una persona **REAL!**
    
    **OBS:** Este personaje fue creado para vender un producto sobre "sexualidad", en mi otra empresa, y ese producto ya vendió más de **$89 mil dólares (print abajo)**, usando este **AVATAR DE I.A** como "Experto" del producto;
    
    (Acabo de darte una idea, ¿no? Agradéceme jajaja)...
    
    **¡Ese es el poder de la I.A + REALISMO!**`,
    cta: 'Continuar...',
  },
  {
    // 7 / Step 8 — Authority (rendered by AuthorityStep)
    body: `Llevo 1 año en el mercado de I.A, y **tuve que estudiar Ingeniería de Prompt, leer documentación de las principales I.A del mercado para entender cómo sacarles el máximo**, pero tranquilo...

**¡Atención!** No necesitas perder tiempo leyendo mil documentos para aprender ingeniería de prompt y tener resultados como los que te voy a mostrar en la próxima página...

Haz clic en continuar para ver los resultados reales de mis prompts👇`,
    cta: 'Continuar...',
  },
  {
    // 8 / Step 9 — Gallery (rendered by GalleryStep)
    title: '**Resultados Reales** de los prompts👇',
    body: `Y mucho más...👇`,
    cta: 'Quiero acceder a estos Prompts, gustagoat...',
  },
  {
    // 9 / Step 10 — NSFW disclaimer
    title: 'Sobre imágenes NSFW (18+)',
    body: `No trabajamos con ese tipo de entrega, o sea, no tenemos prompts para generar ese tipo de imagen dentro de gustagoat.ai, ¡solo modelos en bikini y sensuales!

Pero si quieres acceder a los prompts más realistas que vas a encontrar en internet, ya sea para crear anuncios con I.A o cualquier otra imagen con vibra extremadamente realista, ¡serás muy bienvenido a nuestra gang!🤝

Haz clic en continuar👇`,
    cta: 'Continuar...',
  },
  {
    // 10 / Step 11 — Score (rendered by ScoreStep — woman photo lives in inlineUuids)
    title: 'TU PUNTUACIÓN',
    body: '',
    inlineUuids: ['25e1c062-a11b-4d63-9e54-aae28aa4264d'],
    cta: 'Quiero ver qué es eso...',
  },
  {
    // 11 / Step 12 — Features
    title: '¿Qué hay en la **gustagoat.ai**?',
    body: `✅ **+ de 350 Prompts Listos**, con realismo absurdo, ya liberados para que solo copies y pegues
✅ **Clase enseñando a generar las imágenes con herramienta gratuita**
✅ **Clase de Cómo editar las imágenes**, agregando elementos, quitando elementos, cambiando lo que quieras en tu imagen/influencer
✅ **Clase de cómo dejar las imágenes sin marca de agua y en alta resolución** con herramienta gratuita
✅ **Prompts Nuevos cada semana**

**OBS:** Recuerda que puedes modificar las imágenes después de generadas y cambiar ropa, productos, en fin, ¡las posibilidades son infinitas!

✅ **Actualizaciones Semanales** (subimos prompts nuevos **CADA SEMANA**)
✅ Todos los prompts de las imágenes mostradas aquí, y en mis anuncios, **LIBERADOS PARA TI**
✅ Solo necesitas:
1️⃣ copiar
2️⃣ pegar
3️⃣ generar las imágenes (puedes generar las imágenes de forma **100% GRATIS**)

¡Y crear influencers e imágenes hiper realistas **en minutos!**`,
    cta: 'YO QUIERO ESTOS PROMPTS AHORA...',
  },
  {
    // 12 / Step 13 — Offer (rendered by OfferStep)
    title: 'Aquí está tu regalo 🎁👇',
    body: '',
    cta: 'DESBLOQUEAR MI ACCESO A LOS + DE 350 PROMPTS LISTOS',
  },
];

export const GALLERY: { label: string; imageUuid: string }[] = [
  { label: 'Rostros Realistas', imageUuid: '9cb1335f-267f-42b7-8e8b-c5ac6bf44fd1' },
  { label: 'Modelos en Bikini', imageUuid: '51ab1b94-21ec-4f06-9ad4-7793048fc2d1' },
  { label: 'Gimnasio/GYM', imageUuid: '11ba0137-23a2-421d-a923-025a6989b7a5' },
  { label: 'Influencer de I.A con Producto', imageUuid: '5fedcfe6-caa8-440d-8724-221d425e19f6' },
  { label: 'Modelos Hombres', imageUuid: 'b58bde93-0e84-4dc0-8edc-5a191718affa' },
  { label: 'Personas Mayores (para quien hace anuncios de productos para este público, esto es oro)', imageUuid: '73b14d36-1de8-406d-ac5d-62505a443738' },
];

export const OFFER_IMAGES = {
  bonusCard: 'e3948ef8-c6b6-4905-afb0-462e650b65d4',
  countdownBg: '233ecbe8-3f36-4f9e-a9ca-c0dc62a6ae63',
  attention: '31bce5aa-e43b-46b4-a028-b6e18df6e510',
  pricing: '281c615c-136c-4735-ac53-0325f4c0c9f7',
  bonus2: '36638059-3ed5-4b42-83f9-32dd0afb3dff',
  guarantee: 'bf039f71-59c7-4875-91f8-edfbe4cdc85e',
  testimonial: '1da13cdc-9d6a-4ef0-bec3-6d4696cbcfe2',
  banner: '0ad1cf4b-9a93-41b8-8929-f57e3ef4c8d5',
};
