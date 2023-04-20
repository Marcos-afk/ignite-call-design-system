import { Check } from 'phosphor-react'
import * as S from './styles'
import { ComponentProps } from 'react'

export interface CheckboxProps extends ComponentProps<typeof S.Container> {}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <S.Container {...props}>
      <S.Indicator asChild>
        <Check weight="bold" />
      </S.Indicator>
    </S.Container>
  )
}
