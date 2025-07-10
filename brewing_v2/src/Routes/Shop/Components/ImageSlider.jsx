import { useState } from 'react'
import './ImageSlider.style.css'

const ImageSlider = ({ images }) => {
    
    const [activeImage, setActiveImage] = useState(
        {
            imageOne: true,
            imageTwo: false,
            imageThree: false,
        }
    )

    const handleImageSelect = (image) => {
        switch (image) {
            case 1:
                setActiveImage({
                    imageOne: true,
                    imageTwo: false,
                    imageThree: false,
                })
                break;
            case 2:
                setActiveImage({
                    imageOne: false,
                    imageTwo: true,
                    imageThree: false,
                })
                break;
            case 3:
                setActiveImage({
                    imageOne: false,
                    imageTwo: false,
                    imageThree: true,
                })
                break;
            case 4:
                setActiveImage({
                    imageOne: false,
                    imageTwo: false,
                    imageThree: false,
                })
                break;
            default:
                throw new Error("erro selecting the image")
        }
    }

  return (
     <div className="image-slider-container">
            <div onClick={() => handleImageSelect(1)} className={`image-slider-image-container ${activeImage.imageOne ?  " active-image" : ""}`}>
                <img src={`/${images[0]}`} alt="image" className="image-slider-image" />
            </div>
            <div onClick={() => handleImageSelect(2)} className={`image-slider-image-container ${activeImage.imageTwo ?  " active-image" : ""}`}>
                <img src={`/${images[1]}`} alt="image" className="image-slider-image" />
            </div>
            <div onClick={() => handleImageSelect(3)} className={`image-slider-image-container ${activeImage.imageThree ?  " active-image" : ""}`}>
                <img src={`/${images[2]}`} alt="image" className="image-slider-image" />
            </div>
        </div>
  )
}

export default ImageSlider