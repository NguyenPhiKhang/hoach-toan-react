import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import { CloseOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { Component } from 'react';
import TabbarDetail from './TabbarDetail';
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const styles = theme => {
    return {
        dialog: {
            position: 'absolute',
            top: 20
        },
        typography: {
            paddingTop: 4,
            width: 120,
            marginLeft: 30,
            '@media only screen and (max-width: 767px)': {
                marginLeft: 0,
            }
        },
        textfieldw: {
            width: 'calc(100% - 152px)'
        },
        image: {
            width: 90,
            height: 100,
            marginBottom: 10,
            borderStyle: 'dotted',
            borderWidth: 2
        }
    }
}

class DetailCustomer extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         id: '',
         name: '',
         address: '',
         phone: '',

      };
    };
    

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.idKH.value);
        console.log(e.target.tenKH.value);
        console.log(e.target.sdtKH.value);
        console.log(e.target.emailKH.value);

        this.props.handleClose();
    }

    render() {
        const { open, handleClose, classes } = this.props;
        return (
            <div>
                <Dialog
                    open={open} onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                    disableBackdropClick
                    disableEscapeKeyDown
                    // classes={{ paper: clsx(classes.dialog, {"x-center": true}) }}
                    classes={{ paper: classes.dialog }}
                    maxWidth="md"
                >
                    <form onSubmit={this.handleFormSubmit} noValidate autoComplete="off">
                        <DialogTitle id="form-dialog-title">
                            <div className="flex flex-space-between flex-middle">
                                <Typography variant="h6">Chi tiết khách hàng</Typography>
                                <IconButton size="small" onClick={handleClose}>
                                    <CloseOutlined fontSize="small" />
                                </IconButton>
                            </div>
                        </DialogTitle>
                        <Divider variant="fullWidth"/>
                        <DialogContent className="mt-24">
                            <TabbarDetail />
                            {/* <Grid container>
                                <Grid item lg={2} md={2} sm={2} xs={12}>
                                    <div className="flex flex-column flex-middle">
                                        <div className={classes.image}>
                                        </div>
                                        <Button variant="contained" size="medium" className="mb-8" style={{ whiteSpace: "nowrap" }} color="primary">
                                            Chọn ảnh
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid container item lg={10} md={10} sm={10} xs={12}>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="flex w-100">
                                            <Typography variant="subtitle2" className={classes.typography}>
                                                Mã khách hàng</Typography>
                                            <TextField
                                                className={clsx(classes.textfieldw, { "mb-16 w-100 mx-8": true })}
                                                variant="standard"
                                                name="idKH"
                                                id="idKH"
                                                type="text"
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="flex position-relative">
                                            <Typography variant="subtitle2" className={classes.typography}>Tên khách hàng</Typography>
                                            <TextField
                                                className={clsx(classes.textfieldw, { "mb-16 w-100 mx-8": true })}
                                                variant="standard"
                                                name="tenKH"
                                                id="tenKH"
                                                type="text"
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="flex">
                                            <Typography variant="subtitle2" className={classes.typography}>Email</Typography>
                                            <TextField
                                                className={clsx(classes.textfieldw, { "mb-16 w-100 mx-8": true })}
                                                variant="standard"
                                                name="emailKH"
                                                id="emailKH"
                                                type="text"
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <div className="flex">
                                            <Typography variant="subtitle2" className={classes.typography}>Số điện thoại</Typography>
                                            <TextField
                                                className={clsx(classes.textfieldw, { "mb-16 w-100 mx-8": true })}
                                                variant="standard"
                                                name="sdtKH"
                                                id="sdtKH"
                                                type="text"
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <div className="flex">
                                            <Typography variant="subtitle2" className={classes.typography}>Địa chỉ</Typography>
                                            <TextField
                                                className={clsx(classes.textfieldw, { "mb-16 w-100 mx-8": true })}
                                                variant="standard"
                                                name="diachiKH"
                                                id="diachiKH"
                                                type="text"
                                            />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid> */}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Huỷ
                            </Button>
                            <Button type="submit" color="primary">
                                Lưu
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div >
        );
    }
}

export default withStyles(styles)(DetailCustomer);