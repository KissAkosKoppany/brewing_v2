import { useState } from "react";
import "./EmailInput.css";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid =
    email.length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const showInvalid =
    touched && email.length > 0 && !isValid;

  const showValid = touched && isValid;

  return (
    <div className="email-field">

      <div
        className={[
          "email-input-wrap",
          showValid ? "is-valid" : "",
          showInvalid ? "is-invalid" : "",
        ].filter(Boolean).join(" ")}
      >
        <span className="email-icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="m4 7 8 6 8-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <input
          id="vote-email"
          type="email"
          name="email"
          placeholder="E-mail adress..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={() => setTouched(true)}
          onFocus={() => {}}
          autoComplete="email"
          required
          aria-invalid={showInvalid}
          aria-describedby="email-feedback"
        />

        <span className="email-status" aria-hidden="true">
          {showValid && (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="m5 12 4 4L19 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {showInvalid && (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 8v5m0 3h.01M12 3 2.5 20h19L12 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </div>

      <p
        id="email-feedback"
        className={`email-feedback ${
          showValid ? "feedback-valid" : ""
        } ${showInvalid ? "feedback-invalid" : ""}`}
        aria-live="polite"
      >
        {showValid
          ? "Your email looks good."
          : showInvalid
          ? "Please enter a valid email address."
          : " "}
      </p>
    </div>
  );
}
