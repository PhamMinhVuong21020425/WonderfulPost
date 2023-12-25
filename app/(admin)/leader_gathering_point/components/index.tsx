'use client';
import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import palette from '@/app/styles/palette';

import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Main from './Main';

export default function Page() {
    const [status, setStatus] = React.useState<string>('dashboard');
    return (
        <CssVarsProvider disableTransitionOnChange theme={palette}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <SideBar status={status} onStatusChange={setStatus} />
                <Main status={status} onStatusChange={setStatus} />
            </Box>
        </CssVarsProvider>
    )
}