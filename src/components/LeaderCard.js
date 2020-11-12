import React from 'react'
import { Card, Image } from "semantic-ui-react"


const LeaderCard = props => {
  const { avatarURL, name, nQuestions, nAnswers, totalScore } = props.user
  return (
    <Card>
      <Image src={avatarURL} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          Questions Asked: {nQuestions}
        </Card.Description>
        <Card.Description>
          Questions Answered: {nAnswers}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Total Score: {totalScore}</p>
      </Card.Content>
    </Card>
  )
}

export default LeaderCard