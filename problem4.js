// cls

/** Problem 04 - (Delete / Store) */

 var fileName= ["result.pdf", "data.docx","pdfData.jpg", "#exp.mp4", "docx.txt", "docx.xpdf","slipdf.txt" ]

 
  for ( var i = 0; i < fileName.length; i ++){
      var file = fileName[i];

    if (file.endsWith(".pdf")  || file.endsWith(".docx") ||file.endsWith(".mp4")) {
        
        console.log(`${file}        - Store`);

    } else  if ( file.endsWith(".jpg") || 
    file.endsWith (".xpdf") || file.endsWith(".txt")) {
        
        console.log(`${file}      - Delete`)
       }
    }
 
