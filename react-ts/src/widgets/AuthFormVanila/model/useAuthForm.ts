import { useState } from "react";

interface FormData {
  login: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  login: string;
  password: string;
  confirmPassword: string;
}

interface TouchedFields {
  login: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export const useAuthForm = () => {
  const [formData, setFormData] = useState<FormData>({
    login: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    login: "",
    password: "",
    confirmPassword: "",
  });

  const [touched, setTouched] = useState<TouchedFields>({
    login: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name } = target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    validateField(name);
  };

  const validateField = (name: string) => {
    let message = "";

    if (name === "login" && formData.login.trim() === "") {
      message = "Логин обязателен";
    }
    if (name === "password" && formData.password.length < 6) {
      message = "Пароль должен быть не менее 6 символов";
    }
    if (name === "confirmPassword" && formData.confirmPassword !== formData.password) {
      message = "Пароли не совпадают";
    } else if (name === "confirmPassword" && formData.confirmPassword.trim() === '') {
        message = "Пароли не совпадают";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const validateForm = () => {
    validateField("login");
    validateField("password");
    validateField("confirmPassword");
  };

  const isFormInvalid =
    Object.values(errors).some((error) => error !== "") ||
    Object.values(formData).some((value) => value.trim() === "");

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    isFormInvalid,
  };
};
