
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://bikramdhami334:y8mbWKHGt5rnGTmr@cluster0.5e65coc.mongodb.net/SignUpDd?retryWrites=true&w=majority");
const userschema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

export default mongoose.models.users || mongoose.model("users",userschema);
// mongodb+srv://bikramdhami334:<password>@cluster0.5e65coc.mongodb.net/?retryWrites=true&w=majority