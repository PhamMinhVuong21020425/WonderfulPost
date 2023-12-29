import Modal from '@mui/joy/Modal';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import * as React from 'react';
import Office from '@/app/types/OfficeType';

import {
    useSelector,
    useDispatch,
    selectOffice,
    editLeaderAsync
} from '@/lib/redux';
import User from '@/app/types/UserType';

// Props type
type Props = {
    openEditStaff: string | null;
    setOpenEditStaff: (b: string | null) => void;
    leader: User;
};

let officeFilters: Office[] = [];
let districts = ['-- Select District --'];
let officeNames = ['-- Select Office --'];


// This is a component that allows the user to edit staff.
const EditStaffModal = ({ openEditStaff, setOpenEditStaff, leader }: Props) => {
    const [data, setData] = React.useState<User>(leader);
    const [city, setCity] = React.useState<string>(leader.office?.city ?? '-- Select City --');
    const [district, setDistrict] = React.useState<string>(leader.office?.district ?? '-- Select District --');
    const [officeName, setOfficeName] = React.useState<string>(leader.office?.name ?? '-- Select Office --');
    const [position, setPosition] = React.useState<string>(leader.position ?? 'ADMIN');
    const [postalCode, setPostalCode] = React.useState<string>(leader.office?.id ?? '');

    const positionList = ["ADMIN", "LEADER GATHERING", "LEADER TRANSACTION"];

    const dispatch = useDispatch();
    const offices: Office[] = useSelector(selectOffice);
    const citiesSet = new Set<string>();

    offices.forEach((item) => {
        if (item.city) {
            citiesSet.add(item.city);
        }
    });

    const cities = ['-- Select City --', ...citiesSet].sort((a: string, b: string) => a.localeCompare(b));

    const districtsSet = new Set<string>();
    const officeNamesSet = new Set<string>();
    officeFilters = offices.filter((item) => {
        if (item.district && item.city === city) {
            districtsSet.add(item.district);
            return true;
        }
        return false;
    });

    districts = [...districtsSet].sort((a: string, b: string) => a.localeCompare(b));
    districts = ['-- Select District --', ...districts];

    officeFilters = officeFilters.filter((item) => {
        if (item.name && item.city === city && item.district === district) {
            officeNamesSet.add(item.name);
            return true;
        }
        return false;
    });

    officeNames = [...officeNamesSet].sort((a: string, b: string) => a.localeCompare(b));
    officeNames = ['-- Select Office --', ...officeNames];

    const handleDataChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
        let key = event.target.name;
        setData((prevState) => ({ ...prevState, [key]: event.target.value }));
    }

    const handlePositionChange = (value: string | null) => {
        if (value) {
            setPosition(value);
        }
    }

    const handleOfficeNameChange = (value: string | null) => {
        if (value) {
            const officeFinal = officeFilters.find((item) => item.name === value);
            setPostalCode(officeFinal?.id!);
            setOfficeName(value);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: object = {
            id: leader.id,
            full_name: data.full_name,
            phone: data.phone,
            email: data.email,
            position: position,
            branch_id: postalCode,
        }
        dispatch(editLeaderAsync(formData));
        setOpenEditStaff(null);
    }

    return (
        <Modal
            open={openEditStaff === leader.id}
            onClose={() => setOpenEditStaff(null)}
            // title="Add Staff"
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
                <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 1 }}>
                        <Typography level="title-md">Personal Information</Typography>
                        <Typography level="body-sm">
                            Customize how your profile information will appear to the networks.
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
                                    <Input name='full_name' onChange={handleDataChange} value={data.full_name!} size="sm" placeholder="" />
                                </FormControl>
                                <FormLabel>Phone</FormLabel>
                                <FormControl
                                >
                                    <Input name='phone' onChange={handleDataChange} value={data.phone!} size="sm" placeholder="" />
                                </FormControl>

                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl>
                                    <FormLabel>Position</FormLabel>
                                    <Select
                                        size="sm"
                                        name='position'
                                        value={position}
                                        onChange={(event: any, value: string | any) => handlePositionChange(value)}
                                        style={{
                                            color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600"
                                        }}
                                    >
                                        {positionList.map((item, index) => {
                                            return (
                                                <Option key={index} value={item}>
                                                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>
                                                        {item}
                                                    </Typography>
                                                </Option>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
                                        name='email'
                                        value={data.email}
                                        onChange={handleDataChange}
                                        type="email"
                                        startDecorator={<EmailRoundedIcon />}
                                        placeholder="@magic-post.com"
                                        style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                        sx={{ flexGrow: 1 }}
                                    />
                                </FormControl>
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <FormControl>
                                    <FormLabel>Office City</FormLabel>
                                    <Select
                                        size="sm"
                                        style={{
                                            color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600"
                                        }}
                                        name="city"
                                        value={city}
                                        onChange={(event: any, value: string | null) => setCity(value!)}
                                    >
                                        {cities.map((item) => {
                                            return (
                                                <Option key={item} value={item}>
                                                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>
                                                        {item}
                                                    </Typography>
                                                </Option>
                                            );
                                        })}
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Office District</FormLabel>
                                    <Select
                                        size="sm"
                                        style={{
                                            color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600"
                                        }}
                                        name='district'
                                        value={district}
                                        onChange={(event: any, value: string | null) => setDistrict(value!)}
                                    >
                                        {districts.map((item) => {
                                            return (
                                                <Option key={item} value={item}>
                                                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>
                                                        {item}
                                                    </Typography>
                                                </Option>
                                            );
                                        })}
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Office Name</FormLabel>
                                    <Select
                                        size="sm"
                                        style={{
                                            color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600"
                                        }}
                                        name='officeName'
                                        value={officeName}
                                        onChange={(event: any, value: string | null) => handleOfficeNameChange(value)}
                                    >
                                        {officeNames.map((item) => {
                                            return (
                                                <Option key={item} value={item}>
                                                    <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>
                                                        {item}
                                                    </Typography>
                                                </Option>
                                            );
                                        })}
                                    </Select>
                                </FormControl>

                                <FormControl sx={{ flexGrow: 1 }} style={{ display: "none" }}>
                                    <FormLabel>Postal Code</FormLabel>
                                    <Input
                                        size="sm"
                                        type="text"
                                        name='postalCode'
                                        value={postalCode}
                                        style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
                                        sx={{ flexGrow: 1 }}
                                    />
                                </FormControl>

                            </Stack>
                            {/* <div>
                            <CountrySelector />
                        </div> */}
                        </Stack>
                    </Stack>
                    <CardOverflow >
                        <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                            <Button size="sm" variant="outlined" color="neutral" onClick={() => setOpenEditStaff(null)}>
                                Cancel
                            </Button>
                            <Button type='submit' size="sm" variant="outlined" color="primary">
                                Save
                            </Button>
                        </CardActions>
                    </CardOverflow>
                </form>
            </Card>
        </Modal>
    );
}

export default EditStaffModal;