import * as S from './styles'
import { ComponentProps } from 'react'

export interface MultiStepProps extends ComponentProps<typeof S.Container> {
  size: number
  currentStep: number
}

export const MultiStep = ({ size, currentStep }: MultiStepProps) => {
  return (
    <S.Container>
      <S.Label>
        Passo {currentStep} de {size}
      </S.Label>
      <S.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <S.Step key={step} active={currentStep >= step} />
        })}
      </S.Steps>
    </S.Container>
  )
}
