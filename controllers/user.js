const { response, request } = require('express');

const userGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: 'get api - Controller',
        query
    });
}

const userPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post api - Controller',
        nombre,
        edad
    });
}

const userPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Put api - Controller',
        id
    });
}

const userDelete = (req, res = response) => {
    
    res.json({
        msg: 'Delete api - Controller'
    });
}

const userPatch = (req, res = response) => {
    
    res.json({
        msg: 'Patch api - Controller'
    });
}


module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}