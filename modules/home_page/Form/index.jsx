'use client';
import Link from "next/link";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const NousContacter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setFormData] = useState({
    full_name: "",
    entreprise: "",
    email: "",
    phone_nbr: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Manual validation
    const newErrors = {};
    if (!data.full_name) {
      newErrors.full_name = "Votre nom complet est requis.";
    }
    if (!data.entreprise) {
      newErrors.entreprise = "Le nom de votre entreprise est requis.";
    }
    if (!data.email) {
      newErrors.email = "Votre email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }
    if (!data.phone_nbr) {
      newErrors.phone_nbr = "Votre numéro de téléphone est requis.";
    }
    if (!data.message) {
      newErrors.message = "Votre message est requis.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("entreprise", data.entreprise);
    formData.append("email", data.email);
    formData.append("phone_nbr", data.phone_nbr);
    formData.append("message", data.message);

    try {
      setLoading(true);
      const response = await fetch("/api/nousContacter", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Email envoyé avec succès !", {
          hideProgressBar: true,
          autoClose: 2000,
        });

        setFormData({
          full_name: "",
          entreprise: "",
          email: "",
          phone_nbr: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email.");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      id="contact"
      className="w-full flex justify-center items-center bg-slate-900"
    >
      <div className="md:w-[40%] w-full flex flex-col gap-y-14 p-16 pb-10d">
        <ToastContainer />

        <div className="flex flex-col gap-2">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl text-white">
              Nous Contacter
            </h2>
            {/* <p className="mt-4 text- text-xl">
            Découvrez notre large gamme de services, allant de la gravure sur
            bois aux campagnes numériques. Nous proposons des solutions adaptées
            à tous vos besoins en impression, publicité et découpe.
          </p> */}
          </div>
          {/* form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="flex flex-col gap-10 mt-10"
          >
            {/* First Row */}
            <div className="flex flex-col justify-between md:flex-row gap-7 md:gap-7">
              <div className="flex flex-col w-full md:w-1/2 gap-3">
                <label
                  htmlFor="full_name"
                  className="font-medium text-mainYellowColor "
                >
                  Votre nom complet *
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  placeholder="Votre nom complet ..."
                  className="bg-black/35 px-2 text-white text-sm border-b border-Gray focus:text-mainYellowColorg focus:border-mainYellowColor outline-none py-2 rounded-lg"
                  value={data.full_name}
                  onChange={handleChange}
                  //   required
                />
                {errors.full_name && (
                  <span className="text-red-500 text-sm">
                    {" "}
                    {errors.full_name}{" "}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2 gap-3">
                <label
                  htmlFor="entreprise"
                  className="font-medium text-mainYellowColor"
                >
                  Nom de votre entreprise *
                </label>
                <input
                  type="text"
                  id="entreprise"
                  name="entreprise"
                  placeholder="Nom de votre entreprise ..."
                  className="text-sm border-b border-Gray bg-black/35  text-white  focus:placehodlder:text-mainYellowColor focus:border-mainYellowColor outline-none py-2 px-2 rounded-lg"
                  value={data.entreprise}
                  onChange={handleChange}
                  //   required
                />
                {errors.entreprise && (
                  <span className="text-red-500 text-sm">
                    {" "}
                    {errors.entreprise}{" "}
                  </span>
                )}
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col justify-between md:flex-row gap-7">
              <div className="flex flex-col w-full md:w-1/2 gap-3">
                <label
                  htmlFor="email"
                  className="font-medium text-mainYellowColor"
                >
                  Votre email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre email ..."
                  className="bg-black/35 text-white text-sm border-b border-Gray focus:placgeholder:text-mainYellowColor focus:border-mainYellowColor outline-none py-2 px-2 rounded-lg"
                  value={data.email}
                  onChange={handleChange}
                  //   required
                />
                {errors.email && (
                  <span className="text-red-500 text-sm"> {errors.email} </span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2 gap-3">
                <label
                  htmlFor="phone_nbr"
                  className="font-medium text-mainYellowColor"
                >
                  Votre numéro de téléphone *
                </label>
                <input
                  type="tel"
                  id="phone_nbr"
                  name="phone_nbr"
                  placeholder="Votre numéro de téléphone ..."
                  className="bg-black/35 text-white text-sm border-b border-Gray focus:placgeholder:text-mainYellowColor focus:border-mainYellowColor outline-none py-2 px-2 rounded-lg"
                  value={data.phone_nbr}
                  onChange={handleChange}
                  //   required
                />
                {errors.phone_nbr && (
                  <span className="text-red-500 text-sm">
                    {" "}
                    {errors.phone_nbr}{" "}
                  </span>
                )}
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-col justify-between md:flex-row">
              <div className="flex flex-col w-full gap-3">
                <label
                  htmlFor="message"
                  className="font-medium text-mainYellowColor"
                >
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre message ..."
                  className="bg-black/35 focus:border-mainYellowColor outline-none text-white text-sm border-b border-Gray focus:plfaceholder:text-mainYellowColor focus:border-mainYellowColoroutline-none py-2 px-2 rounded-lg"
                  value={data.message}
                  onChange={handleChange}
                  rows={5}
                  //   required
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {" "}
                    {errors.message}{" "}
                  </span>
                )}
              </div>
            </div>

            {/* button envoyer */}
            <div className="text-center md:text-justify ">
              <span>
                <input
                  data-aos="fade-up"
                  type="submit"
                  value={loading ? "Envoi ..." : "Envoyer"}
                  className="hover:bg-amber-300 focus:outline-none focus:ring focus:ring-yellow-400 hover:scale-105 duration-300 ease-in-out       mt-5   bg-gradient-to-r bg-mainYellowColor w-full max-w-[300px] text-lg text-center text-black py-2 rounded-[10px] hover:opacity-90 cursor-pointer"
                />
              </span>
            </div>
          </form>
        </div>
        {/* Texte pour les erreurs */}
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500 text-sm text-center mt-5">
            Utilisez le formulaire correctement.
          </div>
        )}
      </div>
    </div>
  );
};

export default NousContacter;
