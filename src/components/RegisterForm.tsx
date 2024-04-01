'use client';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Button, TextField } from '@mui/material';
import { useState, useTransition } from 'react';
import { Register } from '@/actions/Register';
import { RegisterSchema } from '@/schemas';

interface Response {
	success: 'error' | 'success';
	message: string;
}

export const RegisterForm = () => {
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<Response>({
		success: 'error',
		message: '',
	});

	const form = useForm<zod.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const handleSubmit = form.handleSubmit(data => {
		setError({ success: 'error', message: '' });
		startTransition(() => {
			Register(data).then(response => {
				setError(response as Response);
			});
		});
	});

	return (
		<main>
			<p>RegisterForm</p>
			<form onSubmit={handleSubmit}>
				<TextField
					label='Email'
					{...form.register('email')}
					error={!!form.formState.errors.email}
					helperText={form.formState.errors.email?.message}
					placeholder='Enter your email address'
					type='email'
					disabled={isPending}
				/>
				<TextField
					label='Password'
					{...form.register('password')}
					error={!!form.formState.errors.password}
					helperText={form.formState.errors.password?.message}
					placeholder='Enter your password'
					type='password'
					disabled={isPending}
				/>
				{error.message && (
					<Alert severity={error.success}>{error.message}</Alert>
				)}

				<Button type='submit' variant='contained'>
					Submit
				</Button>
			</form>
		</main>
	);
};
