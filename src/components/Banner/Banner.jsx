import React from 'react'
import {Container,Typography} from '@material-ui/core'
import {Box} from '@material-ui/core'
import {useStyle} from './Banner.style'

function Banner() {
    const classes=useStyle();
    return (
        <Container>
            <Box component="div" className={classes.banner}>
                <Typography variant="h4" className={classes.bannerText}>Best Onlion Shopping</Typography>
            </Box>
        </Container>
    )
}

export default Banner
