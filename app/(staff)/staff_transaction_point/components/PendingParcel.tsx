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

import PdfParcel from '@/app/(staff)/staff_gathering_point/components/PdfParcel';

import Parcel from "@/app/types/ParcelType"

const data: Parcel[] = [
    {
        "id": 1,
        "name": "Parcel 1",
        "length": 10,
        "price": 25.99,
        "height": 5,
        "weight": 2.5,
        "width": 8,
        "status": "ON_PENDING",
        "recipient_address": "123 Main St, City A",
        "recipient_contact": "+1234567890",
        "recipient_name": "John Doe",
        "sender_address": "456 Elm St, City B",
        "sender_contact": "+9876543210",
        "sender_name": "Jane Smith",
        "type": "Regular",
        "date_created": "2023-01-15",
        "description": "Sample description for Parcel 1",
        "from_branch_id": "Branch001",
        "to_branch_id": "Branch002"
    },
    {
        "id": 2,
        "name": "Parcel 2",
        "length": 15,
        "price": 30.5,
        "height": 8,
        "weight": 3.2,
        "width": 12,
        "status": "ON_GOING",
        "recipient_address": "789 Oak St, City C",
        "recipient_contact": "+1112223333",
        "recipient_name": "Alice Johnson",
        "sender_address": "101 Pine St, City D",
        "sender_contact": "+4445556666",
        "sender_name": "Bob Williams",
        "type": "Fragile",
        "date_created": "2023-02-20",
        "description": "Sample description for Parcel 2",
        "from_branch_id": "Branch003",
        "to_branch_id": "Branch004"
    },
    {
        "id": 3,
        "name": "Parcel 3",
        "length": 12,
        "price": 18.75,
        "height": 6,
        "weight": 1.8,
        "width": 10,
        "status": "SUCCESS",
        "recipient_address": "222 Broadway, City E",
        "recipient_contact": "+7778889999",
        "recipient_name": "Eva Brown",
        "sender_address": "333 Market St, City F",
        "sender_contact": "+6665554444",
        "sender_name": "David Wilson",
        "type": null,
        "date_created": null,
        "description": null,
        "from_branch_id": "Branch005",
        "to_branch_id": "Branch006"
    },

    {
        "id": 4,
        "name": "Parcel 4",
        "length": 18,
        "price": 42.0,
        "height": 9,
        "weight": 4.5,
        "width": 14,
        "status": "ON_PENDING",
        "recipient_address": "444 Maple St, City G",
        "recipient_contact": "+1231231234",
        "recipient_name": "Grace Lee",
        "sender_address": "555 Cherry St, City H",
        "sender_contact": "+9879879876",
        "sender_name": "Sam Johnson",
        "type": "Electronics",
        "date_created": "2023-03-10",
        "description": "Sample description for Parcel 4",
        "from_branch_id": "Branch007",
        "to_branch_id": "Branch008"
    },
    {
        "id": 5,
        "name": "Parcel 5",
        "length": 20,
        "price": 55.25,
        "height": 7,
        "weight": 3.0,
        "width": 16,
        "status": "SUCCESS",
        "recipient_address": "777 Pineapple St, City I",
        "recipient_contact": "+5556667777",
        "recipient_name": "Sophia Garcia",
        "sender_address": "888 Orange St, City J",
        "sender_contact": "+4443332222",
        "sender_name": "Oliver Davis",
        "type": "Books",
        "date_created": "2023-04-05",
        "description": "Sample description for Parcel 5",
        "from_branch_id": "Branch009",
        "to_branch_id": "Branch010"
    },
    {
        "id": 6,
        "name": "Parcel 6",
        "length": 22,
        "price": 35.75,
        "height": 8,
        "weight": 3.8,
        "width": 18,
        "status": "ON_GOING",
        "recipient_address": "999 Lemon St, City K",
        "recipient_contact": "+9998887777",
        "recipient_name": "Liam Martinez",
        "sender_address": "111 Avocado St, City L",
        "sender_contact": "+6667778888",
        "sender_name": "Mia Thompson",
        "type": null,
        "date_created": null,
        "description": null,
        "from_branch_id": "Branch011",
        "to_branch_id": "Branch012"
    },
    {
        "id": 7,
        "name": "Parcel 7",
        "length": 14,
        "price": 28.99,
        "height": 6,
        "weight": 2.2,
        "width": 11,
        "status": "SUCCESS",
        "recipient_address": "777 Elm St, City M",
        "recipient_contact": "+1234567890",
        "recipient_name": "Noah Clark",
        "sender_address": "888 Oak St, City N",
        "sender_contact": "+9876543210",
        "sender_name": "Ava Lewis",
        "type": "Clothing",
        "date_created": "2023-05-20",
        "description": "Sample description for Parcel 7",
        "from_branch_id": "Branch013",
        "to_branch_id": "Branch014"
    },
    {
        "id": 8,
        "name": "Parcel 8",
        "length": 16,
        "price": 38.5,
        "height": 7,
        "weight": 3.5,
        "width": 13,
        "status": "CANCEL",
        "recipient_address": "222 Cedar St, City O",
        "recipient_contact": "+1112223333",
        "recipient_name": "Emma Turner",
        "sender_address": "333 Pine St, City P",
        "sender_contact": "+4445556666",
        "sender_name": "William Harris",
        "type": "Accessories",
        "date_created": "2023-06-15",
        "description": "Sample description for Parcel 8",
        "from_branch_id": "Branch015",
        "to_branch_id": "Branch016"
    },
    {
        "id": 9,
        "name": "Parcel 9",
        "length": 19,
        "price": 45.25,
        "height": 8,
        "weight": 4.0,
        "width": 15,
        "status": "ON_PENDING",
        "recipient_address": "444 Walnut St, City Q",
        "recipient_contact": "+7778889999",
        "recipient_name": "James Baker",
        "sender_address": "555 Maple St, City R",
        "sender_contact": "+6665554444",
        "sender_name": "Isabella Green",
        "type": "Home Goods",
        "date_created": "2023-07-10",
        "description": "Sample description for Parcel 9",
        "from_branch_id": "Branch017",
        "to_branch_id": "Branch018"
    },
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



    return (
        <React.Fragment>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography level="h2" component="h1">
                    Parcels
                </Typography>
                <Button
                    color="primary"
                    startDecorator={<AddIcon />}
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
                {renderAddParcelModal()}
            </Sheet>
        </React.Fragment >
    )
}