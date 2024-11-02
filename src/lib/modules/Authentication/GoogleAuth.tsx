import React from "react";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface GoogleAuthProps {
  onSignInSuccess?: () => void;
  redirectPath?: string;
}

const GoogleAuth: React.FC<GoogleAuthProps> = ({
  onSignInSuccess,
  redirectPath,
}) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info: ", user);

      if (onSignInSuccess) {
        onSignInSuccess();
      }

      if (redirectPath) {
        navigate(redirectPath);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error during Google Sign-In: ", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleAuth;
