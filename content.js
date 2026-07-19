const FULL_COURSE_DATA = [
  // --- A1/A2: PRINCIPIANTE ---
  {
    id: 1,
    level: 'a1a2',
    levelName: 'Principiante',
    category: 'grammar',
    catName: 'Gramática',
    title: 'The Verb To Be',
    desc: 'The foundation of English: I am, you are, he/she/it is.',
    icon: 'BookOpen',
    content: `
      <h3>Introduction to "To Be"</h3>
      <p>The verb "to be" is used to describe identity, characteristics, and locations. It is the most important verb in English.</p>
      <div class='example-box'>
        <b>English:</b> I am a student. <br>
        <b>Spanish:</b> Yo soy estudiante.
      </div>
      <div class='example-box'>
        <b>English:</b> They are in the park. <br>
        <b>Spanish:</b> Ellos están en el parque.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Change "I am happy" to the negative form.</li>
        <li>Translate: "Ella es mi hermana".</li>
        <li>Make a question using "They are".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Am -> I</li>
        <li>Is -> He, She, It</li>
        <li>Are -> You, We, They</li>
      </ul>
    `
  },
  {
    id: 2,
    level: 'a1a2',
    levelName: 'Principiante',
    category: 'vocab',
    catName: 'Vocabulario',
    title: 'Common Greetings',
    desc: 'Learn how to start a conversation in English.',
    icon: 'MessageCircle',
    content: `
      <h3>Greetings and Farewells</h3>
      <p>First impressions matter! Use formal greetings for work and informal ones for friends.</p>
      <div class='example-box'>
        <b>English:</b> Hello, how are you? <br>
        <b>Spanish:</b> Hola, ¿cómo estás?
      </div>
      <div class='example-box'>
        <b>English:</b> Nice to meet you! <br>
        <b>Spanish:</b> ¡Mucho gusto en conocerte!
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Write a greeting for a job interview.</li>
        <li>Write a greeting for a close friend.</li>
        <li>Translate: "Adiós, nos vemos pronto".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Formal: "Good morning", "How do you do?".</li>
        <li>Informal: "Hi", "What's up?", "Hey".</li>
      </ul>
    `
  },
  {
    id: 3,
    level: 'a1a2',
    levelName: 'Principiante',
    category: 'grammar',
    catName: 'Gramática',
    title: 'Present Simple',
    desc: 'Talking about habits, routines, and general truths.',
    icon: 'BookOpen',
    content: `
      <h3>Present Simple Basics</h3>
      <p>Use the Present Simple for things that happen regularly or are always true. Remember the -s for he/she/it!</p>
      <div class='example-box'>
        <b>English:</b> I drink coffee every morning. <br>
        <b>Spanish:</b> Bebo café cada mañana.
      </div>
      <div class='example-box'>
        <b>English:</b> She works in a bank. <br>
        <b>Spanish:</b> Ella trabaja en un banco.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Write 3 things you do every day.</li>
        <li>Correct the sentence: "He play soccer".</li>
        <li>Translate: "Nosotros vivimos en Madrid".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Use <b>do/does</b> for questions and negatives.</li>
        <li>Add <b>-s</b> or <b>-es</b> to the verb for 3rd person singular.</li>
      </ul>
    `
  },
  {
    id: 4,
    level: 'a1a2',
    levelName: 'Principiante',
    category: 'vocab',
    catName: 'Vocabulario',
    title: 'Family Members',
    desc: 'Vocabulary to describe your family tree.',
    icon: 'Users',
    content: `
      <h3>Talking About Family</h3>
      <p>Essential nouns to describe your relationship with others.</p>
      <div class='example-box'>
        <b>English:</b> My brother is older than me. <br>
        <b>Spanish:</b> Mi hermano es mayor que yo.
      </div>
      <div class='example-box'>
        <b>English:</b> She is my aunt. <br>
        <b>Spanish:</b> Ella es mi tía.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>List 5 family members in English.</li>
        <li>Translate: "Mis abuelos son divertidos".</li>
        <li>Describe your sibling in one sentence.</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Immediate family: Father, Mother, Brother, Sister.</li>
        <li>Extended family: Uncle, Aunt, Cousin, Grandparents.</li>
      </ul>
    `
  },
  {
    id: 5,
    level: 'a1a2',
    levelName: 'Principiante',
    category: 'listening',
    catName: 'Escucha',
    title: 'Basic Dialogue: Ordering Food',
    desc: 'Understand how to order in a cafe or restaurant.',
    icon: 'Ear',
    content: `
      <h3>Ordering Food</h3>
      <p>Focus on phrases like "I would like..." and "Can I have...".</p>
      <div class='example-box'>
        <b>English:</b> I'd like a cheeseburger, please. <br>
        <b>Spanish:</b> Me gustaría una hamburguesa con queso, por favor.
      </div>
      <div class='example-box'>
        <b>English:</b> Anything else? <br>
        <b>Spanish:</b> ¿Algo más?
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Practice saying "Can I have a coffee?" out loud.</li>
        <li>Roleplay ordering a pizza.</li>
        <li>Identify the polite word used in the examples.</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>"I'd like"</b> is more polite than "I want".</li>
        <li>Always use <b>"Please"</b> and <b>"Thank you"</b>.</li>
      </ul>
    `
  },
  {
    id: 6,
    level: 'a1a2',
    levelName: 'Principiante',
    category: 'speaking',
    catName: 'Habla',
    title: 'Introducing Yourself',
    desc: 'How to give a basic introduction of who you are.',
    icon: 'Mic',
    content: `
      <h3>The Elevator Pitch (Basic)</h3>
      <p>Learn to share your name, age, origin, and profession.</p>
      <div class='example-box'>
        <b>English:</b> Hi! I'm Daniel, I'm from Spain and I'm a developer. <br>
        <b>Spanish:</b> ¡Hola! Soy Daniel, soy de España y soy desarrollador.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Record yourself saying your introduction.</li>
        <li>Practice introducing a friend.</li>
        <li>Add one hobby to your introduction.</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Use <b>"I am from..."</b> for origin.</li>
        <li>Use <b>"I am a/an..."</b> for professions.</li>
      </ul>
    `
  },
  {
    id: 7,
    level: 'a1a2',
    levelName: 'Principiante',
    category: 'reading',
    catName: 'Lectura',
    title: 'Simple Descriptions',
    desc: 'Read and understand basic descriptions of people and places.',
    icon: 'FileText',
    content: `
      <h3>Reading Basics</h3>
      <p>Look for adjectives and nouns to understand the core meaning of a text.</p>
      <div class='example-box'>
        <b>English:</b> The house is big and white. It has a beautiful garden. <br>
        <b>Spanish:</b> La casa es grande y blanca. Tiene un jardín hermoso.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Describe your room in 3 simple sentences.</li>
        <li>Find the adjective in: "The fast car is red".</li>
        <li>Translate: "El perro es pequeño y marrón".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Adjectives usually come <b>before</b> the noun in English.</li>
        <li>Focus on <b>Subject + Verb + Adjective</b> patterns.</li>
      </ul>
    `
  },
  {
    id: 8,
    level: 'a1a2',
    levelName: 'Principiante',
    category: 'writing',
    catName: 'Escritura',
    title: 'Writing Simple Sentences',
    desc: 'Mastering the SVO (Subject-Verb-Object) structure.',
    icon: 'PenTool',
    content: `
      <h3>The SVO Structure</h3>
      <p>Most English sentences follow a strict order: Subject $\\rightarrow$ Verb $\\rightarrow$ Object.</p>
      <div class='example-box'>
        <b>English:</b> I (S) love (V) English (O). <br>
        <b>Spanish:</b> Yo amo el inglés.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Write 5 sentences using the SVO pattern.</li>
        <li>Reorder: "Pizza love I" $\\rightarrow$ "I love pizza".</li>
        <li>Translate: "Ella lee un libro".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Do not omit the subject (unlike Spanish).</li>
        <li>The verb always follows the subject.</li>
      </ul>
    `
  },
  // --- B1/B2: INTERMEDIO ---
  {
    id: 9,
    level: 'b1b2',
    levelName: 'Intermedio',
    category: 'grammar',
    catName: 'Gramática',
    title: 'Present Perfect',
    desc: 'Connecting the past with the present.',
    icon: 'BookOpen',
    content: `
      <h3>Present Perfect Basics</h3>
      <p>Use <b>have/has + past participle</b> for experiences or actions that started in the past and continue now.</p>
      <div class='example-box'>
        <b>English:</b> I have visited London twice. <br>
        <b>Spanish:</b> He visitado Londres dos veces.
      </div>
      <div class='example-box'>
        <b>English:</b> She has lived here for five years. <br>
        <b>Spanish:</b> Ella ha vivido aquí por cinco años.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Write about a place you have visited.</li>
        <li>Change "I saw that movie" to Present Perfect.</li>
        <li>Translate: "Nunca he comido sushi".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>For:</b> Duration (e.g., for 2 hours).</li>
        <li><b>Since:</b> Starting point (e.g., since 2010).</li>
      </ul>
    `
  },
  {
    id: 10,
    level: 'b1b2',
    levelName: 'Intermedio',
    category: 'vocab',
    catName: 'Vocabulario',
    title: 'Phrasal Verbs (Intro)',
    desc: 'Understanding verbs that change meaning with prepositions.',
    icon: 'MessageCircle',
    content: `
      <h3>What are Phrasal Verbs?</h3>
      <p>A phrasal verb is a verb + particle (preposition/adverb) that creates a new meaning.</p>
      <div class='example-box'>
        <b>English:</b> Give up (Stop trying). <br>
        <b>Spanish:</b> Rendirse / Dejar de hacer algo.
      </div>
      <div class='example-box'>
        <b>English:</b> Wake up (Stop sleeping). <br>
        <b>Spanish:</b> Despertarse.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Create a sentence using "get up".</li>
        <li>Find the meaning of "look for" in a dictionary.</li>
        <li>Translate: "No te rindas".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Some are <b>separable</b> (I picked the book up / I picked up the book).</li>
        <li>Context is key to understanding them.</li>
      </ul>
    `
  },
  {
    id: 11,
    level: 'b1b2',
    levelName: 'Intermedio',
    category: 'grammar',
    catName: 'Gramática',
    title: 'First & Second Conditionals',
    desc: 'Talking about possibilities and imaginary situations.',
    icon: 'BookOpen',
    content: `
      <h3>Conditionals</h3>
      <p>The First Conditional is for real possibilities; the Second is for hypothetical dreams.</p>
      <div class='example-box'>
        <b>English:</b> If it rains, I will stay home. (1st) <br>
        <b>Spanish:</b> Si llueve, me quedaré en casa.
      </div>
      <div class='example-box'>
        <b>English:</b> If I won the lottery, I would buy a plane. (2nd) <br>
        <b>Spanish:</b> Si ganara la lotería, compraría un avión.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Complete: "If I have time, I..."</li>
        <li>Complete: "If I were a bird, I..."</li>
        <li>Translate: "Si estudio, aprobaré".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>1st: If + Present Simple $\\rightarrow$ Will + Verb.</li>
        <li>2nd: If + Past Simple $\\rightarrow$ Would + Verb.</li>
      </ul>
    `
  },
  {
    id: 12,
    level: 'b1b2',
    levelName: 'Intermedio',
    category: 'vocab',
    catName: 'Vocabulario',
    title: 'Travel & Tourism',
    desc: 'Essential vocabulary for exploring the world.',
    icon: 'Globe',
    content: `
      <h3>Navigating the World</h3>
      <p>Learn terms for airports, hotels, and sightseeing.</p>
      <div class='example-box'>
        <b>English:</b> I need to check in my luggage. <br>
        <b>Spanish:</b> Necesito facturar mi equipaje.
      </div>
      <div class='example-box'>
        <b>English:</b> Where is the nearest landmark? <br>
        <b>Spanish:</b> ¿Dónde está el punto de referencia más cercano?
      </div>
      <h3>Practical</h3>
      <ul>
        <li>List 5 items you always take in your suitcase.</li>
        <li>Write a request for a late check-out at a hotel.</li>
        <li>Translate: "Boleto de ida y vuelta".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Layover:</b> A stop between flights.</li>
        <li><b>Sightseeing:</b> Visiting famous places.</li>
      </ul>
    `
  },
  {
    id: 13,
    level: 'b1b2',
    levelName: 'Intermedio',
    category: 'listening',
    catName: 'Escucha',
    title: 'Understanding Accents',
    desc: 'Tips for distinguishing between US and UK English.',
    icon: 'Ear',
    content: `
      <h3>US vs UK English</h3>
      <p>English varies globally. The most common differences are in pronunciation and some vocabulary.</p>
      <div class='example-box'>
        <b>English:</b> Apartment (US) vs Flat (UK). <br>
        <b>Spanish:</b> Apartamento.
      </div>
      <div class='example-box'>
        <b>English:</b> Elevator (US) vs Lift (UK). <br>
        <b>Spanish:</b> Ascensor.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Listen to a BBC clip and a CNN clip; note the difference.</li>
        <li>Identify if "Cookie" is US or UK (US).</li>
        <li>Translate: "Tengo una cita con el médico".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>The "r" sound is often softer in UK English (non-rhotic).</li>
        <li>Spelling differs (Color vs Colour).</li>
      </ul>
    `
  },
  {
    id: 14,
    level: 'b1b2',
    levelName: 'Intermedio',
    category: 'speaking',
    catName: 'Habla',
    title: 'Expressing Opinions',
    desc: 'Moving beyond "I think" to more natural phrases.',
    icon: 'Mic',
    content: `
      <h3>Giving Your Point of View</h3>
      <p>To sound more fluent, use variety in how you introduce your thoughts.</p>
      <div class='example-box'>
        <b>English:</b> From my perspective, this is the best option. <br>
        <b>Spanish:</b> Desde mi perspectiva, esta es la mejor opción.
      </div>
      <div class='example-box'>
        <b>English:</b> As far as I'm concerned, it's too late. <br>
        <b>Spanish:</b> En lo que a mí respecta, es demasiado tarde.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Discuss a movie you like using "In my opinion".</li>
        <li>Agree with someone using "I couldn't agree more".</li>
        <li>Disagree politely using "I see your point, but...".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Avoid repeating "I think" in every sentence.</li>
        <li>Use <b>hedging</b> (maybe, perhaps, possibly) to sound more natural.</li>
      </ul>
    `
  },
  {
    id: 15,
    level: 'b1b2',
    levelName: 'Intermedio',
    category: 'reading',
    catName: 'Lectura',
    title: 'Reading Short Articles',
    desc: 'Techniques for skimming and scanning texts.',
    icon: 'FileText',
    content: `
      <h3>Skimming and Scanning</h3>
      <p>You don't need to read every word to understand a text. Skimming is for the general idea; scanning is for specific facts.</p>
      <div class='example-box'>
        <b>English:</b> Scanning for a date: "The event took place on July 14th, 1789". <br>
        <b>Spanish:</b> Buscando una fecha: "El evento tuvo lugar el 14 de julio de 1789".
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Take a news article and find the "Who, What, Where, When".</li>
        <li>Read a paragraph and summarize it in 5 words.</li>
        <li>Translate: "Lee el primer párrafo cuidadosamente".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Skimming:</b> Fast reading for the "gist".</li>
        <li><b>Scanning:</b> Searching for keywords or numbers.</li>
      </ul>
    `
  },
  {
    id: 16,
    level: 'b1b2',
    levelName: 'Intermedio',
    category: 'writing',
    catName: 'Escritura',
    title: 'Informal Emails',
    desc: 'Writing naturally to friends and colleagues.',
    icon: 'PenTool',
    content: `
      <h3>Email Etiquette (Informal)</h3>
      <p>Informal emails use contractions and casual greetings.</p>
      <div class='example-box'>
        <b>English:</b> Hey Sarah, hope you're doing well! <br>
        <b>Spanish:</b> Hola Sarah, ¡espero que estés bien!
      </div>
      <div class='example-box'>
        <b>English:</b> Catch you later, Mike. <br>
        <b>Spanish:</b> Hablamos luego, Mike.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Write an email inviting a friend to a party.</li>
        <li>Use "Best," or "Cheers," as a closing.</li>
        <li>Rewrite "I am writing to inform you" as something casual.</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Use <b>contractions</b> (I'm, don't, can't).</li>
        <li>Keep the tone light and friendly.</li>
      </ul>
    `
  },
  // --- C1: AVANZADO ---
  {
    id: 17,
    level: 'c1',
    levelName: 'Avanzado',
    category: 'grammar',
    catName: 'Gramática',
    title: 'Mixed Conditionals',
    desc: 'Combining past causes with present results.',
    icon: 'BookOpen',
    content: `
      <h3>Advanced Logic: Mixed Conditionals</h3>
      <p>Mixed conditionals are used when the time reference for the "if" clause is different from the "result" clause.</p>
      <div class='example-box'>
        <b>English:</b> If I had studied harder (past), I would be a doctor now (present). <br>
        <b>Spanish:</b> Si hubiera estudiado más, ahora sería doctor.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Create a sentence about a past mistake affecting your current life.</li>
        <li>Translate: "Si yo fuera más alto, habría llegado al estante".</li>
        <li>Identify the time shift in: "If he had taken the map, he wouldn't be lost".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Past Condition $\\rightarrow$ Present Result:</b> If + Past Perfect $\\rightarrow$ Would + Verb.</li>
        <li>These express regret or hypothetical current states.</li>
      </ul>
    `
  },
  {
    id: 18,
    level: 'c1',
    levelName: 'Avanzado',
    category: 'vocab',
    catName: 'Vocabulario',
    title: 'Academic Vocabulary',
    desc: 'Words for formal reports and university settings.',
    icon: 'MessageCircle',
    content: `
      <h3>Elevating Your Language</h3>
      <p>Replace common words with precise academic alternatives to sound more professional.</p>
      <div class='example-box'>
        <b>English:</b> "Analyze" instead of "Look at". <br>
        <b>Spanish:</b> Analizar en lugar de mirar.
      </div>
      <div class='example-box'>
        <b>English:</b> "Subsequently" instead of "Then". <br>
        <b>Spanish:</b> Posteriormente en lugar de entonces.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Rewrite: "This shows that..." using "This illustrates that...".</li>
        <li>Find 3 synonyms for "Important".</li>
        <li>Translate: "El estudio sugiere una correlación significativa".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Avoid <b>slang</b> and <b>phrasal verbs</b> in formal academic writing.</li>
        <li>Use nominalization (turning verbs into nouns) for a more formal tone.</li>
      </ul>
    `
  },
  {
    id: 19,
    level: 'c1',
    levelName: 'Avanzado',
    category: 'grammar',
    catName: 'Gramática',
    title: 'Inversion for Emphasis',
    desc: 'Changing word order to sound more dramatic or formal.',
    icon: 'BookOpen',
    content: `
      <h3>Grammatical Inversion</h3>
      <p>Inversion happens when we move a negative adverb to the front of the sentence, forcing the verb before the subject.</p>
      <div class='example-box'>
        <b>English:</b> Never have I seen such a beautiful place. <br>
        <b>Spanish:</b> Jamás he visto un lugar tan hermoso.
      </div>
      <div class='example-box'>
        <b>English:</b> Rarely do we encounter such problems. <br>
        <b>Spanish:</b> Rara vez encontramos tales problemas.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Rewrite "I have seldom been so insulted" using inversion.</li>
        <li>Translate: "Solo entonces comprendí la verdad".</li>
        <li>Create a sentence starting with "Not only...".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Common triggers: <b>Never, Rarely, Seldom, Only then, Under no circumstances</b>.</li>
        <li>It mimics the structure of a question (Auxiliary + Subject + Verb).</li>
      </ul>
    `
  },
  {
    id: 20,
    level: 'c1',
    levelName: 'Avanzado',
    category: 'vocab',
    catName: 'Vocabulario',
    title: 'Idioms and Metaphors',
    desc: 'Learning the "hidden" meanings of native speakers.',
    icon: 'MessageCircle',
    content: `
      <h3>Beyond Literal Meaning</h3>
      <p>Idioms are phrases where the meaning cannot be guessed from the individual words.</p>
      <div class='example-box'>
        <b>English:</b> Piece of cake (Very easy). <br>
        <b>Spanish:</b> Pan comido.
      </div>
      <div class='example-box'>
        <b>English:</b> Under the weather (Feeling sick). <br>
        <b>Spanish:</b> Sentirse mal / No sentirse bien.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Describe a difficult task using "an uphill battle".</li>
        <li>Translate: "Cuesta un ojo de la cara" using an English idiom.</li>
        <li>Create a short dialogue using two idioms.</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Do not translate idioms literally.</li>
        <li>Use them sparingly in formal contexts.</li>
      </ul>
    `
  },
  {
    id: 21,
    level: 'c1',
    levelName: 'Avanzado',
    category: 'listening',
    catName: 'Escucha',
    title: 'Complex Lectures',
    desc: 'Taking notes and following long academic arguments.',
    icon: 'Ear',
    content: `
      <h3>Active Listening in Lectures</h3>
      <p>Focus on signposting language that indicates the structure of the talk.</p>
      <div class='example-box'>
        <b>English:</b> "Moving on to my next point..." <br>
        <b>Spanish:</b> "Pasando a mi siguiente punto...".
      </div>
      <div class='example-box'>
        <b>English:</b> "To illustrate this, let's look at..." <br>
        <b>Spanish:</b> "Para ilustrar esto, veamos...".
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Listen to a TED talk and write the 3 main arguments.</li>
        <li>Identify when the speaker is summarizing their point.</li>
        <li>Translate: "En conclusión, los datos son contradictorios".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Signposting:</b> Phrases that guide the listener through the presentation.</li>
        <li>Focus on <b>transitions</b> and <b>conclusion markers</b>.</li>
      </ul>
    `
  },
  {
    id: 22,
    level: 'c1',
    levelName: 'Avanzado',
    category: 'speaking',
    catName: 'Habla',
    title: 'Debating Complex Topics',
    desc: 'How to structure an argument and counter-argue fluently.',
    icon: 'Mic',
    content: `
      <h3>The Art of Debate</h3>
      <p>C1 speakers should be able to sustain a long argument with nuance.</p>
      <div class='example-box'>
        <b>English:</b> While I acknowledge your point, I believe the evidence suggests otherwise. <br>
        <b>Spanish:</b> Aunque reconozco su punto, creo que la evidencia sugiere lo contrario.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Debate the topic "AI in Education" for 2 minutes.</li>
        <li>Use "Notwithstanding" to introduce a contrasting point.</li>
        <li>Practice the "Yes, but..." technique.</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Use <b>concessions</b> (acknowledging the other side) to sound more reasonable.</li>
        <li>Focus on <b>cohesion</b> using linking words (Furthermore, Conversely).</li>
      </ul>
    `
  },
  {
    id: 23,
    level: 'c1',
    levelName: 'Avanzado',
    category: 'reading',
    catName: 'Lectura',
    title: 'Analyzing Essays',
    desc: 'Critical reading and identifying the author\\'s tone.',
    icon: 'FileText',
    content: `
      <h3>Critical Reading</h3>
      <p>At this level, you must read "between the lines" to find the subtext and irony.</p>
      <div class='example-box'>
        <b>English:</b> The author's tone is subtly critical of the government's policy. <br>
        <b>Spanish:</b> El tono del autor es sutilmente crítico con la política del gobierno.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Read an editorial and identify the bias.</li>
        <li>Find an example of irony in a short story.</li>
        <li>Translate: "El texto emplea una retórica persuasiva".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Tone:</b> The attitude of the writer (sarcastic, optimistic, objective).</li>
        <li><b>Inference:</b> Drawing conclusions from information not explicitly stated.</li>
      </ul>
    `
  },
  {
    id: 24,
    level: 'c1',
    levelName: 'Avanzado',
    category: 'writing',
    catName: 'Escritura',
    title: 'Formal Reports',
    desc: 'Structuring data and findings into a professional document.',
    icon: 'PenTool',
    content: `
      <h3>Professional Reporting</h3>
      <p>Reports are objective, structured, and use a passive voice to maintain neutrality.</p>
      <div class='example-box'>
        <b>English:</b> It was observed that productivity increased by 10%. <br>
        <b>Spanish:</b> Se observó que la productividad aumentó en un 10%.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Write a 1-paragraph summary of a fake company's quarterly growth.</li>
        <li>Use "Consequently" to show a result.</li>
        <li>Translate: "Se recomienda la implementación de nuevas medidas".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Passive Voice:</b> Useful for focusing on the action rather than the person.</li>
        <li>Use <b>bullet points</b> for clarity in findings.</li>
      </ul>
    `
  },
  // --- C2: MAESTRÍA ---
  {
    id: 25,
    level: 'c2',
    levelName: 'Maestría',
    category: 'grammar',
    catName: 'Gramática',
    title: 'The Subjunctive Mood',
    desc: 'Nuances of desire, necessity, and hypothetical demands.',
    icon: 'BookOpen',
    content: `
      <h3>The English Subjunctive</h3>
      <p>The subjunctive is rare but essential for high-level formal English, often appearing after verbs of suggestion or demand.</p>
      <div class='example-box'>
        <b>English:</b> I suggest that he <b>be</b> present at the meeting. <br>
        <b>Spanish:</b> Sugiero que él esté presente en la reunión.
      </div>
      <div class='example-box'>
        <b>English:</b> It is imperative that she <b>arrive</b> on time. <br>
        <b>Spanish:</b> Es imperativo que ella llegue a tiempo.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Create a demand using "It is essential that...".</li>
        <li>Translate: "Recomiendo que ella estudie más".</li>
        <li>Identify the subjunctive in: "I wish I were taller".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>The verb stays in the <b>base form</b> (no -s for 3rd person).</li>
        <li>"Were" is used instead of "was" for hypothetical "if" and "wish" clauses.</li>
      </ul>
    `
  },
  {
    id: 26,
    level: 'c2',
    levelName: 'Maestría',
    category: 'vocab',
    catName: 'Vocabulario',
    title: 'Nuanced Adjectives',
    desc: 'Replacing basic words with high-precision vocabulary.',
    icon: 'MessageCircle',
    content: `
      <h3>Precision in Description</h3>
      <p>At C2, "very big" becomes "colossal" or "gargantuan". Accuracy is everything.</p>
      <div class='example-box'>
        <b>English:</b> "Exquisite" instead of "Very beautiful". <br>
        <b>Spanish:</b> Exquisito/Primoroso en lugar de muy hermoso.
      </div>
      <div class='example-box'>
        <b>English:</b> "Tenuous" instead of "Weak". <br>
        <b>Spanish:</b> Tenue/Débil en lugar de débil.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Rewrite "The movie was very sad" using a C2 adjective (e.g., "heart-wrenching").</li>
        <li>Find 3 alternatives for "Happy".</li>
        <li>Translate: "Una decisión sumamente controvertida".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Connotation:</b> Understanding if a word is positive, negative, or neutral.</li>
        <li>Avoid <b>intensifiers</b> like "very" or "really"; use a stronger adjective.</li>
      </ul>
    `
  },
  {
    id: 27,
    level: 'c2',
    levelName: 'Maestría',
    category: 'grammar',
    catName: 'Gramática',
    title: 'Advanced Cleft Sentences',
    desc: 'Structuring sentences for maximum focus and impact.',
    icon: 'BookOpen',
    content: `
      <h3>Focus and Emphasis (Clefts)</h3>
      <p>Cleft sentences "split" a sentence into two parts to highlight specific information.</p>
      <div class='example-box'>
        <b>English:</b> It was the weather that ruined the trip. (It-cleft) <br>
        <b>Spanish:</b> Fue el clima lo que arruinó el viaje.
      </div>
      <div class='example-box'>
        <b>English:</b> What I need is a long vacation. (Wh-cleft) <br>
        <b>Spanish:</b> Lo que necesito son unas largas vacaciones.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Convert "I love the way she sings" into a Wh-cleft.</li>
        <li>Translate: "Fue mi hermano quien me lo dijo".</li>
        <li>Create a sentence to emphasize the <i>reason</i> for a decision.</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>It-clefts:</b> Focus on the subject/object.</li>
        <li><b>Wh-clefts:</b> Focus on the action or the need.</li>
      </ul>
    `
  },
  {
    id: 28,
    level: 'c2',
    levelName: 'Maestría',
    category: 'vocab',
    catName: 'Vocabulario',
    title: 'Cultural Nuances & Slang',
    desc: 'Understanding regionalisms and the sociology of language.',
    icon: 'MessageCircle',
    content: `
      <h3>Sociolinguistics</h3>
      <p>Language is more than grammar; it is culture. C2 involves knowing when to be formal and when to use colloquialisms.</p>
      <div class='example-box'>
        <b>English:</b> "To cut a long story short" (Summarizing). <br>
        <b>Spanish:</b> Para no hacer el cuento largo.
      </div>
      <div class='example-box'>
        <b>English:</b> "Beat around the bush" (Avoiding the main point). <br>
        <b>Spanish:</b> Andarse por las ramas.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Describe a situation where you would "beat around the bush".</li>
        <li>Research a common slang term from Australia (e.g., "G\'day").</li>
        <li>Translate: "No me vengas con cuentos".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Register:</b> The level of formality.</li>
        <li><b>Idiomatic competence:</b> The ability to use expressions naturally.</li>
      </ul>
    `
  },
  {
    id: 29,
    level: 'c2',
    levelName: 'Maestría',
    category: 'listening',
    catName: 'Escucha',
    title: 'Fast-Paced Native Speech',
    desc: 'Dealing with connected speech, elisions, and rapid flow.',
    icon: 'Ear',
    content: `
      <h3>Connected Speech</h3>
      <p>Native speakers don't say every word. They blend sounds together (Linking, Elision, Assimilation).</p>
      <div class='example-box'>
        <b>English:</b> "Want to" $\\rightarrow$ "Wanna". "Going to" $\\rightarrow$ "Gonna". <br>
        <b>Spanish:</b> Querer / Ir a.
      </div>
      <div class='example-box'>
        <b>English:</b> "Could have" $\\rightarrow$ "Could've" (Sounds like "could-uv"). <br>
        <b>Spanish:</b> Podría haber.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Listen to a fast movie scene and transcribe a 10-second clip exactly.</li>
        <li>Practice saying "I should have known" as "I should've known".</li>
        <li>Identify a "glottal stop" in a London accent recording.</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Elision:</b> Dropping sounds (e.g., "Next door" $\\rightarrow$ "Nex door").</li>
        <li><b>Linking:</b> Joining the end of one word to the start of another.</li>
      </ul>
    `
  },
  {
    id: 30,
    level: 'c2',
    levelName: 'Maestría',
    category: 'writing',
    catName: 'Escritura',
    title: 'Critical Analysis & Literary Prose',
    desc: 'Writing with style, rhythm, and analytical depth.',
    icon: 'PenTool',
    content: `
      <h3>Writing as an Art</h3>
      <p>At the Mastery level, writing is not just about correctness, but about persuasion, rhythm, and elegance.</p>
      <div class='example-box'>
        <b>English:</b> "The juxtaposition of light and shadow evokes a sense of melancholy." <br>
        <b>Spanish:</b> La yuxtaposición de luz y sombra evoca una sensación de melancolía.
      </div>
      <h3>Practical</h3>
      <ul>
        <li>Write a critical review of a book you read, focusing on its themes.</li>
        <li>Rewrite a simple paragraph to make it sound "poetic".</li>
        <li>Translate: "El autor desmantela la noción de progreso".</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li><b>Rhythm:</b> Varying sentence length to keep the reader engaged.</li>
        <li><b>Precision:</b> Choosing the exact word to convey a specific emotion.</li>
      </ul>
    `
  }
];
