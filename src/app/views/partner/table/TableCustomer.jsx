import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Add, CloseOutlined, Delete, Edit, Search, Visibility } from '@material-ui/icons';
import AddCustomer from '../action/AddCustomer';
import DetailCustomer from '../action/DetailCustomer';

function createData(idKH, nameKH, phone, owe, totalSale) {
    return { idKH, nameKH, phone, owe, totalSale };
}

const rowsData = [
    createData('KH01', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH02', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH03', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH04', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH05', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH06', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH07', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH08', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH09', 'Nguyễn Văn A', '032535355', 353355, 53538252),
    createData('KH10', 'Nguyễn Văn A', '032535355', 353355, 53538252),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'idKH', numeric: false, disablePadding: true, label: 'Mã khách hàng' },
    { id: 'nameKH', numeric: false, disablePadding: false, label: 'Tên khách hàng' },
    { id: 'phone', numeric: true, disablePadding: false, label: 'Số điện thoại' },
    { id: 'owe', numeric: true, disablePadding: false, label: 'Tổng nợ' },
    { id: 'totalSale', numeric: true, disablePadding: false, label: 'Tổng bán' },
];

function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));


const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected, setNumSelected, setDataRows } = props;
    const [openAdd, setOpenAdd] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);

    const [searchSelected, setSearchSelected] = useState(false);

    const handleCloseAdd = () => {
        setOpenAdd(false);
    }

    const handleOpenAdd = () => {
        setOpenAdd(true);
    }

    const handleOpenDetail = () => {
        setOpenDetail(true);
    }

    const handleCloseDetail = () => {
        setOpenDetail(false);
    }

    return (
        <div
            className={clsx(classes.root, {
                'flex-direction': true,
                'mb-8': true
            })}
        >
            <div className="flex flex-space-between">
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    Danh sách khách hàng
                    </Typography>
                <div className="flex flex-middle">
                    {
                        searchSelected ?
                            <TextField
                                id="outlined-basic"
                                placeholder="Tìm kiếm"
                                variant="outlined"
                                style={{ width: 300 }}
                                size="small" /> : <Fragment></Fragment>
                    }
                    <Tooltip title="Tìm kiếm">
                        <IconButton aria-label="searchKH" className={clsx({ "icon-primary-hover": true, "text-primary": searchSelected })}
                            onClick={() => { setSearchSelected(!searchSelected) }}>
                            <Search />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Xem chi tiết khách hàng">
                        <IconButton aria-label="detailKH" className="icon-purple-hover" onClick={handleOpenDetail}>
                            <Visibility />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Thêm khách hàng">
                        <IconButton aria-label="addKH" className="icon-green-hover" onClick={handleOpenAdd}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Sửa khách hàng">
                        <IconButton aria-label="editKH" className="icon-blue-hover">
                            <Edit />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Xoá khách hàng">
                        <IconButton aria-label="deleteKH" onClick={setDataRows} className="icon-red-hover">
                            <Delete />
                        </IconButton>
                    </Tooltip>
                    <AddCustomer open={openAdd} handleClose={handleCloseAdd} />
                    <DetailCustomer open={openDetail} handleClose={handleCloseDetail}/>
                </div>
            </div>
            {
                numSelected > 0 ? (
                    <div className={clsx(classes.highlight, {
                        'flex': true,
                        'flex-middle': true,
                        'flex-space-between': true,
                        'my-4': true
                    })}>
                        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                            Đã chọn {numSelected}
                        </Typography>
                        <Tooltip title="Delete">
                            <IconButton aria-label="delete" onClick={setNumSelected}>
                                <CloseOutlined />
                            </IconButton>
                        </Tooltip>
                    </div>) : (<Fragment></Fragment>)
            }
        </div >
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function CustomerTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState(rowsData);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.idKH);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSetRows = () => {
        const a = rows.filter(r => !selected.includes(r.idKH));
        console.log(a);
        setRows(a);
        setSelected([]);
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <Paper elevation={6} className="px-24 py-20 h-100">
            <EnhancedTableToolbar
                numSelected={selected.length}
                setNumSelected={() => { setSelected([]) }}
                setDataRows={handleSetRows} />
            <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size="medium"
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.idKH);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.idKH)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.idKH}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                            {row.idKH}
                                        </TableCell>
                                        <TableCell align="left">{row.nameKH}</TableCell>
                                        <TableCell align="right">{row.phone}</TableCell>
                                        <TableCell align="right">{row.owe}</TableCell>
                                        <TableCell align="right">{row.totalSale}</TableCell>
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                labelRowsPerPage={"Dòng/Page: "}
                labelDisplayedRows={({ from, to, count }) => (`${from}-${to}/${count !== -1 ? count : to}`)}
            />
        </Paper>
    );
}