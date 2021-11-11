import React from 'react';
import './catalogo.css'
const Catalogo = () => {
  return (
    <>
    <div className="header-catalogo"  >
      <h2>Confira nossos Catalogos abaixo</h2>
    </div>
      <div className="catalogos">
      <a href="https://drive.google.com/drive/my-drive " download  target="_blank" src="img1.jpg">
          <img src="../Imgs/img1.jpg" alt="Imagem não encontrada" width="230" height="200"/>
      </a>
      <a href="https://drive.google.com/drive/my-drive " download  target="_blank" src="img1.jpg">
          <img src="../Imgs/img2.jpg" alt="Imagem não encontrada" width="230" height="200"/>
      </a>
      <a href="https://drive.google.com/drive/my-drive " download  target="_blank" src="img1.jpg">
          <img src="../Imgs/img3.jpg" alt="Imagem não encontrada" width="230" height="200"/>
      </a>
      <a href="https://drive.google.com/drive/my-drive " download  target="_blank" src="img1.jpg">
          <img src="../Imgs/img4.jpg" alt="Imagem não encontrada" width="230" height="200"/>
      </a>
      <a href="https://drive.google.com/drive/my-drive " download  target="_blank" src="img1.jpg">
          <img src="../Imgs/img5.jpg" alt="Imagem não encontrada" width="230" height="200"/>
      </a>
        
      </div>
   
    </>
  );
};

export default Catalogo;
