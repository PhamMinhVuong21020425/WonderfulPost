import Dashboard from "./Dashboard";
import Office from "./Office";
import Staff from "./Staff";
import * as React from 'react';
import Box from '@mui/joy/Box';


type Props = {
    status: string;
    onStatusChange?: (status: string) => void;
};

export default function Parcel(props: Props) {
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
                {
                    props.status === 'dashboard' && <Dashboard />
                }

                {
                    props.status === 'office' && <Office />
                }
                {
                    props.status === 'staff' && <Staff />
                }
            </Box>
        </div>
    )
}