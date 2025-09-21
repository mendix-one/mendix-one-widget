import { useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const pages = ['Products', 'Pricing', 'Blog']

export default function AppTopNav() {
  const anchorElTopNavRef = useRef<HTMLElement | undefined>()

  return (
    <Box ref={anchorElTopNavRef} sx={{ display: 'flex' }}>
      {pages.map((page) => (
        <Button key={page} sx={{ color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </Box>
  )
}
