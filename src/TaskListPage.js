import React from "react";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ViewIcon from '@material-ui/icons/Visibility';

import { Button, AppBar, Toolbar, Typography, makeStyles, Box, Tooltip } from "@material-ui/core";
import Helpers from "./Helpers";
import { DataGrid } from '@material-ui/data-grid';

const mainColor = "#6742F0"
const lightColor = '#ecf3f9'
const primaryFont = "Ubuntu, sans-serif"
const secondaryFont = "Lato, sans-serif"
export default function TaskListPage() {
    const useStyles = makeStyles((theme) => ({

        overallbackcolor: {
            backgroundColor: lightColor,
            overflow: "hidden",
            minHeight: "100vh",
            maxWidth: "100vw",
        },
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
        headText: {
            color: mainColor, fontWeight: "bold", fontSize: 24, fontFamily: primaryFont, marginTop: 20, marginBottom: 20, marginLeft: 20
        },

    }));
    const navigate = useNavigate();
    const classes = useStyles();

    const onClickTask = (e) => {
        // e.stopPropagation();
        console.log(e.row)
        navigate('/tasklist-details', { state: { taskData: e.row } });

    }

    const taskDatas = Helpers().tasks

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 200
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 300,

        },
        {
            field: 'dueDate',
            headerName: 'Due Date',
            width: 200,

        },
        {
            field: 'priority',
            headerName: 'Priority',
            width: 200,
        },

        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            renderCell: (params) => {
       

                return(

                
                <Tooltip title="View" arrow >
                    <ViewIcon
                        onClick={() => { onClickTask(params) }}
                        style={{ alignItems: "center", color: "green", marginLeft: "10px", marginRight: "10px", width: 30, height: 30, verticalAlign: "middle", cursor: "pointer" }}
                    />
                </Tooltip>

                );
            },
        },


    ];


    return (
        <>
            <div className={classes.overallbackcolor}>

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
                {/* MainContent */}

                <div>
                    <Typography noWrap className={classes.headText}>
                        Task Details
                    </Typography>
                </div>

                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                        rows={taskDatas}
                        columns={columns}
                        pageSize={6}
                        checkboxSelection={false}


                    />
                </div>
            </div>

        </>
    );
}