import React from 'react'
import './index.scss'

const questions = [
  {
    title: '1 + 1 =',
    variants: ['1', '0', '2'],
    correct: 2,
  },
  {
    title: '10 * 5 =',
    variants: ['50', '60', '55'],
    correct: 0,
  },
  {
    title: '21 ÷ 7 =',
    variants: ['7', '3', '4'],
    correct: 1,
  },
  {
    title: '5 - 6 =',
    variants: [
      '0',
      '-1',
      '1',
    ],
    correct: 1,
  },
]

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  )
}

function Game({ step, question, onClickVariant }) {
  const pr = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${pr}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  )
}

function App() {
  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {step != questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  )
}

export default App
