# Medicación Convenida

Buscador estático de medicamentos convenidos por financiador.

## Contenido actual

La versión actual incluye los listados de Poder Judicial, APOS La Rioja, APSOT, ASE-Medifé, OSDE Alto Costo, Caja Notarial, Colegio de Escribanos de la Provincia, FEMÉDICA Alto Costo, IASEP Formosa, INSSSEP Chaco, MEDICUS, OMINT, SEMPRE, REDBRIDGE, Swiss Medical y Prevención Salud. La base contiene droga, nombre comercial/presentación y el estado de autorización o auditoría médica; no incluye los códigos HA de internación ni de ambulatorio.

Para APOS La Rioja se incorporaron 194 registros únicos de la propuesta de septiembre de 2026. Se excluyeron ocho duplicados exactos detectados en el PDF original.

Para APSOT se incorporaron 195 registros del listado de abril de 2025, sin duplicados exactos.

Para ASE-Medifé se incorporaron 194 registros del listado de julio de 2025, sin duplicados exactos. La revisión página por página permitió recuperar seis registros ubicados en el primer renglón de las páginas 2 a 7 del PDF.

Para OSDE Alto Costo se conservaron 54 registros del listado de junio de 2025, que informa la condición de auditoría médica (Sí, No o Solo 1.ª vez), y se agregaron 541 registros complementarios del anexo oncológico de agosto de 2026. Posteriormente se actualizaron las condiciones de auditoría de LONQUEX y PEG NEUTROPINE PA y se incorporaron siete registros adicionales informados por el área. OSDE totaliza 602 registros. Cuando la auditoría depende del ámbito, se distingue ambulatorio de internación; cuando no fue informada, se muestra "No informado".

Para Caja Notarial se incorporaron 157 registros del listado de julio de 2026, sin duplicados exactos. El documento indica autorización para cada ciclo y documentación respaldatoria para inicios o cambios de tratamiento, pero no identifica auditoría médica por medicamento; por ese motivo la columna se muestra como "No informado".

Para Colegio de Escribanos de la Provincia se incorporaron 184 registros, sin duplicados exactos. El documento informa vigencia desde el 1 de julio, sin especificar el año en el contenido, y no identifica auditoría médica por medicamento.

Para FEMÉDICA Alto Costo se incorporaron 187 registros del listado de julio de 2026, sin duplicados exactos. El documento no identifica auditoría médica por medicamento; por ese motivo la columna se muestra como "No informado".

Para IASEP Formosa se incorporaron 194 registros únicos con vigencia 1/9/2025. Se excluyeron ocho duplicados exactos detectados en el PDF original. El documento no identifica auditoría médica por medicamento.

Para INSSSEP Chaco se incorporaron 195 registros con vigencia 20/7/2026, sin duplicados exactos. El documento no identifica auditoría médica por medicamento.

Para MEDICUS se incorporaron 129 registros de la actualización de julio de 2026, sin duplicados exactos. El documento no identifica auditoría médica por medicamento.

Para OMINT se incorporaron 237 registros de la actualización de noviembre de 2025, cuyo encabezado interno refiere a un listado base de junio de 2025. No se detectaron duplicados exactos y el documento no identifica auditoría médica por medicamento.

Para SEMPRE se incorporaron 194 registros únicos de una propuesta sin fecha de vigencia informada en el contenido. Se excluyeron tres duplicados exactos detectados en el PDF original. El documento no identifica auditoría médica por medicamento.

Para Swiss Medical se incorporaron 214 registros del listado vigente desde el 1 de noviembre de 2026, sin duplicados exactos. La columna de autorización previa del archivo fuente se muestra como "Sí" cuando está expresamente indicada y como "No" cuando la celda está vacía.

Para Prevención Salud se incorporaron 206 registros del listado vigente desde el 1 de noviembre de 2026, sin duplicados exactos. Todos los medicamentos están identificados en el archivo fuente como sujetos a autorización previa, por lo que la columna de Auditoría Médica se muestra como "Sí".

## Publicación en GitHub Pages

1. Subir todos los archivos y carpetas de este paquete a la raíz del repositorio.
2. Abrir `Settings` en el repositorio.
3. Seleccionar `Pages`.
4. En `Build and deployment`, elegir `Deploy from a branch`.
5. Seleccionar la rama `main` y la carpeta `/root`.
6. Presionar `Save`.

## Control antes de publicar

Verificar que la información pueda ser expuesta públicamente. GitHub Pages puede publicar el sitio en Internet aunque el repositorio sea privado, según el plan utilizado.

## Actualización futura

Los registros se encuentran en `datos.js`. Cada financiador debe indicar su vigencia y el enlace a su PDF fuente. Antes de reemplazar un listado, conservar la versión anterior como respaldo y verificar búsquedas de control.
