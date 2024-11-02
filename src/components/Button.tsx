import React from "react";
import { useTheme } from "@mui/material/styles";

const Button: React.FC = () => {
  const theme = useTheme();
  return (
    <button className="w-full relative z-10 group">
      <span
        className="absolute -top-1 group-hover:top-0 left-0 py-3 px-6 z-10 rounded-full"
        style={{
          background: theme.palette.text.primary,
        }}
      >
        Get Started
      </span>
      <span
        className="absolute top-0 left-0 py-3 px-6 z-0 rounded-full"
        style={{
          background: theme.palette.divider,
        }}
      />
    </button>
  );
};

export default Button;
