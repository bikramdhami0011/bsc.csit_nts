const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://bikramdhami334:y8mbWKHGt5rnGTmr@cluster0.5e65coc.mongodb.net/syllabusdb?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const schema=mongoose.Schema({
    file:{type:String},
    filename:{type:String}
});
exports.module=mongoose.model("notes",schema);
