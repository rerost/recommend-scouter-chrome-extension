let elements = window.document.getElementsByClassName("recommend-scouter-item");

for (let i = 0; i < elements.length; i++) {
  // TODO: Show scouter
  let elem:Element = elements[i]
  let dataScoreDescription: any = getScoreDescription(elem)
  if (dataScoreDescription == null) {
    continue
  }
  showScouter(dataScoreDescription)
}

function showScouter(scoreDescription: any) {
  window.console.log(scoreDescription)
}

function getScoreDescription(elem: Element): any | null {
  let dataScoreDescription: string | null = elem.getAttribute("data-score-description");
  if (dataScoreDescription == null) {
    return null
  }

  return JSON.parse(dataScoreDescription)
}

window.console.log(elements);
