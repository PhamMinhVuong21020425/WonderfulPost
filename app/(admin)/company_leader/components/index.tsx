'use client';
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

import palette from '@/app/styles/palette';
import SideBar from './SideBar';
import Header from './Header';
import Main from './Main';
import PageNotFound from "@/app/components/PageNotFound";
import {
    useSelector, useDispatch, 
    selectUser, 
    getUserInfoAsync, 
    getAllOfficesInfoAsync,
    getAllLeadersInfoAsync, 
} from '@/lib/redux'

export default function Page() {
    // This is main component that displays the page.
    // It contains the header, sidebar, and main content.
    // The sidebar and main content are displayed conditionally based on the status.
    const [status, setStatus] = React.useState<string>('dashboard');

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getUserInfoAsync());
        dispatch(getAllLeadersInfoAsync());
        dispatch(getAllOfficesInfoAsync());
    }, []);

    return (
        <>
            {
                user?.position === 'ADMIN' ? (
                    <CssVarsProvider disableTransitionOnChange theme={palette}>
                        <CssBaseline />
                        <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                            <Header />
                            <SideBar status={status} onStatusChange={setStatus} />
                            <Main status={status} onStatusChange={setStatus} />
                        </Box>
                    </CssVarsProvider>
                ) : <PageNotFound />
            }
        </>
    );
}