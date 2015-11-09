
// Saves options to chrome.storage.sync.
function save_options() {
  var remain_open = document.getElementById('remain_open').value;
  var position = document.getElementById('position').value;
  var bgcolor = document.getElementById('bgcolor').value;
  var txtcolor = document.getElementById('txtcolor').value;
  var txtsize = document.getElementById('txtsize').value;
  var inner_size = document.getElementById('inner_size').checked;
  var outer_size = document.getElementById('outer_size').checked;
  chrome.storage.sync.set({
    remain_open: remain_open,
    position: position,
    bgcolor: bgcolor,
    txtcolor: txtcolor,
    txtsize: txtsize,
    inner_size: inner_size,
    outer_size: outer_size
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options Saved Successfully!';
    status.style.visibility = 'visible';
    setTimeout(function() {
      status.style.visibility = 'hidden';
      status.textContent = '';
    }, 2000);
  });
}

// Reset options from chrome.storage.sync.
function reset_options() {

  chrome.storage.sync.clear();
  document.getElementById('remain_open').value = '1000';
  document.getElementById('position').value = 'bottom_right';
  document.getElementById('bgcolor').value = '#000000';
  document.getElementById('txtcolor').value = '#ffffff';
  document.getElementById('txtsize').value = '12px';
  document.getElementById('inner_size').value = true;
  document.getElementById('outer_size').value = true;

  var status = document.getElementById('status');
  status.textContent = 'Options Reset Successfully!';
  status.style.visibility = 'visible';
  setTimeout(function() {
    status.style.visibility = 'hidden';
    status.textContent = '';
  }, 2000);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    remain_open: '1000',
    position: 'bottom_right',
    bgcolor: '#000000',
    txtcolor: '#ffffff',
    txtsize: '12px',
    inner_size: true,
    outer_size: true
  }, function(items) {
    document.getElementById('remain_open').value = items.remain_open;
    document.getElementById('position').value = items.position;
    document.getElementById('bgcolor').value = items.bgcolor;
    document.getElementById('txtcolor').value = items.txtcolor;
    document.getElementById('txtsize').value = items.txtsize;
    document.getElementById('inner_size').checked = items.inner_size;
    document.getElementById('outer_size').checked = items.outer_size;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', reset_options);
