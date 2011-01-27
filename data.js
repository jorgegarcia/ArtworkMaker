var profile = "http://www.jorgegarciamartin.com/testMHD/data/03profile.json";
var url = "http://www.jorgegarciamartin.com/testMHD/data/03full.json";

window.dataForProcessing = null;
window.profileData = null;
window.canvasSize = 400;
window.artist = "Stavro Blofeld";
window.titletext = "Upper Floor Vocal";
$().jquery;

$.getJSON(url, function (res) { dataForProcessing = res; });
$.getJSON(profile, function(res) { profileData = res; });
