// import { LoginForm } from '@/components/LoginForm';

import { GoogleButton } from '@/components/atoms/GoogleButton';
import Link from 'next/link';

const LoginPage = () => {
	return (
		<main>
			<p>LoginPage</p>
			{/* <LoginForm /> */}
			<GoogleButton />
			<Link href='/admin'>Admin</Link>
		</main>
	);
};

export default LoginPage;
