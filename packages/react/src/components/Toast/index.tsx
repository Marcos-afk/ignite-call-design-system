import { ComponentProps, useCallback, useRef, useState } from 'react'
import { X } from 'phosphor-react'
import { format, formatDistanceToNow } from 'date-fns'
import * as S from './styles'
import * as T from '@radix-ui/react-toast'
import { ptBR } from 'date-fns/locale'
import { Button } from '../Button'

export interface ToastProps extends ComponentProps<typeof S.Container> {}

export const Toast = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  const handleOpenToast = useCallback(() => {
    if (loading) return

    setLoading(true)
    setOpen(true)

    clearTimeout(timerRef.current)

    timerRef.current = window.setTimeout(() => {
      setLoading(false)
      setOpen(false)
    }, 3000)
  }, [loading])

  const handleCloseToast = useCallback(() => {
    setLoading(false)
    setOpen(false)
  }, [])

  const publishedDateFormat = (date: Date) => {
    return format(date, "d 'de' LLLL 'às' hh:mm'h' ", {
      locale: ptBR,
    })
  }

  const publishedDateRelativeToNow = (date: Date) => {
    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    })
  }

  return (
    <T.Provider>
      <Button disabled={loading} onClick={handleOpenToast}>
        Open Toast
      </Button>
      <S.Container open={open} onOpenChange={handleOpenToast}>
        <S.ContentContainer>
          <S.Title>Agendamento realizado</S.Title>
          <T.Description asChild>
            <S.Content
              title={publishedDateRelativeToNow(new Date())}
              dateTime={new Date().toISOString()}
            >
              {publishedDateFormat(new Date())}
            </S.Content>
          </T.Description>
        </S.ContentContainer>

        <S.Action asChild altText="Close Toast" onClick={handleCloseToast}>
          <button>
            <X size={20} />
          </button>
        </S.Action>
      </S.Container>
      <S.Viewport />
    </T.Provider>
  )
}
