const FULL_COURSE_DATA = [
    {
        id: 1,
        level: 'a1a2',
        levelName: 'Principiante',
        category: 'grammar',
        catName: 'Gramática',
        title: 'El Verbo To Be',
        desc: 'La base del inglés: Ser o estar. Aprende a presentarte y describir tu entorno.',
        icon: 'book-open',
        content: `
            <h3>Introducción al "To Be"</h3>
            <p>El verbo "to be" es el más importante en inglés. Se usa para expresar identidad, características y ubicación.</p>
            <div class="example-box">
                <b>I am</b> a student. (Yo soy estudiante)<br>
                <b>You are</b> my friend. (Tú eres mi amigo)<br>
                <b>She is</b> in the park. (Ella está en el parque)
            </div>
            <h3>Puntos Clave</h3>
            <ul>
                <li>Se conjuga de tres formas en presente: <strong>am, is, are</strong>.</li>
                <li>Para negar, solo añade <strong>not</strong> (ej. I am not).</li>
                <li>Para preguntar, invierte el orden (ej. Are you...?).</li>
            </ul>
        `
    },
    {
        id: 2,
        level: 'a1a2',
        levelName: 'Principiante',
        category: 'vocab',
        catName: 'Vocabulario',
        title: 'Saludos y Despedidas',
        desc: 'Cómo interactuar en situaciones cotidianas desde el primer momento.',
        icon: 'message-circle',
        content: `
            <h3>Expresiones Esenciales</h3>
            <p>Aprender a saludar correctamente demuestra educación y abre puertas.</p>
            <div class="example-box">
                <b>Informales:</b> Hi!, Hello!, How are you?<br>
                <b>Formales:</b> Good morning, Good afternoon, How do you do?
            </div>
            <h3>Respuestas Comunes</h3>
            <ul>
                <li>I'm fine, thank you.</li>
                <li>Not bad!</li>
                <li>I've been better.</li>
            </ul>
        `
    },
    {
        id: 3,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'speaking',
        catName: 'Speaking',
        title: 'Present Perfect',
        desc: 'Conecta el pasado con el presente. Indispensable para hablar fluidamente.',
        icon: 'mic',
        content: `
            <h3>¿Cuándo usar el Present Perfect?</h3>
            <p>Se utiliza para acciones que ocurrieron en un pasado no específico o que empezaron en el pasado y continúan ahora.</p>
            <div class="example-box">
                <b>Estructura:</b> Sujeto + have/has + Participio Pasado<br>
                <i>I have lived here for 5 years.</i> (He vivido aquí por 5 años)
            </div>
            <h3>Marcadores de Tiempo</h3>
            <ul>
                <li><strong>Since / For</strong> (Desde / Por)</li>
                <li><strong>Just / Already / Yet</strong></li>
            </ul>
        `
    },
    {
        id: 4,
        level: 'b1b2',
        levelName: 'Intermedio',
        category: 'listening',
        catName: 'Listening',
        title: 'Entendiendo a los Nativos',
        desc: 'Consejos prácticos para comprender el "Connected Speech" y acentos.',
        icon: 'headphones',
        content: `
            <h3>Connected Speech</h3>
            <p>Los nativos no hablan palabra por palabra, unen los sonidos.</p>
            <div class="example-box">
                <b>Escrito:</b> What are you going to do?<br>
                <b>Hablado (Informal):</b> Whatcha gonna do?
            </div>
            <h3>Técnicas de Mejora</h3>
            <ul>
                <li>Escucha podcasts con transcripciones (Shadowing).</li>
                <li>No intentes traducir en tu mente, busca el contexto general.</li>
            </ul>
        `
    },
    {
        id: 5,
        level: 'c1',
        levelName: 'Avanzado',
        category: 'writing',
        catName: 'Writing',
        title: 'Ensayos Académicos',
        desc: 'Estructura tus ideas de forma persuasiva usando vocabulario complejo.',
        icon: 'edit-3',
        content: `
            <h3>Estructura del Ensayo C1</h3>
            <p>Un texto nivel C1 requiere cohesión, coherencia y un amplio repertorio léxico.</p>
            <div class="example-box">
                <b>Intro:</b> Hook -> Background -> Thesis Statement<br>
                <b>Body:</b> Topic Sentence -> Evidence -> Analysis -> Transition
            </div>
            <h3>Conectores Avanzados</h3>
            <ul>
                <li><i>Furthermore, moreover</i> (Además)</li>
                <li><i>Nevertheless, conversely</i> (Sin embargo, por el contrario)</li>
                <li><i>By and large</i> (En general)</li>
            </ul>
        `
    },
    {
        id: 6,
        level: 'c2',
        levelName: 'Maestría',
        category: 'grammar',
        catName: 'Gramática',
        title: 'Estructuras Invertidas',
        desc: 'Usa inversiones para dar énfasis dramático o formalidad a tu discurso.',
        icon: 'award',
        content: `
            <h3>Inversiones (Inversion)</h3>
            <p>Alterar el orden normal de la oración (Sujeto + Verbo) para lograr énfasis poético o formal.</p>
            <div class="example-box">
                <b>Normal:</b> I have never seen such a beautiful sunset.<br>
                <b>Invertido:</b> <i>Never have I seen</i> such a beautiful sunset.
            </div>
            <h3>Casos Comunes</h3>
            <ul>
                <li>Después de expresiones negativas (Under no circumstances, Seldom, Rarely).</li>
                <li>En condicionales mixtas o formales (Had I known...).</li>
            </ul>
        `
    }
];
