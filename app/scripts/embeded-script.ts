import * as bundle from "../../api/bundle"
import pb = bundle.com.github.rerost.recommend_scouter.api

window.document.addEventListener("click", (ev: MouseEvent) => {
  let elem = ev.toElement
  if (elem.className != "recommend-scouter-item") {
    return
  }
  let dataScoreDescription: any | null = getScoreDescription(elem)
  if (dataScoreDescription == null) {
    return
  }
  showScouter(dataScoreDescription)
})

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
