import React, { useState } from "react";
import Button from "../button";
import { BookDetailsProps } from "./types";
import { StyledForm } from "./styles";

interface ValidationErrors {
  title?: string;
  price?: string;
  category?: string;
  description?: string;
}

const BookDetails = ({ onClose, onSubmit, book }: BookDetailsProps) => {
  const [formDetails, setFormDetails] = useState({
    title: book?.title ?? "",
    price: book?.price ?? 0,
    category: book?.category ?? "",
    description: book?.description ?? "",
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const err: ValidationErrors = {};
    const { title, price, category, description } = formDetails;

    if (title.length <= 3) {
      err.title = "Minimum 3 characters are required";
    }

    if (price <= 0) {
      err.price = "Please specify a valid price";
    }

    if (category.length <= 3) {
      err.category = "Minimum 3 characters are required";
    }

    if (description.length <= 3) {
      err.description = "Minimum 3 characters are required";
    }

    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    setErrors({});
    onSubmit?.(formDetails);
  };

  const clearError = (e: React.FocusEvent<HTMLInputElement>) => {
    const err = { ...errors };
    delete err[e.target.name as "title" | "price" | "category" | "description"];

    setErrors(err);
  };

  return (
    <>
      <h2>{book ? "Edit" : "Add"} Book</h2>
      <StyledForm>
        <div className="form-field">
          <label htmlFor="title">Name</label>
          <input
            className={errors.title ? "input-error" : ""}
            type="text"
            name="title"
            minLength={3}
            value={formDetails.title}
            placeholder="E.g. Harry Potter"
            onChange={handleChange}
            onFocus={clearError}
          />
          <div className="val-error">{errors.title}</div>
        </div>
        <div className="form-field">
          <label htmlFor="price">Price</label>
          <input
            className={errors.price ? "input-error" : ""}
            type="number"
            name="price"
            placeholder="E.g. 29.99"
            step=".01"
            value={formDetails.price}
            onChange={handleChange}
            onFocus={clearError}
          />
          <div className="val-error">{errors.price}</div>
        </div>
        <div className="form-field">
          <label htmlFor="category">Category</label>
          <input
            className={errors.category ? "input-error" : ""}
            type="text"
            name="category"
            placeholder="E.g. Science Fiction"
            value={formDetails.category}
            onChange={handleChange}
            onFocus={clearError}
          />
          <div className="val-error">{errors.category}</div>
        </div>
        <div className="form-field">
          <label htmlFor="description">Description</label>
          <input
            className={errors.description ? "input-error" : ""}
            type="text"
            name="description"
            placeholder="E.g. Dark Goblins take over Hogwarts"
            value={formDetails.description}
            onChange={handleChange}
            onFocus={clearError}
          />
          <div className="val-error">{errors.description}</div>
        </div>
        <div className="btn-container">
          <Button type="secondary" onClick={onClose}>
            Close
          </Button>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </StyledForm>
    </>
  );
};

export default BookDetails;
