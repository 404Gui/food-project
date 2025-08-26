"use client";
import { useRef, useState } from "react";
import styles from "./ImagemPicker.module.css";
import Image from "next/image";


export function ImagePicker({ name, label }) {
    const imgInput = useRef();
    const [pickedImage, setPickedImage] = useState()

    function pickImgHandler() {
        imgInput.current.click();
    }

    function previewImageHandler(e) {
      const file = e.target.files[0]

      if(!file) {
        setPickedImage(null)
      }

      const fileReader = new FileReader();

      fileReader.onload = () => {
        setPickedImage(fileReader.result)
      }

      fileReader.readAsDataURL(file)

    }

  return (
    <>
      <div className={styles.picker}>
        <label htmlFor={name}></label>
        <div className={styles.controls}>
          <div className={styles.preview}>
            {!pickedImage && <p>Sem imagens anexadas aindas</p>}
            {pickedImage && <Image src={pickedImage} alt="Imagem selecionada pelo usuário" fill/>}

          </div>
          <input
            className={styles.input}
            type="file"
            id={name}
            accept="image/png, imagem/jpeg"
            name={name}
            ref={imgInput}
            onChange={previewImageHandler}

          />
          <button
            className={styles.button}
            type="button"
            onClick={pickImgHandler}
          >
            Escolher imagem
          </button>
        </div>
      </div>
    </>
  );
}
