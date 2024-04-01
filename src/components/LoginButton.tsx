'use client';
import { useRouter } from 'next/navigation';

interface Props {
	children: React.ReactNode;
	mode?: 'modal' | 'redirect';
	asChild?: boolean;
}

export const LoginButton = ({
	children,
	// asChild,
	mode = 'redirect',
}: Props) => {
	const router = useRouter();

	const handleClick = () => {
		router.push('/login');
	};

	if (mode === 'modal') {
		return <span>TODO: Implement modal</span>;
	}

	return <span onClick={handleClick}>{children}</span>;
};
