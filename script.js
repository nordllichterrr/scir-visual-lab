function setPerspective(mode) {
  const stage = document.getElementById('stage');
  const info = document.getElementById('perspective-info');

  stage.className = 'perspective-stage ' + mode;

  const descriptions = {
    linear: 'Линейная перспектива — объекты визуально организуются относительно общей точки схода.',
    reverse: 'Обратная перспектива — художественный эффект, при котором ближние объекты визуально уменьшаются.',
    aerial: 'Воздушная перспектива — дальние объекты становятся менее контрастными и более размытыми.'
  };

  info.textContent = descriptions[mode];
}
