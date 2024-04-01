import * as zod from 'zod';

export const LoginSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(1, 'Password is required'),
});

export const RegisterSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(6),
});
