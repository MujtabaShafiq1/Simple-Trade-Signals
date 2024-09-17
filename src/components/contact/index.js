import { useState } from "react";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import { FaEnvelope as ContactIcon } from "react-icons/fa";

// Services

// Utils
import { getError, validationErrors } from "sts/utils/helpers";
import { contactSchema } from "sts/utils/validation/contact";
import { NAV_OPTIONS } from "sts/utils/constants";

function Contact() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const contactHandler = async () => {
    const payload = { name, email, phoneNo, description };

    try {
      await contactSchema.validate(payload, { abortEarly: false });
    } catch (e) {
      setErrors(validationErrors(e));
      return;
    }

    // try {
    //   setErrors({});
    //   const { data } = await logIn(payload);
    //   router.push("/");
    // } catch (e) {
    //   const res = e.response?.data;
    //   enqueueSnackbar({
    //     variant: res?.isOnBoarded === false ? "info" : "error",
    //     message: getError(e),
    //     onEntered: async () => {
    //       if (res?.isVerified === false) {
    //         router.push({ pathname: "/verify", query: { email } });
    //       } else if (res?.isOnBoarded === false) {
    //         await resendInvite({ email });
    //       } else if (res?.passwordResettedRequired === true) {
    //         router.push({ pathname: "/reset-password", query: { email } });
    //       }
    //     },
    //   });
    // }
  };

  return (
    <section id={NAV_OPTIONS.Contact} className="max-w-screen-2xl mx-auto py-20">
      <div className="text-center font-bold text-6xl md:text-7xl mb-3">
        <span className="text-neutral-100">Contact</span>
        <span className="text-primary-100">&nbsp;Us</span>
      </div>
      <div className="flex justify-center items-center gap-4">
        <ContactIcon className="h-80 w-80 text-primary-100" />
        <form className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm text-neutral-100 font-medium pl-1" htmlFor="company-name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="rounded-lg border w-full p-2"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="text-sm text-warning-200">{errors?.name}</p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
