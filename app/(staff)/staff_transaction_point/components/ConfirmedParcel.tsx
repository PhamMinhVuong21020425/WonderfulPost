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

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import ConfirmedParcelList from './ConfirmedParcelList';

import PdfParcel from './PdfParcel';

import Parcel from "@/app/types/ParcelType"
import { PaginationLaptop } from '@/app/components/Pagination';
import { getReceivedParcelsInfoAsync, getDeliveredParcelsInfoAsync, selectParcel, selectUser, useDispatch, useSelector } from '@/lib/redux';


export default function ConfirmedParcel() {
    const [openModalIndex, setOpenModalIndex] = React.useState<number | null>(null);
    const data = useSelector(selectParcel).deliveredParcels.filter((item) => item.status != "ON_PENDING") ?? []

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

    const renderModal = (item: any, index: any) => {
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
                                    <th style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={item.parcel.id}>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.length}
                                        </Typography>
                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.price}
                                        </Typography>
                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.height}
                                        </Typography>
                                    </td>

                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.weight}
                                        </Typography>

                                    </td>
                                    <td style={{ width: '20%', padding: "6px 12px", fontSize: "0.75rem", textAlign: 'center' }}>
                                        <Typography
                                            level="body-xs"
                                        >
                                            {item.parcel.width}
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
                                    <tr key={item.parcel.id}>

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
                                                {item.parcel.recipient_name}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.parcel.id}>
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
                                                {item.parcel.recipient_contact}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.parcel.id}>
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
                                                {item.parcel.recipient_address}
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
                                    <tr key={item.parcel.id}>

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
                                                {item.parcel.sender_name}
                                            </Typography>
                                        </td>
                                    </tr>
                                    <tr key={item.parcel.id}>
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
                                                {item.parcel.sender_contact}
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
                                                {item.parcel.sender_address}
                                            </Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Sheet>
                    </Box>

                </ModalDialog>
            </Modal>
        );
    };


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
                <Typography level="h2" component="h1">
                    Overview
                </Typography>
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
                    className="SearchAndFilters-mobile"
                    sx={{
                        display: { xs: 'flex', sm: 'none' },
                        my: 1,
                        gap: 1,
                    }}
                >
                    <Input
                        size="sm"
                        placeholder="Search"
                        startDecorator={<SearchIcon />}
                        sx={{ flexGrow: 1 }}
                    />

                </Sheet>
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
                                        <tr key={row.parcel?.id}>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.id}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.sender_name}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.recipient_name}
                                                </Typography>
                                            </td>

                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.recipient_address}
                                                </Typography>

                                            </td>
                                            <td style={{ width: '16%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    {row.parcel?.recipient_contact}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '14%', padding: "6px 12px" }}>
                                                <Typography
                                                    level="body-xs"
                                                >
                                                    <Chip
                                                        variant="soft"
                                                        size="sm"
                                                        style={{ padding: "0px 10px" }}
                                                        color={
                                                            {
                                                                ON_GOING: 'primary',
                                                                SUCCESS: 'success',
                                                                CANCEL: 'danger',
                                                                ON_PENDING: 'warning',
                                                            }[row.status] as ColorPaletteProp
                                                        }
                                                    >
                                                        {
                                                            {
                                                                ON_GOING: 'Going',
                                                                SUCCESS: 'Success',
                                                                CANCEL: 'Cancel',
                                                                ON_PENDING: 'Pending',
                                                            }[row.status] as string
                                                        }
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
                <ConfirmedParcelList />
            </Box>
        </React.Fragment >
    )
}