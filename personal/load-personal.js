// Loads personal data before the main app script.
// file:// cannot use XHR HEAD — always load committed examples first, then
// gitignored overrides (404 is OK when a friend has not copied their own files).
(function(){
  function load(url){
    document.write('<script src="'+url+'"><\/script>');
  }
  load('personal/historical-seeds.example.js');
  load('personal/personal-profile.example.js');
  load('personal/historical-seeds.js');
  load('personal/personal-profile.js');
})();
