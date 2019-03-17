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

    window.console.log(this.state.scoreDescription)

    return (
      <div style={style}>
        <div>{this.state.scoreDescription.score_func}</div>
        {
          this.state.scoreDescription.scores.map((score: pb.Score, i: number) => {
            return (
              <div key={i} style={{display: "flex"}}>
                <div style={{marginRight: "auto"}}>{score.name}:</div>
                <div style={{marginLeft: "auto"}}>{score.score}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
