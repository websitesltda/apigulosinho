const fs = require('fs');
  const sharp = require('sharp');
exports.compressImage = (file, size) => {
    const newPath = file.path.split('.')[0] + '.png';

    return sharp(file.path)
        .resize({width:800, height:400})
        .toFormat('png', {
            progressive: true,
            quality: 30,
          })
        .toBuffer()
 
        .then(data => {

            // Deletando o arquivo antigo
            // O fs.acess serve para testar se o arquivo realmente existe, evitando bugs
      
            
            //Agora vamos armazenar esse buffer no novo caminho
            fs.writeFile(newPath, data, err => {
                if(err){
                    // Já aqui um erro significa que o upload falhou, então é importante que o usuário saiba.
                    throw err;
                }
            });

            // Se o código chegou até aqui, deu tudo certo, então vamos retornar o novo caminho
            return newPath;
        })
}