import React, {useState} from 'react';
import {DropzoneAreaBase} from "material-ui-dropzone";
import {Button, Grid, TextField, TextareaAutosize, RadioGroup, FormControlLabel, makeStyles} from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import "./create.scss"

const useStyles = makeStyles((theme) => ({
    validation: {
        color: 'red',
    }
}));

const CreateForm = () => {
    const classes = useStyles();
    const [files, setFiles] = useState([]);
    const [errors, setError] = useState({});
    const [createDetail, setCreateDetails] = useState({
        title: "",
        description:"",
        streetName: "",
        houseNo: "",
        postCode: "",
        city: "",
        listing: "",
        monthlyRate: "",
        available: "",
        rental: "",
        roomSize: "",
        totalSize: "",
        houseMates: "",
    });

    const handleAdd = newFiles => {
        newFiles = newFiles.filter(file => !files.find(f => f.data === file.data));
        setFiles([...files, ...newFiles]);
    };

    const handleDelete = deleted => {
        setFiles(files.filter(f => f !== deleted));
    };

    const handleCreateChange = e => {
        const {name, value} = e.target;
        setCreateDetails({...createDetail, [name]: value})
    }

    const validation = (name, value) => {
        switch (name) {
            case 'title':
                if (!value) {
                    return "Please Enter Title!!";
                } else {
                    return null
                }
            case 'description':
                if (!value) {
                    return "Please Enter Description!!";
                } else {
                    return null
                }
            case 'streetName':
                if (!value) {
                    return "Please Enter street Name!!";
                } else {
                    return null
                }
            case 'houseNo':
                if (!value) {
                    return "Please Enter House No!!";
                } else {
                    return null
                }
            case 'postCode':
                if (!value) {
                    return "Please Enter Post Code!!";
                } else {
                    return null
                }
            case 'city':
                if (!value) {
                    return "Please Enter City!!";
                } else {
                    return null
                }
            case 'listing':
                if (!value) {
                    return "Please Enter Listing!!";
                } else {
                    return null
                }
            case 'monthlyRate':
                if (!value) {
                    return "Please Enter Monthly Rate!!";
                } else {
                    return null
                }
            case 'available':
                if (!value) {
                    return "Please Enter Available!!";
                } else {
                    return null
                }
            case 'rental':
                if (!value) {
                    return "Please Enter Rental!!";
                } else {
                    return null
                }
            case 'roomSize':
                if (!value) {
                    return "Please Enter Room Size!!";
                } else {
                    return null
                }
            case 'totalSize':
                if (!value) {
                    return "Please Enter Total Size!!";
                } else {
                    return null
                }
            case 'houseMates':
                if (!value) {
                    return "Please Enter House Mates!!";
                } else {
                    return null
                }
            case 'status':
                if (!value) {
                    return "Please Select Status!!";
                } else {
                    return null
                }
            default:
                return  null
        }
    };

    const handleSubmit = () => {
        let allErrors = {};
        const userData = {
            title: createDetail.title,
            description: createDetail.description,
            streetName: createDetail.streetName,
            houseNo: createDetail.houseNo,
            postCode: createDetail.postCode,
            city: createDetail.city,
            listing: createDetail.listing,
            monthlyRate: createDetail.monthlyRate,
            available: createDetail.available,
            rental: createDetail.rental,
            roomSize: createDetail.roomSize,
            totalSize: createDetail.totalSize,
            houseMates: createDetail.houseMates,
            status : createDetail.status
        }
        Object.keys(userData).forEach(key => {
            const error = validation(key, userData[key])
            if (error && error.length) {
                allErrors[key] = error;
            }
        })
        if(!files.length){
            allErrors.uploadFile = "Please Upload File!!"
        }
        if (Object.keys(allErrors).length) {
            setError(allErrors)
        } else {
            console.log("create");
            setError({})
        }
    }

    const onReset = () => {
        setError({})
    }

    return (
        <div className='create'>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <h1 className="heading">Create your Listing</h1>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <div className="inputFields">
                                <TextField name="title" value={createDetail.title} onChange={handleCreateChange} id="standard-basic" fullWidth label="title"/>
                                <span className={classes.validation}>{errors.title}</span>
                            </div>
                            <div className="listing">Listing description</div>
                            <TextareaAutosize name="description" value={createDetail.description} onChange={handleCreateChange} fullWidth className="text-field" aria-label="minimum height"/>
                            <span className={classes.validation}>{errors.listing}</span>
                        </Grid>
                    </Grid>
                    <div className="listing">Listing address</div>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <div className="inputFields">
                                <TextField name="streetName" value={createDetail.streetName} onChange={handleCreateChange} id="standard-basic" fullWidth label="Street name"/>
                                <span className={classes.validation}>{errors.streetName}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div className="inputFields">
                                <TextField name="houseNo" value={createDetail.houseNo} onChange={handleCreateChange} id="standard-basic" fullWidth label="House No."/>
                                <span className={classes.validation}>{errors.houseNo}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="inputFields">
                                <TextField name="postCode" value={createDetail.postCode} onChange={handleCreateChange} id="standard-basic" fullWidth label="Post code"/>
                                <span className={classes.validation}>{errors.postCode}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div className="inputFields">
                                <TextField name="city" value={createDetail.city} onChange={handleCreateChange} id="standard-basic" fullWidth label="City"/>
                                <span className={classes.validation}>{errors.city}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField name="listing" value={createDetail.listing} onChange={handleCreateChange} id="standard-basic" fullWidth label="What kind of place are you listing"/>
                                <span className={classes.validation}>{errors.listing}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField name="monthlyRate" value={createDetail.monthlyRate} onChange={handleCreateChange} id="standard-basic" fullWidth label="Monthly rate"/>
                                <span className={classes.validation}>{errors.monthlyRate}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField name="available" value={createDetail.available} onChange={handleCreateChange} id="standard-basic" fullWidth label="Available from"/>
                                <span className={classes.validation}>{errors.available}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField name="rental" value={createDetail.rental} onChange={handleCreateChange} id="standard-basic" fullWidth label="Minimum rental period "/>
                                <span className={classes.validation}>{errors.rental}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField name="roomSize" value={createDetail.roomSize} onChange={handleCreateChange} id="standard-basic" fullWidth label="Room size"/>
                                <span className={classes.validation}>{errors.roomSize}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField name="totalSize" value={createDetail.totalSize} onChange={handleCreateChange} id="standard-basic" fullWidth label="Total size"/>
                                <span className={classes.validation}>{errors.totalSize}</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField name="houseMates" value={createDetail.houseMates} onChange={handleCreateChange} id="standard-basic" fullWidth label="Number of housemates"/>
                                <span className={classes.validation}>{errors.houseMates}</span>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{marginBottom: '10px'}} className="listing">Upload photos</div>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <div>
                                <Button variant="contained" className="button-big" fullWidth>
                                    <DropzoneAreaBase
                                        fileObjects={files}
                                        onAdd={handleAdd}
                                        onDelete={handleDelete}
                                    />
                                </Button>
                                <span className={classes.validation}>{errors.uploadFile}</span>
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{marginTop: '15px'}}>
                        <Grid container>
                            <Grid item xs={12} md={2}>
                                <div className="listing">Listing Status?</div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RadioGroup className="radio-input" row >
                                    <FormControlLabel className="radioInput" name="status" value="Active" onChange={handleCreateChange} control={<Radio/>} label="Active"/>
                                    <FormControlLabel className="radioInput" name="status" value="InActive" onChange={handleCreateChange} control={<Radio/>} label="InActive"/>
                                </RadioGroup>
                                <span className={classes.validation}>{errors.status}</span>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <Button style={{backgroundColor: '#072C50',color: '#FFFFFF'}} className='button-small' variant="contained" onClick={handleSubmit}>Submit</Button>
                        <Button style={{marginLeft: '20px' }} className='button-small' variant="contained" onClick={onReset}>Reset</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default CreateForm;
