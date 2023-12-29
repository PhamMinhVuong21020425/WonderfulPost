
import { useRouter } from "next/navigation"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {
    useSelector,
    useDispatch,
    selectUser,
    getUserInfoAsync,
} from '@/lib/redux';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

type Props = {
    status: string
    handleStatus: (status: string) => void
}

export default function Navbar({ status, handleStatus }: Props) {
    const router = useRouter();
    const userInfo = useSelector(selectUser);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch(getUserInfoAsync());
    }, [userInfo]);

    const handleClick = () => {
        router.push('/login')
    }

    return (
        <div className="flex m-2 md:w-1/3 md:justify-between md:items-center md:mx-auto rounded-2xl text-sm justify-between items-center text-gray-400 bg-gray-100 px-4 py-2 border-2 border-gray-200">
            <button
                className="font-bold cursor-pointer bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-green-400 hover:to-indigo-300"
                onClick={() => handleStatus('magicpost')}
            >
                MagicPost
            </button>
            <button
                className="hover:text-gray-600 cursor-pointer"
                onClick={() => handleStatus('search')}
            >
                Search
            </button>
            <button
                className="hover:text-gray-600 cursor-pointer"
                onClick={() => handleStatus('contact')}
            >
                Contact Us
            </button>
            {
                userInfo ? (
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                        <Dropdown>
                            <MenuButton>
                                <Avatar src={userInfo?.avatar_url!} />
                            </MenuButton>
                            <Menu>
                                <MenuItem><Typography level="title-sm">{userInfo?.full_name}</Typography></MenuItem>
                                <MenuItem><Typography level="body-xs" style={{ wordWrap: 'break-word' }}>{userInfo?.email}</Typography></MenuItem>
                            </Menu>
                        </Dropdown>
                        <form action="/auth/logout" method="POST">
                            <IconButton type='submit' size="sm" variant="plain" color="neutral">
                                <LogoutRoundedIcon />
                            </IconButton>
                        </form>
                    </Box>
                ) : (
                    <button onClick={handleClick} className="font-bold border-gray-200 border-2 rounded-xl bg-green-600 text-gray-200 px-4 py-1 hover:bg-green-500 hover:text-white cursor-pointer">
                        Login
                    </button>
                )
            }
        </div>
    )
}