document.getElementById("bundle").innerHTML = ("<tr>"+"<td><input></td>".repeat(9)+"</tr>").repeat(8);
function create() {
  document.getElementById("output").innerText = "/give @p minecraft:bundle{Items:[";
  for (var i = 0; i < 72; i++) {
    if(document.getElementsByTagName("input")[i].value !== "") {
      document.getElementById("output").innerText += `{Count:1b, id:"minecraft:${document.getElementsByTagName("input")[i].value}"},`
    }
  }
  document.getElementById("output").innerText += "]}"
}
