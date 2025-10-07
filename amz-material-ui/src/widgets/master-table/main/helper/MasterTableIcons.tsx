import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined'
import SortOutlinedIcon from '@mui/icons-material/SortOutlined'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import LineWeightOutlinedIcon from '@mui/icons-material/LineWeightOutlined'
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

// import Grid4x4OutlinedIcon from '@mui/icons-material/Grid4x4Outlined'
// import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined'
// import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined'
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined'
import ZoomInMapOutlinedIcon from '@mui/icons-material/ZoomInMapOutlined'

// import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined'
// import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined'

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ArrowDownwardIcon: (props: any) => <SouthOutlinedIcon {...props} />,
  ClearAllIcon: () => <CloseOutlinedIcon />,
  DensityLargeIcon: () => <LineWeightOutlinedIcon />,
  DensityMediumIcon: () => <TableRowsOutlinedIcon />,
  DensitySmallIcon: () => <ReorderOutlinedIcon />,
  DragHandleIcon: () => <BlurOnOutlinedIcon />,
  // DragHandleIcon: () => <Grid4x4OutlinedIcon />,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FilterListIcon: (props: any) => <FilterAltOutlinedIcon {...props} />,
  FilterListOffIcon: () => <FilterAltOffOutlinedIcon />,
  FullscreenExitIcon: () => <ZoomInMapOutlinedIcon />,
  FullscreenIcon: () => <ZoomOutMapOutlinedIcon />,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SearchIcon: (props: any) => <SearchOutlinedIcon {...props} />,
  SearchOffIcon: () => <SearchOffOutlinedIcon />,
  ViewColumnIcon: () => <TuneOutlinedIcon />,
  MoreVertIcon: () => <MoreVertOutlinedIcon />,
  MoreHorizIcon: () => <MoreHorizOutlinedIcon />,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SortIcon: (props: any) => <SortOutlinedIcon {...props} />,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  PushPinIcon: (props: any) => <PushPinOutlinedIcon {...props} />,
  VisibilityOffIcon: () => <VisibilityOffOutlinedIcon />,
}
