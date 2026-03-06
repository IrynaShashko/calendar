import { useState, type FC } from "react";

import { loginUser, registerUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

import {
  AuthCard,
  CloseButton,
  ErrorMessage,
  InputGroup,
  Overlay,
  PasswordWrapper,
  SubmitButton,
  SwitchText,
  Title,
} from "./CalendarStyles";

import type { AxiosError } from "axios";
import type { Translations } from "src/types/calendar.types";

interface AuthModalType {
  translations: Translations;
}

interface AuthErrorResponse {
  message?: string;
  error?: string;
}

const AuthModal: FC<AuthModalType> = ({ translations }) => {
  const { isAuthModalOpen, closeAuthModal, setUser } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  if (!isAuthModalOpen) return null;

  const validate = () => {
    if (!formData.email.includes("@")) return translations.errInvalidEmail;
    if (formData.password.length < 6) return translations.errPasswordLength;
    if (!isLogin && formData.name.trim().length < 2)
      return translations.errNameRequired;
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) return setError(validationError);

    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        const data = await loginUser({
          email: formData.email,
          password: formData.password,
        });
        setUser(data.user);
      } else {
        await registerUser(formData);
        const data = await loginUser({
          email: formData.email,
          password: formData.password,
        });
        setUser(data.user);
      }
      closeAuthModal();
      setFormData({ email: "", password: "", name: "" });
    } catch (err) {
      const axiosError = err as AxiosError<AuthErrorResponse>;

      const status = axiosError.response?.status;
      const messageFromServer = axiosError.response?.data?.message;

      if (status === 400 || status === 401) {
        if (isLogin) {
          setError(translations.errorInvalidCredentials);
        } else {
          setError(messageFromServer || translations.errorUserExists);
        }
      } else {
        setError(translations.errorDefault);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay onClick={closeAuthModal}>
      <AuthCard onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeAuthModal}>&times;</CloseButton>

        <Title>
          {isLogin ? translations.loginTitle : translations.registerTitle}
        </Title>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <InputGroup>
              <label>{translations.nameLabel}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Kate"
              />
            </InputGroup>
          )}

          <InputGroup>
            <label>{translations.emailLabel}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="example@mail.com"
            />
          </InputGroup>

          <InputGroup>
            <label>{translations.passwordLabel}</label>
            <PasswordWrapper>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="••••••••"
              />
            </PasswordWrapper>
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit" disabled={loading}>
            {loading
              ? isLogin
                ? translations.loadingSignIn
                : translations.loadingSignUp
              : isLogin
                ? translations.signIn
                : translations.signUp}
          </SubmitButton>
        </form>

        <SwitchText>
          {isLogin ? translations.noAccount : translations.haveAccount}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
          >
            {isLogin ? translations.signUp : translations.signIn}
          </span>
        </SwitchText>
      </AuthCard>
    </Overlay>
  );
};

export default AuthModal;
