import React, { useState } from "react";

function CreateItem() {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [success, setSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log({
      itemName,
      price,
      category,
      image,
    });

    setSuccess(true);
    setItemName("");
    setPrice("");
    setCategory("");
    setImage(null);
    setPreview("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Post an Item</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Item Name</label>
        <input
          style={styles.input}
          type='text'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder='Enter item name'
          required
        />

        <label style={styles.label}>Price</label>
        <div style={styles.priceInput}>
          <span style={styles.dollar}>$</span>
          <input
            style={{ ...styles.input, borderRadius: "0 8px 8px 0" }}
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='0.00'
            required
          />
        </div>

        <label style={styles.label}>Category</label>
        <select
          style={styles.input}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required>
          <option value=''>Select a category</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
          <option>Accessories</option>
        </select>

        <label style={styles.label}>Upload Image (optional)</label>
        <input
          style={styles.input}
          type='file'
          accept='image/*'
          onChange={handleImageChange}
        />

        {preview && (
          <img
            src={preview}
            alt='Preview'
            style={{ maxWidth: "100%", marginTop: 15, borderRadius: 8 }}
          />
        )}

        <button type='submit' style={styles.button}>
          Post Item
        </button>

        {success && (
          <p style={styles.successMessage}>Item posted successfully!</p>
        )}
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 1s ease",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2em",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    fontWeight: "500",
  },
  input: {
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1em",
  },
  priceInput: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  dollar: {
    backgroundColor: "#eee",
    padding: "12px",
    border: "1px solid #ddd",
    borderRight: "none",
    borderRadius: "8px 0 0 8px",
  },
  button: {
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "15px",
    fontSize: "1.1em",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  successMessage: {
    marginTop: "20px",
    color: "green",
    textAlign: "center",
  },
};

export default CreateItem;
