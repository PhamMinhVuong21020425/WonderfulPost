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


const LEADERs: User[] = [
    {
        id: 'LEADER-0001',
        name: 'Alice Johnson',
        office: {
            id: 'OFFICE-0001',
            name: 'Ho Chi Minh',
            address: '123 Nguyen Van Linh, District 7, Ho Chi Minh',
            phone: '123-456-7890',
            email: 'office-0001@magic-post.com',
            fax: '123-456-7890',
            sub_offices: []
        },
        email: 'alice.johnson@magic-post.com',
        phone: '123-456-7890',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0002',
        name: 'Bob Smith',
        office: {
            id: 'OFFICE-0002',
            name: 'Hanoi',
            address: '456 Pham Hung, Cau Giay, Hanoi',
            phone: '987-654-3210',
            email: 'office-0002@magic-post.com',
            fax: '987-654-3210',
            sub_offices: [
                {
                    id: 'OFFICE-0001-2',
                    name: 'District 2',
                    address: '123 Nguyen Van Linh, District 2, Ho Chi Minh',
                    phone: '123-456-7890',
                    email: 'office-0001-2@magic-post.com',
                    fax: '123-456-7890',
                    sub_offices: []
                }
            ]
        },
        email: 'bob.smith@magic-post.com',
        phone: '987-654-3210',
        role: 'LEADER',
        position: 'GATHERING'
    },
    {
        id: 'LEADER-0003',
        name: 'Elena Rodriguez',
        office: {
            id: 'OFFICE-0003',
            name: 'Barcelona',
            address: '789 Avinguda Diagonal, Barcelona',
            phone: '345-678-9012',
            email: 'office-0003@magic-post.com',
            fax: '345-678-9012',
            sub_offices: []
        },
        email: 'elena.rodriguez@magic-post.com',
        phone: '345-678-9012',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0004',
        name: 'David Lee',
        office: {
            id: 'OFFICE-0004',
            name: 'Seoul',
            address: '567 Gangnam-gu, Seoul',
            phone: '222-333-4444',
            email: 'office-0004@magic-post.com',
            fax: '222-333-4444',
            sub_offices: [
                {
                    id: 'OFFICE-0001-1',
                    name: 'District 1',
                    address: '123 Nguyen Hue, District 1, Ho Chi Minh',
                    phone: '123-456-7890',
                    email: 'office-0001-1@magic-post.com',
                    fax: '123-456-7890',
                    sub_offices: []
                },
                {
                    id: 'OFFICE-0001-2',
                    name: 'District 2',
                    address: '123 Nguyen Van Linh, District 2, Ho Chi Minh',
                    phone: '123-456-7890',
                    email: 'office-0001-2@magic-post.com',
                    fax: '123-456-7890',
                    sub_offices: []
                },
                {
                    id: 'OFFICE-0001-2',
                    name: 'District 2',
                    address: '123 Nguyen Van Linh, District 2, Ho Chi Minh',
                    phone: '123-456-7890',
                    email: 'office-0001-2@magic-post.com',
                    fax: '123-456-7890',
                    sub_offices: []
                }
            ]
        },
        email: 'david.lee@magic-post.com',
        phone: '222-333-4444',
        role: 'LEADER',
        position: 'GATHERING'
    },
    {
        id: 'LEADER-0005',
        name: 'Sophie Brown',
        office: {
            id: 'OFFICE-0005',
            name: 'London',
            address: '890 Baker Street, London',
            phone: '777-888-9999',
            email: 'office-0005@magic-post.com',
            fax: '777-888-9999',
            sub_offices: []
        },
        email: 'sophie.brown@magic-post.com',
        phone: '777-888-9999',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0006',
        name: 'Michael Nguyen',
        office: {
            id: 'OFFICE-0006',
            name: 'Sydney',
            address: '11 George St, Sydney NSW',
            phone: '6123-4567-8901',
            email: 'office-0006@magic-post.com',
            fax: '6123-4567-8901',
            sub_offices: []
        },
        email: 'michael.nguyen@magic-post.com',
        phone: '6123-4567-8901',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0007',
        name: 'Emily Davis',
        office: {
            id: 'OFFICE-0007',
            name: 'New York',
            address: '123 Broadway, New York, NY',
            phone: '212-555-6789',
            email: 'office-0007@magic-post.com',
            fax: '212-555-6789',
            sub_offices: []
        },
        email: 'emily.davis@magic-post.com',
        phone: '212-555-6789',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0008',
        name: 'Luca Rossi',
        office: {
            id: 'OFFICE-0008',
            name: 'Rome',
            address: 'Via del Corso, Rome',
            phone: '39-06-1234567',
            email: 'office-0008@magic-post.com',
            fax: '39-06-1234567',
            sub_offices: []
        },
        email: 'luca.rossi@magic-post.com',
        phone: '39-06-1234567',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0009',
        name: 'Sophia Chen',
        office: {
            id: 'OFFICE-0009',
            name: 'Shanghai',
            address: '889 Nanjing Road, Shanghai',
            phone: '86-21-98765432',
            email: 'office-0009@magic-post.com',
            fax: '86-21-98765432',
            sub_offices: []
        },
        email: 'sophia.chen@magic-post.com',
        phone: '86-21-98765432',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0010',
        name: 'Alexandre Martin',
        office: {
            id: 'OFFICE-0010',
            name: 'Paris',
            address: '15 Rue de Rivoli, Paris',
            phone: '33-1-23456789',
            email: 'office-0010@magic-post.com',
            fax: '33-1-23456789',
            sub_offices: []
        },
        email: 'alexandre.martin@magic-post.com',
        phone: '33-1-23456789',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0011',
        name: 'Isabella Garcia',
        office: {
            id: 'OFFICE-0011',
            name: 'Mexico City',
            address: 'Av. Paseo de la Reforma, Mexico City',
            phone: '52-55-1234-5678',
            email: 'office-0011@magic-post.com',
            fax: '52-55-1234-5678',
            sub_offices: []
        },
        email: 'isabella.garcia@magic-post.com',
        phone: '52-55-1234-5678',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0012',
        name: 'Oliver Müller',
        office: {
            id: 'OFFICE-0012',
            name: 'Berlin',
            address: 'Friedrichstraße, Berlin',
            phone: '49-30-987654321',
            email: 'office-0012@magic-post.com',
            fax: '49-30-987654321',
            sub_offices: []
        },
        email: 'oliver.muller@magic-post.com',
        phone: '49-30-987654321',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0013',
        name: 'Chen Wei',
        office: {
            id: 'OFFICE-0013',
            name: 'Beijing',
            address: '798 Art District, Beijing',
            phone: '86-10-87654321',
            email: 'office-0013@magic-post.com',
            fax: '86-10-87654321',
            sub_offices: []
        },
        email: 'chen.wei@magic-post.com',
        phone: '86-10-87654321',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0014',
        name: 'Hiroshi Tanaka',
        office: {
            id: 'OFFICE-0014',
            name: 'Tokyo',
            address: 'Shibuya Crossing, Tokyo',
            phone: '81-3-1234-5678',
            email: 'office-0014@magic-post.com',
            fax: '81-3-1234-5678',
            sub_offices: []
        },
        email: 'hiroshi.tanaka@magic-post.com',
        phone: '81-3-1234-5678',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0015',
        name: 'Emma Wilson',
        office: {
            id: 'OFFICE-0015',
            name: 'Sydney',
            address: 'Circular Quay, Sydney NSW',
            phone: '61-2-3456-7890',
            email: 'office-0015@magic-post.com',
            fax: '61-2-3456-7890',
            sub_offices: []
        },
        email: 'emma.wilson@magic-post.com',
        phone: '61-2-3456-7890',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0016',
        name: 'Luis Hernandez',
        office: {
            id: 'OFFICE-0016',
            name: 'Madrid',
            address: 'Gran Vía, Madrid',
            phone: '34-91-987-6543',
            email: 'office-0016@magic-post.com',
            fax: '34-91-987-6543',
            sub_offices: []
        },
        email: 'luis.hernandez@magic-post.com',
        phone: '34-91-987-6543',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0017',
        name: 'Anna Kovacs',
        office: {
            id: 'OFFICE-0017',
            name: 'Budapest',
            address: 'Andrássy út, Budapest',
            phone: '36-1-234-5678',
            email: 'office-0017@magic-post.com',
            fax: '36-1-234-5678',
            sub_offices: []
        },
        email: 'anna.kovacs@magic-post.com',
        phone: '36-1-234-5678',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0018',
        name: 'Sanjay Patel',
        office: {
            id: 'OFFICE-0018',
            name: 'Mumbai',
            address: 'Bandra Kurla Complex, Mumbai',
            phone: '91-22-8765-4321',
            email: 'office-0018@magic-post.com',
            fax: '91-22-8765-4321',
            sub_offices: []
        },
        email: 'sanjay.patel@magic-post.com',
        phone: '91-22-8765-4321',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0019',
        name: 'Yuki Tanaka',
        office: {
            id: 'OFFICE-0019',
            name: 'Osaka',
            address: 'Dotonbori, Osaka',
            phone: '81-6-9876-5432',
            email: 'office-0019@magic-post.com',
            fax: '81-6-9876-5432',
            sub_offices: []
        },
        email: 'yuki.tanaka@magic-post.com',
        phone: '81-6-9876-5432',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
    {
        id: 'LEADER-0020',
        name: 'Maria Silva',
        office: {
            id: 'OFFICE-0020',
            name: 'Rio de Janeiro',
            address: 'Copacabana Beach, Rio de Janeiro',
            phone: '55-21-1234-5678',
            email: 'office-0020@magic-post.com',
            fax: '55-21-1234-5678',
            sub_offices: []
        },
        email: 'maria.silva@magic-post.com',
        phone: '55-21-1234-5678',
        role: 'LEADER',
        position: 'TRANSACTION'
    },
];

function initialName(name: string) {
    return name.split(' ').map((word) => word[0]).join('');
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
                            style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                            color='neutral'
                        >
                            Edit
                        </Typography>
                    </Box>
                </MenuItem>
                <MenuItem color="danger" onClick={() => setOpenDeleteModal(true)}>
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <DeleteRoundedIcon />
                        <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }} color='danger'>Delete</Typography>
                    </Box>
                </MenuItem>
            </Menu>
            {renderEditModal()}
            {renderDeleteModal()}
        </Dropdown >
    );
}

