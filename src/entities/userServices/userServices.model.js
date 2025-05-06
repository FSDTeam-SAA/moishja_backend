import mongoose from 'mongoose';

const userServicesSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        serviceType: {
            type: String,
            enum: ['removal-request', 'house-visit', 'fast-removal'],
            required: true
        },
        serviceId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    },
    { timestamps: true }
);

const UserServices = mongoose.model('UserServices', userServicesSchema);
export default UserServices;
