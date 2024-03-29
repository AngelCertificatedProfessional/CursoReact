const {Schema,model} = require('mongoose')

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    online:{
        type:Boolean,
        default:false
    },
})

UsuarioSchema.method('toJson',function() {
    const {__v,_id,password,...object}=this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Usuario',UsuarioSchema);