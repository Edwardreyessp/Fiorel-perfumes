'use client';
import { Button } from '@mui/material';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<Link href='/login'>
			<Button variant='contained'>LogIn</Button>
		</Link>
	);
};
