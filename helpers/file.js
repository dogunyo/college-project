const JNT = require('jsonebtoken');
const createError = require('http-errors');
const User = require(' ../Models/User.model');


module. exports ={
    signAccessToken: (UserId)=>{
        return new Promisel((resolve, reject)=>{
            const payload ={}
            const secret = process. env.ACCESS_TOKEN_SECRET;
            const optionsm = {
                expiresIn: '1h',
                 issuer: 'EddTechnologies.com',
                  audience: Userld,
            }
            JWT.sign(payload, secret, options, (error, token)=>{
                if(error) {
                    console. log(error,nessage)
                    reject (createError. InternalServerErrort());
                }
                resolve(token);
        });
    })
}
}