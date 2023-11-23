import { createContext } from "react";
import PropTypes from "prop-types";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = { name: "Quiz" };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
