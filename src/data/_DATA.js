let users = {
  donaldtrump: {
    id: "donaldtrump",
    name: "Donald Trump",
    avatarURL: "/avatars/1.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "firstOption",
      "6ni6ok3ym7mf1p33lnez": "secondOption",
      am8ehyc8byjqgar0jgpub9: "secondOption",
      loxhs1bqm25b708cmbf3g: "secondOption"
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
  },
  joebiden: {
    id: "joebiden",
    name: "Joe Biden",
    avatarURL: "/avatars/2.png",
    answers: {
      vthrdm985a262al8qx3do: "firstOption",
      xj352vofupe1dqz9emx13r: "secondOption"
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"]
  },
  narendramodi: {
    id: "narendramodi",
    name: "Narendra Modi",
    avatarURL: "/avatars/3.png",
    answers: {
      xj352vofupe1dqz9emx13r: "firstOption",
      vthrdm985a262al8qx3do: "secondOption",
      "6ni6ok3ym7mf1p33lnez": "secondOption"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"]
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "donaldtrump",
    timestamp: 2,
    firstOption: {
      votes: ["donaldtrump"],
      text: "have horrible short term memory"
    },
    secondOption: {
      votes: [],
      text: "have horrible long term memory"
    }
  },
  "8xf0y6ziyjabvozdd253ng": {
    id: "8xf0y6ziyjabvozdd253ng",
    author: "joebiden",
    timestamp: 10,
    firstOption: {
      votes: [],
      text: "Go sky diving"
    },
    secondOption: {
      votes: [],
      text: "Visit a nature park"
    }
  },
  "8xf0y6ziyjabvozdd253nm": {
    id: "8xf0y6ziyjabvozdd253nm",
    author: "donaldtrump",
    timestamp: 15,
    firstOption: {
      votes: [],
      text: "Prefer a house party"
    },
    secondOption: {
      votes: [],
      text: "Go out dancing in the club"
    }
  },
  "8xf0y6ziyjabvozdd253np": {
    id: "8xf0y6ziyjabvozdd253np",
    author: "narendramodi",
    timestamp: 13,
    firstOption: {
      votes: [],
      text: "Read your favorite books on the weekend"
    },
    secondOption: {
      votes: [],
      text: "Watch movies on Netflix"
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "narendramodi",
    timestamp: 5,
    firstOption: {
      votes: [],
      text: "become a superhero"
    },
    secondOption: {
      votes: ["narendramodi", "donaldtrump"],
      text: "become a supervillain"
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "donaldtrump",
    timestamp: 3,
    firstOption: {
      votes: [],
      text: "be telekinetic"
    },
    secondOption: {
      votes: ["donaldtrump"],
      text: "be telepathic"
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "joebiden",
    timestamp: 1,
    firstOption: {
      votes: [],
      text: "Be the most famous person"
    },
    secondOption: {
      votes: ["donaldtrump"],
      text: "Be the richest person"
    }
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "joebiden",
    timestamp: 0,
    firstOption: {
      votes: ["joebiden"],
      text: "find $50 yourself"
    },
    secondOption: {
      votes: ["narendramodi"],
      text: "have your best friend find $500"
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "narendramodi",
    timestamp: 9,
    firstOption: {
      votes: ["narendramodi"],
      text: "Go to the gym to strength train. "
    },
    secondOption: {
      votes: ["joebiden"],
      text: "Do yoga"
    }
  }
}

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  )
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000)
  })
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    firstOption: {
      votes: [],
      text: optionOneText
    },
    secondOption: {
      votes: [],
      text: optionTwoText
    }
  }
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer({ authedUser, id, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [id]: answer
          }
        }
      }

      questions = {
        ...questions,
        [id]: {
          ...questions[id],
          [answer]: {
            ...questions[id][answer],
            votes: questions[id][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
