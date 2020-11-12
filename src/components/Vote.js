import React from 'react'
import { Label, Icon } from "semantic-ui-react"

function Vote() {
    return (
      <Label color="blue" ribbon="right" className="vote">
        <Icon name="paper plane" size="big" className="compact" />
        <div style={{ float: "right" }}>
          <p>Already Voted</p>
        </div>
      </Label>
    )
}

export default Vote
