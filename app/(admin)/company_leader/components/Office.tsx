import * as React from 'react';
import Box from '@mui/joy/Box';
import StaffTable from './StaffTable';
import Button from '@mui/joy/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';

export default function Office() {

    return (
        <div>
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
                <Box
                    sx={{
                        display: 'flex',
                        mb: 1,
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'start', sm: 'center' },
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography level="h2" component="h1">
                        Staffs
                    </Typography>
                    <Button
                        color="primary"
                        startDecorator={<AddIcon />}
                        size="sm"
                        variant="outlined"
                    >
                        Add Staff
                    </Button>
                </Box>
                <StaffTable />
            </Box>
        </div>
    );
}