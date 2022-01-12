import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Button } from "@mui/material"
import { Box } from "@mui/system"

const Dashboard = () => {
    const navigate = useNavigate()
    const navigateItinerary = useCallback(() => {
        navigate('ItineraryPlanner')
    },[])
  
    return (
        <Container
        maxWidth={false}
        >
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
            >
                <Typography variant='h3'>
                    Recent Trips
                </Typography>
                <Button 
                size='medium'
                variant='contained'
                onClick={navigateItinerary}
                >
                    Create new trip
                </Button>
            </Box>
        </Container>
    )
}

export default Dashboard