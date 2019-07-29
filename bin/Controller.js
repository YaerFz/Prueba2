const mongoose = require("mongoose");

class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                "mongodb+srv://wady:<trabajo.19>@cluster0-frdog.mongodb.net/El_saber?retryWrites=true&w=majority",
                {useNewUrlParser:true}
            );
            console.log("Conectados a la base de datos")

        } catch(e){
            console.error(e)
        }
    }
}

exports.controller = new Controller()