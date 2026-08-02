import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },        
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },        
    },{
        timestamps: true,
    });    
    
    const Policy =  mongoose.models.Policy || mongoose.model("Policy", policySchema);
    
    export default Policy;

