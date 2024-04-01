import { AuthProvider } from '@/providers/AuthProvider';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<h1>Admin Layout</h1>
			{children}
		</AuthProvider>
	);
};
export default ClientLayout;
