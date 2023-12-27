import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import Stack from '@mui/material/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import CountrySelector from './CountrySelector';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import { PaginationLaptop } from '@/app/components/Pagination';

// Icons
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import User from '@/app/types/UserType';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Office from '@/app/types/OfficeType';

const LEADERs: User[] = [
    {
        id: "1",
        email: "user1@example.com",
        office: {
            id: "office1",
            name: "Office A",
            country: "Country A",
            city: "City A",
            district: "District A",
            commune: "Commune A",
            address: "Address A",
            phone: "123456789",
            email: "officeA@example.com",
            fax: "987654321",
            sub_offices: [],
        },
        full_name: "John Doe",
        position: "ADMIN",
        phone: "1234567890",
        avatar_url: "https://example.com/avatar1.png",
        branch_id: "branch1",
    },
    {
        id: "2",
        email: "user2@example.com",
        office: null,
        full_name: "Alice Smith",
        position: "LEADER GATHERING",
        phone: "9876543210",
        avatar_url: "https://example.com/avatar2.png",
        branch_id: "branch2",
    },
    {
        id: "3",
        email: "user3@example.com",
        office: {
            id: "office2",
            name: "Office B",
            country: "Country B",
            city: "City B",
            district: "District B",
            commune: "Commune B",
            address: "Address B",
            phone: "567890123",
            email: "officeB@example.com",
            fax: "135792468",
            sub_offices: [],
        },
        full_name: "Emily Johnson",
        position: "STAFF TRANSACTION",
        phone: "5556667777",
        avatar_url: null,
        branch_id: "branch1",
    },
    {
        id: "4",
        email: "user4@example.com",
        office: null,
        full_name: "Mark Davis",
        position: "CUSTOMER",
        phone: null,
        avatar_url: null,
        branch_id: null,
    },
    {
        id: "5",
        email: "user5@example.com",
        office: {
            id: "office3",
            name: "Office C",
            country: "Country C",
            city: "City C",
            district: "District C",
            commune: "Commune C",
            address: "Address C",
            phone: "777888999",
            email: "officeC@example.com",
            fax: "246813579",
            sub_offices: [],
        },
        full_name: "Sophia Wilson",
        position: "STAFF GATHERING",
        phone: "4443332222",
        avatar_url: "https://example.com/avatar5.png",
        branch_id: "branch3",
    },
    {
        id: "6",
        email: "user6@example.com",
        office: {
            id: "office4",
            name: "Office D",
            country: "Country D",
            city: "City D",
            district: "District D",
            commune: "Commune D",
            address: "Address D",
            phone: "111222333",
            email: "officeD@example.com",
            fax: "987123654",
            sub_offices: [],
        },
        full_name: "Michael Lee",
        position: "STAFF GATHERING",
        phone: "9998887776",
        avatar_url: null,
        branch_id: "branch4",
    },
    // Mẫu 7
    {
        id: "7",
        email: "user7@example.com",
        office: null,
        full_name: "Sophie Brown",
        position: "LEADER TRANSACTION",
        phone: "7776665555",
        avatar_url: "https://example.com/avatar7.png",
        branch_id: "branch2",
    },
    // Mẫu 8
    {
        id: "8",
        email: "user8@example.com",
        office: {
            id: "office5",
            name: "Office E",
            country: "Country E",
            city: "City E",
            district: "District E",
            commune: "Commune E",
            address: "Address E",
            phone: "444555666",
            email: "officeE@example.com",
            fax: "369258147",
            sub_offices: [],
        },
        full_name: "William Johnson",
        position: "STAFF TRANSACTION",
        phone: "3332221111",
        avatar_url: "https://example.com/avatar8.png",
        branch_id: "branch1",
    },
    // Mẫu 9
    {
        id: "9",
        email: "user9@example.com",
        office: {
            id: "office6",
            name: "Office F",
            country: "Country F",
            city: "City F",
            district: "District F",
            commune: "Commune F",
            address: "Address F",
            phone: "888999000",
            email: "officeF@example.com",
            fax: "753951852",
            sub_offices: [],
        },
        full_name: "Olivia Garcia",
        position: "LEADER GATHERING",
        phone: "2223334444",
        avatar_url: "https://example.com/avatar9.png",
        branch_id: "branch3",
    },
    // Mẫu 10
    {
        id: "10",
        email: "user10@example.com",
        office: null,
        full_name: "Daniel Martinez",
        position: "CUSTOMER",
        phone: null,
        avatar_url: null,
        branch_id: null,
    },
    {
        id: "11",
        email: "user11@example.com",
        office: null,
        full_name: "Ethan Adams",
        position: "CUSTOMER",
        phone: null,
        avatar_url: null,
        branch_id: null,
    },
    // Mẫu 12
    {
        id: "12",
        email: "user12@example.com",
        office: {
            id: "office7",
            name: "Office G",
            country: "Country G",
            city: "City G",
            district: "District G",
            commune: "Commune G",
            address: "Address G",
            phone: "999000111",
            email: "officeG@example.com",
            fax: "852963741",
            sub_offices: [],
        },
        full_name: "Ava Wilson",
        position: "LEADER TRANSACTION",
        phone: "1112223333",
        avatar_url: "https://example.com/avatar12.png",
        branch_id: "branch2",
    },
    // Mẫu 13
    {
        id: "13",
        email: "user13@example.com",
        office: {
            id: "office8",
            name: "Office H",
            country: "Country H",
            city: "City H",
            district: "District H",
            commune: "Commune H",
            address: "Address H",
            phone: "222333444",
            email: "officeH@example.com",
            fax: "369852147",
            sub_offices: [],
        },
        full_name: "Liam Taylor",
        position: "ADMIN",
        phone: "4445556666",
        avatar_url: "https://example.com/avatar13.png",
        branch_id: "branch1",
    },
    // Mẫu 14
    {
        id: "14",
        email: "user14@example.com",
        office: null,
        full_name: "Mia Moore",
        position: "STAFF GATHERING",
        phone: "7778889999",
        avatar_url: null,
        branch_id: "branch3",
    },
    // Mẫu 15
    {
        id: "15",
        email: "user15@example.com",
        office: {
            id: "office9",
            name: "Office I",
            country: "Country I",
            city: "City I",
            district: "District I",
            commune: "Commune I",
            address: "Address I",
            phone: "555666777",
            email: "officeI@example.com",
            fax: "987654321",
            sub_offices: [],
        },
        full_name: "Noah Johnson",
        position: "STAFF TRANSACTION",
        phone: "3334445555",
        avatar_url: "https://example.com/avatar15.png",
        branch_id: "branch4",
    },
    {
        id: "1",
        email: "user1@example.com",
        office: {
            id: "office1",
            name: "Office A",
            country: "Country A",
            city: "City A",
            district: "District A",
            commune: "Commune A",
            address: "Address A",
            phone: "123456789",
            email: "officeA@example.com",
            fax: "987654321",
            sub_offices: [],
        },
        full_name: "John Doe",
        position: "ADMIN",
        phone: "1234567890",
        avatar_url: "https://example.com/avatar1.png",
        branch_id: "branch1",
    },
    {
        id: "2",
        email: "user2@example.com",
        office: null,
        full_name: "Alice Smith",
        position: "LEADER GATHERING",
        phone: "9876543210",
        avatar_url: "https://example.com/avatar2.png",
        branch_id: "branch2",
    },
    {
        id: "3",
        email: "user3@example.com",
        office: {
            id: "office2",
            name: "Office B",
            country: "Country B",
            city: "City B",
            district: "District B",
            commune: "Commune B",
            address: "Address B",
            phone: "567890123",
            email: "officeB@example.com",
            fax: "135792468",
            sub_offices: [],
        },
        full_name: "Emily Johnson",
        position: "STAFF TRANSACTION",
        phone: "5556667777",
        avatar_url: null,
        branch_id: "branch1",
    },
    {
        id: "4",
        email: "user4@example.com",
        office: null,
        full_name: "Mark Davis",
        position: "CUSTOMER",
        phone: null,
        avatar_url: null,
        branch_id: null,
    },
    {
        id: "5",
        email: "user5@example.com",
        office: {
            id: "office3",
            name: "Office C",
            country: "Country C",
            city: "City C",
            district: "District C",
            commune: "Commune C",
            address: "Address C",
            phone: "777888999",
            email: "officeC@example.com",
            fax: "246813579",
            sub_offices: [],
        },
        full_name: "Sophia Wilson",
        position: "STAFF GATHERING",
        phone: "4443332222",
        avatar_url: "https://example.com/avatar5.png",
        branch_id: "branch3",
    },
    {
        id: "6",
        email: "user6@example.com",
        office: {
            id: "office4",
            name: "Office D",
            country: "Country D",
            city: "City D",
            district: "District D",
            commune: "Commune D",
            address: "Address D",
            phone: "111222333",
            email: "officeD@example.com",
            fax: "987123654",
            sub_offices: [],
        },
        full_name: "Michael Lee",
        position: "STAFF GATHERING",
        phone: "9998887776",
        avatar_url: null,
        branch_id: "branch4",
    },
    // Mẫu 7
    {
        id: "7",
        email: "user7@example.com",
        office: null,
        full_name: "Sophie Brown",
        position: "LEADER TRANSACTION",
        phone: "7776665555",
        avatar_url: "https://example.com/avatar7.png",
        branch_id: "branch2",
    },
    // Mẫu 8
    {
        id: "8",
        email: "user8@example.com",
        office: {
            id: "office5",
            name: "Office E",
            country: "Country E",
            city: "City E",
            district: "District E",
            commune: "Commune E",
            address: "Address E",
            phone: "444555666",
            email: "officeE@example.com",
            fax: "369258147",
            sub_offices: [],
        },
        full_name: "William Johnson",
        position: "STAFF TRANSACTION",
        phone: "3332221111",
        avatar_url: "https://example.com/avatar8.png",
        branch_id: "branch1",
    },
    // Mẫu 9
    {
        id: "9",
        email: "user9@example.com",
        office: {
            id: "office6",
            name: "Office F",
            country: "Country F",
            city: "City F",
            district: "District F",
            commune: "Commune F",
            address: "Address F",
            phone: "888999000",
            email: "officeF@example.com",
            fax: "753951852",
            sub_offices: [],
        },
        full_name: "Olivia Garcia",
        position: "LEADER GATHERING",
        phone: "2223334444",
        avatar_url: "https://example.com/avatar9.png",
        branch_id: "branch3",
    },
    // Mẫu 10
    {
        id: "10",
        email: "user10@example.com",
        office: null,
        full_name: "Daniel Martinez",
        position: "CUSTOMER",
        phone: null,
        avatar_url: null,
        branch_id: null,
    },
    {
        id: "11",
        email: "user11@example.com",
        office: null,
        full_name: "Ethan Adams",
        position: "CUSTOMER",
        phone: null,
        avatar_url: null,
        branch_id: null,
    },
    // Mẫu 12
    {
        id: "12",
        email: "user12@example.com",
        office: {
            id: "office7",
            name: "Office G",
            country: "Country G",
            city: "City G",
            district: "District G",
            commune: "Commune G",
            address: "Address G",
            phone: "999000111",
            email: "officeG@example.com",
            fax: "852963741",
            sub_offices: [],
        },
        full_name: "Ava Wilson",
        position: "LEADER TRANSACTION",
        phone: "1112223333",
        avatar_url: "https://example.com/avatar12.png",
        branch_id: "branch2",
    },
    // Mẫu 13
    {
        id: "13",
        email: "user13@example.com",
        office: {
            id: "office8",
            name: "Office H",
            country: "Country H",
            city: "City H",
            district: "District H",
            commune: "Commune H",
            address: "Address H",
            phone: "222333444",
            email: "officeH@example.com",
            fax: "369852147",
            sub_offices: [],
        },
        full_name: "Liam Taylor",
        position: "ADMIN",
        phone: "4445556666",
        avatar_url: "https://example.com/avatar13.png",
        branch_id: "branch1",
    },
    // Mẫu 14
    {
        id: "14",
        email: "user14@example.com",
        office: null,
        full_name: "Mia Moore",
        position: "STAFF GATHERING",
        phone: "7778889999",
        avatar_url: null,
        branch_id: "branch3",
    },
    // Mẫu 15
    {
        id: "15",
        email: "user15@example.com",
        office: {
            id: "office9",
            name: "Office I",
            country: "Country I",
            city: "City I",
            district: "District I",
            commune: "Commune I",
            address: "Address I",
            phone: "555666777",
            email: "officeI@example.com",
            fax: "987654321",
            sub_offices: [],
        },
        full_name: "Noah Johnson",
        position: "STAFF TRANSACTION",
        phone: "3334445555",
        avatar_url: "https://example.com/avatar15.png",
        branch_id: "branch4",
    },
];

