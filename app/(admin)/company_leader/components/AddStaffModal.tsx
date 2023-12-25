import Modal from '@mui/joy/Modal';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import CountrySelector from './CountrySelector';
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';

type Props = {
    openAddStaff: boolean;
    setOpenAddStaff: (b: boolean) => void;
};

const AddStaffModal = ({ openAddStaff, setOpenAddStaff }: Props) => {
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
                                <Input size="sm" placeholder="" />
                            </FormControl>
                            <FormLabel>Phone</FormLabel>
                            <FormControl
                            >
                                <Input size="sm" placeholder="" />
                            </FormControl>

                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <Select
                                    size="sm"
                                    defaultValue="1"
                                    style={{
                                        color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600"
                                    }}
                                >
                                    <Option value="1">
                                        <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>
                                            GATHERING
                                        </Typography>
                                    </Option>
                                    <Option value="2">
                                        <Typography style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}>
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
                                    style={{ color: 'var(--joy-palette-text-secondary)', fontSize: '0.7rem', fontWeight: "600" }}
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
                        <Button size="sm" variant="outlined" color="neutral" onClick={() => setOpenAddStaff(false)}>
                            Cancel
                        </Button>
                        <Button size="sm" variant="outlined" color="primary">
                            Save
                        </Button>
                    </CardActions>
                </CardOverflow>
            </Card>

        </Modal>
    );
}

export default AddStaffModal;