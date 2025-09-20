import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const pages = ['Products', 'Pricing', 'Blog']

export default function AppTopNav() {
  const anchorElTopNavRef = useRef<HTMLElement | undefined>()
  const [showTopNavMenu, setShowTopNavMenu] = useState<boolean>(false)

  const handleOpenNavMenu = () => {
    setShowTopNavMenu(true)
  }

  const handleCloseNavMenu = () => {
    setShowTopNavMenu(false)
  }

  useEffect(() => {
    if (anchorElTopNavRef.current) {
      handleOpenNavMenu()
    }
  }, [anchorElTopNavRef.current])

  return (
    <Box ref={anchorElTopNavRef} sx={{display: 'flex'}}>
      {pages.map((page) => (
        <Button key={page} onClick={handleCloseNavMenu} sx={{ color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </Box>
  )
}
