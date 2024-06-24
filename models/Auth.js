//hashing the pwd before saving in database
//this function will be called b4 saving the user..
UserSchema.pre('save', async function (next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(this.password, salt)
        this.password = hashedPwd
        next()
   
    }catch (error){
        next(error)
    }
})