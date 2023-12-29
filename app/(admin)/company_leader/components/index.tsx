'use client';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

import palette from '@/app/styles/palette';
import SideBar from './SideBar';
import Header from './Header';
import Main from './Main';




export default function Page() {
    // This is main component that displays the page.
    // It contains the header, sidebar, and main content.
    // The sidebar and main content are displayed conditionally based on the status.
    const [status, setStatus] = React.useState<string>('dashboard');

    return (
        <CssVarsProvider disableTransitionOnChange theme={palette}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <SideBar status={status} onStatusChange={setStatus} />
                {/* <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
                    <Staff />
                    <Office />

                </Box> */}
                <Main status={status} onStatusChange={setStatus} />
            </Box>
        </CssVarsProvider>
    );
}