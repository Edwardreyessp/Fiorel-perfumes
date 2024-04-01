'use server';
import * as zod from 'zod';
import { LoginSchema } from '../schemas';

export const Register = async (values: zod.infer<typeof LoginSchema>) => {
	console.log(values);
	const validateFields = LoginSchema.safeParse(values);

	if (!validateFields.success) {
		return {
			success: 'error',
			message: 'Invalid fields',
		};
	}

	return {
		success: 'success',
		message: 'Register successful',
	};
};
