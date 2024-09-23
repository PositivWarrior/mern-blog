import mongoose from 'mongoose';
import { type } from 'os';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
			default:
				'https://www.google.com/imgres?q=profile%20picture&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F771742%2Fpexels-photo-771742.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&docid=FvQHUVZ-cx81xM&tbnid=BiWpUtRosyLJPM&vet=12ahUKEwjRisizp8eIAxWqHhAIHXVSGMkQM3oFCIYBEAA..i&w=4016&h=6016&hcb=2&itg=1&ved=2ahUKEwjRisizp8eIAxWqHhAIHXVSGMkQM3oFCIYBEAA',
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
