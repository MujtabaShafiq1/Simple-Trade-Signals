import { useState } from "react";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { FaEnvelope as ContactIcon } from "react-icons/fa";

// Utils
import { getError, validationErrors } from "sts/utils/helpers";
import { contactSchema } from "sts/utils/validation/contact";
import { NAV_OPTIONS } from "sts/utils/constants";
import { Button } from "../base/button";

function Contact() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const contactHandler = async (e) => {
    e.preventDefault();
    const payload = { name, email, phoneNo, description };

    try {
      await contactSchema.validate(payload, { abortEarly: false });
    } catch (e) {
      setErrors(validationErrors(e));
      return;
    }

    try {
      setErrors({});
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      enqueueSnackbar({ variant: "success", message: "Your message is delivered" });
    } catch (e) {
      enqueueSnackbar({ variant: "error", message: getError(e) });
    }
  };

  return (
    <section id={NAV_OPTIONS.Contact} className="max-w-screen-xl mb-32 mx-auto">
      <div className="text-center font-bold text-5xl md:text-7xl mb-10">
        <span className="text-neutral-100">Contact</span>
        <span className="text-primary-100">&nbsp;Us</span>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 w-full max-w-6xl">
        <ContactIcon className="hidden md:block h-96 w-96 text-primary-100" />
        <form className="w-full md:w-[600px] space-y-4 text-neutral-100">
          <div className="space-y-1">
            <label className="text-sm font-medium pl-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="rounded-lg border w-full p-2 focus:outline-none focus:ring-0 focus:border-primary-100"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-sm text-warning-200">{errors?.name}</p>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium pl-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="rounded-lg border w-full p-2 focus:outline-none focus:ring-0 focus:border-primary-100"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-sm text-warning-200">{errors?.email}</p>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium pl-1" htmlFor="phoneNo">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNo"
              className="rounded-lg border w-full p-2 focus:outline-none focus:ring-0 focus:border-primary-100"
              placeholder="Phone Number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <p className="text-sm text-warning-200">{errors?.phoneNo}</p>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium pl-1" htmlFor="description">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              className="rounded-lg border w-full p-2 focus:outline-none focus:ring-0 focus:border-primary-100"
              placeholder="Description"
              value={description}
              rows={3}
              style={{ resize: "none" }}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-sm text-warning-200">{errors?.description}</p>
          </div>
          <Button className="mx-auto w-[300px]" onClick={contactHandler}>
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
