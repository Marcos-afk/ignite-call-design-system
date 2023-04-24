import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const Container = styled(Toast.Root, {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  background: '$gray600',
  padding: '$3 $5',
  borderRadius: '$sm',
})

export const Title = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  color: '$white',
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const Content = styled('time', {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray200',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  listStyle: 'none',
  width: '$80',
  maxWidth: '80%',
  padding: '0 $2',
})

export const Action = styled(Toast.Action, {
  background: 'transparent',
  border: 0,
  svg: {
    color: '$white',
  },

  '&:hover': {
    cursor: 'pointer',
    svg: {
      color: '$gray200',
    },
  },
})
