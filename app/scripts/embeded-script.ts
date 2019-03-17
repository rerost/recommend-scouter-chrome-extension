import * as bundle from "../../api/bundle"
import pb = bundle.com.github.rerost.recommend_scouter.api

let elements = window.document.getElementsByClassName("recommend-scouter-item");

for (let i = 0; i < elements.length; i++) {
  let elem:Element = elements[i]
  let dataScoreDescription: any | null = getScoreDescription(elem)
  if (dataScoreDescription == null) {
    continue
  }
  showScouter(dataScoreDescription)
}

function showScouter(scoreDescription: pb.ScoreDescription) {
  window.console.log(scoreDescription)
}

function getScoreDescription(elem: Element): pb.ScoreDescription | null {
  let dataScoreDescription: string | null = elem.getAttribute("data-score-description");
  if (dataScoreDescription == null) {
   return null
  }
  
  let json: any = JSON.parse(dataScoreDescription)
  return pb.ScoreDescription.fromObject(json)
}

window.console.log(elements);
