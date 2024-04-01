import { Navbar } from '@/components/molecules/Navbar';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<h1>Client Layout</h1>
			<Navbar />
			{children}
		</div>
	);
};
export default ClientLayout;
