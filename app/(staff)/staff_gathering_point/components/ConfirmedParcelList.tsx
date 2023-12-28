import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';


import PdfParcel from './PdfParcel';

import Parcel from "@/app/types/ParcelType";
import { PaginationLaptop, PaginationMobile } from '@/app/components/Pagination';


const data: Parcel[] = []


export default function ConfirmedParcelList() {
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
                                    <th style={{
                                        width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center', whiteSpace: 'normal',
                                        wordWrap: 'break-word',
                                    }}>Length</th>
                                    <th style={{
                                        width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center', whiteSpace: 'normal',
                                        wordWrap: 'break-word',
                                    }}>Price</th>
                                    <th style={{
                                        width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center', whiteSpace: 'normal',
                                        wordWrap: 'break-word',
                                    }}>Height</th>
                                    <th style={{
                                        width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center', whiteSpace: 'normal',
                                        wordWrap: 'break-word',
                                    }}>Weight</th>
                                    <th style={{
                                        width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center', whiteSpace: 'normal',
                                        wordWrap: 'break-word',
                                    }}>Width</th>
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
                            display: { xs: 'flex', sm: 'flex' },
                            justifyContent: { xs: 'space-between', sm: 'space-between' },
                        }}
                        style={{
                            padding: '0px',
                        }}
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
            <Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    {
                        currentRows.map((parcel, index) => (
                            <List
                                key={parcel.id}
                                size="sm"
                                sx={{
                                    '--ListItem-paddingX': 0,
                                }}
                            >
                                <ListItem
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'start',
                                    }}
                                >
                                    <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                            <Typography level="body-xs" color="neutral" fontWeight="600" paddingTop={0.5}>
                                                From
                                            </Typography>
                                            <Typography level="body-xs" color="neutral" fontWeight="600">
                                                To
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                            <Typography level="body-xs" color="neutral" fontWeight="600" paddingTop={0.5}>
                                                {parcel.sender_name}
                                            </Typography>
                                            <Typography level="body-xs" color="neutral" fontWeight="600">
                                                {parcel.recipient_name}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                            <Typography level="body-xs" color="neutral" fontWeight="600">
                                                <Chip
                                                    style={{ padding: "0px 10px" }}
                                                    color={
                                                        {
                                                            ON_GOING: 'primary',
                                                            SUCCESS: 'success',
                                                            CANCEL: 'danger',
                                                            ON_PENDING: 'warning',
                                                        }[parcel.status] as ColorPaletteProp
                                                    }

                                                >
                                                    <Typography level="body-xs" color="neutral" fontWeight="600">
                                                        {
                                                            {
                                                                ON_GOING: 'going',
                                                                SUCCESS: 'success',
                                                                CANCEL: 'cancel',
                                                                ON_PENDING: 'pending',
                                                            }[parcel.status] as string
                                                        }
                                                    </Typography>
                                                </Chip>
                                            </Typography>
                                            <Typography level="body-xs" color="neutral" fontWeight="600">
                                                {parcel.recipient_address}
                                            </Typography>
                                        </Box>
                                    </ListItemContent>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>

                                        <Dropdown>
                                            <MenuButton
                                                slots={{ root: IconButton }}
                                                slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
                                            >
                                                <MoreHorizRoundedIcon />
                                            </MenuButton>
                                            <Menu size="sm" sx={{ minWidth: 140 }}>
                                                <MenuItem>
                                                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                                        <EditRoundedIcon />
                                                        <Typography
                                                            style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                                            color='neutral'
                                                        >
                                                            Edit
                                                        </Typography>
                                                    </Box>
                                                </MenuItem>


                                                <MenuItem>
                                                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }} onClick={() => setOpenModalIndex(index)}>
                                                        <VisibilityIcon />
                                                        <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>View</Typography>
                                                    </Box>
                                                </MenuItem>

                                                <MenuItem>
                                                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                                        <DeleteRoundedIcon />
                                                        <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>Delete</Typography>
                                                    </Box>
                                                </MenuItem>

                                            </Menu>
                                        </Dropdown >
                                    </Box>
                                </ListItem>
                                {renderModal(parcel, index)}
                                <ListDivider />
                            </List>
                        ))
                    }
                    <PaginationMobile
                        rowPerPage={rowPerPage}
                        currentPage={currentPage}
                        totalRows={totalRows}
                        indexOfLastRow={indexOfLastRow}
                        indexOfFirstRow={indexOfFirstRow}
                        setCurrentPage={setCurrentPage}
                        handlePageChange={handlePageChange}
                    />
                </Box>
            </Box>
        </React.Fragment >
    )
}