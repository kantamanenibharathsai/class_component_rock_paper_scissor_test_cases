import React from "react";
import { Box, IconButton, Typography } from "@mui/material"
import homePageStyles from "./HomePage.Styles"
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import questionImage from "../../assets/question.png"
import { frontImages, leftImages, rightImages } from "../../typescript/data";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';




interface IState {
    isDarkMode: boolean,
    userChoiceLeftImg: string,
    computerChoiceRightImg: string,
    equal: number,
    userWin: number,
    computerWin: number,
    isQuestionMarkLoading: boolean,
    noOfRounds: number
}


class HomePage extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isDarkMode: true,
            userChoiceLeftImg: leftImages[0].leftImage,
            computerChoiceRightImg: rightImages[0].rightImage,
            equal: 0,
            userWin: 0,
            computerWin: 0,
            isQuestionMarkLoading: false,
            noOfRounds: 0
        }
    }

    determineWinner = () => {
        let leftImgId: number | null = null;
        let rightImgId: number | null = null;
        leftImages.forEach(eachImgObj => {
            if (eachImgObj.leftImage === this.state.userChoiceLeftImg) leftImgId = eachImgObj.leftImageId;
        })
        rightImages.forEach(eachImgObj => {
            if (eachImgObj.rightImage === this.state.computerChoiceRightImg) rightImgId = eachImgObj.rightImageId;
        })
        if (leftImgId === rightImgId) this.setState(prevState => ({ ...prevState, equal: prevState.equal + 1 }));
        else if ((leftImgId === 1 && rightImgId === 3) || (leftImgId === 2 && rightImgId === 1) || (leftImgId === 3 && rightImgId === 2)) this.setState(prevState => ({ ...prevState, userWin: prevState.userWin + 1 }));
        else this.setState(prevState => ({ ...prevState, computerWin: prevState.computerWin + 1 }));
    };


    resetBtnIconHandler = () => {
        this.setState({
            equal: 0,
            userWin: 0,
            computerWin: 0,
            noOfRounds: 0,
            userChoiceLeftImg: leftImages[0].leftImage,
            computerChoiceRightImg: rightImages[0].rightImage,
        })
    }


    modeBtnHandler = () => {
        this.setState(prevState => ({ ...prevState, isDarkMode: !prevState.isDarkMode }))
    }

    userSelectedImageHandler = (frontImageId: number) => {
        this.setState({
            isQuestionMarkLoading: true,
        })
        setTimeout(() => {
            leftImages.forEach(eachImgObj => {
                if (eachImgObj.leftImageId === frontImageId) this.setState({ userChoiceLeftImg: eachImgObj.leftImage });
            })
            const computerOption = Math.floor(Math.random() * 3);
            this.setState(prevState => ({
                isQuestionMarkLoading: false,
                computerChoiceRightImg: rightImages[computerOption].rightImage,
                noOfRounds: prevState.noOfRounds + 1,
            }))
        }, 1000)
    }


    componentDidUpdate(prevProps: {}, prevState: IState) {
        if (prevState.noOfRounds !== this.state.noOfRounds && this.state.noOfRounds > 0) {
            this.determineWinner();
        }
    }

    render() {
        const { isDarkMode, userChoiceLeftImg, computerChoiceRightImg, equal, userWin, computerWin, isQuestionMarkLoading, noOfRounds } = this.state;
        return (
            <Box sx={{ ...homePageStyles.mainContainer, background: isDarkMode ? "#1B1B1F" : "#E7E5E4" }}>
                <Box sx={homePageStyles.childContainer}>
                    <Box sx={homePageStyles.topContainer}>
                        <IconButton onClick={this.resetBtnIconHandler} sx={homePageStyles.iconButton} data-testid="restart-button">
                            <LoopOutlinedIcon sx={homePageStyles.icon} />
                        </IconButton>
                        <Box sx={homePageStyles.winEqualCardsContainer}>
                            <Box sx={homePageStyles.winEqualCard}>
                                <Typography sx={homePageStyles.winEqualText}>Win</Typography>
                                {userWin !== computerWin && (<Typography sx={{ ...homePageStyles.numberText, color: userWin > computerWin ? "#22C55E" : "#EF4444" }}>{userWin}</Typography>)}
                                {userWin === computerWin && (<Typography sx={{ ...homePageStyles.numberText, color: "#3B82F6" }}>{userWin}</Typography>)}
                            </Box>
                            <Box sx={homePageStyles.winEqualCard}>
                                <Typography sx={homePageStyles.winEqualText}>Equal</Typography>
                                <Typography sx={homePageStyles.numberText}>{equal}</Typography>
                            </Box>
                            <Box sx={homePageStyles.winEqualCard}>
                                <Typography sx={homePageStyles.winEqualText}>Win</Typography>
                                {userWin !== computerWin && (<Typography sx={{ ...homePageStyles.numberText, color: computerWin > userWin ? "#22C55E" : "#EF4444" }}>{computerWin}</Typography>)}
                                {userWin === computerWin && (<Typography sx={{ ...homePageStyles.numberText, color: "#3B82F6" }}>{computerWin}</Typography>)}
                            </Box>
                        </Box>
                        <IconButton onClick={this.modeBtnHandler} sx={homePageStyles.iconButton}>
                            {isDarkMode ? <DarkModeIcon sx={homePageStyles.icon} /> : <LightModeIcon sx={homePageStyles.icon} />}
                        </IconButton>
                    </Box>
                    <Box sx={homePageStyles.roundsContainer}>
                        <IconButton onClick={this.resetBtnIconHandler} sx={{ ...homePageStyles.iconButton, ...homePageStyles.iconSmallButton }}>
                            <LoopOutlinedIcon sx={homePageStyles.icon} />
                        </IconButton>
                        <Box sx={homePageStyles.roundTextNumberContainer}>
                            <Typography sx={{ ...homePageStyles.roundText, color: isDarkMode ? "#fff" : "#000" }}>Round</Typography>
                            <Typography sx={{ ...homePageStyles.roundNumberText, color: isDarkMode ? "#fff" : "#000" }}>{noOfRounds}</Typography>
                        </Box>
                        <IconButton data-testid="change-theme-btn" onClick={this.modeBtnHandler} sx={{ ...homePageStyles.iconButton, ...homePageStyles.iconSmallButton }}>
                            {isDarkMode ? <DarkModeIcon sx={homePageStyles.icon} /> : <LightModeIcon sx={homePageStyles.icon} />}
                        </IconButton>
                    </Box>
                    <Box sx={homePageStyles.handsContainer}>
                        {isQuestionMarkLoading && <Box component={"img"} sx={homePageStyles.middleImage} src={questionImage} alt="left-image" />}
                        {isQuestionMarkLoading && <Box component={"img"} sx={homePageStyles.middleImage} src={questionImage} alt="right-image" />}
                        {!isQuestionMarkLoading && <Box component={"img"} sx={homePageStyles.middleImage} data-testid="user-left-img" src={userChoiceLeftImg} alt="left-image" />}
                        {!isQuestionMarkLoading && <Box component={"img"} sx={homePageStyles.middleImage} data-testid="computer-right-img" src={computerChoiceRightImg} alt="right-image" />}
                    </Box>
                    <Box sx={homePageStyles.circlesParentContainer}>
                        <Box sx={homePageStyles.circlesChildContainer}>
                            {frontImages.map(eachImageObj => (
                                <IconButton key={eachImageObj.frontImageId} data-testid="front-image-button" onClick={() => this.userSelectedImageHandler(eachImageObj.frontImageId)} sx={homePageStyles.IconCircleButton} disableFocusRipple disableRipple disableTouchRipple>
                                    <Box key={eachImageObj.frontImageId} sx={homePageStyles.circleImage} component="img" src={eachImageObj.frontImage} alt={`frontImage-${eachImageObj.frontImageId}`} />
                                </IconButton>))}
                        </Box>
                    </Box>
                </Box>
            </Box >
        )
    }
}


export default HomePage