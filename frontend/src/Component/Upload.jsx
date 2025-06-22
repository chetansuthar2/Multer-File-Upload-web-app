import { useEffect, useState, useRef } from "react";
import axios from 'axios'
import './Upload.css'

export const Upload = () => {
    const [formData, setFormData] = useState({
        name:"",
        price:"",
        des:''
    });

    const [image, setImage] = useState(null)   //! State to hold the image file

    const [imagePreview, setImagePreview] = useState(null);  // !preview image

    const [ product, setproduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef(null)


    const AllProduct =  async () =>{
      try {
        const res=  await axios.get('http://localhost:3000/api/product',{
            headers: {
                'Content-Type': 'application/json'
            }
        })
            // console.log(res)
              setproduct(res.data)
      } catch (error) {
        console.log(error)
        
      }
    }

    useEffect(() => {
      
    AllProduct()
      
    }, [])
    


    const handlechange=(e)=>{
 setFormData({...formData,[e.target.name]:e.target.value})
        
    }

    const handleimagechange=(e)=>{
        // console.log(e);
        
        // setImage(e.target.files[0])
         const file = e.target.files[0];

    console.log(setImage(file));
    setImage(file);

    setImagePreview(URL.createObjectURL(file));
    
    console.log(URL.createObjectURL(file));
}

    const handleSubmit= async (e)=>{
        e.preventDefault()

        if (!formData.name || !formData.price || !formData.des || !image) {
            alert("Please fill all fields and select an image");
            return;
        }

        setIsLoading(true);

        //Creates a new FormData object named data.
       const data = new FormData();
       data.append('name',formData.name);
       data.append('price',formData.price);
         data.append('des',formData.des);
         data.append('image',image);


         try {

           const res=  await axios.post('http://localhost:3000/api/product',data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }

           })
            alert("Product uploaded successfully!");
            console.log(res.data);

            // Reset form
            setFormData({name:"", price:"", des:''});
            setImage(null);
            setImagePreview(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }

            // Refresh product list
            AllProduct();
         } catch (error) {
            alert("Error uploading product");
            console.error("Error uploading file:", error);
         } finally {
            setIsLoading(false);
         }

    }

  const handleDelete = async (id) => {
    console.log(id);
    

    try {
      const res = await axios.get(`http://localhost:3000/api/product/${id}`);     
      alert("Product deleted successfully!");
      console.log(res.data);  
      // Update the product list after deletion
      setproduct(product.filter(item => item._id !== id));
    } catch (error) {
      alert("Error deleting product");    
      console.error("Error deleting product:", error);
    }
  };





  return (
    <div className="upload-container">
      <div className="form-section">
        <h2 className="form-title">Add New Product</h2>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="upload-form">
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              id="name"
              onChange={handlechange}
              type="text"
              placeholder="Enter product name"
              name="name"
              value={formData.name}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              onChange={handlechange}
              type="number"
              placeholder="Enter price"
              name="price"
              value={formData.price}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="des">Description</label>
            <textarea
              id="des"
              onChange={handlechange}
              placeholder="Enter product description"
              name="des"
              value={formData.des}
              className="form-textarea"
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Product Image</label>
            <input
              id="image"
              ref={fileInputRef}
              onChange={handleimagechange}
              type="file"
              name="image"
              className="form-file-input"
              accept="image/*"
            />
          </div>

          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" className="preview-image" />
            </div>
          )}

          <button
            type="submit"
            className={`submit-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Upload Product'}
          </button>
        </form>
      </div>

      <div className="products-section">
        <h2 className="products-title">All Products</h2>

        {product.length === 0 ? (
          <div className="no-products">
            <p>No products found. Add your first product!</p>
          </div>
        ) : (
          <div className="products-grid">
            {product.map((item, idx) => (
              <div key={idx} className="product-card">
                <div className="product-image-container">
                  <img
                    className="product-image"
                    src={`http://localhost:3000/uploads/${item.image}`}
                    alt={item.name}
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-price">₹{item.price}</p>
                  <p className="product-description">{item.des}</p>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


    </div>
  )
}
