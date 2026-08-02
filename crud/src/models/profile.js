
import mongoose, { Schema } from "mongoose";



const ProfileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});

const Profile = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);

export default Profile;