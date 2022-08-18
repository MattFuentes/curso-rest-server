const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.userPath = '/api/usuarios'
        this.port = process.env.PORT
        
        // Middlewares
        this.middlewares();
        // App Routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // Read & Parse
        this.app.use( express.json() );
        
        // Public Dir
        this.app.use( express.static('public') );
    }

    routes() {
        //Middleware Conditional
        this.app.use(this.userPath, require('../routes/user'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening Backend in port ' + this.port)
        });
    }
}

module.exports = Server;