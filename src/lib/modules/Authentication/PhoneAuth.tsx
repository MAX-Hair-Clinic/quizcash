import { useEffect, useRef, useState } from "react";
import { auth } from "@/firebase";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export const usePhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  useEffect(() => {
    if (!recaptchaVerifierRef.current) {
      const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
      });
      recaptchaVerifierRef.current = verifier;
    }
    return () => {
      recaptchaVerifierRef.current?.clear();
      recaptchaVerifierRef.current = null;
    };
  }, []);

  const requestOtp = async () => {
    setResendTimer(60);
    setError(null);

    if (!recaptchaVerifierRef.current) {
      return setError("ReCaptchaVerifier is not initialized");
    }

    const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        recaptchaVerifierRef.current
      );
      setConfirmationResult(confirmation);
      setSuccess("OTP Sent Successfully.");
    } catch (err: unknown) {
      setResendTimer(0);
      if (err instanceof Error) {
        if (err.message.includes("invalid-phone-number")) {
          setError("Invalid phone number.");
        } else if (err.message.includes("too-many-requests")) {
          setError("Too many requests. Please try again later.");
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const verifyOtp = async () => {
    if (!confirmationResult) {
      setError("Please Enter OTP first.");
      return;
    }
    try {
      await confirmationResult.confirm(otp);
      setSuccess("Phone verified successfully.");
    } catch {
      setError("Failed to verify OTP. Please check the OTP.");
    }
  };

  return {
    phone,
    setPhone,
    otp,
    setOtp,
    error,
    success,
    resendTimer,
    requestOtp,
    verifyOtp,
  };
};
