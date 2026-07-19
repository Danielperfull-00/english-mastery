var FULL_COURSE_DATA = [

    // ==================== A1/A2: PRINCIPIANTE ====================
    {
        id: 1,
        level: 'a1a2',
        levelName: 'Principiante',
        category: 'grammar',
        catName: 'Gramática',
        title: 'El Verbo To Be (am/is/are)',
        desc: 'El verbo más importante del inglés. Aprende a presentarte, describir personas y ubicaciones.',
        content: '<h3>¿Qué es el verbo "To Be"?</h3>' +
            '<p>El verbo "to be" equivale a <strong>ser/estar</strong> en español. Es el verbo más usado del inglés.</p>' +
            '<div class="example-box">' +
            '<strong>I am</strong> a student. → Yo <em>soy</em> estudiante.<br>' +
            '<strong>You are</strong> my friend. → Tú <em>eres</em> mi amigo.<br>' +
            '<strong>He is</strong> tall. → Él <em>es</em> alto.<br>' +
            '<strong>She is</strong> happy. → Ella <em>está</em> feliz.<br>' +
            '<strong>We are</strong> students. → Nosotros <em>somos</em> estudiantes.<br>' +
            '<strong>They are</strong> here. → Ellos <em>están</em> aquí.' +
            '</div>' +
            '<h3>Forma Negativa</h3>' +
            '<div class="example-box">' +
            'I <strong>am not</strong> (I\'m not) tired. → No estoy cansado.<br>' +
            'She <strong>is not</strong> (isn\'t) here. → Ella no está aquí.<br>' +
            'They <strong>are not</strong> (aren\'t) ready. → No están listos.' +
            '</div>' +
            '<h3>Forma Interrogativa</h3>' +
            '<div class="example-box">' +
            '<strong>Are you</strong> a doctor? → ¿Eres médico?<br>' +
            '<strong>Is she</strong> at home? → ¿Está ella en casa?<br>' +
            '<strong>Am I</strong> late? → ¿Llego tarde?' +
            '</div>' +
            '<h3>Puntos Clave</h3>' +
            '<ul><li>3 formas: <strong>am</strong> (yo), <strong>is</strong> (él/ella/eso), <strong>are</strong> (tú/nosotros/ellos)</li>' +
            '<li>Contracciones: I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re</li></ul>',
        quiz: [
            { question: 'Elige la forma correcta: "She ___ my sister."', options: ['am', 'is', 'are', 'be'], correct: 1, explanation: '"She" uses "is". Solo "am" va con I, "is" con he/she/it, "are" con you/we/they.' },
            { question: '¿Cuál es la contracción de "I am not"?', options: ["I amn't", "I'm not", "I isn't", "I aren't"], correct: 1, explanation: 'La única contracción posible de "I am not" es "I\'m not".' },
            { question: '"Are you a student?" - ¿Qué tipo de oración es esta?', options: ['Afirmativa', 'Negativa', 'Pregunta', 'Comando'], correct: 2, explanation: 'Al invertir el sujeto y el verbo (Are + you) formamos una pregunta.' }
        ]
    },
    {
        id: 2,
        level: 'a1a2',
        levelName: 'Principiante',
        category: 'vocab',
        catName: 'Vocabulario',
        title: 'Saludos y Presentaciones',
        desc: 'Aprende a saludar, despedirte y presentarte en inglés de forma natural.',
        content: '<h3>Saludos Básicos</h3>' +
            '<div class="example-box">' +
            '<strong>Hi!</strong> / <strong>Hello!</strong> → ¡Hola!<br>' +
            '<strong>Good morning!</strong> → ¡Buenos días!<br>' +
            '<strong>Good afternoon!</strong> → ¡Buenas tardes!<br>' +
            '<strong>Good evening!</strong> → ¡Buenas noches! (al llegar)<br>' +
            '<strong>Good night!</strong> → ¡Buenas noches! (al despedirse)' +
            '</div>' +
            '<h3>Preguntar y Responder</h3>' +
            '<div class="example-box">' +
            '<strong>How are you?</strong> → ¿Cómo estás?<br>' +
            '<strong>I\'m fine, thank you.</strong> → Estoy bien, gracias.<br>' +
            '<strong>Not bad.</strong> → No está mal.<br>' +
            '<strong>What\'s up?</strong> → ¿Qué tal? (informal)' +
            '</div>' +
            '<h3>Presentaciones</h3>' +
            '<div class="example-box">' +
            '<strong>My name is Daniel.</strong> → Me llamo Daniel.<br>' +
            '<strong>I\'m from Venezuela.</strong> → Soy de Venezuela.<br>' +
            '<strong>Nice to meet you!</strong> → ¡Mucho gusto!<br>' +
            '<strong>The pleasure is mine.</strong> → El placer es mío.' +
            '</div>' +
            '<h3>Despedidas</h3>' +
            '<div class="example-box">' +
            '<strong>Goodbye! / Bye!</strong> → ¡Adiós!<br>' +
            '<strong>See you later!</strong> → ¡Hasta luego!<br>' +
            '<strong>Take care!</strong> → ¡Cuídate!' +
            '</div>',
        quiz: [
            { question: '¿Qué saludo es MÁS formal?', options: ['Hi!', "What's up?", 'Good morning!', 'Hey!'], correct: 2, explanation: '"Good morning!" es la forma más formal de las opciones.' },
            { question: '"Nice to meet you" significa:', options: ['Buenos días', 'Mucho gusto', 'Hasta luego', 'Por favor'], correct: 1, explanation: '"Nice to meet you" = "Mucho gusto" (se usa al conocer a alguien).' },
            { question: '¿Cuál se usa al DESPEDIRSE de noche?', options: ['Good evening', 'Good morning', 'Good night', 'Good afternoon'], correct: 2, explanation: '"Good night" se usa para despedirse por la noche. "Good evening" se usa al llegar.' }
        ]
    },
    {
        id: 3,
        level: 'a1a2',
        levelName: 'Principiante',
        category: 'grammar',
        catName: 'Gramática',
        title: 'Presente Simple (Simple Present)',
        desc: 'Habla de hábitos, rutinas y verdades universales en inglés.',
        content: '<h3>¿Cuándo se usa?</h3>' +
            '<ul><li>Hábitos y rutinas: <em>I wake up at 7 AM every day.</em></li>' +
            '<li>Verdades universales: <em>The sun rises in the east.</em></li>' +
            '<li>Estados permanentes: <em>I live in Caracas.</em></li></ul>' +
            '<h3>Estructura</h3>' +
            '<div class="example-box">' +
            'Sujeto + Verbo (base) + complemento<br>' +
            'I <strong>study</strong> English. → Estudio inglés.<br>' +
            '<strong>Con he/she/it → añade -s o -es:</strong><br>' +
            'She <strong>works</strong> at a school. → Ella trabaja en una escuela.<br>' +
            'He <strong>watches</strong> TV. → Él mira TV.' +
            '</div>' +
            '<h3>Negativa e Interrogativa</h3>' +
            '<div class="example-box">' +
            'I <strong>don\'t</strong> eat meat. | <strong>Do</strong> you like coffee?<br>' +
            'She <strong>doesn\'t</strong> speak French. | <strong>Does</strong> she play guitar?' +
            '</div>' +
            '<h3>Adverbios de Frecuencia</h3>' +
            '<div class="example-box">' +
            'always → usually → often → sometimes → rarely → never' +
            '</div>',
        quiz: [
            { question: '"She ___ English every day." (study)', options: ['study', 'studys', 'studies', 'studying'], correct: 2, explanation: 'Con he/she/it los verbos terminados en consonante + y cambian a -ies (study → studies).' },
            { question: '¿Cuál es la forma negativa correcta?', options: ["She not speaks", "She don't speak", "She doesn't speak", "She no speak"], correct: 2, explanation: 'Con he/she/it usamos "doesn\'t" + verbo base.' },
            { question: '¿Qué palabra es un adverbio de frecuencia?', options: ['yesterday', 'tomorrow', 'usually', 'since'], correct: 2, explanation: '"Usually" es un adverbio de frecuencia. Los demás son marcadores de tiempo específico.' }
        ]
    },
    {
        id: 4,
        level: 'a1a2',
        levelName: 'Principiante',
        category: 'vocab',
        catName: 'Vocabulario',
        title: 'Números, Días y Meses',
        desc: 'El vocabulario esencial para hablar de tiempo, fechas y cantidades.',
        content: '<h3>Números del 1 al 20</h3>' +
            '<div class="example-box">' +
            '1-one, 2-two, 3-three, 4-four, 5-five, 6-six, 7-seven, 8-eight, 9-nine, 10-ten<br>' +
            '11-eleven, 12-twelve, 13-thirteen, 14-fourteen, 15-fifteen<br>' +
            '16-sixteen, 17-seventeen, 18-eighteen, 19-nineteen, 20-twenty' +
            '</div>' +
            '<h3>Decenas</h3>' +
            '<div class="example-box">' +
            '30-thirty, 40-forty, 50-fifty, 60-sixty, 70-seventy, 80-eighty, 90-ninety, 100-one hundred' +
            '</div>' +
            '<h3>Días y Meses</h3>' +
            '<div class="example-box">' +
            'Mon · Tue · Wed · Thu · Fri · Sat · Sun<br>' +
            'January · February · March · April · May · June<br>' +
            'July · August · September · October · November · December' +
            '</div>',
        quiz: [
            { question: '¿Cómo se dice "13" en inglés?', options: ['thirty', 'thirteen', 'threeten', 'thirdteen'], correct: 1, explanation: '13 = thirteen. Nota: no "thirdteen" ni "threeten".' },
            { question: '¿Qué día viene después de Tuesday?', options: ['Monday', 'Thursday', 'Wednesday', 'Friday'], correct: 2, explanation: 'El orden es: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.' },
            { question: '¿Cuál es el TERCER mes del año?', options: ['February', 'April', 'March', 'January'], correct: 2, explanation: 'Enero(1), Febrero(2), Marzo(3) → March es el tercer mes.' }
        ]
    },
    {
        id: 5,
        level: 'a1a2',
        levelName: 'Principiante',
        category: 'pronunciation',
        catName: 'Pronunciación',
        title: 'El Alfabeto y Sonidos Básicos',
        desc: 'Domina el alfabeto inglés y los sonidos más importantes para una pronunciación clara.',
        pronounceText: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z. The, think, sit, see, cat, bad, hat.',
        content: '<h3>El Alfabeto Inglés</h3>' +
            '<div class="example-box">' +
            'A(eɪ) B(biː) C(siː) D(diː) E(iː) F(ɛf) G(dʒiː) H(eɪtʃ) I(aɪ) J(dʒeɪ)<br>' +
            'K(keɪ) L(ɛl) M(ɛm) N(ɛn) O(oʊ) P(piː) Q(kjuː) R(ɑːr) S(ɛs) T(tiː)<br>' +
            'U(juː) V(viː) W(ˈdʌbljuː) X(ɛks) Y(waɪ) Z(ziː)' +
            '</div>' +
            '<h3>Sonidos Problemáticos</h3>' +
            '<div class="example-box">' +
            '<strong>"th" sordo:</strong> think, three → [θ] (lengua entre dientes, sin voz)<br>' +
            '<strong>"th" sonoro:</strong> the, this → [ð] (lengua entre dientes, con voz)<br>' +
            '<strong>short "i":</strong> sit, ship → [ɪ] vs. <strong>long "ee":</strong> see, sheep → [iː]' +
            '</div>',
        quiz: [
            { question: 'La "th" en "think" suena como:', options: ['a T sound', 'a D sound', 'voiceless θ (tongue between teeth, no voice)', 'an S sound'], correct: 2, explanation: '"think" tiene "th" sordo (θ): la lengua entre los dientes sin vibración.' },
            { question: '"Z" en inglés americano se pronuncia:', options: ['zed', 'zee', 'zay', 'zy'], correct: 1, explanation: 'En inglés americano Z = "zee". En inglés británico = "zed".' },
            { question: 'La diferencia entre "sit" and "see" is:', options: ['No difference', 'Vowel length and quality', 'The consonants', 'The stress'], correct: 1, explanation: '"sit" = [ɪ] (vocal breve), "see" = [iː] (vocal larga). Son fonemas distintos.' }
        ]
    },
    {
        id: 6,
        level: 'a1a2',
        levelName: 'Principiante',
        category: 'grammar',
        catName: 'Gramática',
        title: 'Pasado Simple (Simple Past)',
        desc: 'Cuenta historias y habla de eventos pasados con confianza.',
        content: '<h3>Verbos Regulares: añadir -ED</h3>' +
            '<div class="example-box">' +
            'work → <strong>worked</strong> | play → <strong>played</strong> | study → <strong>studied</strong><br>' +
            'I <strong>worked</strong> yesterday. → Trabajé ayer.' +
            '</div>' +
            '<h3>Verbos Irregulares</h3>' +
            '<div class="example-box">' +
            'go → <strong>went</strong> | have → <strong>had</strong> | eat → <strong>ate</strong><br>' +
            'be → <strong>was/were</strong> | see → <strong>saw</strong> | make → <strong>made</strong><br>' +
            'get → <strong>got</strong> | take → <strong>took</strong> | say → <strong>said</strong>' +
            '</div>' +
            '<h3>Negativa e Interrogativa</h3>' +
            '<div class="example-box">' +
            'I <strong>didn\'t</strong> go. → No fui. | <strong>Did</strong> you go? → ¿Fuiste?' +
            '</div>' +
            '<h3>Marcadores de Tiempo</h3>' +
            '<div class="example-box">' +
            'yesterday · last night · last week · two days ago · in 2020' +
            '</div>',
        quiz: [
            { question: '¿Cuál es el pasado de "go"?', options: ['goed', 'goes', 'went', 'gone'], correct: 2, explanation: '"Go" es irregular: go → went (en pasado simple). "Gone" es el participio.' },
            { question: 'Pasado negativo correcto: "I ___ eat meat."', options: ["didn't", "don't", "wasn't", "not"], correct: 0, explanation: 'En pasado simple usamos "didn\'t" + verbo base para todas las personas.' },
            { question: '¿Cuál es un marcador de tiempo en pasado?', options: ['tomorrow', 'usually', 'yesterday', 'always'], correct: 2, explanation: '"Yesterday" es un marcador de tiempo pasado. Los otros son para presente o futuro.' }
        ]
    },

    // ==================== B1/B2: INTERMEDIO ====================
    {
        id: 7,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'grammar',
        catName: 'Gramática',
        title: 'Present Perfect',
        desc: 'Conecta el pasado con el presente. Dominar este tiempo verbal te lleva al siguiente nivel.',
        content: '<h3>Usos</h3>' +
            '<ul><li><strong>Experiencias</strong> (sin tiempo específico): <em>I have been to Paris.</em></li>' +
            '<li><strong>Acciones con resultado presente</strong>: <em>I have lost my keys.</em></li>' +
            '<li><strong>Acciones que continúan</strong>: <em>I have lived here for 5 years.</em></li></ul>' +
            '<h3>Estructura</h3>' +
            '<div class="example-box">' +
            'Sujeto + <strong>have/has</strong> + Participio Pasado<br>' +
            'I <strong>have eaten</strong> sushi. → He comido sushi.<br>' +
            'She <strong>has just arrived</strong>. → Ella acaba de llegar.' +
            '</div>' +
            '<h3>Marcadores Clave</h3>' +
            '<div class="example-box">' +
            '<strong>ever/never</strong> · <strong>already/yet</strong> · <strong>just</strong> · <strong>for/since</strong><br>' +
            'Have you <strong>ever</strong> tried sushi? | I have <strong>never</strong> smoked.<br>' +
            'She has <strong>already</strong> finished. | Have you finished <strong>yet</strong>?<br>' +
            'I have lived here <strong>for</strong> 2 years / <strong>since</strong> 2022.' +
            '</div>',
        quiz: [
            { question: 'Estructura del Present Perfect:', options: ['Subject + will + verb', 'Subject + have/has + past participle', 'Subject + verb + ed', 'Subject + be + verb-ing'], correct: 1, explanation: 'Present Perfect = have/has + participio pasado (gone, eaten, seen, etc.)' },
            { question: '"I have ___ been to Japan." (to say you went at some point in your life)', options: ['ever', 'never', 'already', 'just'], correct: 0, explanation: '"Ever" se usa en preguntas y afirmaciones para decir "alguna vez en la vida".' },
            { question: '"She ___ just arrived." Elige el auxiliar correcto:', options: ['have', 'has', 'had', 'is'], correct: 1, explanation: 'Con "she" (tercera persona singular) usamos "has" en Present Perfect.' }
        ]
    },
    {
        id: 8,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'grammar',
        catName: 'Gramática',
        title: 'Condicionales (If Clauses)',
        desc: 'Expresa condiciones, situaciones hipotéticas y sus consecuencias.',
        content: '<h3>Zero Conditional (Verdades universales)</h3>' +
            '<div class="example-box">' +
            'If + present simple → present simple<br>' +
            '<em>If you heat water to 100°C, it boils.</em>' +
            '</div>' +
            '<h3>First Conditional (Posible/Real)</h3>' +
            '<div class="example-box">' +
            'If + present simple → will + infinitive<br>' +
            '<em>If it rains tomorrow, I will stay home.</em>' +
            '</div>' +
            '<h3>Second Conditional (Hipotético presente)</h3>' +
            '<div class="example-box">' +
            'If + past simple → would + infinitive<br>' +
            '<em>If I had a million dollars, I would travel the world.</em>' +
            '</div>' +
            '<h3>Third Conditional (Hipotético pasado)</h3>' +
            '<div class="example-box">' +
            'If + past perfect → would have + past participle<br>' +
            '<em>If I had studied more, I would have passed.</em>' +
            '</div>',
        quiz: [
            { question: '"If it rains tomorrow, I ___ stay home." (1st Conditional)', options: ['would', 'will', 'stayed', 'had'], correct: 1, explanation: '1st Conditional: If + presente → WILL + infinitivo. Situación posible en el futuro.' },
            { question: '"If I ___ a million dollars, I would travel." (2nd Conditional)', options: ['have', 'had', 'would have', 'has'], correct: 1, explanation: '2nd Conditional: If + PASADO SIMPLE → would + infinitivo. Situación hipotética.' },
            { question: '¿Qué condicional habla de una situación imposible en el PASADO?', options: ['Zero', 'First', 'Second', 'Third'], correct: 3, explanation: '3rd Conditional habla de situaciones pasadas que NO ocurrieron: "If I had known..."' }
        ]
    },
    {
        id: 9,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'speaking',
        catName: 'Speaking',
        title: 'Expresar Opiniones con Fluidez',
        desc: 'Frases y estructuras para dar tu opinión, estar de acuerdo y debatir en inglés.',
        content: '<h3>Dar Tu Opinión</h3>' +
            '<div class="example-box">' +
            '<strong>In my opinion,</strong> social media is harmful.<br>' +
            '<strong>I think / I believe</strong> that technology helps us.<br>' +
            '<strong>From my point of view,</strong> it\'s complex.' +
            '</div>' +
            '<h3>Estar de Acuerdo / Desacuerdo</h3>' +
            '<div class="example-box">' +
            '<strong>Agree:</strong> I agree with you. | Exactly! | That\'s a good point.<br>' +
            '<strong>Disagree:</strong> I see your point, but... | I\'m afraid I disagree.' +
            '</div>' +
            '<h3>Añadir Información</h3>' +
            '<div class="example-box">' +
            '<strong>Furthermore / Moreover</strong> → Además<br>' +
            '<strong>Not only that, but also...</strong> → No solo eso...' +
            '</div>',
        quiz: [
            { question: '¿Cuál es la forma más FORMAL de expresar una opinión?', options: ['I think', 'I dunno', 'In my opinion', 'Ambas A y C'], correct: 3, explanation: '"I think" e "In my opinion" son ambas aceptables y formales. "I dunno" es muy informal.' },
            { question: '"I see your point, but..." se usa para:', options: ['Estar de acuerdo totalmente', 'No estar de acuerdo cortésmente', 'Cambiar de tema', 'Hacer una pregunta'], correct: 1, explanation: 'Esta frase reconoce el argumento del otro pero introduce una objeción educada.' },
            { question: '"Furthermore" se usa para:', options: ['Contrastar ideas', 'Añadir información', 'Concluir', 'Dar un ejemplo'], correct: 1, explanation: '"Furthermore" = "Además" — sirve para añadir más información a favor de un argumento.' }
        ]
    },
    {
        id: 10,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'listening',
        catName: 'Listening',
        title: 'Comprensión de Acento Nativo',
        desc: 'Técnicas para entender el inglés real: contracciones, elisión y habla conectada.',
        content: '<h3>Connected Speech</h3>' +
            '<div class="example-box">' +
            '"What are you doing?" → "Whaddaya doing?"<br>' +
            '"I don\'t know" → "I dunno"<br>' +
            '"Going to" → "gonna" | "Want to" → "wanna"<br>' +
            '"Have to" → "hafta" | "Let me" → "Lemme"' +
            '</div>' +
            '<h3>Técnica de Shadowing</h3>' +
            '<ol><li>Elige un podcast o video con transcripción.</li>' +
            '<li>Escucha sin leer (primera vez).</li>' +
            '<li>Lee la transcripción y escucha de nuevo.</li>' +
            '<li>Repite en voz alta simultáneamente.</li></ol>' +
            '<h3>Recursos</h3>' +
            '<ul><li>BBC Learning English</li><li>TED Talks</li><li>Easy English on YouTube</li></ul>',
        quiz: [
            { question: '"Gonna" is informal for:', options: ['going to', 'got to', 'go on', 'gone'], correct: 0, explanation: '"Gonna" es la reducción informal de "going to". Ej: "I\'m gonna eat" = "I\'m going to eat".' },
            { question: 'The "Shadowing" technique significa:', options: ['Leer en silencio', 'Repeating aloud at the same time as the speaker', 'Traducir palabra por palabra', 'Escribir mientras escuchas'], correct: 1, explanation: 'Shadowing = repetir en voz alta simultáneamente. Mejora pronunciación, ritmo e intonación.' },
            { question: '"I dunno" = ?', options: ["don't know", 'done now', 'do know', 'does know'], correct: 0, explanation: '"Dunno" es la reducción de "don\'t know", muy común en habla informal.' }
        ]
    },
    {
        id: 11,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'vocab',
        catName: 'Vocabulario',
        title: 'Phrasal Verbs Esenciales',
        desc: 'Los 20 phrasal verbs más usados en el inglés cotidiano.',
        content: '<h3>¿Qué son?</h3>' +
            '<p>Verbo + preposición/adverbio que crean un nuevo significado.</p>' +
            '<h3>Los Más Usados</h3>' +
            '<div class="example-box">' +
            '<strong>give up</strong> → rendirse | <strong>figure out</strong> → descubrir/entender<br>' +
            '<strong>run out of</strong> → quedarse sin | <strong>turn down</strong> → rechazar<br>' +
            '<strong>put off</strong> → posponer | <strong>pick up</strong> → recoger/aprender<br>' +
            '<strong>hang out</strong> → pasar tiempo | <strong>show up</strong> → aparecer<br>' +
            '<strong>get along</strong> → llevarse bien | <strong>break down</strong> → descomponerse' +
            '</div>',
        quiz: [
            { question: '"Give up" significa:', options: ['Entregarse (dar algo)', 'Rendirse', 'Levantarse', 'Salir'], correct: 1, explanation: '"Give up" = rendirse, abandonar un esfuerzo. "Don\'t give up!" = "¡No te rindas!"' },
            { question: '"Run out of" significa:', options: ['Correr afuera', 'Salir corriendo', 'Quedarse sin', 'Terminar algo'], correct: 2, explanation: '"Run out of" = quedarse sin algo. "We ran out of time" = "Se nos acabó el tiempo".' },
            { question: '"I can\'t ___ it out." ¿Qué verbo completa este phrasal verb?', options: ['see', 'figure', 'give', 'make'], correct: 1, explanation: '"Figure out" = entender/resolver. "I can\'t figure it out" = No puedo entenderlo/resolverlo.' }
        ]
    },
    {
        id: 12,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'writing',
        catName: 'Writing',
        title: 'Emails Profesionales en Inglés',
        desc: 'Aprende a escribir correos profesionales efectivos con la estructura y el tono correcto.',
        content: '<h3>Estructura</h3>' +
            '<div class="example-box">' +
            '<strong>Saludo:</strong> Dear Mr. Smith, / Hi [Name],<br>' +
            '<strong>Apertura:</strong> I am writing to inquire about...<br>' +
            '<strong>Cuerpo:</strong> Please find attached... / I would like to request...<br>' +
            '<strong>Cierre:</strong> I look forward to hearing from you.<br>' +
            '<strong>Despedida:</strong> Sincerely, / Best regards,' +
            '</div>' +
            '<h3>Frases Útiles</h3>' +
            '<div class="example-box">' +
            'As per our conversation... → Según nuestra conversación...<br>' +
            'I apologize for the delay. → Me disculpo por la demora.<br>' +
            'Please feel free to contact me. → No dude en contactarme.' +
            '</div>',
        quiz: [
            { question: '¿Cuál es el saludo de email más formal?', options: ['Hey!', 'Dear Mr. Smith,', 'Hi there!', "What's up?"], correct: 1, explanation: '"Dear Mr. Smith," es el saludo formal estándar. "Hey" y "Hi there" son informales.' },
            { question: '"I look forward to hearing from you" se coloca:', options: ['At the beginning', 'In the subject line', 'Near the end, before closing', 'In the middle'], correct: 2, explanation: 'Esta frase de cierre va al final del cuerpo del email, antes de la despedida.' },
            { question: '"Please find ___ my CV." Completa la frase:', options: ['attached', 'below', 'here', 'there'], correct: 0, explanation: '"Please find attached" = "Por favor encuentre adjunto". Es frase estándar en emails formales.' }
        ]
    },
    {
        id: 13,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'reading',
        catName: 'Reading',
        title: 'Estrategias de Comprensión Lectora',
        desc: 'Técnicas probadas para comprender textos en inglés de manera rápida y eficiente.',
        content: '<h3>3 Tipos de Lectura</h3>' +
            '<ul><li><strong>Skimming</strong> → Leer rápido para captar la idea general.</li>' +
            '<li><strong>Scanning</strong> → Buscar información específica (fechas, nombres).</li>' +
            '<li><strong>Intensive Reading</strong> → Leer en detalle para comprensión profunda.</li></ul>' +
            '<h3>Cómo hacer Skimming</h3>' +
            '<ol><li>Lee el título y los subtítulos.</li>' +
            '<li>Lee la primera oración de cada párrafo.</li>' +
            '<li>Lee el último párrafo.</li></ol>' +
            '<h3>Palabras Desconocidas</h3>' +
            '<ul><li>Usa el <strong>contexto</strong> para deducir el significado.</li>' +
            '<li>Analiza la <strong>raíz</strong>: "unhappiness" = un(not) + happy + ness</li></ul>',
        quiz: [
            { question: '"Skimming" significa:', options: ['Leer cada palabra cuidadosamente', 'Leer rápido para entender la idea principal', 'Buscar información específica', 'Traducir el texto'], correct: 1, explanation: 'Skimming = lectura rápida para captar la idea general, sin detenerse en cada palabra.' },
            { question: '"Scanning" se usa para:', options: ['Entender todos los detalles', 'Encontrar información específica rápidamente', 'Disfrutar del texto', 'Estudiar estructuras gramaticales'], correct: 1, explanation: 'Scanning = buscar datos específicos como fechas, nombres o cifras sin leer todo.' },
            { question: 'The prefix "un-" significa:', options: ['De nuevo', 'No/Negación', 'Antes', 'Después'], correct: 1, explanation: '"un-" = no/negación. Unhappy = not happy. Unusual = not usual. Unfair = not fair.' }
        ]
    },

    // ==================== C1: AVANZADO ====================
    {
        id: 14,
        level: 'c1',
        levelName: 'Avanzado',
        category: 'grammar',
        catName: 'Gramática',
        title: 'Modal Verbs Avanzados',
        desc: 'Domina los matices de los verbos modales para sonar como un nativo.',
        content: '<h3>Deducción en Presente</h3>' +
            '<div class="example-box">' +
            '<strong>must</strong> → casi seguro: He must be tired. → Debe de estar cansado.<br>' +
            '<strong>can\'t</strong> → imposible: It can\'t be true. → No puede ser verdad.<br>' +
            '<strong>might/may/could</strong> → posible: She might be at home.' +
            '</div>' +
            '<h3>Deducción en Pasado</h3>' +
            '<div class="example-box">' +
            '<strong>must have + PP:</strong> He must have forgotten.<br>' +
            '<strong>can\'t have + PP:</strong> She can\'t have done that.<br>' +
            '<strong>might have + PP:</strong> They might have left.' +
            '</div>' +
            '<h3>Críticas y Reproches</h3>' +
            '<div class="example-box">' +
            '<strong>should have + PP:</strong> You should have told me.<br>' +
            '<strong>shouldn\'t have + PP:</strong> I shouldn\'t have eaten so much.' +
            '</div>',
        quiz: [
            { question: '"He must be tired" expresa:', options: ['Obligación', 'Posibilidad (50/50)', 'Deducción casi segura', 'Permiso'], correct: 2, explanation: '"Must" para deducción = casi certeza basada en evidencia. No es obligación en este contexto.' },
            { question: '"She might have left" — ¿cuándo ocurrió la acción?', options: ['Futuro', 'Presente', 'Pasado incierto', 'Acción habitual'], correct: 2, explanation: '"Might have + past participle" expresa una posibilidad en el pasado.' },
            { question: '"You should have told me" expresa:', options: ['Consejo para el presente', 'Crítica sobre una acción pasada', 'Permiso', 'Deducción casi segura'], correct: 1, explanation: '"Should have + PP" = crítica o reproche sobre algo que no se hizo en el pasado.' }
        ]
    },
    {
        id: 15,
        level: 'c1',
        levelName: 'Avanzado',
        category: 'writing',
        catName: 'Writing',
        title: 'Ensayos y Writing Académico',
        desc: 'Estructura argumentativa, conectores avanzados y vocabulario formal para textos C1.',
        content: '<h3>Estructura del Ensayo</h3>' +
            '<ul><li><strong>Introducción:</strong> Hook → Contexto → Tesis</li>' +
            '<li><strong>Cuerpo 1:</strong> Argumento → Evidencia → Análisis</li>' +
            '<li><strong>Cuerpo 2:</strong> Contraargumento → Refutación</li>' +
            '<li><strong>Conclusión:</strong> Resumen → Reflexión final</li></ul>' +
            '<h3>Conectores Avanzados</h3>' +
            '<div class="example-box">' +
            '<strong>Añadir:</strong> Furthermore, Moreover, What is more<br>' +
            '<strong>Contrastar:</strong> Nevertheless, Conversely, On the contrary<br>' +
            '<strong>Concluir:</strong> In conclusion, All things considered, Ultimately<br>' +
            '<strong>Ejemplificar:</strong> For instance, To illustrate, This is evidenced by' +
            '</div>',
        quiz: [
            { question: '¿Qué debe ir en la INTRODUCCIÓN de un ensayo?', options: ['Solo ejemplos', 'Una conclusión', 'Una declaración de tesis (Tesis)', 'Una bibliografía'], correct: 2, explanation: 'La introducción incluye Hook (gancho) + Contexto + Tesis (tu argumento central).' },
            { question: '"Nevertheless" se usa para:', options: ['Añadir información', 'Dar un ejemplo', 'Contrastar/mostrar contradicción', 'Concluir'], correct: 2, explanation: '"Nevertheless" = "Sin embargo" — introduce una idea que contrasta con la anterior.' },
            { question: '"Furthermore" in Spanish significa:', options: ['Sin embargo', 'Además', 'Por lo tanto', 'Es decir'], correct: 1, explanation: '"Furthermore" = "Además" — se usa para añadir más información o argumentos.' }
        ]
    },
    {
        id: 16,
        level: 'c1',
        levelName: 'Avanzado',
        category: 'speaking',
        catName: 'Speaking',
        title: 'Hablar con Fluidez y sin Pausas',
        desc: 'Técnicas para hablar sin interrupciones y sonar natural en inglés.',
        content: '<h3>Fillers para Ganar Tiempo</h3>' +
            '<div class="example-box">' +
            '<strong>Well... / You know... / I mean...</strong><br>' +
            '<strong>Let me think...</strong> | <strong>That\'s a good question.</strong><br>' +
            '<strong>How can I put it?</strong> | <strong>What I\'m trying to say is...</strong>' +
            '</div>' +
            '<h3>Circumlocución</h3>' +
            '<div class="example-box">' +
            '"It\'s a kind of..." → Es un tipo de...<br>' +
            '"It\'s the thing you use to..." → Es lo que se usa para...<br>' +
            '"It\'s like..., but..." → Es como..., pero...' +
            '</div>' +
            '<h3>Técnica PREP</h3>' +
            '<div class="example-box">' +
            '<strong>P</strong>oint → Da tu punto principal<br>' +
            '<strong>R</strong>eason → Explica por qué<br>' +
            '<strong>E</strong>xample → Da un ejemplo concreto<br>' +
            '<strong>P</strong>oint → Repite tu punto' +
            '</div>',
        quiz: [
            { question: 'Fillers (muletillas) como "Well..." or "I mean..." se usan para:', options: ['Cometer errores gramaticales', 'Ganar tiempo para pensar naturalmente', 'Memorizar vocabulario', 'Evitar hablar inglés'], correct: 1, explanation: 'Los fillers son pausas naturales que dan tiempo para pensar. Incluso los nativos los usan.' },
            { question: '"Circumlocution" significa:', options: ['Hablar muy rápido', 'Describing a word you don\'t know', 'Usar lenguaje muy formal', 'Traducir mentalmente'], correct: 1, explanation: 'Circunlocución = describir o rodear una palabra desconocida sin usarla directamente.' },
            { question: 'In the PREP technique, "R" stands for:', options: ['Repeat', 'Reason', 'Result', 'Remember'], correct: 1, explanation: 'PREP = Point, Reason, Example, Point. La R es de "Reason" (razón/justificación).' }
        ]
    },
    {
        id: 17,
        level: 'c1',
        levelName: 'Avanzado',
        category: 'vocab',
        catName: 'Vocabulario',
        title: 'Collocations e Idioms',
        desc: 'Las palabras que van juntas "por naturaleza" y los idioms que todo nivel C1 debe conocer.',
        content: '<h3>Collocations</h3>' +
            '<div class="example-box">' +
            '<strong>do</strong>: homework, research, damage<br>' +
            '<strong>make</strong>: a decision, a mistake, progress<br>' +
            '<strong>take</strong>: a risk, a break, responsibility<br>' +
            '<strong>give</strong>: advice, a speech, permission' +
            '</div>' +
            '<h3>Idioms C1</h3>' +
            '<div class="example-box">' +
            '<strong>hit the nail on the head</strong> → dar en el clavo<br>' +
            '<strong>spill the beans</strong> → revelar un secreto<br>' +
            '<strong>break the ice</strong> → romper el hielo<br>' +
            '<strong>under the weather</strong> → sentirse mal/enfermo<br>' +
            '<strong>cost an arm and a leg</strong> → costar un ojo de la cara' +
            '</div>',
        quiz: [
            { question: 'Which collocation is CORRECT?', options: ['do a mistake', 'make a mistake', 'take a mistake', 'give a mistake'], correct: 1, explanation: 'La collocation correcta es "make a mistake" (cometer un error). "Do" va con homework, research.' },
            { question: '"Spill the beans" significa:', options: ['Cocinar algo', 'Revelar un secreto', 'Enojarse', 'Gastar mucho dinero'], correct: 1, explanation: '"Spill the beans" = revelar un secreto o información confidencial.' },
            { question: '"Under the weather" significa:', options: ['Afuera bajo la lluvia', 'Sentirse mal o enfermo', 'Con mucho calor', 'Asustado'], correct: 1, explanation: '"Under the weather" = sentirse mal de salud, indispuesto.' }
        ]
    },
    {
        id: 18,
        level: 'c1',
        levelName: 'Avanzado',
        category: 'reading',
        catName: 'Reading',
        title: 'Análisis Crítico de Textos',
        desc: 'Lee entre líneas: identifica el tono, sesgo y argumentos implícitos.',
        content: '<h3>Tipos de Tono</h3>' +
            '<div class="example-box">' +
            '<strong>Objective/Neutral:</strong> Solo hechos, sin juicio.<br>' +
            '<strong>Critical:</strong> Señala problemas o deficiencias.<br>' +
            '<strong>Satirical/Ironic:</strong> Critica con humor.<br>' +
            '<strong>Persuasive:</strong> Busca convencer al lector.' +
            '</div>' +
            '<h3>Identificar Sesgo (Bias)</h3>' +
            '<ul><li>¿Qué perspectivas están ausentes?</li>' +
            '<li>¿Se usan palabras con carga emocional?</li></ul>' +
            '<h3>Vocabulario de Análisis</h3>' +
            '<div class="example-box">' +
            'The author <strong>implies / suggests</strong> that...<br>' +
            'This <strong>highlights</strong> the fact that...<br>' +
            'The use of [technique] <strong>serves to</strong>...' +
            '</div>',
        quiz: [
            { question: 'A "biased" text:', options: ['Uses only verified facts', 'Presents one perspective unfairly', 'Is very long and detailed', 'Uses only formal language'], correct: 1, explanation: 'Un texto sesgado presenta una perspectiva de forma injusta, omitiendo o minimizando otras.' },
            { question: '"The author implies that..." significa:', options: ['The author states it directly and clearly', 'The author suggests it indirectly', 'The author denies it', 'The author lists it'], correct: 1, explanation: '"Implies" = sugiere de forma indirecta, sin decirlo explícitamente.' },
            { question: 'An "objective" tone is:', options: ['Emotional and passionate', 'Neutral and fact-based', 'Humorous', 'Strongly critical'], correct: 1, explanation: 'Un tono objetivo presenta hechos sin juicio personal ni emoción.' }
        ]
    },
    {
        id: 19,
        level: 'c1',
        levelName: 'Avanzado',
        category: 'pronunciation',
        catName: 'Pronunciación',
        title: 'Acento, Ritmo e Intonación',
        desc: 'El secreto que separa a quienes suenan naturales de quienes suenan como robots.',
        pronounceText: 'Never have I seen such beauty. She has already finished. Would you like some coffee? I love coffee. What are you going to do?',
        content: '<h3>Word Stress (Acento de Palabra)</h3>' +
            '<div class="example-box">' +
            '<strong>PREsent</strong> (regalo) vs. <strong>preSENT</strong> (presentar)<br>' +
            '<strong>REcord</strong> (disco) vs. <strong>reCORD</strong> (grabar)<br>' +
            '<strong>OBject</strong> (objeto) vs. <strong>obJECT</strong> (objetar)' +
            '</div>' +
            '<h3>Sentence Stress</h3>' +
            '<div class="example-box">' +
            'I <strong>LOVE</strong> coffee. (lo amo, no lo odio)<br>' +
            '<strong>I</strong> love coffee. (YO, no otra persona)' +
            '</div>' +
            '<h3>Intonation</h3>' +
            '<ul><li>Yes/No questions → sube al final ↗</li>' +
            '<li>WH- questions → baja al final ↘</li></ul>',
        quiz: [
            { question: '"PREsent" (noun) and "preSENT" (verb) differ in:', options: ['Spelling', 'Stress placement', 'Number of syllables', 'Meaning only (same pronunciation)'], correct: 1, explanation: 'El acento cambia la función gramatical: PREsent (nombre) vs preSENT (verbo).' },
            { question: 'WH- questions (where, what, why) end with intonation going:', options: ['Up ↗', 'Down ↘', 'Flat →', 'Either way'], correct: 1, explanation: 'WH- questions bajan al final ↘. Las preguntas Yes/No suben ↗.' },
            { question: '"I LOVE coffee" (stress on LOVE) emphasizes:', options: ['Who loves coffee', 'The action (love, not like)', 'What is loved', 'When it is loved'], correct: 1, explanation: 'Al enfatizar "LOVE" comunicamos que la intensidad del sentimiento es alta (no solo "like").' }
        ]
    },

    // ==================== C2: MAESTRÍA ====================
    {
        id: 20,
        level: 'c2',
        levelName: 'Maestría',
        category: 'grammar',
        catName: 'Gramática',
        title: 'Estructuras Invertidas (Inversion)',
        desc: 'El recurso gramatical favorito de los escritores avanzados para crear énfasis y elegancia.',
        content: '<h3>Inversión con Negativas</h3>' +
            '<div class="example-box">' +
            'Normal: I have never seen such beauty.<br>' +
            '<strong>Invertida: Never have I seen such beauty.</strong><br><br>' +
            'Expresiones: Never, Seldom, Hardly, Barely, Scarcely, Not only, Under no circumstances' +
            '</div>' +
            '<h3>Inversión en Condicionales Formales</h3>' +
            '<div class="example-box">' +
            'If I had known → <strong>Had I known</strong>, I would have acted differently.<br>' +
            'If it should happen → <strong>Should this happen</strong>, please call me.' +
            '</div>' +
            '<h3>Inversión con "So/Such"</h3>' +
            '<div class="example-box">' +
            '<em>So complex was the problem</em> that no one could solve it.' +
            '</div>',
        quiz: [
            { question: '"Never have I seen..." is an example of:', options: ['A question', 'A negative sentence', 'Inversion for emphasis', 'A conditional'], correct: 2, explanation: 'Es una inversión (inversion) usada para dar énfasis dramático o literario.' },
            { question: '"If I had known" with formal inversion becomes:', options: ['Had I known', 'Known had I', 'I had known', 'If had I known'], correct: 0, explanation: '"Had I known" es la forma invertida del 3rd conditional (elimina "If" y mueve el auxiliar).' },
            { question: 'Writers use inversion primarily to:', options: ['Shorten sentences', 'Create emphasis and formal/literary effect', 'Avoid conditionals', 'Write simple sentences'], correct: 1, explanation: 'La inversión añade énfasis, elegancia literaria y formalidad al texto.' }
        ]
    },
    {
        id: 21,
        level: 'c2',
        levelName: 'Maestría',
        category: 'vocab',
        catName: 'Vocabulario',
        title: 'Vocabulario Formal y Literario',
        desc: 'Palabras y expresiones del inglés culto que distinguen al hablante de C2.',
        content: '<h3>Sinónimos Formales</h3>' +
            '<div class="example-box">' +
            '<strong>big</strong> → substantial, considerable, vast<br>' +
            '<strong>get</strong> → obtain, acquire, procure<br>' +
            '<strong>start</strong> → initiate, commence, embark on<br>' +
            '<strong>show</strong> → demonstrate, illustrate, exhibit<br>' +
            '<strong>say</strong> → assert, contend, maintain, claim' +
            '</div>' +
            '<h3>Vocabulario Retórico</h3>' +
            '<div class="example-box">' +
            '<strong>metaphor:</strong> Time is a thief.<br>' +
            '<strong>paradox:</strong> Less is more.<br>' +
            '<strong>euphemism:</strong> "passed away" instead of "died"<br>' +
            '<strong>juxtaposition:</strong> placing contrasting ideas next to each other' +
            '</div>' +
            '<h3>Conectores Sofisticados</h3>' +
            '<div class="example-box">' +
            'Notwithstanding · Henceforth · Albeit · Therein lies · Insofar as' +
            '</div>',
        quiz: [
            { question: 'Formal synonym for "get":', options: ['obtain', 'take', 'grab', 'fetch'], correct: 0, explanation: '"Obtain" es el sinónimo formal de "get" en contextos académicos o profesionales.' },
            { question: '"Albeit" significa:', options: ['Therefore', 'Although', 'Moreover', 'Nevertheless'], correct: 1, explanation: '"Albeit" = "aunque/si bien". Ej: "It was a success, albeit a modest one."' },
            { question: '"Juxtaposition" in literature significa:', options: ['Placing contrasting ideas side by side', 'Hiding the true meaning', 'Exaggerating for effect', 'Using extended metaphors'], correct: 0, explanation: 'Juxtaposition = yuxtaposición: colocar ideas contrastantes juntas para crear efecto.' }
        ]
    },
    {
        id: 22,
        level: 'c2',
        levelName: 'Maestría',
        category: 'speaking',
        catName: 'Speaking',
        title: 'Discurso y Debate al Nivel C2',
        desc: 'Argumenta, persuade y debate con la precisión y confianza de un hablante nativo.',
        content: '<h3>Estructurar un Argumento Complejo</h3>' +
            '<div class="example-box">' +
            '"Allow me to put forward the view that..."<br>' +
            '"My central contention is that..."<br>' +
            '"The crux of the matter is..."' +
            '</div>' +
            '<h3>Refutar con Elegancia</h3>' +
            '<div class="example-box">' +
            '"While there is some merit in that argument, one must consider..."<br>' +
            '"That point, though valid on the surface, overlooks..."<br>' +
            '"I would take issue with that interpretation because..."' +
            '</div>' +
            '<h3>Matizar Afirmaciones</h3>' +
            '<div class="example-box">' +
            '"With certain notable exceptions..."<br>' +
            '"To a large extent, but not entirely..."<br>' +
            '"This is broadly speaking the case, however..."' +
            '</div>',
        quiz: [
            { question: '"The crux of the matter" significa:', options: ['El principio del tema', 'El quid/punto central del asunto', 'La conclusión final', 'El resumen breve'], correct: 1, explanation: '"The crux of the matter" = el quid/núcleo central del asunto, lo más importante.' },
            { question: '"While there is some merit in that..." se usa para:', options: ['Estar de acuerdo totalmente', 'Refute politely acknowledging the other side', 'Ignore the argument', 'Change the topic'], correct: 1, explanation: 'Esta frase reconoce algo válido en el argumento contrario antes de refutarlo.' },
            { question: '"To a large extent" significa:', options: ['Totally and completely', 'Mostly, but not entirely', 'Only slightly', 'Not at all'], correct: 1, explanation: '"To a large extent" = en gran medida, aunque no completamente. Matiza la afirmación.' }
        ]
    },
    {
        id: 23,
        level: 'c2',
        levelName: 'Maestría',
        category: 'writing',
        catName: 'Writing',
        title: 'Escritura Creativa y Estilo Personal',
        desc: 'Desarrolla tu propia voz en inglés usando técnicas de autores profesionales.',
        content: '<h3>Técnicas de Escritura Literaria</h3>' +
            '<ul><li><strong>Show, don\'t tell:</strong> En lugar de "She was sad", escribe "Tears streamed down her face."</li>' +
            '<li><strong>Sentence variety:</strong> Alterna frases cortas y largas. Short sentences create impact.</li>' +
            '<li><strong>Active voice:</strong> Más directa y poderosa que la voz pasiva.</li></ul>' +
            '<h3>Recursos Estilísticos</h3>' +
            '<div class="example-box">' +
            '<strong>Alliteration:</strong> Peter Piper picked... (repetición de sonido inicial)<br>' +
            '<strong>Anaphora:</strong> "We shall fight on the beaches, we shall fight..." (repetición al inicio)<br>' +
            '<strong>Chiasmus:</strong> "Ask not what your country can do for you, but what you can do for your country."' +
            '</div>',
        quiz: [
            { question: '"Show, don\'t tell" significa:', options: ['Draw pictures instead of writing', 'Convey emotion through action and detail, not direct statements', 'Use only simple vocabulary', 'Tell the story in a linear way'], correct: 1, explanation: '"Show, don\'t tell" = mostrar a través de acciones/detalles en lugar de declarar los estados directamente.' },
            { question: '"Anaphora" is:', options: ['Repetition of words at the END of clauses', 'Repetition of words at the BEGINNING of clauses', 'A type of extended metaphor', 'Using opposite words together'], correct: 1, explanation: 'Anáfora = repetición al inicio de cláusulas consecutivas. "We shall fight... We shall fight..."' },
            { question: '"Alliteration" is:', options: ['Rhyming at the end of lines', 'Repetition of initial consonant sounds', 'Exaggerating for comic effect', 'Giving human qualities to objects'], correct: 1, explanation: 'Aliteración = repetición del sonido consonántico inicial: "She sells seashells by the seashore."' }
        ]
    },
    {
        id: 24,
        level: 'c2',
        levelName: 'Maestría',
        category: 'reading',
        catName: 'Reading',
        title: 'Lectura de Textos Literarios Complejos',
        desc: 'Herramientas para descifrar y apreciar la literatura inglesa clásica y contemporánea.',
        content: '<h3>Enfrentarse a un Texto Complejo</h3>' +
            '<ol><li>Primera lectura: flujo general (sin detenerte).</li>' +
            '<li>Identifica el tema central y subtemas.</li>' +
            '<li>Segunda lectura: analiza técnicas y vocabulario.</li>' +
            '<li>Identifica símbolos, motivos y alusiones culturales.</li></ol>' +
            '<h3>Literatura Recomendada</h3>' +
            '<div class="example-box">' +
            '<strong>Accesible (C1-C2):</strong> Orwell (Animal Farm, 1984), Fitzgerald (The Great Gatsby)<br>' +
            '<strong>Desafiante (C2+):</strong> Virginia Woolf (Mrs. Dalloway), Toni Morrison (Beloved)' +
            '</div>' +
            '<h3>Preguntas de Análisis</h3>' +
            '<ul><li>¿Cuál es el conflicto central?</li>' +
            '<li>¿Cómo contribuye el lenguaje al significado?</li>' +
            '<li>¿Qué dice sobre el contexto histórico?</li></ul>',
        quiz: [
            { question: 'When first reading a complex literary text, you should:', options: ['Look up every unknown word', 'Read for general flow without stopping', 'Only read the first paragraph', 'Start with the last chapter'], correct: 1, explanation: 'La primera lectura debe ser fluida para captar el flujo y la esencia antes de analizar en detalle.' },
            { question: 'A "motif" in literature is:', options: ['The main character', 'A recurring element or symbol', 'The main plot', 'The setting of the story'], correct: 1, explanation: 'Motif = elemento, símbolo o patrón recurrente que añade significado temático a la obra.' },
            { question: '"Virginia Woolf\'s Mrs. Dalloway" is classified as:', options: ['A1 level — easy to read', 'C2+ level — highly challenging', 'B1 level — intermediate', 'Not originally written in English'], correct: 1, explanation: 'La prosa de Woolf es experimental, con flujo de conciencia. Nivel C2+ de complejidad.' }
        ]
    },
    {
        id: 25,
        level: 'c2',
        levelName: 'Maestría',
        category: 'pronunciation',
        catName: 'Pronunciación',
        title: 'Variantes del Inglés: US, UK y más',
            '<strong>"r" post-vocálica:</strong> Am: "car" [kɑːr]; Br: "car" [kɑː]<br>' +
            '<strong>vocal "a":</strong> Am: "grass" [æ]; Br: "grass" [ɑː]<br>' +
            '<strong>Flap T:</strong> Am: "butter" → suena como "budder"; Br: más nítida' +
            '</div>' +
            '<h3>Diferencias de Vocabulario</h3>' +
            '<div class="example-box">' +
            'elevator (US) vs. lift (UK)<br>' +
            'apartment (US) vs. flat (UK)<br>' +
            'cookie (US) vs. biscuit (UK)<br>' +
            'vacation (US) vs. holiday (UK)<br>' +
            'sweater (US) vs. jumper (UK)' +
            '</div>' +
            '<h3>Consejo Final</h3>' +
            '<p>A nivel C2, la meta no es imitar un acento sino ser <strong>perfectamente comprensible</strong> en cualquier variante.</p>',
        quiz: [
            { question: 'In British English, "grass" is pronounced with:', options: ['[æ] as in "cat"', '[ɑː] a long open vowel', '[eɪ] as in "cake"', '[ɛ] as in "bed"'], correct: 1, explanation: 'En inglés británico las palabras como "grass, path, bath" tienen la vocal larga [ɑː].' },
            { question: '"Elevator" (US English) = ___ in British English:', options: ['escalator', 'lift', 'stairs', 'ladder'], correct: 1, explanation: '"Lift" es la palabra británica para lo que en EEUU llaman "elevator".' },
            { question: 'At C2 level, your pronunciation goal should be:', options: ['Sound exactly like an American', 'Sound exactly like a British person', 'Be perfectly understandable across all English variants', 'Choose one accent and never deviate'], correct: 2, explanation: 'El objetivo real es la inteligibilidad universal, no copiar un acento específico.' }
        ]
    },
    // ==================== TECH & DEVDOCS ====================
    {
        id: 26,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'tech',
        catName: 'Tech & DevDocs',
        title: 'HTML & CSS Docs (DevDocs)',
        desc: 'Aprende a leer y comprender la documentación técnica real en inglés para desarrollo web.',
        content: '<h3>Leyendo documentación de HTML</h3>' +
            '<p>En DevDocs, la etiqueta <code>&lt;a&gt;</code> se describe así:</p>' +
            '<div class="example-box">' +
            '<em>"The HTML &lt;a&gt; element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, or anything else a URL can address."</em><br>' +
            '<strong>anchor:</strong> ancla<br>' +
            '<strong>hyperlink:</strong> hipervínculo<br>' +
            '<strong>address (verbo):</strong> direccionar / apuntar' +
            '</div>' +
            '<h3>Vocabulario de CSS</h3>' +
            '<div class="example-box">' +
            '<strong>Property:</strong> Propiedad (ej. color, width)<br>' +
            '<strong>Value:</strong> Valor (ej. red, 100px)<br>' +
            '<strong>Selector:</strong> Selector (lo que usas para apuntar al HTML)<br>' +
            '<strong>Layout:</strong> Diseño / Distribución' +
            '</div>' +
            '<h3>Verbos comunes en Tech</h3>' +
            '<ul><li><strong>To render:</strong> renderizar/mostrar en pantalla.</li>' +
            '<li><strong>To override:</strong> sobreescribir (una regla CSS a otra).</li>' +
            '<li><strong>To nest:</strong> anidar (un elemento dentro de otro).</li></ul>',
        quiz: [
            { question: '¿Qué significa el verbo "To override" en programación/CSS?', options: ['Escribir mucho', 'Sobreescribir', 'Renderizar', 'Borrar'], correct: 1, explanation: '"To override" significa sobreescribir o anular (ej. cuando una regla de CSS más específica reemplaza a otra).' },
            { question: '¿Cuál es la traducción de "anchor element"?', options: ['Elemento ancla', 'Elemento base', 'Elemento oculto', 'Elemento bloque'], correct: 0, explanation: '"Anchor" se traduce literalmente como ancla. Por eso la etiqueta es <a>.' },
            { question: '¿Qué significa "To nest" en HTML?', options: ['Descansar', 'Anidar (poner algo dentro de otro)', 'Siguiente elemento', 'Eliminar'], correct: 1, explanation: '"To nest" significa anidar, como colocar un div dentro de otro div (nested elements).' }
        ]
    },
    {
        id: 27,
        level: 'c1',
        levelName: 'Avanzado',
        category: 'tech',
        catName: 'Tech & DevDocs',
        title: 'JavaScript API Docs (DevDocs)',
        desc: 'Comprensión avanzada de inglés leyendo la documentación oficial de JavaScript.',
        content: '<h3>Leyendo JS Documentation</h3>' +
            '<p>Así describe DevDocs el método <code>Array.prototype.map()</code>:</p>' +
            '<div class="example-box">' +
            '<em>"The map() method creates a new array populated with the results of calling a provided function on every element in the calling array."</em>' +
            '</div>' +
            '<h3>Glosario de JS Docs</h3>' +
            '<div class="example-box">' +
            '<strong>To populate:</strong> Poblar / Llenar de datos.<br>' +
            '<strong>Provided function:</strong> Función proporcionada/suministrada.<br>' +
            '<strong>Callback:</strong> Una función pasada como argumento.<br>' +
            '<strong>To trigger:</strong> Desencadenar / Activar un evento.<br>' +
            '<strong>Asynchronous:</strong> Asíncrono (no ocurre al mismo tiempo).' +
            '</div>' +
            '<h3>Errores comunes de lectura</h3>' +
            '<p>Muchos hispanohablantes confunden <em>"deprecated"</em> con despreciado. En realidad significa <strong>obsoleto o en desuso</strong>. Si una API está <em>deprecated</em>, no deberías usarla en código nuevo.</p>',
        quiz: [
            { question: '¿Qué significa que una función esté "deprecated"?', options: ['Es nueva y popular', 'Está obsoleta / en desuso', 'Es muy difícil de usar', 'Tiene errores (bugs)'], correct: 1, explanation: '"Deprecated" significa obsoleto; se mantiene por compatibilidad pero se desaconseja su uso.' },
            { question: '¿Cómo se traduce "To populate an array"?', options: ['Borrar un array', 'Crear un array vacío', 'Llenar/Poblar un array con datos', 'Unir dos arrays'], correct: 2, explanation: '"Populate" significa poblar o rellenar de información/datos.' },
            { question: 'El verbo "To trigger" se usa frecuentemente para:', options: ['Desencadenar/Activar eventos', 'Cerrar el navegador', 'Declarar variables', 'Hacer comentarios'], correct: 0, explanation: 'En JS y eventos, "trigger" significa activar o desencadenar (ej. desencadenar un click).' }
        ]
    }
];
