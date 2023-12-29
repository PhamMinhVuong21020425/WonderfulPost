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
    addLeaderAsync
} from '@/lib/redux';


type Props = {
    openAddStaff: boolean;
    setOpenAddStaff: (b: boolean) => void;
    setOpenSnackbar: (b: boolean) => void;
};

let officeFilters: Office[] = [];
let districts = ['-- Select District --'];
let officeNames = ['-- Select Office --'];
let officeId: string = '';

const AddStaffModal = ({ openAddStaff, setOpenAddStaff, setOpenSnackbar }: Props) => {
    const [city, setCity] = React.useState<string>('-- Select City --');
    const [district, setDistrict] = React.useState<string>('-- Select District --');
    const [officeName, setOfficeName] = React.useState<string>('-- Select Office --');
    const [position, setPosition] = React.useState<string>('ADMIN');

    const positionList = ["ADMIN", "LEADER GATHERING", "LEADER TRANSACTION"];

    const offices: Office[] = useSelector(selectOffice);
    const dispatch = useDispatch();

    const citiesSet = new Set<string>();

    offices.forEach((item) => {
        if (item.city) {
            citiesSet.add(item.city);
        }
    });

    const cities = ['-- Select City --', ...citiesSet].sort((a: string, b: string) => a.localeCompare(b));

    const handlePositionChange = (value: string | null) => {
        if (value) {
            setPosition(value);
        }
    }

    const handleCityChange = (value: string | null) => {
        const districtsSet = new Set<string>();
        officeFilters = offices.filter((item) => {
            if (item.district && item.city === value) {
                districtsSet.add(item.district);
                return true;
            }
            return false;
        });

        districts = [...districtsSet].sort((a: string, b: string) => a.localeCompare(b));
        districts = ['-- Select District --', ...districts];

        officeNames = ['-- Select Office --'];
        setCity(value ?? '-- Select City --');

    }

    const handleDistrictChange = (value: string | null) => {
        if (value) {
            const officeNamesSet = new Set<string>();
            officeFilters = offices.filter((item) => {
                if (item.name && item.city === city && item.district === value) {
                    officeNamesSet.add(item.name);
                    return true;
                }
                return false;
            });

            officeNames = [...officeNamesSet].sort((a: string, b: string) => a.localeCompare(b));
            officeNames = ['-- Select Office --', ...officeNames];

            setDistrict(value);
        }
    }

    const handleOfficeNameChange = (value: string | null) => {
        if (value) {
            const officeFinal = officeFilters.find((item) => item.name === value);
            officeId = officeFinal?.id ?? '';
            setOfficeName(value);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: object = {
            full_name: event.currentTarget.fullName.value,
            phone: event.currentTarget.phone.value,
            email: event.currentTarget.email.value,
            position: position,
            branch_id: officeId,
        }
        dispatch(addLeaderAsync(formData));
        setOpenAddStaff(false);
        setOpenSnackbar(true);
    }

    return (
        <Modal
            open={openAddStaff}
            onClose={() => setOpenAddStaff(false)}
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
                                    <Input name='fullName' size="sm" placeholder="" />
                                </FormControl>
                                <FormLabel>Phone</FormLabel>
                                <FormControl
                                >
                                    <Input name='phone' size="sm" placeholder="" />
                                </FormControl>

                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl>
                                    <FormLabel>Position</FormLabel>
                                    <Select
                                        size="sm"
                                        name='position'
                                        value={position}
                                        onChange={(event: any, value: string | null) => handlePositionChange(value)}
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
                                        onChange={(event: any, value: string | null) => handleCityChange(value)}
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
                                        onChange={(event: any, value: string | null) => handleDistrictChange(value)}
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
                                        value={officeId}
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
                            <Button size="sm" variant="outlined" color="neutral" onClick={() => setOpenAddStaff(false)}>
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

export default AddStaffModal;