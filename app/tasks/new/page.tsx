'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewTaskPage = () => {
	return (
		<div className="max-w-xl space-y-3">
			<TextField.Root>
				<TextField.Input placeholder="Title" />
			</TextField.Root>
			<SimpleMDE />
            <Button>Submit New Task</Button>
		</div>
	);
};

export default NewTaskPage;
