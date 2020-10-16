function createCookie(name, value, days) {
  var expires = '';
  if(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function eraseCookie(name) {
  createCookie(name, '', -1);
}

function save_game(adv, id, f_al) {
  createCookie('save_'+adv, id, 365);
  if(f_al !== false) {
  alert('Игра сохранена!');
  window.location.reload();
  }
}

function delete_save(adv) {
  eraseCookie('autosave_'+adv);
  eraseCookie('save_'+adv);
  alert('Сохранение удалено!');
  window.location.reload();
}

function enable_autosave(adv, id) {
  save_game(adv, id, false);
  createCookie('autosave_'+adv, '1', 365);
  alert('Автосохранение включено!');
  window.location.reload();
}

function disable_autosave(adv) {
  eraseCookie('autosave_'+adv);
  alert('Автосохранение выключено!');
  window.location.reload();
}