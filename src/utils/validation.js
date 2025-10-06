export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateNotEmpty = (value) => {
  return value.trim().length > 0;
};

export const validateBlogPost = (blogData) => {
  const errors = {};

  if (!validateNotEmpty(blogData.title)) {
    errors.title = 'Title is required';
  } else if (blogData.title.length < 5) {
    errors.title = 'Title must be at least 5 characters';
  }

  if (!validateNotEmpty(blogData.content)) {
    errors.content = 'Content is required';
  } else if (blogData.content.length < 50) {
    errors.content = 'Content must be at least 50 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const showValidationError = (field, message) => {
  const input = document.querySelector(`[name="${field}"]`);
  if (input) {
    input.style.borderColor = '#e74c3c';
    
    // Remove existing error message
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    // Add error message
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '0.5rem';
    errorElement.textContent = message;
    
    input.parentNode.appendChild(errorElement);
  }
};

export const clearValidationError = (field) => {
  const input = document.querySelector(`[name="${field}"]`);
  if (input) {
    input.style.borderColor = '';
    
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
};