import { Box, Typography} from '@mui/material'

export const Disclaimer = () => {
  return (
  <Box padding={4}>
    <Typography sx={{height: 0, color: 'red', textAlign: 'center', maxWidth: '16cm', opacity: 0.65}}>This application is merely a preview of our technology. To support generating images in tolerable times, it uses a <strong>simulation of a quantum computer</strong> using qiskit.</Typography>
    </Box>
  )
}
