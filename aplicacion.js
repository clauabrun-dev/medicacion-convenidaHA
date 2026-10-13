const financiadorSelect = document.querySelector('#financiador');
const consultaInput = document.querySelector('#consulta');
const limpiarBoton = document.querySelector('#limpiar');
const resultadosContenedor = document.querySelector('#resultados');
const sinResultados = document.querySelector('#sinResultados');
const cantidadResultados = document.querySelector('#cantidadResultados');
const cantidadFinanciadores = document.querySelector('#cantidadFinanciadores');
const temaBoton = document.querySelector('#tema');

const normalizar = (texto = '') => texto
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('es')
  .trim();

const escapar = (texto = '') => texto.replace(/[&<>'"]/g, caracter => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[caracter]));

function cargarFinanciadores() {
  const nombres = [...new Set(MEDICAMENTOS.map(item => item.financiador))].sort();
  nombres.forEach(nombre => {
    const option = document.createElement('option');
    option.value = nombre;
    option.textContent = FINANCIADORES[nombre]?.nombre || nombre;
    financiadorSelect.appendChild(option);
  });
}

function filtrar() {
  const financiador = financiadorSelect.value;
  const consulta = normalizar(consultaInput.value);
  return MEDICAMENTOS.filter(item => {
    const coincideFinanciador = !financiador || item.financiador === financiador;
    const textoBuscable = normalizar(`${item.droga} ${item.medicamento} ${item.auditoria || ''} ${item.financiador} ${item.categoria || ''}`);
    const coincideConsulta = !consulta || textoBuscable.includes(consulta);
    return coincideFinanciador && coincideConsulta;
  });
}

function claseAuditoria(valor = 'No informado') {
  const estado = normalizar(valor);
  if (estado === 'si') return 'auditoria-si';
  if (estado === 'no') return 'auditoria-no';
  if (estado.startsWith('solo') || (estado.includes('si') && estado.includes('no'))) return 'auditoria-condicional';
  return 'auditoria-no-informada';
}

function renderizar() {
  const filas = filtrar();
  const grupos = Object.groupBy
    ? Object.groupBy(filas, item => item.financiador)
    : filas.reduce((acc, item) => ((acc[item.financiador] ||= []).push(item), acc), {});

  cantidadResultados.textContent = filas.length.toLocaleString('es-AR');
  cantidadFinanciadores.textContent = Object.keys(grupos).length;
  sinResultados.hidden = filas.length !== 0;

  const crearTabla = items => {
    const cuerpo = items.map(item => `
      <tr>
        <td>${escapar(item.droga)}</td>
        <td>${escapar(item.medicamento)}</td>
        <td><span class="auditoria ${claseAuditoria(item.auditoria)}">${escapar(item.auditoria || 'No informado')}</span></td>
      </tr>`).join('');

    return `
      <div class="tabla-contenedor">
        <table>
          <thead><tr><th>Droga</th><th>Nombre comercial / presentación</th><th>Auditoría médica</th></tr></thead>
          <tbody>${cuerpo}</tbody>
        </table>
      </div>`;
  };

  resultadosContenedor.innerHTML = Object.entries(grupos).map(([nombre, items]) => {
    const meta = FINANCIADORES[nombre];
    const nombreVisible = meta.nombre || nombre;
    const contenido = meta.categorias
      ? `<div class="categorias">${Object.entries(meta.categorias).map(([categoria, datosCategoria]) => {
          const itemsCategoria = items.filter(item =>
            (item.categoria || meta.categoriaPredeterminada || 'General') === categoria
          );
          if (!itemsCategoria.length) return '';
          return `
            <details class="subgrupo">
              <summary>
                <strong>${escapar(categoria)}</strong>
                <span class="vigencia">${escapar(datosCategoria.vigencia)}</span>
                <span class="items">${itemsCategoria.length} ítems</span>
                <span class="flecha">▶</span>
              </summary>
              ${crearTabla(itemsCategoria)}
            </details>`;
        }).join('')}</div>`
      : crearTabla(items);

    return `
      <details class="grupo" style="--financiador-color: ${escapar(meta.color || '#164e70')}" open>
        <summary>
          <h2>${escapar(nombreVisible)}</h2>
          <span class="vigencia">Vigencia: ${escapar(meta.vigencia)}</span>
          <span class="items">${items.length} ítems</span>
          <span class="flecha">▼</span>
        </summary>
        ${contenido}
      </details>`;
  }).join('');
}

financiadorSelect.addEventListener('change', renderizar);
consultaInput.addEventListener('input', renderizar);
limpiarBoton.addEventListener('click', () => {
  financiadorSelect.value = '';
  consultaInput.value = '';
  consultaInput.focus();
  renderizar();
});

temaBoton.addEventListener('click', () => {
  document.body.classList.toggle('oscuro');
  const oscuro = document.body.classList.contains('oscuro');
  temaBoton.textContent = oscuro ? '☾' : '☀';
  localStorage.setItem('tema-medicacion', oscuro ? 'oscuro' : 'claro');
});

if (localStorage.getItem('tema-medicacion') === 'oscuro') {
  document.body.classList.add('oscuro');
  temaBoton.textContent = '☾';
}

cargarFinanciadores();
renderizar();
