//!PhotoUpload

//*Import base
import React, { useState, useRef } from 'react';
import axios from 'axios';

//*Import components
import Button from '../UI/Button/Button';
import Preloader from '../UI/Preloader/Preloader';

//*Import styles
import styles from './photoUpload.module.scss';

const PhotoUpload = ({ route, url, textButton }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const formData = new FormData();
      formData.append('photo', file);

      try {
        setLoading(true); // Встановлюємо стан "завантаження"
        const response = await axios.post(url, formData);
        console.log('Photo uploaded successfully:', response.data);
        // Додайте обробку відповіді від бекенду тут
        setLoading(false); // Відмічаємо завершення завантаження
        window.location.href = { route }; // Перенаправлення після успішного завантаження
      } catch (error) {
        console.error('Error uploading photo:', error);
        setLoading(false); // Відмічаємо завершення завантаження (навіть якщо виникла помилка)
      }
    }
  };

  return (
    <div className={styles.uploadButtonWrapper}>
      <Button
        className={styles.uploadButton}
        onClick={() => inputRef.current.click()}
      >
        {loading ? (
          <span>
            <Preloader />{' '}
            <span className={styles.buttonTextLoader}>Wait...</span>
          </span>
        ) : (
          <span className={styles.a}>{textButton}</span>
        )}
      </Button>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        onChange={handleFileChange}
      />
    </div>
  );
};

export default PhotoUpload;
