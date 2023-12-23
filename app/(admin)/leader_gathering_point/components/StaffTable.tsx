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
import CountrySelector from './CountrySelector';
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


const STAFFs: User[] = [
    {
        id: 'STAFF-0002',
        name: 'Bob Smith',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'bob.smith@magic-post.com',
        phone: '987-654-3210',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0003',
        name: 'Eva Martinez',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'eva.martinez@magic-post.com',
        phone: '333-222-1111',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0001',
        name: 'Charlie Brown',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'charlie.brown@magic-post.com',
        phone: '444-555-6666',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0002',
        name: 'Diana Clark',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'diana.clark@magic-post.com',
        phone: '777-888-9999',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0004',
        name: 'Frank Rodriguez',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'frank.rodriguez@magic-post.com',
        phone: '222-333-4444',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0003',
        name: 'Grace Lee',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'grace.lee@magic-post.com',
        phone: '555-666-7777',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0002',
        name: 'Henry Davis',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'henry.davis@magic-post.com',
        phone: '999-000-1111',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0005',
        name: 'Isabella Flores',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'isabella.flores@magic-post.com',
        phone: '666-777-8888',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0004',
        name: 'Jack Wilson',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'jack.wilson@magic-post.com',
        phone: '111-222-3333',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0003',
        name: 'Katherine Moore',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'katherine.moore@magic-post.com',
        phone: '123-987-4567',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0006',
        name: 'Liam Harris',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'liam.harris@magic-post.com',
        phone: '444-222-3333',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0005',
        name: 'Mia Taylor',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'mia.taylor@magic-post.com',
        phone: '222-333-4444',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0004',
        name: 'Noah Anderson',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'noah.anderson@magic-post.com',
        phone: '777-888-9999',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0007',
        name: 'Olivia Wilson',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'olivia.wilson@magic-post.com',
        phone: '999-000-1111',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0006',
        name: 'Sophia Martin',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'sophia.martin@magic-post.com',
        phone: '666-777-8888',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0005',
        name: 'William Garcia',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'william.garcia@magic-post.com',
        phone: '111-222-3333',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0008',
        name: 'Emma Lopez',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'emma.lopez@magic-post.com',
        phone: '123-987-4567',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0007',
        name: 'James Turner',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'james.turner@magic-post.com',
        phone: '444-222-3333',
        role: 'STAFF',
        position: 'TRANSACTION'
    },
    {
        id: 'STAFF-0006',
        name: 'Ava Cooper',
        office: {
            id: 'OFFICE-0002',
            name: 'New York City',
            address: '456 Broadway, New York, NY',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0003',
                    name: 'Madrid',
                    address: '789 Calle de Alcala, Madrid',
                    phone: '333-222-1111',
                    email: 'office-0003@magic-post.com',
                    fax: '333-222-1111',
                    sub_offices: []
                },
            ]
        },
        email: 'ava.cooper@magic-post.com',
        phone: '777-999-1111',
        role: 'STAFF',
        position: 'TRANSACTION'
    }
];

function initialName(name: string) {
    return name.split(' ').map((word) => word[0]).join('');
}

