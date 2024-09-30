import User from '../models/User_model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'A user with this email already exists' });
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: { id: newUser._id, username, email } });
    } catch (error) {
        // server-side error tracking
        console.error('Error in signup:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
};