const express = require('express');
const path = require('path');

const multer = require("multer");
const upload = multer({ dest: "public/pdf" });

const controllerCategorias = require('./controllers/CategoriasController');
const controllerChecklist = require('./controllers/ChecklistController');
const controllerEmpresas = require('./controllers/EmpresaController');
const controllerFuncionarios = require('./controllers/FuncionariosController');
const controllerPerguntas = require('./controllers/PerguntasController');
const controllerResultados = require('./controllers/ResultadosController');
const controllerUsuarios = require('./controllers/UsuariosController');
const controllerLogin = require('./controllers/LoginController');
const controllerUpload= require('./controllers/UploadController');
const controllerTazerDados= require('./controllers/TazerDadosController');
const controllerUploadReactJS= require('./controllers/UpoadlReactJSController');
const controllerUploadPDF= require('./controllers/UploadPDFController');
const controllerImagem= require('./controllers/ControllerImagem');
const controllerImagem2= require('./controllers/ControllerImagem2');


const routes = express.Router();


///////////////////////// Login //////////////////////
routes.post("/UploadPDF", controllerUploadPDF.single('image'), async (req, res) => {

    if (req.file) {
        console.log(req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }

    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
    });



});


///////////////////////////////////////////

routes.post('/Login', controllerLogin.Login);
routes.post('/TrazerDados', controllerTazerDados.List);

routes.post("/Uploads", controllerUploadReactJS.single('image'), async (req, res) => {

    if (req.file) {
        console.log(req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }

    return res.status(400).json({
        erro: true,
        mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
    });



});

routes.use( express.static('public/images'));
routes.use('/pdf', express.static('public/pdf'));

routes.post('/UploadAss', controllerUpload.single('image'), (req, res, next) => {

    // Se houve sucesso no armazenamento
    if (req.file) {
    
      	// Vamos mandar essa imagem para compressão antes de prosseguir
        // Ela vai retornar o a promise com o novo caminho como resultado, então continuamos com o then.
        controllerImagem2.compressImage(req.file)
        console.log(req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }

    return res.send('Houve erro no upload!');
});

routes.post('/Upload', controllerUpload.single('image'), (req, res, next) => {

    // Se houve sucesso no armazenamento
    if (req.file) {
    
      	// Vamos mandar essa imagem para compressão antes de prosseguir
        // Ela vai retornar o a promise com o novo caminho como resultado, então continuamos com o then.
        controllerImagem.compressImage(req.file, 100)
        console.log(req.file);
        return res.json({
            erro: false,
            mensagem: "Upload realizado com sucesso!"
        });
    }

    return res.send('Houve erro no upload!');
});

// routes.post("/Upload", controllerUpload.single('image'), async (req, res) => {

    
//     if (req.file) {
//         flehelper.compressImage(req.file, 100)
//         .then(newPath => {
//              // Vamos continuar normalmente, exibindo o novo caminho
//               return res.send("Upload e compressão realizados com sucesso! O novo caminho é:" +newPath );
//          })
//         .catch(err => console.log(err) );
//     }

//     return res.status(400).json({
//         erro: true,
//         mensagem: "Erro: Upload não realizado com sucesso, necessário enviar uma imagem PNG ou JPG!"
//     });



// });



////////////////////////////////////////////////////////////

///////////////////////// Usuarios //////////////////////

routes.post('/ListarUsuarios', controllerUsuarios.List);

routes.post('/CriarUsuarios', controllerUsuarios.Create);

routes.post('/UpdateUsuarios', controllerUsuarios.Update);

routes.post('/GetOneUsuarios', controllerUsuarios.GetOne);

routes.post('/DeletarUsuarios', controllerUsuarios.Delete);

////////////////////////////////////////////////////////////

///////////////////////// Resultados //////////////////////

routes.post('/ListarResultados', controllerResultados.List);

routes.post('/CriarResultados', controllerResultados.Create);

routes.post('/UpdateResultados', controllerResultados.Update);

routes.post('/GetOneResultados', controllerResultados.GetOne);

routes.post('/DeletarResultados', controllerResultados.Delete);

////////////////////////////////////////////////////////////

///////////////////////// Categorias //////////////////////

routes.post('/ListarCategorias', controllerCategorias.List);

routes.post('/CriarCategorias', controllerCategorias.Create);

routes.post('/UpdateCategorias', controllerCategorias.Update);

routes.post('/GetOneCategorias', controllerCategorias.GetOne);

routes.post('/DeletarCategorias', controllerCategorias.Delete);

////////////////////////////////////////////////////////////

//////////////////////////// Checklist ///////////////////////

routes.post('/ListarChecklist', controllerChecklist.List);

routes.post('/CriarChecklist', controllerChecklist.Create);

routes.post('/UpdateChecklist', controllerChecklist.Update);

routes.post('/GetOneChecklist', controllerChecklist.GetOne);

routes.post('/DeletarChecklist', controllerChecklist.Delete);

routes.post('/UpdateStatus', controllerChecklist.UpdateStatus);

/////////////////////////////////////////////////////////////

//////////////////////////// Empresas ///////////////////////

routes.post('/ListarEmpresas', controllerEmpresas.List);

routes.post('/CriarEmpresas', controllerEmpresas.Create);

routes.post('/UpdateEmpresas', controllerEmpresas.Update);

routes.post('/GetOneEmpresas', controllerEmpresas.GetOne);

routes.post('/DeletarEmpresas', controllerEmpresas.Delete);

/////////////////////////////////////////////////////////////

//////////////////////////// Funcionarios ///////////////////////

routes.post('/ListarFuncionarios', controllerFuncionarios.List);

routes.post('/CriarFuncionarios', controllerFuncionarios.Create);

routes.post('/UpdateFuncionarios', controllerFuncionarios.Update);

routes.post('/GetOneFuncionarios', controllerFuncionarios.GetOne);

routes.post('/DeletarFuncionarios', controllerFuncionarios.Delete);

/////////////////////////////////////////////////////////////

//////////////////////////// Funcionarios ///////////////////////

routes.post('/ListarPerguntas', controllerPerguntas.List);

routes.post('/CriarPerguntas', controllerPerguntas.Create);

routes.post('/UpdatePerguntas', controllerPerguntas.Update);

routes.post('/GetOnePerguntas', controllerPerguntas.GetOne);

routes.post('/DeletarPerguntas', controllerPerguntas.Delete);

/////////////////////////////////////////////////////////////

module.exports = routes;
