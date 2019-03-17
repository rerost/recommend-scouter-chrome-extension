import * as protobuf from "protobufjs"

let pbRoot = protobuf.Root.fromJSON(require("../bundlepb.json"))
let ScoreDescription = pbRoot.lookupType("com.github.rerost.recommend_scouter.api.ScoreDescription")

let elements = window.document.getElementsByClassName("recommend-scouter-item");

for (let i = 0; i < elements.length; i++) {
  // TODO: Show scouter
  let elem:Element = elements[i]
  let dataScoreDescription: any | null = getScoreDescription(elem)
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
  
  let json: any = JSON.parse(dataScoreDescription)
  return ScoreDescription.fromObject(json)
}

window.console.log(elements);