function Row(props: { row: any; initialOpen?: boolean }) {
    const { row } = props;

    return (
        <React.Fragment>
            <tr key={row.id}>
                <td style={{ width: '10%', padding: "6px 12px" }}>
                    <Typography
                        level="body-xs"
                    >{row.id}</Typography>
                </td>
                <td style={{ width: '35%', padding: "6px 12px" }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Avatar
                            size="sm"
                            color={row.position === 'TRANSACTION' ? 'success' : 'warning'}
                            style={{ fontSize: '0.75rem' }}
                        >
                            {initialName(row.name)}
                        </Avatar>
                        <div>
                            <Typography level="body-xs">{row.name}</Typography>
                            <Typography
                                style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                            >{row.email}</Typography>
                        </div>
                    </Box>
                </td>
                <td style={{ width: '45%', padding: "6px 12px" }}>
                    <Box
                        sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
                    >
                        <Typography
                            level='body-xs'
                        >{row.phone}</Typography>

                    </Box>
                </td>

                <td style={{ width: '10%', padding: "6px 12px" }}>
                    {/* <Typography level="body-xs">{row.phone}</Typography> */}
                    <IconButton variant="soft" size="sm">
                        <RowMenu />
                    </IconButton>
                </td>
            </tr>

        </React.Fragment>
    );
}

function RowMenu() {
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

    const renderEditModal = () => {
        return (
            <Modal
                open={openEditModal}
                onClose={() => setOpenEditModal(false)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Card
                    style={{
                        width: '100%',
                        maxWidth: 600,
                        // borderRadius: 12,
                        // overflow: 'hidden',
                    }}
                >
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Personal Information</Typography>
                        <Typography level="body-sm">
                            Customize how your profile information will apper to the networks.
                        </Typography>
                    </Box>
                    <Divider />
                    <Stack
                        direction="row"
                    >
                        <Stack direction="column" spacing={1}>

                        </Stack>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Stack spacing={1}>
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                >
                                    <Input size="sm" placeholder="Your name" />
                                </FormControl>
                                <FormLabel>Phone</FormLabel>
                                <FormControl
                                >
                                    <Input size="sm" placeholder="Phone" />
                                </FormControl>

                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Select
                                        size="sm"
                                        defaultValue="1"
                                    >
                                        <Option value="1">
                                            <Typography level='body-sm'>
                                                GATHERING
                                            </Typography>
                                        </Option>
                                        <Option value="2">
                                            <Typography level='body-sm'>
                                                TRANSACTION
                                            </Typography>
                                        </Option>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="@magic-post.com"
                                        sx={{ flexGrow: 1 }}
                                    />
                                </FormControl>
                            </Stack>
                            <div>
                                <CountrySelector />
                            </div>
                        </Stack>
                    </Stack>
                    <CardOverflow >
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral" onClick={() => setOpenEditModal(false)}>
                                Cancel
                            </Button>
                            <Button size="sm" variant="outlined" color="primary" onClick={() => setOpenEditModal(false)}>
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>

            </Modal>
        );
    }

    const renderDeleteModal = () => {
        return (
            <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
                <ModalDialog variant="outlined" role="alertdialog">
                    <DialogTitle>
                        <WarningRoundedIcon />
                        Confirmation
                    </DialogTitle>
                    <Divider />
                    <DialogContent>
                        Are you sure you want to delete this LEADER?
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="danger" onClick={() => setOpenDeleteModal(false)}>
                            Discard notes
                        </Button>
                        <Button variant="outlined" color="neutral" onClick={() => setOpenDeleteModal(false)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        );
    }

    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
            >
                <MoreHorizRoundedIcon />
            </MenuButton>
            <Menu size="sm" sx={{ minWidth: 140 }}>
                <MenuItem onClick={() => setOpenEditModal(true)}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <EditRoundedIcon />
                        <Typography
                            level="body-xs"
                            color='neutral'
                        >
                            Edit
                        </Typography>
                    </Box>
                </MenuItem>
                <MenuItem color="danger" onClick={() => setOpenDeleteModal(true)}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <DeleteRoundedIcon />
                        <Typography level="body-xs" color='danger'>Delete</Typography>
                    </Box>
                </MenuItem>
            </Menu>
            {renderEditModal()}
            {renderDeleteModal()}
        </Dropdown >
    );
}

export default function StaffTable() {
    return (
        <React.Fragment>
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
                            <th style={{ width: '10%', padding: "6px 12px" }}>Staff ID</th>
                            <th style={{ width: '35%', padding: "6px 12px" }}>Staff</th>
                            <th style={{ width: '45%', padding: "6px 12px" }}>Phone</th>
                            <th style={{ width: '10%', padding: "6px 12px" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            STAFFs.map((STAFF) => (
                                <Row key={STAFF.id} row={STAFF} />
                            ))
                        }
                    </tbody>
                </Table>

            </Sheet>
            <Box
                className="Pagination-laptopUp"
                sx={{
                    pt: 2,
                    gap: 1,
                    [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                    display: {
                        xs: 'none',
                        md: 'flex',
                    },
                }}
            >
                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<KeyboardArrowLeftIcon />}
                >
                    Previous
                </Button>

                <Box sx={{ flex: 1 }} />
                {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
                    <IconButton
                        key={page}
                        size="sm"
                        variant={Number(page) ? 'outlined' : 'plain'}
                        color="neutral"
                    >
                        {page}
                    </IconButton>
                ))}
                <Box sx={{ flex: 1 }} />

                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    endDecorator={<KeyboardArrowRightIcon />}
                >
                    Next
                </Button>
            </Box>
        </React.Fragment >
    )
}