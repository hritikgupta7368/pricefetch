import { useState ,useRef} from "react";

function Input({type,label,id}) {

function inputType(){
    switch (type) {
      case 'text':
        return (
          <div className="relative w-[300px] h-[80px]">
            <input className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed hover:border-black" type={type}  />
            <label className="absolute text-gray-600 text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" for={id} >{label}</label>
          </div>
          );
      case 'password':
        return (
          <div className="relative w-[300px] h-[80px]">
            <input className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed hover:border-black" type={type}  />
            <label className="absolute text-md text-gray-600 duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" for={id} >{label}</label>
          </div>
          );    
      default:
        return null;
        }
      }


  return (
    <div>
    {inputType()}
   </div>
  )
}
function useImageInputLogic () {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleSetImage = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const previewUrl = event.target.result;
        // Additional handling for the previewUrl if needed
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return { image, fileInputRef, handleSetImage, handleImageChange };
};
const ImageInput = () => {
  const { image, fileInputRef, handleSetImage, handleImageChange } = useImageInputLogic();

  return (
    <div>
      <button onClick={handleSetImage} className="w-20 h-20 rounded-full bg-gray-300 relative overflow-hidden flex items-center justify-center">
        <img src={image ? URL.createObjectURL(image) : '/icons/default_user.png'} height='80' width='80' className="rounded-full object-cover"  />
      </button>

      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleImageChange}
      />
    </div>
  );
};
export  {Input,ImageInput}



