function createPending(text) {
  var element = document.createElement("span");
  element.className = "pending";
  element.textContent = text;
  return element;
}

function fillElement(id, value, placeholder) {
  var element = document.getElementById(id);

  if (value) {
    element.textContent = value;
  } else {
    element.appendChild(createPending(placeholder));
  }
}

function configureTeam(integrantes) {
  var team = document.getElementById("team");

  if (!integrantes.length) {
    var emptyItem = document.createElement("li");
    emptyItem.appendChild(createPending("nomes dos alunos a preencher"));
    team.appendChild(emptyItem);
    return;
  }

  integrantes.forEach(function (name) {
    var item = document.createElement("li");
    item.textContent = name;
    team.appendChild(item);
  });
}

function configureLink(id, url) {
  var link = document.getElementById(id);

  if (url) {
    link.href = url;
    return;
  }

  link.setAttribute("aria-disabled", "true");
  link.removeAttribute("target");
  link.textContent = "Link ainda não adicionado";
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
}

var config = window.SITE_CONFIG;

fillElement("tema", config.tema, "tema a preencher");
fillElement("descricao", config.descricao, "descrição a preencher");
fillElement("objetivo", config.objetivo, "objetivo a preencher");
configureTeam(config.integrantes);
configureLink("link-mapa", config.linkMapa);
configureLink("link-pbi", config.linkPowerBI);

