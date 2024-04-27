import { Box, Button } from "@mui/material"
import loginPageStyles from "./LoginPage.Styles"
import loginPageImg from "../../assets/cant-we-just-play-image.png"
import React from "react"
import withRouter from "../../hoc/Hoc"


interface IProps {
    navigate: (path: string) => void
}

class LoginPage extends React.Component<IProps> {

    clickMeBtnHandler = () => {
        this.props.navigate("/")
    }

    render() {
        return (
            <Box sx={loginPageStyles.mainContainer} >
                <Box sx={loginPageStyles.childContainer}>
                    <Box component={"img"} src={loginPageImg} alt="cant-we-just-play-image" sx={loginPageStyles.image} />
                    <Button data-testid='click-me-btn' onClick={this.clickMeBtnHandler} disableElevation disableFocusRipple disableTouchRipple disableRipple sx={loginPageStyles.button}>CLICK ME TO START</Button>
                </Box>
            </Box>
        )
    }
}

export default withRouter(LoginPage)