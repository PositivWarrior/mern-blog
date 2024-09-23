import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
	return (
		<div className="p-3 max-w-3xl mx-auto min-h-screen">
			<h1 className="text-center text-3xl my-7 font-semibold">
				Create a post
			</h1>
			<form className="flex flex-col gap-4">
				<div className="flex flex-col gap-4 sm:flex-row justify-between">
					<TextInput
						type="text"
						placeholder="Title required"
						required
						id="title"
						className="flex-1"
					/>
					<Select>
						<option value="uncategorized">Select category</option>
						<option value="javascript">JavaScript</option>
						<option value="reactjs">React.js</option>
						<option value="nextjs">Next.js</option>
						<option value="nodejs">Node.js</option>
						<option value="expressjs">Express.js</option>
						<option value="python">Python</option>
						<option value="swift">Swift</option>
						<option value="music">Music</option>
						<option value="random">Random</option>
					</Select>
				</div>
				<div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
					<FileInput type="file" accept="image/*" />
					<Button
						type="button"
						gradientDuoTone="purpleToBlue"
						size="sm"
						outline
					>
						Upload Image
					</Button>
				</div>
				<ReactQuill
					theme="snow"
					className="w-full h-72 mb-12"
					placeholder="Write your post here..."
					required
				/>
				<Button type="submit" gradientDuoTone="purpleToPink"></Button>
			</form>
		</div>
	);
}
