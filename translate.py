import re
with open('content.js', 'r', encoding='utf-8') as f:
    text = f.read()

replacements = [
    (r'Choose the correct form: ', 'Elige la forma correcta: '),
    (r'What is the contraction of ', '¿Cuál es la contracción de '),
    (r'What type of sentence is this\?', '¿Qué tipo de oración es esta?'),
    (r'Which greeting is MOST formal\?', '¿Qué saludo es MÁS formal?'),
    (r' means:', ' significa:'),
    (r'Which is used when LEAVING at night\?', '¿Cuál se usa al DESPEDIRSE de noche?'),
    (r'Which is correct negative form\?', '¿Cuál es la forma negativa correcta?'),
    (r'Which word is a frequency adverb\?', '¿Qué palabra es un adverbio de frecuencia?'),
    (r'How do you say', '¿Cómo se dice'),
    (r' in English\?', ' en inglés?'),
    (r'What day comes after', '¿Qué día viene después de'),
    (r'What is the THIRD month of the year\?', '¿Cuál es el TERCER mes del año?'),
    (r'The "th" in "think" sounds like:', 'La "th" en "think" suena como:'),
    (r' in American English is pronounced:', ' en inglés americano se pronuncia:'),
    (r'The difference between', 'La diferencia entre'),
    (r'What is the past of', '¿Cuál es el pasado de'),
    (r'Correct negative past:', 'Pasado negativo correcto:'),
    (r'Which is a past time marker\?', '¿Cuál es un marcador de tiempo en pasado?'),
    (r'Structure of Present Perfect:', 'Estructura del Present Perfect:'),
    (r'Choose the correct auxiliary:', 'Elige el auxiliar correcto:'),
    (r'Which conditional discusses an impossible PAST situation\?', '¿Qué condicional habla de una situación imposible en el PASADO?'),
    (r'Which is the most FORMAL way to express an opinion\?', '¿Cuál es la forma más FORMAL de expresar una opinión?'),
    (r' is used to:', ' se usa para:'),
    (r'The "Shadowing" technique means:', 'La técnica de "Shadowing" significa:'),
    (r'Which verb completes this phrasal verb\?', '¿Qué verbo completa este phrasal verb?'),
    (r'Which is the most formal email opening\?', '¿Cuál es el saludo de email más formal?'),
    (r' is placed:', ' se coloca:'),
    (r'Complete the phrase:', 'Completa la frase:'),
    (r'The prefix "un-" means:', 'El prefijo "un-" significa:'),
    (r' expresses:', ' expresa:'),
    (r'when did the action happen\?', '¿cuándo ocurrió la acción?'),
    (r'What should go in the INTRODUCTION of an essay\?', '¿Qué debe ir en la INTRODUCCIÓN de un ensayo?'),
    (r' in Spanish means:', ' en español significa:'),
    (r'Fillers like (.*) are used to:', r'Fillers (muletillas) como \1 se usan para:'),
    (r'"Circumlocution" means:', '"Circunlocución" significa:')
]

for regex, repl in replacements:
    text = re.sub(regex, repl, text, flags=re.IGNORECASE)

with open('content.js', 'w', encoding='utf-8') as f:
    f.write(text)
print('Translated content.js')
