(() => {
  'use strict';
  const es = document.documentElement.lang === 'es';
  const t = (en, translated) => es ? translated : en;
  const base = new URL('../data/', document.currentScript.src);
  const list = document.querySelector('#projects');
  const search = document.querySelector('#search');
  const technology = document.querySelector('#technology');
  let projects = [], snapshot = null, view = 'explore';
  const el = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const link = (label, url) => {
    const a = el('a', label); a.href = url; return a;
  };
  const date = value => new Date(value).toLocaleString(es ? 'es' : 'en', {dateStyle:'medium', timeStyle:'short'});
  const states = {success:t('Passed','Correcto'), failure:t('Failed','Falló'), cancelled:t('Cancelled','Cancelado'), skipped:t('Skipped','Omitido'), timed_out:t('Timed out','Tiempo agotado'), completed:t('Completed','Completado')};
  const runState = r => states[r.conclusion] || (r.status === 'completed' ? t('Other result','Otro resultado') : t('Running or queued','En ejecución o en cola'));
  function render() {
    list.replaceChildren();
    const filtered = projects.filter(p => (p.name + ' ' + p.summary[es?'es':'en'] + ' ' + p.technologies.join(' ')).toLowerCase().includes(search.value.toLowerCase()) && (!technology.value || p.technologies.includes(technology.value)));
    if (view === 'maintenance') filtered.sort((a,b) => Number(hasFailure(b)) - Number(hasFailure(a)));
    document.querySelector('#result-count').textContent = `${filtered.length} ${t('projects','proyectos')}`;
    if (!filtered.length) list.append(el('p', t('No matching projects. Reset the filters to see all projects.','No hay coincidencias. Restablece los filtros para ver todos los proyectos.')));
    for (const p of filtered) {
      const data = snapshot?.projects.find(d => d.slug === p.slug);
      const card = el('article', undefined, 'project-card'); card.id = p.slug;
      card.append(el('p',t('Public source','Código público'),'eyebrow'),el('h2',p.name),el('p',p.summary[es?'es':'en']),el('p',p.technologies.join(' · '),'stack'));
      const dl = el('dl');
      const row = (name,value) => dl.append(el('dt',name),el('dd',value));
      row(t('Stage','Etapa'),p.stage[es?'es':'en'] + (p.stageSource ? ' · README' : ''));
      row(t('Last push','Último push'),data ? date(data.pushedAt) : t('Unavailable','No disponible'));
      row(t('Latest check','Última verificación'), !data ? t('Unavailable','No disponible') : data.runs.length ? `${data.runs[0].name}: ${runState(data.runs[0])} · ${date(data.runs[0].at)}` : t('No GitHub Actions runs found','No se encontraron ejecuciones de GitHub Actions'));
      if (data?.archived) row(t('Repository','Repositorio'),t('Archived','Archivado'));
      if (view === 'maintenance') row(t('Owner next step','Próximo paso del propietario'),p.next[es?'es':'en']);
      card.append(dl);
      const links = el('p',undefined,'card-links');
      links.append(link(t('Repository','Repositorio'),`https://github.com/CesarNPadilla/${p.slug}`));
      if(p.demo) links.append(link(t('Visit website','Visitar sitio'),p.demo));
      card.append(links);
      const details = el('details'); details.append(el('summary',t('Evidence and updates','Evidencia y novedades')));
      details.append(el('p',t('Technologies: curated from repository code and documentation. Stage: explicit README statement where available.','Tecnologías: selección del código y la documentación. Etapa: declaración explícita del README cuando está disponible.')));
      if (data) {
        details.append(el('p',`${data.stars} ${t('stars','estrellas')} · ${data.forks} forks`));
        details.append(data.release ? link(`${t('Latest release','Última versión')}: ${data.release.name} · ${date(data.release.at)}`, data.release.url) : el('p',t('No published GitHub releases','Sin versiones publicadas en GitHub')));
        const ul = el('ul');
        data.runs.slice(0,3).forEach(r => {const li=el('li'); li.append(link(`${r.name}: ${runState(r)} · ${date(r.at)} · ${r.sha.slice(0,7)}`,r.url)); ul.append(li);});
        details.append(ul);
      }
      details.append(link(t('Documentation and roadmap','Documentación y hoja de ruta'),`https://github.com/CesarNPadilla/${p.slug}#readme`));
      card.append(details); list.append(card);
    }
  }
  function hasFailure(p) { return snapshot?.projects.find(d=>d.slug===p.slug)?.runs[0]?.conclusion === 'failure'; }
  search.addEventListener('input',render); technology.addEventListener('change',render);
  document.querySelector('form').addEventListener('reset',()=> {search.value=''; technology.value=''; render();});
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click',()=> {
    view=button.dataset.view;
    document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    render();
  }));
  async function load(file) {const response=await fetch(new URL(file,base)); if(!response.ok) throw new Error('Unavailable'); return response.json();}
  async function init() {
    try {
      projects=await load('projects.json');
      try {snapshot=await load('github.json');} catch { /* Curated summaries remain available. */ }
      [...new Set(projects.flatMap(p=>p.technologies))].sort().forEach(name=> {const option=el('option',name);option.value=name;technology.append(option);});
      const freshness=document.querySelector('#freshness');
      freshness.textContent=snapshot ? `${t('GitHub snapshot','Datos de GitHub')}: ${date(snapshot.fetchedAt)}${Date.now()-Date.parse(snapshot.fetchedAt)>7200000 ? t(' · Refresh delayed; showing last saved data',' · Actualización retrasada; se muestran los últimos datos guardados') : ''}` : t('GitHub data unavailable. Showing curated project summaries.','Datos de GitHub no disponibles. Se muestran los resúmenes seleccionados.');
      render();
    } catch {
      document.querySelector('#freshness').textContent=t('Project data could not be loaded. Reload to retry.','No se pudieron cargar los proyectos. Recarga para reintentar.');
      list.append(link(t('Explore repositories on GitHub','Explorar repositorios en GitHub'),'https://github.com/CesarNPadilla?tab=repositories'));
    }
  }
  init();
})();
