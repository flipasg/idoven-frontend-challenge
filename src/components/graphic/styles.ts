import { Grid, styled } from '@mui/material'
import { GREEN, LIGHT_GRAY } from './theme'

export const LINE_STYLES = {
  data: { stroke: GREEN, strokeWidth: 0.7, opacity: 1 },
}

export const BRUSH_STYLES = { fill: LIGHT_GRAY, fillOpacity: 0.1 }

// Used styled-components to style the graphic container
// instead of using Material UI's Grid component:
// <Grid container direction='column'height='100%' width='100%'>
export const GraphicContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`