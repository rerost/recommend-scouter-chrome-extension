import * as bundle from "../../api/bundle"
import pb = bundle.com.github.rerost.recommend_scouter.api
let ReactDOM = require("react-dom");
import * as React from 'react'
import Scouter, {event} from '../component/scouter'

showScouter()

window.document.addEventListener("click", (ev: MouseEvent) => {
  let elem = ev.toElement
  if (elem.className != "recommend-scouter-item") {
    return
  }
  let dataScoreDescription: any | null = getScoreDescription(elem)
  if (dataScoreDescription == null) {
    return
  }

  window.console.log(dataScoreDescription)
  event.emit("set", dataScoreDescription)
})

function showScouter() {
  let e = window.document.createElement("div")
  ReactDOM.render(<Scouter></Scouter>, e)
  window.document.body.appendChild(e)
}

function getScoreDescription(elem: Element): pb.ScoreDescription | null {
  let dataScoreDescription: string | null = elem.getAttribute("data-score-description");
  if (dataScoreDescription == null) {
   return null
  }
  
  let json: any = JSON.parse(dataScoreDescription)
  return pb.ScoreDescription.fromObject(json)
}
