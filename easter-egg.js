document.addEventListener('DOMContentLoaded', function () {
  var trigger = document.getElementById('footer-easter-egg');
  if (!trigger) return;
  trigger.addEventListener('click', function () {
    if (document.getElementById('donkey-runner')) return;
    var el = document.createElement('div');
    el.id = 'donkey-runner';
    el.textContent = '🫏';
    document.body.appendChild(el);
    el.addEventListener('animationend', function () { el.remove(); });
  });
});
