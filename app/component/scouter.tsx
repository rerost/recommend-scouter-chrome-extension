import * as React from 'react'
import { EventEmitter } from 'events'
import * as bundle from "../../api/bundle"
import pb = bundle.com.github.rerost.recommend_scouter.api

export const event = new EventEmitter

interface State {
  scoreDescription: null | pb.ScoreDescription, 
  opend: boolean,
}

export default class Scouter extends React.Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = { scoreDescription: null, opend: false }
  }
  componentDidMount() {
    event.on("set", (scoreDescription: pb.ScoreDescription) => {
      this.setState({
        scoreDescription: scoreDescription,
        opend: this.state.opend,
      })
    })

    event.on("open", () => {
      this.setState({
        scoreDescription: this.state.scoreDescription,
        opend: true,
      })
    })
  }

  render() {
    const style = {
      position: "fixed",
      right: "100px",
      bottom: "10px"
    } as React.CSSProperties

    if (this.state.scoreDescription == null) {
      return <div style={style}>Test</div>
    }

    const scoreDescription = this.state.scoreDescription
    return (
      <div style={style}>
        <div style={{fontStyle: "italic"}}>{scoreDescription.score_func}</div>
        {
          scoreDescription.scores.map((score: pb.Score, i: number) => {
            let scoreName = calcScoreName(score)
            return (
              <div key={i} style={{display: "flex"}}>
                <div style={{marginRight: "auto"}}>{scoreName}:</div>
                <div style={{marginLeft: "auto"}}>{score.score}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}


function calcScoreName(score: pb.Score) {
  if (score.score_func == "") {
    return score.name
  }

  return score.name + `(= ${score.score_func})`
}
