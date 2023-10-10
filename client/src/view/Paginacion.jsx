import React from 'react';
import '../css/PaginacionStyle.css'

const Paginacion = ({ currentPage, totalPages, onPageChange }) => {
  const paginas = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div id="paginacion">
      {paginas.map((pagina) => (
        <button
          key={pagina}
          onClick={() => onPageChange(pagina)}
          className={pagina === currentPage ? 'pagina-activa' : ''}
          id='botones'
        >
          {pagina}
        </button>
      ))}
    </div>
  );
};

export default Paginacion;