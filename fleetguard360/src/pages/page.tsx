"use client";
import Image from "next/image";

export default function Signup() {
  // This is a simple signup page component for a transportation app.
  /*async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    // Here you would typically send the email and phone to your backend for processing
    console.log(formData);
    await response = fetch("https:/render.com/fleetguard360/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, phone }),
    });

    if (response.ok) {
      // Handle successful signup, e.g., redirect to a welcome page or show a success message
      console.log("Signup successful");
      window.location.href = "/welcome"; // Redirect to a welcome page
    } else {
      // Handle errors, e.g., show an error message
      console.error("Signup failed");
      alert("There was an error signing up. Please try again.");
    }
  }*/

    // This component renders a signup form with fields for email and phone number.

  return (
    <div className="flex w-full justify-center pt-55 gap-22">
      <div className="max-w-152">
        <Image
          className="w-full"
          src="/auth-image.png"
          alt="Bus de tranasporte - FleetGuard 360"
          width={610}
          height={554}
        />
      </div>
      <div className="flex flex-col gap-5 max-w-110">
        <Image
          className="mx-auto"
          src="/logo.svg"
          alt="FleetGuard 360"
          width={200}
          height={56}
        />
        <h1 className="text-5xl font-medium">Únete</h1>
        <p className="text-base">
          Viaja con tranquilidad. Consulta horarios, sigue tu ruta y recibe
          notificaciones.
        </p>
        <span className="w-full border-b-1 opacity-20"></span>
        <form
          className="flex flex-col gap-y-3.5 pt-3.5"
          /*onSubmit={handleSubmit}*/
        >
          <div className="flex flex-col gap-y-1.5 text-sm">
            <label htmlFor="Signup-Email">Email</label>
            <div>
              <input
                className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]"
                type="email"
                id="Signup-Email"
                name="email"
                placeholder="mail@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-1.5 text-sm">
            <label htmlFor="Signup-Phone">Teléfono</label>
            <div>
              <input
                className="w-full h-11 rounded-lg px-3.5 py-2.5 border-1 border-[#D5D7DA]"
                type="tel"
                id="Signup-Phone"
                name="phone"
                placeholder="+57 (300) 123 4567"
              />
            </div>
          </div>

          <button
            className="bg-[#0086C9] text-white py-2 px-3.5 w-full rounded-lg"
            type="submit"
          >
            Inicia Sesión
          </button>
        </form>

        <p className="font-semibold text-[#A4A7AE] text-sm/loose">
          ¿Ya tienes una cuenta?{" "}
          <a className="text-black" href="/login">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
