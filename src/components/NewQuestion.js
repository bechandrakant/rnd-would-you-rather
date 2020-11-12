import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom"
import {Field, reduxForm} from 'redux-form'
import { createQuestion } from './../actions'

class NewQuestion extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error": ""}`

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    )
  }

  onSubmit = async formValues => {
    await this.props.createQuestion({
        author:this.props.userId,
        optionOneText:formValues.firstOption,
        optionTwoText: formValues.secondOption
    })
    this.props.history.push("/")  
  }

  renderError = meta => {
    const { error, touched } = meta
    if (touched && error) 
        return (<div className="ui error message">
          <div className="header">{error}</div>
        </div>)
  }

  render() {
    return (
      <div>
        <h1>Add New Question</h1>
        <h3>Would you rather?</h3>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="firstOption"
            component={this.renderInput}
            label="First Option"
          />
          <Field
            name="secondOption"
            component={this.renderInput}
            label="Second Option"
          />
          <button className="ui button blue">Add</button>
        </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.firstOption) {
    errors.firstOption = "You must enter Option One"
  }
  if (!formValues.secondOption) {
    errors.secondOption = "You must enter Option Two"
  }
  return errors
}

const mapStateToProps=(state)=>{
    return{
        userId: state.auth.user.id, 
        question: state.questions.createdQuestion
    }
}

 NewQuestion = reduxForm({
   form: "newQuestionCreate",
   validate
 })(NewQuestion)

 NewQuestion = withRouter(NewQuestion)

export default connect(mapStateToProps, { createQuestion })(NewQuestion)
