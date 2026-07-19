import codecs
with codecs.open('content.js', 'r', 'utf-8') as f:
    text = f.read()

tech_lessons = u'''
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
'''

# Find the end of the array
import re
text = re.sub(r'    \}\r?\n\];', tech_lessons, text)

with codecs.open('content.js', 'w', 'utf-8') as f:
    f.write(text)
print('Successfully appended tech lessons!')
