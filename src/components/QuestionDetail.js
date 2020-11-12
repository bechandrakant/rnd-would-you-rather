import React, { Fragment } from "react"
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { Header, Button, Form, Radio, Segment, Progress, Image 
} from "semantic-ui-react"
import { 
  saveQuestionAnswer, 
  setResOrQuestion,
  fetchUsers,
  fetchQuestions 
} from "./../actions"
import Vote from "./Vote"

class QuestionDetail extends React.Component {
  state = {
    value: "", 
  }

  componentDidMount(){
    this.props.fetchUsers()
    this.props.fetchQuestions()
  }

  handleChange = (e, { value }) => this.setState({ value })

  onClick = () => {
    this.props.history.push("/")
  }

  handleSubmit = e => {
    e.preventDefault()
    const id = this.props.match.params.id
    const question = this.props.questions.questions[`${id}`]
    if (this.state.value !== "") {
      const { currentUser, saveQuestionAnswer } = this.props
      saveQuestionAnswer(currentUser, question.id, this.state.value)
    }
    this.props.setResOrQuestion("Result") 
  }

  render() {
    const id = this.props.match.params.id
    const question = this.props.questions.questions[`${id}`]
    const userWhoPostedQuestion = this.props.users[question.author] 
    const disabled = this.state.value === "" ? true : false

    if (this.props.resOrQues === "Question") {
      return (
        <Fragment>
          <Image
            size="small"
            src={userWhoPostedQuestion.avatarURL}  
          />
          <Header as="h4">Would you rather</Header>

          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Radio
                label={question.firstOption.text}
                name="radioGroup"
                value="firstOption"
                checked={this.state.value === "firstOption"}
                onChange={this.handleChange}
              />
              <br />
              <Radio
                label={question.secondOption.text}
                name="radioGroup"
                value="secondOption"
                checked={this.state.value === "secondOption"}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Button
                color="blue"
                size="tiny"
                fluid
                positive
                disabled={disabled}
                content="Vote"
              />
            </Form.Field>
          </Form>
        </Fragment>
      )
    } else {
      const id = this.props.match.params.id
      const question = this.props.questions.questions[`${id}`]
      const user = this.props.users[this.props.currentUser]
      const userVoted = user.answers[id]
      const votesOptionOne = question["firstOption"]["votes"].length
      const votesOptionTwo = question["secondOption"]["votes"].length
      const totalVotes = votesOptionOne + votesOptionTwo

      return (
        <Fragment>
          <Header as="h4">
            Results:
            <Header.Subheader>Would you rather</Header.Subheader>
          </Header>
          <Segment>
            {userVoted === "firstOption" && <Vote />}
            <p>{question.firstOption.text}</p>
            <Progress
              percent={((votesOptionOne / totalVotes) * 100).toFixed(2)}
              progress
            >
              {votesOptionOne} out of {totalVotes} votes
            </Progress>
          </Segment>
          <Segment>
            {userVoted === "secondOption" && <Vote />}

            <p>{question.secondOption.text}</p>
            <Progress
              percent={((votesOptionTwo / totalVotes) * 100).toFixed(2)}
              progress
            >
              {votesOptionTwo} out of {totalVotes} votes
            </Progress>
          </Segment>

          <Button size="tiny" floated="right" onClick={this.onClick}>
            Back
          </Button>
        </Fragment>
      )
    }
  }
}

const mapStateToProps=(state)=>{
    return {
      questions: state.questions, 
      currentUser: state.auth.user.id, 
      users: state.users, 
      activeList: state.questions.activeList, 
      resOrQues: state.questions.resOrQues
    }
}

QuestionDetail = withRouter(QuestionDetail)

export default connect(mapStateToProps, {
  saveQuestionAnswer,
  setResOrQuestion,
  fetchUsers,
  fetchQuestions
})(QuestionDetail)
