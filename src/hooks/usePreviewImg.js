import { useState } from 'react';
import useShowToast from './useShowToast';

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 5 * 1024 * 1024; // 5mb

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      if (file.size > maxFileSizeInBytes) {
        showToast(
          'Erro/Arquivo muito grande',
          'O tamanho do arquivo deve ser menor que 5mb',
          'error'
        );
        setSelectedFile(null);
        return;
      }

      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      showToast(
        'Erro/Formato de arquivo inválido',
        'Selecione apenas imagens',
        'error'
      );
      setSelectedFile(null);
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
