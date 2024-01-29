import mongoose from 'mongoose';

export const connectToDB = async url => {
    return await mongoose.connect(url);
};