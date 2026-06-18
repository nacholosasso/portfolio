---
name: add-project
description: Agrega un proyecto nuevo a la grilla del portfolio (array `proyectos` en public/index.html). Usar cuando el usuario pida sumar/agregar un proyecto nuevo al portfolio.
---

Agregás una entrada nueva al array `proyectos` definido en [public/index.html](../../../public/index.html) (cerca de la línea 347, dentro del `<script>` antes de `renderizarProyectos`).

## Datos a pedir

Si el usuario no los dio todos en su mensaje, preguntá los que falten:

- `titulo`: nombre del proyecto.
- `descripcion`: 1-2 frases, mismo tono que las existentes (foco en stack/arquitectura, en español).
- `linkGithub`: URL del repo. Si no hay, dejar `""`.
- `linkProyecto`: URL del deploy (Firebase Hosting u otro). Si no hay, dejar `""`.
- `imagen`: URL de imagen. Si el usuario no da una, sugerí una de Unsplash con el mismo formato que las existentes (`?auto=format&fit=crop&q=80&w=800`).
- `tecnologias`: array de strings con el stack usado.
- `linkCurso` (opcional, solo si aplica, como en el proyecto "Práctica Python"): URL de un curso/playlist relacionado.

## Cómo insertar

1. Leé el array `proyectos` completo para ver el formato exacto y la indentación (8 espacios para `{`/`}`, 12 espacios para cada propiedad).
2. Insertá el objeto nuevo **al final del array**, justo antes del `];` de cierre, agregando la coma que falte en el objeto que hoy es el último.
3. Mantené el mismo orden de propiedades que los objetos existentes: `titulo, descripcion, linkGithub, linkProyecto, imagen, tecnologias` (y `linkCurso` al final si aplica).
4. No toques nada de `renderizarProyectos()` ni del resto del archivo — esa función ya soporta `linkCurso` opcional y tecnologías vacías.
5. No hagas commit ni deploy: eso lo decide el usuario.

## Después de insertar

Mostrá un resumen corto del objeto agregado y en qué línea quedó, para que el usuario lo revise antes de commitear.
