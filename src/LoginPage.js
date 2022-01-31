import { React, useState} from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { TextField, makeStyles, InputAdornment, IconButton, } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { useNavigate } from "react-router";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import swal from "sweetalert2";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";



const mainColor = "#6742F0"
const lightColor = '#ecf3f9'
const primaryFont = "Ubuntu, sans-serif"
const secondaryFont = "Lato, sans-serif"
const useStyles = makeStyles((theme) => ({
  textFieldbox: {
    width: 362, backgroundColor: "white",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: mainColor,
    },

  },
  loginBtn: {
    backgroundColor: mainColor, minHeight: 50, minWidth: 362, color: "white", fontWeight: "bold", marginTop: 30, fontFamily: primaryFont,
    "&:hover": {
      backgroundColor: mainColor,
    },
    "&:disabled": {
      backgroundColor: mainColor,color:"white"
    }
  },

  

  mainCard: {
    width: 500, height: 450, display: "flex", flexDirection: "column", backgroundColor: "white", alignItems: "center", border: "1px solid", borderColor: mainColor,
    [theme.breakpoints.down('sm')]: {
      width: 380,
      border: "none",
      boxShadow: "none",
      paddingTop: 0,
      backgroundColor: lightColor,
    },
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
    [theme.breakpoints.up('lg')]: {
      width: 500,
    },
    [theme.breakpoints.up('xl')]: {
      width: 500,
    }
  },
  root: {
    backgroundColor: lightColor, display: "flex", flexDirection: "column", alignItems: "center", height: "96.8vh",
    [theme.breakpoints.up('sm')]: {
      justifyContent: "center"
    },
  },
}));

export default function LoginPage() {
  const navigate = useNavigate();
  const classes = useStyles();

  const [buttonVisblity, setButtonVisblity] = useState(false);
  const [loginBtnLoading, setLoginBtnLoading] = useState(false);
  const [loginBtnText, setLoginBtnText] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert1, setAlert1] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");


  const handleClose = (event, reason) => {
    if (reason === "clickway") {
      return;
    }
    setAlert1(false);
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUserPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onLoginClick();
    }
  };

  const goToTaskListPage = () => {

    if(username === "admin"  && password === "123"){
        navigate('/tasklist');
    }
    else{
        setButtonVisblity(false)
        setLoginBtnLoading(false)
        setLoginBtnText("Login")
        setAlert1(true);
        setAlertMessage("Please enter valid username and password!");
    }
  };

  const onLoginClick = async (e) => {
    setButtonVisblity(true)
    setLoginBtnLoading(true)
    setLoginBtnText("Logging in...")
    if (username === "" || password === "") {
      setButtonVisblity(false)
      setLoginBtnLoading(false)
      setLoginBtnText("Login")
      setAlert1(true);
      setAlertMessage("Please enter username and password!");
      return;
    }
    goToTaskListPage();
  };



  return (
    <div>
      <div className={classes.root} >
        <Card elevation={5} className={classes.mainCard}>
          <Typography  variant="h4" style = {{marginTop:50, fontStyle:"bold", marginBottom:50, color:mainColor, fontFamily:primaryFont}}> Sristis Project</Typography>
          <Card >
            <TextField
              className={classes.textFieldbox}
              type="text"
              onChange={handleUserNameChange}
              placeholder="Enter Username"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", backgroundColor: mainColor, height: 56, width: 50, marginRight: 5, marginLeft: -13 }} >
                    <InputAdornment position="start">
                      <PersonIcon style={{ marginLeft: 10, color: "white" }} />
                    </InputAdornment>
                  </div>
                ),
              }}
            />

          </Card>
          <Card style={{ marginTop: 30 }}>
            <TextField
              className={classes.textFieldbox}
              type={showPassword ? "text" : "password"}
              onChange={handleUserPasswordChange}
              onKeyDown={handleKeyPress}
              placeholder="Enter Password"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", backgroundColor: mainColor, height: 56, width: 50, marginRight: 5, marginLeft: -13 }}>
                    <InputAdornment position="start">
                      <VpnKeyIcon style={{ marginLeft: 10, color: "white" }} />
                    </InputAdornment>
                  </div>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} >
                      {showPassword ? (<Visibility />) : (<VisibilityOff />)}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Card>
          <Button className={classes.loginBtn} loading={loginBtnLoading} loadingPosition="end" variant="contained" disabled={buttonVisblity} onClick={onLoginClick} > {loginBtnText} </Button>
          
        </Card>

        <div>
          <Snackbar open={alert1} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              {alertMessage}
            </Alert>
          </Snackbar>
        </div>
      </div>
         </div>
  );
}
