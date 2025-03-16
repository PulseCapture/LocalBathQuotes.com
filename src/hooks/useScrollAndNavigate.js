// src/hooks/useScrollAndNavigate.js
import { useNavigate } from 'react-router-dom';

const useScrollAndNavigate = () => {
  const navigate = useNavigate();

  const scrollAndNavigate = (path) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setTimeout(() => {
      navigate(path);
    }, 100); // Adjust the delay if needed
  };

  return scrollAndNavigate;
};

export default useScrollAndNavigate;