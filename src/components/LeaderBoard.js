import React from "react"
import { connect } from "react-redux"
import LeaderCard from "./LeaderCard"
import { fetchUsers } from "./../actions"
import _ from 'lodash'

class LeaderBoard extends React.Component{
  componentDidMount = () => {
    this.props.fetchUsers()
  }

  leaderBoards = () => {
    let { users } = this.props
   
    let leaderBoardList = []
    
    for(let user in users) {   
      let usr = _.cloneDeep(users[user])
     
      usr.nQuestions = users[user]["questions"].length
      usr.nAnswers = _.size(users[user]["answers"])
      usr.totalScore = users[user]["questions"].length + _.size(users[user]["answers"])
      
      leaderBoardList.push(usr) 
    }

    leaderBoardList = _.orderBy(leaderBoardList, ['totalScore'], ['asc'])

    return leaderBoardList.map((leader, index) =>
      <LeaderCard user={leader} key={index}/>)
  }

  render = () => <div>{this.leaderBoards()}</div>
}

const mapStateToProps = state => {
  return {
    users: state.users, 
    questions: state.questions.questions
  }
}

export default connect(mapStateToProps, {
  fetchUsers,
})(LeaderBoard)
