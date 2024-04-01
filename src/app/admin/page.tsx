'use client';
import { AuthContext } from '@/providers';
import { useContext } from 'react';

const DashboardPage = () => {
	const { isAdmin } = useContext(AuthContext);

	if (!isAdmin) {
		return (
			<main>
				<p>Unauthorized</p>
			</main>
		);
	}

	return (
		<main>
			<p>DashboardPage</p>
		</main>
	);
};

export default DashboardPage;
