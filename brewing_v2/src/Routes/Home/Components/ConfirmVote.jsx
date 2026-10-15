import { useState } from "react";
import "./ConfirmVote.css";

export default function ConfirmVote() {
  const [status, setStatus] = useState("ready");
  const [message, setMessage] = useState("");

  async function handleConfirm() {
    const token = new URLSearchParams(
      window.location.search
    ).get("token");

    if (!token) {
      setStatus("error");
      setMessage(
        "This confirmation link is missing its token. Please use the link from your email."
      );
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/votes/confirm", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "We couldn't confirm your vote."
        );
      }

      setStatus("success");
      setMessage(
        result.message || "Your vote has been confirmed!"
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error.message ||
          "Something went wrong. Please try again."
      );
    }
  }

  return (
    <main className="confirm-page">
      <div className="confirm-card">
        <div
          className={`confirm-icon confirm-icon--${status}`}
          aria-hidden="true"
        >
          {status === "success"
            ? "✓"
            : status === "error"
              ? "!"
              : status === "loading"
                ? "✧"
                : "✉"}
        </div>

        <p className="confirm-eyebrow">
          WIZARD<span>HOPS</span>
        </p>

        <h1>
          {status === "success"
            ? "The magic is confirmed."
            : status === "error"
              ? "Something went wrong."
              : status === "loading"
                ? "Casting your confirmation..."
                : "One last step."}
        </h1>

        <p className="confirm-description" aria-live="polite">
          {status === "success"
            ? "Your email has been verified, and your vote now counts. Thanks for helping shape our next experiment!"
            : status === "error"
              ? message
              : status === "loading"
                ? "We're securely verifying your email and registering your vote."
                : "Confirm your email address to make your vote count. Every vote helps shape the next WizardHops creation."}
        </p>

        {status === "ready" && (
          <button
            className="confirm-button"
            type="button"
            onClick={handleConfirm}
          >
            Confirm my vote
            <span aria-hidden="true"> ↗</span>
          </button>
        )}

        {status === "loading" && (
          <div
            className="confirm-loader"
            role="status"
            aria-label="Confirming vote"
          />
        )}

        {status === "error" && (
          <button
            className="confirm-button"
            type="button"
            onClick={handleConfirm}
          >
            Try again
            <span aria-hidden="true"> ↗</span>
          </button>
        )}

        {status === "success" && (
          <div className="confirm-success-note">
            <span aria-hidden="true">✦</span>
            YOUR VOTE HAS BEEN ADDED
            <span aria-hidden="true">✦</span>
          </div>
        )}

        <div className="confirm-divider" />

        <p className="confirm-footer">
          Crafted with curiosity. Brewed with a little magic.
        </p>
      </div>
    </main>
  );
}