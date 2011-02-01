var profile = "/data/profile_echonest.json";
var full = "/data/analysis_full_echonest.json";

window.dataForProcessing = null;
window.profileData = null;
window.canvasSize = 400;
window.artist = "Artist title";
window.titletext = "Track awesome name!";
$().jquery;

$.getJSON(full, function (res) { dataForProcessing = res; });
$.getJSON(profile, function(res) { profileData = res; });
