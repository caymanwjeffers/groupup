import { Container, Stepper, Box, Step, StepLabel, Button, useTheme, Input } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import PlacesAutoComplete from '../../components/PlacesAutoComplete'

const ItineraryPlanner = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const {handleSubmit, reset, control} = useForm()
    const [activeStep, setActiveStep] = useState(0)
    const [showFinish, setShowFinish] = useState(false)

    const onSubmit = (data: any) => console.log(data)

    const handleNext = useCallback(() => {
        if (activeStep === 2){
            setShowFinish(true)
        }
        setActiveStep(activeStep + 1)
    }, [activeStep])

    const handleBack = useCallback(() => {
        setActiveStep(activeStep - 1)
    }, [activeStep])

    const navigateDashboard = useCallback(() => {
        navigate('Dashboard')
    }, [navigate])

    return (
        <Container>
            <Box sx={{width: '100%'}}>
                <Stepper activeStep={activeStep}>
                    <Step key={0}>
                        <StepLabel>
                            Basic info
                        </StepLabel>
                    </Step>
                    <Step key={1}>
                        <StepLabel>
                            Plan your itinerary
                        </StepLabel>
                    </Step>
                    <Step key={2}>
                        <StepLabel>
                            Finalize and share
                        </StepLabel>
                    </Step>
                </Stepper>
                <Container
                sx={{
                    marginTop: theme.spacing(4),
                    marginBottom: theme.spacing(4),
                    width: 600,
                    alignSelf: 'center'
                }}
                >
                    <form>
                        <Controller
                        name='textValue'
                        control={control}
                        // @ts-ignore
                        render={({ field: {onChange, value} }) =>(
                            <>
                                <PlacesAutoComplete
                                label='Where are you going?'
                                placeholder='Search for your destination...'
                                handleChange={onChange}
                                value={value}
                                />
                            </>
                        )}
                        />                        
                    </form>
                </Container>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    { !showFinish ?
                        <Button
                        onClick={onSubmit}
                        >
                            Next
                        </Button>
                        :
                        <Button
                        onClick={navigateDashboard}
                        >
                            View Trip
                        </Button>
                    }
                    <Button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    >
                        Back
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default ItineraryPlanner