function Row(props: { row: any; initialOpen?: boolean }) {
    const { row } = props;
    const [open, setOpen] = React.useState(props.initialOpen || false);

    return (
        <React.Fragment>
            <tr key={row.id}>
                <td style={{ width: '12%', padding: "6px 12px" }}>
                    <Typography
                        style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                    >{row.id}</Typography>
                </td>
                <td style={{ width: '30%', padding: "6px 12px" }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Avatar
                            size="sm"
                            color={row.position === 'TRANSACTION' ? 'success' : 'warning'}
                            style={{ fontSize: '0.75rem' }}
                        >
                            {initialName(row.name)}
                        </Avatar>
                        <div>
                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>{row.name}</Typography>
                            <Typography
                                style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                            >{row.email}</Typography>
                        </div>
                    </Box>
                </td>
                <td style={{ width: '20%', padding: "6px 12px" }}>
                    <Box
                        sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
                    >
                        {
                            row.position === 'GATHERING' ? (
                                <IconButton
                                    aria-label="expand row"
                                    variant="plain"
                                    color="neutral"
                                    size="sm"
                                    onClick={() => setOpen(!open)}
                                >
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </IconButton>
                            ) : (
                                <IconButton
                                    aria-label="expand row"
                                    variant="plain"
                                    color="neutral"
                                    size="sm"
                                    disabled
                                >
                                    <RemoveIcon />
                                </IconButton>
                            )

                        }

                        <Typography
                            style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                        >{row.office.address}</Typography>

                    </Box>
                </td>

                <td style={{ width: '15%', padding: "6px 12px" }}>
                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>{row.phone}</Typography>
                </td>

                <td style={{ width: '8%', padding: "6px 12px", textAlign: 'center' }}>
                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>11</Typography>
                </td>
                <td style={{ width: '9%', padding: "6px 12px", textAlign: 'center' }}>
                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>11</Typography>
                </td>

                <td style={{ width: '6%', textAlign: 'center' }}>
                    <IconButton variant="soft" size="sm">
                        <RowMenu />
                    </IconButton>
                </td>

            </tr>
            <tr>
                <td style={{ height: 0, padding: 0 }} colSpan={7}>
                    {
                        open && (
                            <Sheet
                                variant="outlined"
                                sx={{
                                    width: '100%',
                                    borderRadius: 'sx',
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
                                            <th style={{ width: '30%', padding: "6px 12px", fontSize: '12px' }}>Office ID</th>
                                            <th style={{ width: '30%', padding: "6px 12px", fontSize: '12px' }}>Address</th>
                                            <th style={{ width: '40%', padding: "6px 12px", fontSize: '12px' }}>Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            row.office.sub_offices.map((sub_office: Office) => (
                                                <tr key={sub_office.id}>
                                                    <td >
                                                        <Typography
                                                            style={{ width: '30%', fontSize: '11px', color: 'var(--joy-palette-text-secondary)', fontWeight: "600" }}
                                                        >{sub_office.id}</Typography>
                                                    </td>
                                                    <td >
                                                        <Typography style={{ width: '50%', fontSize: '11px', color: 'var(--joy-palette-text-secondary)', fontWeight: "600" }}>{sub_office.address}</Typography>
                                                    </td>
                                                    <td >
                                                        <Typography style={{ width: '20%', fontSize: '11px', color: 'var(--joy-palette-text-secondary)', fontWeight: "600" }}>{sub_office.phone}</Typography>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>

                                </Table>

                            </Sheet>
                        )
                    }
                </td>
            </tr>
        </React.Fragment>
    );
}


export default function LEADERTable() {

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
                            <th style={{ width: '12%', padding: "6px 12px" }}>Staff ID</th>
                            <th style={{ width: '30%', padding: "6px 12px" }}>Staff</th>
                            <th style={{ width: '20%', padding: "6px 12px" }}>Office</th>
                            <th style={{ width: '15%', padding: "6px 12px" }}>Phone</th>
                            <th style={{ width: '8%', padding: "6px 12px", textAlign: 'center' }}>Sent</th>
                            <th style={{ width: '9%', padding: "6px 12px", textAlign: 'center' }}>Received</th>
                            <th style={{ width: '6%', padding: "6px 12px", textAlign: 'center' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            LEADERs.map((LEADER) => (
                                <Row key={LEADER.id} row={LEADER} />
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