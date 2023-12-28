import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import { ModalDialogProps } from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import { makeStyles } from '@mui/material';

// Icons
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import BlockIcon from '@mui/icons-material/Block';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { CardHeader, Icon } from '@mui/material';
import User from '@/app/types/UserType';
import Office from '@/app/types/OfficeType';
import RemoveIcon from '@mui/icons-material/Remove';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import PdfParcel from './PdfParcel';

import Parcel from "@/app/types/ParcelType"
import PendingParcelList from './PendingParcelList';
import { PaginationLaptop } from '@/app/components/Pagination';

const data: Parcel[] = []


export default function PendingParcel() {
    const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(null);

    const renderModal = (item: Parcel, index: number) => {
        return (
            <Modal
                open={openModalIndex === index}
                onClose={() => setOpenModalIndex(null)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ModalDialog
                    style={{
                        width: '80%', // Adjust the width as needed
                        maxWidth: 600, // Maximum width to maintain readability
                        padding: '20px', // Padding for content
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <Typography level='title-lg'>Parcel Details</Typography>
                        <Typography level='title-lg'>
                            <PdfParcel />
                        </Typography>
                    </Box>
                    <Sheet
                        style={{ padding: '10px' }}
                    >
                        <Table
                            aria-labelledby="tableTitle"
                            stickyHeader
                            borderAxis="both"
                            hoverRow
                            sx={{
                                '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                                '--Table-headerUnderlineThickness': '1px',
                                '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                                '--TableCell-paddingY': '4px',
                                '--TableCell-paddingX': '8px',
                            }}
                        >
                            <thead>
                                <tr>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Length</th>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Price</th>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Height</th>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Weight</th>
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Width</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={item.id}>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.length}
                                        </Typography>
                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.price}
                                        </Typography>
                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.height}
                                        </Typography>
                                    </td>

                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.weight}
                                        </Typography>

                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.width}
                                        </Typography>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Sheet>
                    <Box
                        sx={{
                            display: { xs: 'block', sm: 'flex' },
                            justifyContent: { xs: 'initial', sm: 'space-between' },
                        }}
                    >
                        <Sheet
                            style={{ padding: '10px' }}
                        >
                            <Table
                                aria-labelledby="tableTitle"
                                stickyHeader
                                borderAxis="both"
                                hoverRow

                                sx={{
                                    '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                                    '--Table-headerUnderlineThickness': '1px',
                                    '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                                    '--TableCell-paddingY': '4px',
                                    '--TableCell-paddingX': '8px',
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }} colSpan={2}>Recipient Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={item.id}>

                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Name
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.recipient_name}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.id}>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Contact
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.recipient_contact}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.id}>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Address
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.recipient_address}
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Sheet>
                        <Sheet
                            style={{ padding: '10px' }}
                        >
                            <Table
                                aria-labelledby="tableTitle"
                                stickyHeader
                                borderAxis="both"
                                hoverRow
                                sx={{
                                    '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                                    '--Table-headerUnderlineThickness': '1px',
                                    '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                                    '--TableCell-paddingY': '4px',
                                    '--TableCell-paddingX': '8px',
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }} colSpan={2}>Sender Information</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={item.id}>

                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Name
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.sender_name}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.id}>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Contact
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.sender_contact}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.id}>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                style={{ fontWeight: 'bold' }}
                                            >
                                                Address
                                            </Typography>
                                        </td>
                                        <td style={{ width: '50%', padding: "6px 12px", fontSize: "0.75rem" }} colSpan={1}>
                                            <Typography
                                                level="body-xs"
                                            >
                                                {item.sender_address}
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Sheet>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'block', sm: 'flex' },
                            justifyContent: { xs: 'initial', sm: 'space-between' },
                        }}
                        style={{ padding: '10px' }}
                    >
                        <Button
                            variant="outlined"
                            color="danger"
                            size="sm"
                            onClick={() => setOpenModalIndex(null)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="outlined"
                            color="success"
                            size="sm"
                            onClick={() => setOpenModalIndex(null)}
                        >
                            Confirm
                        </Button>
                    </Box>
                </ModalDialog>
            </Modal>
        );
    };

    const [layout, setLayout] = React.useState<ModalDialogProps['layout'] | undefined>(
        undefined,
    );

    // Type of layout: undefined, 'fullscreen', 'responsive', 'fixed'

    const renderAddParcelModal = () => {
        return (
            <Modal
                open={!!layout}
                onClose={() => {
                    setLayout(undefined);
                }}
            >
                <ModalOverflow>
                    <ModalDialog
                        aria-labelledby="modal-dialog-overflow"
                        layout={layout}
                    >
                        <ModalClose />


                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '20px',

                            }}
                        >
                            <Box>
                                <Typography level="h4">
                                    Sender Information
                                </Typography>
                                {/* Form */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginTop: '20px',
                                        gap: 2,
                                        '& > *': {
                                            minWidth: { xs: '120px', md: '160px' },
                                        },
                                    }}
                                >
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Name <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="Nguyen Van A"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                        />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Contact <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="0123456789"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                        />

                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Address <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="UET"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Province/City <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="Ha Noi"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                District <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="Cau Giay"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Town <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="Xuan Thuy"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box>
                                <Typography level="h4">
                                    Recipient Information
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginTop: '20px',
                                        gap: 2,
                                        '& > *': {
                                            minWidth: { xs: '120px', md: '160px' },
                                        },
                                    }}
                                >
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Name <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="Nguyen Van A"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                        />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Contact <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="0123456789"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                        />

                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Address <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="UET"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Province/City <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="Ha Noi"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                District <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="Cau Giay"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Town <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="Xuan Thuy"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                </Box>

                            </Box>
                            <Box>
                                <Typography level="h4">
                                    Parcel Information
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginTop: '20px',
                                        gap: 2,
                                        '& > *': {
                                            minWidth: { xs: '120px', md: '160px' },
                                        },
                                    }}
                                >
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Length (cm)
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="30"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                        />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Height (cm)
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="20"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                        />

                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Width (cm)
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="10"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Weight (gram)
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="200"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                            type='float'
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Parcel Type
                                            </Typography>
                                        </FormLabel>
                                        <Box sx={{ display: 'flex', marginTop: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Checkbox label="Documents" size='sm' variant='soft' defaultChecked />
                                            <Checkbox label="Goods" size='sm' variant='soft' />
                                        </Box>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box>
                                <Typography level="h4">
                                    Postage
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginTop: '20px',
                                        gap: 2,
                                        '& > *': {
                                            minWidth: { xs: '120px', md: '160px' },
                                        },
                                    }}
                                >
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                COD money <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="VND"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                            type='float'
                                        />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Main Fee <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="VND"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft'
                                        />

                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Extra Fee <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="VND"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                VAT Fee <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="VND"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Total VAT Fee <span style={{ color: 'red' }}>*</span>
                                            </Typography>
                                        </FormLabel>
                                        <Input
                                            placeholder="VND"
                                            style={{ fontSize: '0.8rem' }}
                                            variant='soft' />
                                    </FormControl>
                                    {/* Total Fee */}
                                    <FormControl >
                                        <FormLabel>
                                            <Typography level="title-sm">
                                                Total Fee
                                            </Typography>
                                        </FormLabel>
                                        <Typography level="title-sm" color='success'>
                                            + 100,000 VND
                                        </Typography>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '10px',
                            }}
                        >
                            <Button
                                style={{
                                    backgroundColor: 'none',
                                }}
                            >

                            </Button>
                            <Button
                                variant="outlined"
                                color="success"
                                size="sm"
                                onClick={() => setLayout(undefined)}
                            >
                                Confirm
                            </Button>
                        </Box>
                    </ModalDialog>
                </ModalOverflow>
            </Modal >
        );
    }

    // Table Pagination
    const rowPerPage = 5;
    const totalRows = data.length;

    const [currentPage, setCurrentPage] = React.useState(1);

    // Calculate the index range for the current page
    const indexOfLastRow = currentPage * rowPerPage;
    const indexOfFirstRow = indexOfLastRow - rowPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    // Function to change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }


    return (
        <React.Fragment>
            <Box
                component="main"
                className="MainContent"
                sx={{
                    px: { xs: 2, md: 6 },
                    pt: {
                        xs: 'calc(12px + var(--Header-height))',
                        sm: 'calc(12px + var(--Header-height))',
                        md: 3,
                    },
                    pb: { xs: 2, sm: 2, md: 3 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        mb: 1,
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'start', sm: 'center' },
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography level="h2" component="h1">
                        Parcels
                    </Typography>
                    <Button
                        color="primary"
                        startDecorator={<AddCircleOutlineIcon />}
                        size="sm"
                        onClick={() => setLayout('fullscreen')}
                        variant="outlined"
                        style={{ fontWeight: "600" }}
                    >
                        Add Parcel
                    </Button>
                </Box>
                <Box
                    className="SearchAndFilters-tabletUp"
                    sx={{
                        borderRadius: 'sm',
                        py: 2,
                        display: { xs: 'none', sm: 'flex' },
                        flexWrap: 'wrap',
                        gap: 1.5,
                        '& > *': {
                            minWidth: { xs: '120px', md: '160px' },
                        },
                    }}
                >
                    <FormControl sx={{ flex: 1 }} size="sm">
                        <FormLabel >Search for parcel</FormLabel>
                        <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }} />
                    </FormControl>
                </Box>
                <Sheet
                    className="LEADERTableContainer"
                    variant="outlined"
                    sx={{
                        display: { xs: 'none', sm: 'initial' },
                        width: '100%',
                        borderRadius: 'sm',
                        flexShrink: 1,
                        overflow: 'auto',
                        minHeight: 0,
                    }}

                >
                    <Table
                        aria-labelledby="tableTitle"
                        stickyHeader

                        hoverRow
                        sx={{
                            '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                            '--Table-headerUnderlineThickness': '1px',
                            '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                            '--TableCell-paddingY': '4px',
                            '--TableCell-paddingX': '8px',
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Parcel ID</th>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Sender</th>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Recipient</th>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Recipient Address</th>
                                <th style={{ width: '16%', padding: "6px 12px" }}>Contact</th>
                                <th style={{ width: '14%', padding: "6px 12px" }}>Status</th>
                                <th style={{ width: '6%', padding: "6px 12px" }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentRows.map((row, index) => (
                                    <React.Fragment key={index}>
                                        <tr key={row.id}>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.id}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.sender_name}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.recipient_name}
                                                </Typography>
                                            </td>

                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.recipient_address}
                                                </Typography>

                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.recipient_contact}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '14%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >

                                                    <Chip
                                                        variant="soft"
                                                        size="sm"
                                                        color={'warning'}
                                                        style={{ padding: "0px 10px" }}
                                                    >
                                                        Pending
                                                    </Chip>

                                                </Typography>
                                            </td>
                                            <td style={{ width: '6%', padding: "6px 12px" }}>
                                                <IconButton variant="soft" size="sm" onClick={() => setOpenModalIndex(index)}>
                                                    <VisibilityIcon />
                                                </IconButton>
                                            </td>
                                        </tr>
                                        {renderModal(row, index)}
                                    </React.Fragment>
                                ))
                            }
                        </tbody>
                    </Table>
                    {renderAddParcelModal()}
                </Sheet>
                <PaginationLaptop
                    rowPerPage={rowPerPage}
                    currentPage={currentPage}
                    totalRows={totalRows}
                    indexOfLastRow={indexOfLastRow}
                    indexOfFirstRow={indexOfFirstRow}
                    setCurrentPage={setCurrentPage}
                    handlePageChange={handlePageChange}
                />
                <PendingParcelList />
            </Box>
        </React.Fragment >
    )
}