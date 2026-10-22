/* Buscador estático: sustituye al AJAX de WordPress (admin-ajax.php no existe en Hugo) */
(function () {
  var input = document.getElementById('s');
  var box = document.getElementById('suggestions');
  var list = document.getElementById('suggestionslist');
  if (!input || !box || !list) return;

  var indice = [];
  fetch('/index.json').then(function (r) { return r.json(); }).then(function (d) { indice = d; });

  function buscar(q) {
    q = q.toLowerCase().trim();
    list.innerHTML = '';
    if (q.length < 2) { box.style.display = 'none'; return; }
    var hits = indice.filter(function (p) {
      return (p.title + ' ' + p.text).toLowerCase().indexOf(q) !== -1;
    }).slice(0, 6);
    if (!hits.length) { box.style.display = 'none'; return; }
    hits.forEach(function (p) {
      var a = document.createElement('a');
      a.href = p.url;
      a.textContent = p.title;
      var div = document.createElement('div');
      div.className = 'suggestion';
      div.appendChild(a);
      list.appendChild(div);
    });
    box.style.display = 'block';
  }

  input.addEventListener('keyup', function () { buscar(this.value); });
  input.addEventListener('blur', function () { setTimeout(function () { box.style.display = 'none'; }, 200); });
  input.addEventListener('focus', function () { if (this.value.length >= 2) buscar(this.value); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && document.activeElement === input) {
      var primero = list.querySelector('a');
      if (primero) { window.location = primero.href; e.preventDefault(); }
    }
  });
})();
