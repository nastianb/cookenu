import React from "react"
import error from '../../assets/error.jpeg'
import Typography from '@mui/material/Typography'
import { ErrorImage, ErrorPageContainer } from './styled'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error} />
           
        </ErrorPageContainer>
    )
}

export default ErrorPage