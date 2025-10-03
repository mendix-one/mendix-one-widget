import { useState } from 'react'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TextareaAutosize from '@mui/material/TextareaAutosize'

import { blueGrey } from '@mui/material/colors'

import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'

import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined'

import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined'
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined'
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined'

export default function AIChatBot() {
  const [isShowingAttachment, setIsShowingAttachment] = useState<boolean>(false)
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        border: 1,
        borderColor: blueGrey[100],
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
      <Box
        sx={{
          p: 1,
          width: '100%',
          borderBottom: 1,
          borderColor: blueGrey[100],
          backgroundColor: blueGrey[50],
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Stack sx={{ flexGrow: 0 }}>
            <Avatar alt="AI Assistant Bot" sx={{ width: 28, height: 28, bgcolor: 'primary.main' }}>
              <SmartToyOutlinedIcon sx={{ fontSize: '1.25rem' }} />
            </Avatar>
          </Stack>
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="h4">AI Assistant Bot</Typography>
          </Stack>
          <Stack sx={{ flexGrow: 0 }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <Stack>
                <IconButton tabIndex={3002} size="small" color="primary">
                  <PushPinOutlinedIcon sx={{ fontSize: '1.25rem' }} />
                </IconButton>
              </Stack>
              <Stack>
                <IconButton tabIndex={3002} size="small" color="primary">
                  <CloseOutlinedIcon sx={{ fontSize: '1.25rem' }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box>List</Box>
      <Box
        sx={{
          position: 'absolute',
          top: 'auto',
          left: 0,
          right: 0,
          bottom: 0,
          height: 'auto',
          width: '100%',
          borderTop: 1,
          borderColor: blueGrey[100],
          backgroundColor: blueGrey[50],
        }}
      >
        <Box sx={{ py: 2 }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'start',
            }}
          >
            <Stack sx={{ flexGrow: 0 }}>
              {!isShowingAttachment ? (
                <IconButton
                  size="small"
                  color="primary"
                  tabIndex={3001}
                  onClick={() => {
                    setIsShowingAttachment(true)
                  }}
                >
                  <AddCircleOutlineOutlinedIcon />
                </IconButton>
              ) : (
                <IconButton
                  size="small"
                  color="primary"
                  tabIndex={3001}
                  onClick={() => {
                    setIsShowingAttachment(false)
                  }}
                >
                  <ArrowDropDownCircleOutlinedIcon />
                </IconButton>
              )}
            </Stack>
            <Stack sx={{ flexGrow: 1 }}>
              <TextareaAutosize
                tabIndex={3000}
                minRows={2}
                maxRows={10}
                placeholder="Input your message here"
                style={{ resize: 'vertical' }}
              />
            </Stack>
            <Stack sx={{ flexGrow: 0 }}>
              <IconButton tabIndex={3002} size="small" color="primary">
                <SendOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        <Slide direction="up" in={isShowingAttachment} mountOnEnter unmountOnExit>
          <Box sx={{ py: 0, borderTop: 1, borderColor: blueGrey[100] }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                p: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Stack>
                <Tooltip title="Images">
                  <Button variant="outlined" size="small" tabIndex={3101} disabled={false}>
                    <PhotoOutlinedIcon />
                  </Button>
                </Tooltip>
              </Stack>
              <Stack>
                <Tooltip title="Documents">
                  <Button variant="outlined" size="small" tabIndex={3102} disabled={false}>
                    <FilePresentOutlinedIcon />
                  </Button>
                </Tooltip>
              </Stack>
              <Stack>
                <Tooltip title="Source code">
                  <Button variant="outlined" size="small" tabIndex={3103} disabled={false}>
                    <CodeOutlinedIcon />
                  </Button>
                </Tooltip>
              </Stack>
              <Stack>
                <Tooltip title="Dataset">
                  <Button variant="outlined" size="small" tabIndex={3104} disabled={false}>
                    <DataObjectOutlinedIcon />
                  </Button>
                </Tooltip>
              </Stack>
            </Stack>
          </Box>
        </Slide>
      </Box>
    </Box>
  )
}
