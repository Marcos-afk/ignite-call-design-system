import * as T from '@radix-ui/react-tooltip'
import * as S from './styles'
import { ComponentProps } from 'react'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof T.Provider> {}

export const Tooltip = () => {
  return (
    <T.Provider>
      <T.Root>
        <T.Trigger asChild>
          <Text>Tooltip text</Text>
        </T.Trigger>
        <T.Portal>
          <S.Content sideOffset={5}>
            Tooltip content - Description
            <T.Arrow />
          </S.Content>
        </T.Portal>
      </T.Root>
    </T.Provider>
  )
}
