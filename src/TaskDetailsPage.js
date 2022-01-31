import React from "react";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useLocation } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, makeStyles, Box, TextField, Card } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const mainColor = "#6742F0"
const lightColor = '#ecf3f9'
const primaryFont = "Ubuntu, sans-serif"
const secondaryFont = "Lato, sans-serif"
export default function TaskDetailsPage(props) {

    const { state } = useLocation();
    const { taskData } = state;

    const useStyles = makeStyles((theme) => ({

    
        appBarStyle: {
            backgroundColor: mainColor,
        },
        appBarTitleStyle: {
            flex: 1,
            fontWeight: "bold",
            fontSize: "20px",
            fontFamily: primaryFont
        },

        buttons: {
            marginLeft: "1px",
            color: "white",
            fontWeight: "bold",
            fontSize: 13,
            fontFamily: primaryFont
        },
      

        root: {
            backgroundColor: lightColor, minHeight: "100vh",
            [theme.breakpoints.down('sm')]: {
                backgroundColor: "white",
                height: "100%"
            },
        },
        toolBar: {
            backgroundColor: "#00adb5",
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            fontSize: "21px",
            fontWeight: "bold",
            "&:hover": {
                cursor: "pointer",
            },
        },

        titleText: {
            textAlign: "center",
            fontFamily: primaryFont,
            margin: 20,
            fontWeight: "bold",
            color: mainColor,
            fontSize: 35,
            [theme.breakpoints.down('sm')]: {
                fontSize: 30
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: 35
            },
        },
        textField: {
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00adb5",
            },
            "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
                display: "none",
            },
        },
        textFieldLabel: {
            fontFamily: secondaryFont
        },

        divFlexBox:
        {
            display: 'flex', flexDirection: 'column', alignItems: "center"

        },
        textfiedFlexItem:
        {
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: mainColor,
            },
            [theme.breakpoints.up("md")]:
            {
                width: "100%"
            },
            [theme.breakpoints.down("sm")]:
            {
                width: "100%"
            }
        },
        card: {
            border: "1px solid", borderColor: mainColor,
            paddingLeft: 35, paddingRight: 35, paddingTop: 30, height: 550, display: "flex", justifyContent: "space-between", flexDirection: "column",
            [theme.breakpoints.down('sm')]: {
                width: 350,
                border: "none",
                boxShadow: "none",
                paddingTop: 10
            },
            [theme.breakpoints.up('sm')]: {
                width: 500,
            },
            [theme.breakpoints.up('md')]: {
                width: 500,
            },
            [theme.breakpoints.up('lg')]: {
                width: 600,
            },
            [theme.breakpoints.up('xl')]: {
                width: 800,
            }
        },
        btnBack: {
            fontSize: 14, fontWeight: 'bold', color: mainColor, borderColor: mainColor
        },


    }));

    //back btn
    const handleBackBtn = () => {
        navigate(-1);
    }

    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <div>
                <AppBar className={classes.appBarStyle} position="fixed">
                    <Toolbar>
                        <Box display='flex' flexGrow={1} >
                            <Typography className={classes.appBarTitleStyle}>Sristis Project</Typography>
                        </Box>
                        <div>
                            <Button startIcon={<ExitToAppIcon />} className={classes.buttons} onClick={() => { navigate("/") }} style={{ boxShadow: 'none', width: '180px', height: '64px', borderRadius: 0 }} color="#000000" >Logout</Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </div>

            <Typography className={classes.titleText}>{taskData.name} Task Details </Typography>

            <div className={classes.divFlexBox} >
                <div>
                    <Card elevation={5} className={classes.card} >

                    <div className={classes.textfiedFlexItem} >
                            <Typography className={classes.textFieldLabel}>Assignee</Typography>
                            <TextField
                                size="small"
                                variant="outlined"
                                type="text"
                                inputProps={{ readOnly: true }}
                                fullWidth
                                value = {taskData.details[0].assignee}
                                

                            ></TextField>
                        </div>

                        <div className={classes.textfiedFlexItem} >
                            <Typography className={classes.textFieldLabel}>Description</Typography>
                            <TextField
                             autoComplete='ViewCrunch'
                             multiline
                             rows={6}
                                size="small"
                                variant="outlined"
                                type="text"
                                inputProps={{ readOnly: true }}
                                fullWidth
                                value = {taskData.details[0].description}


                            ></TextField>
                        </div>


                        <div className={classes.textfiedFlexItem} >
                            <Typography className={classes.textFieldLabel}>Due Date</Typography>
                            <TextField
                                size="small"
                                variant="outlined"
                                type="text"
                                inputProps={{ readOnly: true }}
                                fullWidth
                                value = {taskData.dueDate}
                            >  
                            </TextField>
                        </div>


                      

                        <div className={classes.textfiedFlexItem} >
                            <Typography className={classes.textFieldLabel}>Cost</Typography>
                            <TextField
                                size="small"
                                variant="outlined"
                                type="text"
                                inputProps={{ readOnly: true }}
                                fullWidth
                                value = {taskData.details[0].cost}


                            ></TextField>
                        </div>

                       



                        <div style={{ display: "flex", flexDirection: "row", }}>
                            <Button
                                startIcon={<ArrowBackIcon />}
                                fullWidth
                                className={classes.btnBack}
                                variant="outlined"
                                onClick={handleBackBtn}
                            >
                                Back
                            </Button>

                        </div>
                        <div>
                        </div>
                    </Card>
                </div>
            </div>

        </div>

    )
}
