'use client'

import { useState } from 'react'

import clsx from 'clsx'

const buttons = [
  ['CE', 'C', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['+-', '0', ',', '=']
]

const Calculator: React.FC = () => {
  const [calculo, setCalculo] = useState('1+1')
  const [result, setResult] = useState(2)

  const handleClick = (value: string) => {
    switch (value) {
      case '+':
        break
      case '-':
        break
      case '*':
        break
      case '/':
        break
      case 'C':
        return
      case '=':
        return
    }

    setCalculo(prevState => prevState + value)
  }

  return (
    <div className="pb8 flex h-[566px] w-[356px] flex-col gap-[26px] rounded-[48px] bg-[#2D2A37] px-8 pt-14 shadow-calculator">
      <div className="flex flex-col gap-2 px-[22px]">
        <p className="flex h-7 flex-row-reverse text-xl leading-[140%] tracking-tight text-[#6B6B6B]">
          {calculo.split('').join(' ')}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex h-[20px] w-[20px] flex-col justify-center gap-[3.75px]">
            <span className="h-[1.25px] w-[15px] bg-[#6B6B6B]" />
            <span className="h-[1.25px] w-[15px] bg-[#6B6B6B]" />
          </div>

          <h1 className="text-4xl">{result}</h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {buttons.map((buttonList, i) =>
          buttonList.map(button => {
            const rightButtons = ['/', '*', '-', '+'].includes(button)
            const equalsButton = button === '='
            const isCE = button === 'CE'

            return (
              <button
                key={`${button} ${i}`}
                onClick={() => handleClick(button)}
                className="h-16 w-16 rounded-full bg-[#2D2A37] text-2xl leading-7 tracking-tight shadow-button"
                style={{
                  background: clsx(
                    `linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)`,
                    {
                      '#2D2A37': !equalsButton && !rightButtons,
                      '#462878': !equalsButton && rightButtons,
                      '#7F45E2': equalsButton
                    }
                  ),
                  color: clsx({ '#975DFA': isCE })
                }}
              >
                {button}
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Calculator
