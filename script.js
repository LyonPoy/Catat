function ganti() {
document.getElementById("content").style.display = "none";
document.getElementById("content2").style.display = "block";
var audioElem = document.getElementById('audio');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}
		$('#form').submit(function(e) {
		  $('#nama1, #nama2, #nama3, #nama4, #nama5').text($("#namamu").val());

		  // Prevent reload page
		  e.preventDefault();
		});
		new TypeIt(".tulisan", {
		  strings: ["Di awal tahun 2024 ini", "Alhamdulillah gua masih hidup", "meskipun mental gua di hajar abis abisan oleh setiap masalah dan keadaan.", "Gua punya tekad,suatu saat gua bakalan sukses.", "gua ga bakal ngelupain lu pada yang udah bantuin gua secara finansial,yg ngerti keadaan gua kaya gimana,dan selalu ada di saat gua ga punya tempat untuk berkeluh kesah😊"],
		  speed: 65,
		  waitUntilVisible: true,
		}).go();
function toggleSound() {
  var audioElem = document.getElementById('audio');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}