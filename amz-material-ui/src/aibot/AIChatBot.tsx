import { Fragment, useEffect, useRef, useState } from 'react'
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

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import TextField from '@mui/material/TextField'

export type AIChatBotProps = {
  onClose: () => void
}

const listMessages = [
  {
    id: 1,
    text: 'Hi!',
    issuedBy: 'User',
    issuedAt: new Date(),
  },
  {
    id: 2,
    element: <Typography variant="inherit">Hi there! How is it going?</Typography>,
    issuedBy: 'AIBOT',
    issuedAt: new Date(),
  },
  {
    id: 3,
    text: 'What could you help me?',
    issuedBy: 'User',
    issuedAt: new Date(),
  },
  {
    id: 4,
    element: (
      <>
        <Typography variant="inherit" sx={{ marginBottom: 1 }}>
          I can help you with quite a lot of things, depending on what you need. For example:
        </Typography>
        <Typography variant="inherit" sx={{ marginBottom: 1 }}>
          <strong>* Write & edit</strong>: emails, resumes, proposals, social media posts, blog articles, reports, etc.
        </Typography>
        <Typography variant="inherit" sx={{ marginBottom: 1 }}>
          <strong>* Translate & explain</strong>: multiple languages, technical jargon, or simplify complex topics.
        </Typography>
        <Typography variant="inherit" sx={{ marginBottom: 1 }}>
          <strong>* Research & summarize</strong>: gather info from the web, summarize documents, or compare options.
        </Typography>
        <Typography variant="inherit">
          <strong>* Plan & structure</strong>: strategies for business, study, travel, projects, digital transformation,
          etc.
        </Typography>
      </>
    ),
    issuedBy: 'AIBOT',
    issuedAt: new Date(),
  },
]

export default function AIChatBot(props: AIChatBotProps) {
  const refListInputBox = useRef<HTMLElement>(null)
  const refListMessagesBox = useRef<HTMLElement>(null)

  const [sizeInputHeight, setSizeInputHeight] = useState(54)

  const [msg, setMsg] = useState('')
  const [messages, setMessages] = useState(listMessages)
  const [isShowingAttachment, setIsShowingAttachment] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeMsg = (event: any) => {
    setMsg(event?.target?.value || '')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onKeyDownMsg = (event: any) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault() // Prevent default Enter key behavior (e.g., new line)
      sendMessage() // Call your form submission function
    }
  }

  const sendMessage = () => {
    if (msg.trim() !== '') {
      const list = [...messages]
      list.push({
        id: list.length + 1,
        text: msg.trim(),
        issuedBy: 'User',
        issuedAt: new Date(),
      })
      setMessages(list)
      setMsg('')
    }
  }

  useEffect(() => {
    const last = messages[messages.length - 1]
    if (last.issuedBy !== 'AIBOT') {
      setTimeout(() => {
        const list = [...messages]
        list.push({
          id: list.length + 1,
          element: (
            <>
              <Typography>Sorry! I have trouble with server connection.</Typography>
              <Typography>Please try again latter...</Typography>
            </>
          ),
          issuedBy: 'AIBOT',
          issuedAt: new Date(),
        })
        setMessages(list)
      }, 1000)
    }

    // Scroll to bottom
    if (refListMessagesBox.current) {
      refListMessagesBox.current.scrollTop = refListMessagesBox.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === refListInputBox.current) {
          setSizeInputHeight(entry.contentRect.height)
        }
      }
    })

    if (refListInputBox.current) {
      observer.observe(refListInputBox.current)
    }

    return () => {
      if (refListInputBox.current) {
        observer.unobserve(refListInputBox.current)
      }
    }
  }, [])

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
                <IconButton tabIndex={3002} size="small" color="primary" disabled>
                  <PushPinOutlinedIcon sx={{ fontSize: '1.25rem' }} />
                </IconButton>
              </Stack>
              <Stack>
                <IconButton tabIndex={3002} size="small" color="primary" onClick={props.onClose}>
                  <CloseOutlinedIcon sx={{ fontSize: '1.25rem' }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        ref={refListMessagesBox}
        sx={{
          p: 2,
          width: '100%',
          height: `calc(100% - 40px -  ${sizeInputHeight}px)`,
          maxWidth: '100%',
          maxHeight: `calc(100% - 40px -  ${sizeInputHeight}px)`,
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        {messages.map((msg) => (
          <Fragment key={msg.id}>
            {msg.issuedBy === 'User' ? (
              <Box
                sx={{
                  p: 2,
                  pr: 0,
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'end',
                }}
              >
                <Box
                  sx={{
                    py: 1,
                    px: 3,
                    borderRadius: 4,
                    backgroundColor: blueGrey[50],
                    maxWidth: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <Typography variant="inherit" sx={{ wordBreak: 'break-all' }}>
                    {msg.text}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  p: 2,
                  pl: 0,
                }}
              >
                {msg.element}
                <Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <Stack>
                      <IconButton tabIndex={3002} size="small" color="primary">
                        <ContentCopyOutlinedIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </Stack>
                    <Stack>
                      <IconButton tabIndex={3002} size="small" color="primary">
                        <ThumbUpOutlinedIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </Stack>
                    <Stack>
                      <IconButton tabIndex={3002} size="small" color="primary">
                        <ThumbDownOutlinedIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </Stack>
                    <Stack>
                      <IconButton tabIndex={3002} size="small" color="primary">
                        <MoreHorizOutlinedIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            )}
          </Fragment>
        ))}
      </Box>
      <Box
        ref={refListInputBox}
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
              <TextField
                multiline
                size="small"
                tabIndex={3000}
                minRows={1}
                maxRows={10}
                value={msg}
                onChange={onChangeMsg}
                onKeyDown={onKeyDownMsg}
                placeholder="Input your message here"
              />
            </Stack>
            <Stack sx={{ flexGrow: 0 }}>
              <IconButton tabIndex={3002} size="small" color="primary" onClick={sendMessage}>
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
