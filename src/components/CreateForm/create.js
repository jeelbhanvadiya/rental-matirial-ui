import React, {useState} from 'react';
import {DropzoneAreaBase} from "material-ui-dropzone";
import {Button, Grid, TextField, TextareaAutosize, RadioGroup, FormControlLabel} from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import "./create.scss"

const CreateForm = () => {
    const [files, setFiles] = useState([]);

    const handleAdd = newFiles => {
        newFiles = newFiles.filter(file => !files.find(f => f.data === file.data));
        setFiles([...files, ...newFiles]);
    };

    const handleDelete = deleted => {
        setFiles(files.filter(f => f !== deleted));
    };

    return (
        <div className='create'>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <h1 className="heading">Create your Listing</h1>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="title"/>
                            </div>
                            <div className="listing">Listing description</div>
                            <TextareaAutosize fullWidth className="text-field" aria-label="minimum height"/>
                        </Grid>
                    </Grid>
                    <div className="listing">Listing address</div>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="Street name"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="House No."/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="Post code"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="City"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="What kind of place are you listing"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="Monthly rate"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="Available from"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="Minimum rental period "/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="Room size"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="Total size"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="inputFields">
                                <TextField id="standard-basic" fullWidth label="Number of housemates"/>
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
                            </div>
                        </Grid>
                    </Grid>
                    <div style={{marginTop: '15px'}}>
                        <Grid container>
                            <Grid item xs={12} md={2}>
                                <div className="listing">Listing Status?</div>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <RadioGroup className="radio-input" row aria-label="gender" name="gender1">
                                    <FormControlLabel value="female" control={<Radio/>} label="Active"/>
                                    <FormControlLabel value="male" control={<Radio/>} label="Incative"/>
                                </RadioGroup>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{marginTop: '15px'}}>
                        <Button style={{backgroundColor: '#072C50',color: '#FFFFFF'}} className='button-small' variant="contained" >Submit</Button>
                        <Button style={{marginLeft: '20px' }} className='button-small' variant="contained" >Reset</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default CreateForm;