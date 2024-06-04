"use client";

import { useState } from "react";
import ImagePickerCss from "./ImagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [image, setImage] = useState();

  const handleSelectedImage = (event) => {
    const selectedImg = event.target.files[0];

    if (!selectedImg) {
      setImage(null);
      return;
    }

    const readFile = new FileReader();
    readFile.onload = () => {
      setImage(readFile.result);
    };
    readFile.readAsDataURL(selectedImg);
  };

  return (
      <div className={ImagePickerCss.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={ImagePickerCss.controls}>
          <div className={ImagePickerCss.preview}>
            {!image && <p>No image selected</p>}
            {image && <Image alt="Selected image" src={image} fill />}
          </div>
          <input
            required
            className={ImagePickerCss.input}
            name={name}
            id={name}
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleSelectedImage}
          />
        </div>
      </div>
  );
};

export { ImagePicker };
