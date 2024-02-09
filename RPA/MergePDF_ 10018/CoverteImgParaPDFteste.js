const caminho = process.argv;
const fs = require('fs');
const imageToPdf = require('image-to-pdf');
const { PDFDocument } = require('pdf-lib');
const path = require('path'); 

//pegar o caminho

function obterCaminhoAppData(subcaminho) {
    const caminhoAppData = process.env.APPDATA || (process.platform === 'darwin' ? process.env.HOME + 'Library/Application Support' : '/var/local');
    const caminhoCompleto = path.join(caminhoAppData, subcaminho);
    return caminhoCompleto;
}

const caminhoString = caminho[2];
caminhoString.toString();

// Remover %appdata% da string e obter o caminho
const subcaminho = caminhoString.replace('%appdata%/', '');

const caminhoCompleto = obterCaminhoAppData(subcaminho);

// Imagens para PDF
 
const imagesFolderPath = caminhoCompleto;
const pdfPath = imagesFolderPath + '/saida.pdf';

// Lendo todos os arquivos da pasta
fs.readdir(imagesFolderPath, (err, files) => {
    if (err) {
        console.error('Erro ao ler a pasta:', err);
        return;
    }


    // Filtrando para incluir apenas arquivos de imagem
    const imageFiles = files.filter(file => {
        return path.extname(file).toLowerCase() === '.jpg' || path.extname(file).toLowerCase() === '.jpeg' || path.extname(file).toLowerCase() === '.png' || path.extname(file).toLowerCase() === '.jfif' || path.extname(file).toLowerCase() === '.jfi' || path.extname(file).toLowerCase() === '.jpe' || path.extname(file).toLowerCase() === '.heif' || path.extname(file).toLowerCase() === '.tiff';
    }).map(file => path.join(imagesFolderPath, file));

 

    // Convertendo as imagens em PDF
    if (imageFiles.length > 0) {
        imageToPdf(imageFiles, imageToPdf.sizes.A4)
            .pipe(fs.createWriteStream(pdfPath))
            .on('finish', function () {
                console.log('PDF criado com sucesso!');
            })
            .on('error', function (err) {
                console.error('Erro ao criar PDF:', err);
            });
    } else {
        console.log('Nenhuma imagem encontrada para conversão.');
    }
});

//Espera 2 segundos

setTimeout(function() {
  
//Merge PDFs

async function mergePDFsInFolder(folderPath, outputFile) {
  try {
    const pdfFiles = fs.readdirSync(folderPath)
      .filter(file => path.extname(file).toLowerCase() === '.pdf');

    const mergedPdf = await PDFDocument.create();

    for (const pdfFile of pdfFiles) {
      const pdfBytes = fs.readFileSync(path.join(folderPath, pdfFile));
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach(page => mergedPdf.addPage(page));

      // Exclui o arquivo PDF original após a mesclagem
      fs.unlinkSync(path.join(folderPath, pdfFile));
      console.log(`Arquivo PDF '${pdfFile}' mesclado e removido com sucesso.`);
    }

    const mergedPdfBytes = await mergedPdf.save();
    fs.writeFileSync(outputFile, mergedPdfBytes);
    
    console.log('PDFs merged successfully!');
  } catch (error) {
    console.error('Error merging PDFs:', error);
  }
}

const pdfsFolderPath = caminhoCompleto;
const pdfsPath = pdfsFolderPath + '/merge.pdf'

mergePDFsInFolder(pdfsFolderPath, pdfsPath);
  
}, 2000);