function initialName(name: string) {
    if (!name) return '';
    return name.split(' ').map((word) => word[0]).join('');
}



export default function LeaderTable() {
    const [openEditModalIndex, setOpenEditModalIndex] = React.useState<number | null>(null);
    const [openDeleteModalIndex, setOpenDeleteModalIndex] = React.useState<number | null>(null);
    const [openViewModalIndex, setOpenViewModalIndex] = React.useState<number | null>(null);

    const renderEditModal = (index: number) => {
        return (
            <Modal
                open={openEditModalIndex == index}
                onClose={() => setOpenEditModalIndex(null)}
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
                                            <Typography>
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
                            <Button size="sm" variant="outlined" color="neutral" onClick={() => setOpenEditModalIndex(null)}>
                                Cancel
                            </Button>
                            <Button size="sm" variant="outlined" color="primary" onClick={() => setOpenEditModalIndex(null)}>
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </Card>

            </Modal>
        );
    }

    const renderDeleteModal = (index: number) => {
        return (
            <Modal
                open={openDeleteModalIndex == index}
                onClose={() => setOpenDeleteModalIndex(null)}
            >
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
                        <Button variant="outlined" color="danger" onClick={() => setOpenDeleteModalIndex(null)}>
                            Discard notes
                        </Button>
                        <Button variant="outlined" color="neutral" onClick={() => setOpenDeleteModalIndex(null)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>
        );
    }

    const renderViewModal = (leader: User, index: number) => {
        return (
            <Modal
                open={openViewModalIndex == index}
                onClose={() => setOpenViewModalIndex(null)}
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
                        <Typography level='title-lg'>Information</Typography>

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
                                    <th style={{ width: '30%', padding: "6px 12px", fontSize: "0.75rem" }}>Office Id</th>
                                    <th style={{ width: '40%', padding: "6px 12px", fontSize: "0.75rem" }}>Address</th>
                                    <th style={{ width: '30%', padding: "6px 12px", fontSize: "0.75rem" }}>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    leader.office?.sub_offices.map((sub_office: Office) => (
                                        <tr key={sub_office.id}>
                                            <td style={{ width: '30%', padding: "6px 12px", fontSize: "0.7rem" }}>
                                                <Typography
                                                // level="body-xs"
                                                >
                                                    {sub_office.id}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '40%', padding: "6px 12px", fontSize: "0.7rem" }}>
                                                <Typography
                                                // level="body-xs"
                                                >
                                                    {sub_office.address}
                                                </Typography>
                                            </td>
                                            <td style={{ width: '30%', padding: "6px 12px", fontSize: "0.7rem" }}>
                                                <Typography
                                                // level="body-xs"
                                                >
                                                    {sub_office.phone}
                                                </Typography>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Sheet>

                </ModalDialog>
            </Modal>
        )
    }

    // Table Pagination
    const rowPerPage = 5;
    const totalRows = LEADERs.length;

    const [currentPage, setCurrentPage] = React.useState(1);

    // Calculate the index range for the current page
    const indexOfLastRow = currentPage * rowPerPage;
    const indexOfFirstRow = indexOfLastRow - rowPerPage;
    const currentRows = LEADERs.slice(indexOfFirstRow, indexOfLastRow);

    // Function to change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

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
                            (
                                currentRows
                            ).map((LEADER, index) => (
                                // <Row key={LEADER.id} row={LEADER} />
                                <React.Fragment>
                                    <tr key={LEADER.id}>
                                        <td style={{ width: '12%', padding: "6px 12px" }}>
                                            <Typography
                                                style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                            >{LEADER.id}</Typography>
                                        </td>
                                        <td style={{ width: '30%', padding: "6px 12px" }}>
                                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                                <Avatar
                                                    size="sm"
                                                    color={LEADER.position.includes('LEADER') ? LEADER.position.includes('TRANSACTION') ? 'success' : 'warning' : 'neutral'}

                                                    style={{ fontSize: '0.75rem' }}
                                                >
                                                    {initialName(LEADER.full_name ?? 'Anonymous User')}
                                                </Avatar>
                                                <div>
                                                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>{LEADER.full_name}</Typography>
                                                    <Typography
                                                        style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                                    >{LEADER.email}</Typography>
                                                </div>
                                            </Box>
                                        </td>
                                        <td style={{ width: '20%', padding: "6px 12px" }}>
                                            <Box
                                                sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
                                            >

                                                <Typography
                                                    style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                                >{LEADER.office?.address}</Typography>

                                            </Box>
                                        </td>

                                        <td style={{ width: '15%', padding: "6px 12px" }}>
                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>{LEADER.phone}</Typography>
                                        </td>

                                        <td style={{ width: '8%', padding: "6px 12px", textAlign: 'center' }}>
                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>11</Typography>
                                        </td>
                                        <td style={{ width: '9%', padding: "6px 12px", textAlign: 'center' }}>
                                            <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>11</Typography>
                                        </td>

                                        <td style={{ width: '6%', textAlign: 'center' }}>
                                            <IconButton variant="soft" size="sm">
                                                <Dropdown>
                                                    <MenuButton
                                                        slots={{ root: IconButton }}
                                                        slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
                                                    >
                                                        <MoreHorizRoundedIcon />
                                                    </MenuButton>
                                                    <Menu size="sm" sx={{ minWidth: 140 }}>
                                                        <MenuItem onClick={() => setOpenEditModalIndex(index)}>
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
                                                        {
                                                            LEADER.position == 'LEADER GATHERING' &&
                                                            <MenuItem onClick={() => setOpenViewModalIndex(index)}>
                                                                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                                                    <VisibilityIcon />
                                                                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>View</Typography>
                                                                </Box>
                                                            </MenuItem>
                                                        }
                                                        <MenuItem onClick={() => setOpenDeleteModalIndex(index)}>
                                                            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                                                <DeleteRoundedIcon />
                                                                <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>Delete</Typography>
                                                            </Box>
                                                        </MenuItem>

                                                    </Menu>
                                                    {renderEditModal(index)}
                                                    {renderDeleteModal(index)}
                                                    {renderViewModal(LEADER, index)}
                                                </Dropdown >
                                            </IconButton>
                                        </td>

                                    </tr>

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
        </React.Fragment >
    )

}