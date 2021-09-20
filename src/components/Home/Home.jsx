import React from 'react'
import { Container } from '@material-ui/core';
import useStyles from './styles';


const Home = () => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.home}>
                <div className={classes.container}>
                    
                </div>
            </div>
        </Container>
    )
}

export default Home
