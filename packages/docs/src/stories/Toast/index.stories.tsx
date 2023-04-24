import type { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Info/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}
