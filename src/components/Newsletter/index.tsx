import * as css from "./index.module.scss";

import * as React from "react";

import addToMailchimp from "gatsby-plugin-mailchimp";

function normalizeError(error: string) {
  return error
    .replace("0 - ", "")
    .replace("Please enter a real email address.", "");
}

export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [result, setResult] = React.useState<string>();
  const [message, setMessage] = React.useState<string>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = await addToMailchimp(email);
    setResult(data.result);
    setMessage(data.msg);
  };

  const isError = result === "error";
  const isSuccess = result === "success";

  return (
    <div className={`${css.newsletter}`}>
      <p className={`${css.newsletter__heading}`}>
        Subscribe to my mailing list!
      </p>

      {isSuccess ? (
        <p className={`${css.newsletter__description}`}>
          Awesome, you’re signed up!
        </p>
      ) : (
        <>
          <p className={`${css.newsletter__description}`}>
            By signing up, you will receive emails containing my newest blog
            posts. Rest assured, there will be no spam, and you can opt-out at
            any time.
          </p>

          <form className={`${css.newsletter__form}`} onSubmit={handleSubmit}>
            <div className={`${css.newsletter__field}`}>
              <label
                htmlFor="newsletter-email-field"
                className={`${css.newsletter__fieldLabel} ${
                  isError ? css.newsletter__fieldLabelError : ""
                }`}
              >
                Email address
              </label>

              <input
                id="newsletter-email-field"
                type="email"
                value={email}
                placeholder="j.kowalski@example.com"
                onChange={(event) => setEmail(event.target.value)}
                className={`${css.newsletter__fieldInput} ${
                  isError ? css.newsletter__fieldInputError : ""
                }`}
                aria-invalid={isError}
                aria-describedby={isError ? "newsletter-email-error" : null}
              />

              {isError ? (
                <p
                  id="newsletter-email-error"
                  className={`${css.newsletter__fieldError}`}
                  dangerouslySetInnerHTML={{ __html: normalizeError(message) }}
                />
              ) : null}
            </div>

            <button
              type="submit"
              className={`${css.newsletter__button} ${
                isError ? css.newsletter__buttonError : ""
              }`}
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </div>
  );
}
