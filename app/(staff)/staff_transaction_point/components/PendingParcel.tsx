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
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SearchIcon from '@mui/icons-material/Search';


import Parcel from "@/app/types/ParcelType"

const data: Parcel[] = [

    {
        "id": "P001",
        "length": 12,
        "price": 25.99,
        "height": 8,
        "weight": 5,
        "width": 6,
        "status": "ON_PENDING",
        "recipient_address": "123 Main St, Cityville",
        "recipient_contact": "+1234567890",
        "recipient_name": "John Doe",
        "sender_address": "456 Oak Ave, Townsville",
        "sender_contact": "+1987654321",
        "sender_name": "Jane Smith"
    },
    {
        "id": "P002",
        "length": 15,
        "price": 32.5,
        "height": 10,
        "weight": 7,
        "width": 9,
        "status": "ON_PENDING",
        "recipient_address": "789 Elm St, Villageton",
        "recipient_contact": "+1122334455",
        "recipient_name": "Alice Johnson",
        "sender_address": "321 Cedar Rd, Hamletville",
        "sender_contact": "+5566778899",
        "sender_name": "Bob Anderson"
    },
    {
        "id": "P003",
        "length": 18,
        "price": 42.75,
        "height": 12,
        "weight": 9,
        "width": 7,
        "status": "ON_PENDING",
        "recipient_address": "567 Pine St, Hillside",
        "recipient_contact": "+9988776655",
        "recipient_name": "Eva Martinez",
        "sender_address": "890 Maple Ave, Riverside",
        "sender_contact": "+4433221100",
        "sender_name": "David Wilson"
    },
    {
        "id": "P004",
        "length": 10,
        "price": 20.0,
        "height": 6,
        "weight": 4,
        "width": 5,
        "status": "ON_PENDING",
        "recipient_address": "234 Cedar St, Lakeside",
        "recipient_contact": "+6677889900",
        "recipient_name": "Grace Brown",
        "sender_address": "432 Elmwood Blvd, Mountainview",
        "sender_contact": "+1122334455",
        "sender_name": "Sophia Garcia"
    },
    {
        "id": "P005",
        "length": 14,
        "price": 28.75,
        "height": 9,
        "weight": 6,
        "width": 8,
        "status": "ON_PENDING",
        "recipient_address": "876 Oak St, Parkville",
        "recipient_contact": "+5544332211",
        "recipient_name": "Michael Clark",
        "sender_address": "654 Birch Rd, Seaview",
        "sender_contact": "+9988776655",
        "sender_name": "Olivia White"
    },
    {
        "id": "P006",
        "length": 20,
        "price": 50.0,
        "height": 14,
        "weight": 11,
        "width": 10,
        "status": "ON_PENDING",
        "recipient_address": "543 Birch St, Hilltop",
        "recipient_contact": "+6677889900",
        "recipient_name": "Lucas Rodriguez",
        "sender_address": "789 Pine Rd, Lakeside",
        "sender_contact": "+5544332211",
        "sender_name": "Isabella Martinez"
    },
    {
        "id": "P007",
        "length": 16,
        "price": 35.5,
        "height": 11,
        "weight": 8,
        "width": 7,
        "status": "ON_PENDING",
        "recipient_address": "321 Elmwood Ave, Riverside",
        "recipient_contact": "+1122334455",
        "recipient_name": "Daniel Lee",
        "sender_address": "567 Oak St, Parkville",
        "sender_contact": "+9988776655",
        "sender_name": "Emma Thompson"
    },
    {
        "id": "P008",
        "length": 12,
        "price": 25.99,
        "height": 8,
        "weight": 5,
        "width": 6,
        "status": "ON_PENDING",
        "recipient_address": "123 Main St, Cityville",
        "recipient_contact": "+1234567890",
        "recipient_name": "Liam Baker",
        "sender_address": "456 Oak Ave, Townsville",
        "sender_contact": "+1987654321",
        "sender_name": "Ava Turner"
    },
    {
        "id": "P009",
        "length": 22,
        "price": 60.0,
        "height": 16,
        "weight": 13,
        "width": 12,
        "status": "ON_PENDING",
        "recipient_address": "987 Maple St, Hillside",
        "recipient_contact": "+5544332211",
        "recipient_name": "Mia Wright",
        "sender_address": "345 Cedar Rd, Hamletville",
        "sender_contact": "+6677889900",
        "sender_name": "Noah Hall"
    },
    {
        "id": "P010",
        "length": 18,
        "price": 42.75,
        "height": 12,
        "weight": 9,
        "width": 7,
        "status": "ON_PENDING",
        "recipient_address": "567 Pine St, Hillside",
        "recipient_contact": "+9988776655",
        "recipient_name": "Sophie King",
        "sender_address": "890 Maple Ave, Riverside",
        "sender_contact": "+4433221100",
        "sender_name": "Ethan Cook"
    }
]


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
                            <IconButton variant="soft" size="sm">
                                <LocalPrintshopIcon />
                            </IconButton>
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


    return (
        <React.Fragment>
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
                            data.map((row, index) => (
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

            </Sheet>
        </React.Fragment >
    )
}