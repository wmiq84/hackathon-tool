'use client';

import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
// reusable module
import { createTaskSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm = z.infer<typeof createTaskSchema>;

const NewTaskPage = () => {
	const router = useRouter();
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IssueForm>({
		resolver: zodResolver(createTaskSchema),
	});
	const [error, setError] = useState('');

	return (
		<div className="max-w-xl ">
			{error && (
				<Callout.Root color="red" className="mb-5">
					<Callout.Text>{error}</Callout.Text>
				</Callout.Root>
			)}
			<form
				className="space-y-3"
				onSubmit={handleSubmit(async (data) => {
					try {
						await axios.post('/api/tasks', data);
						router.push('/tasks');
					} catch (error) {
						setError('An unexpected error occured.');
					}
				})}
			>
				<TextField.Root>
					<TextField.Input placeholder="Title" {...register('title')} />
				</TextField.Root>
				<ErrorMessage>{errors.title?.message}</ErrorMessage>
				<Controller
					name="description"
					control={control}
					render={({ field }) => (
						<SimpleMDE
							{...field}
							placeholder="Description"
							onChange={(value) => field.onChange(value)}
						/>
					)}
				/>
				<ErrorMessage>{errors.description?.message}</ErrorMessage>

				{/* Above error message component replaces below */}
				{/* {errors.description && <Text color="red" as="p">{errors.description.message}</Text>} */}

				<Button>Submit New Task</Button>
			</form>
		</div>
	);
};

export default NewTaskPage;
