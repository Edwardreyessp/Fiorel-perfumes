import { getPrivacy, putPrivacy } from '@/firebase';
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export const PrivacyText = async () => {
	const privacyText = await getPrivacy();
	const [edit, setEdit] = useState({
		content: privacyText?.content,
		updateAt: privacyText?.updateAt,
		isEditing: false,
	});

	const toggleEdit = () => {
		setEdit({ ...edit, isEditing: !edit.isEditing });
	};

	const savePrivacy = async () => {
		await putPrivacy(edit.content);
		setEdit({ ...edit, isEditing: false });
	};

	const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEdit({ ...edit, content: e.target.value });
	};

	if (edit.isEditing) {
		return (
			<>
				<Button fullWidth variant='contained' onClick={toggleEdit}>
					Cancelar
				</Button>
				<Button fullWidth variant='contained' onClick={savePrivacy}>
					Guardar
				</Button>
				<TextField
					fullWidth
					multiline
					maxRows={20}
					placeholder='Este aviso de privacidad establece...'
					onChange={onChangeText}
				/>
			</>
		);
	}

	return (
		<>
			<Button fullWidth variant='contained' onClick={toggleEdit}>
				Actualizar
			</Button>
			<Typography variant='caption'>
				Última actualización: {privacyText?.updateAt}
			</Typography>
			<Typography>{privacyText?.content}</Typography>
		</>
	);
};
