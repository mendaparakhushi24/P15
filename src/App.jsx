import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import LoginResult from "./Components/LoginResult";

export default function App() {
  const [credentials, setCredentials] = useState(null);

  return (
    <main className="min-h-screen bg-[#F5F3FF] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Navigation header */}
        <header className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center
            rounded-2xl bg-violet-600 text-2xl text-white shadow-lg
            shadow-violet-200">
            🔐
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-slate-900">
              SecureLogin
            </h1>
            <p className="text-xs text-slate-500">
              React Uncontrolled Components
            </p>
          </div>
        </header>

        {/* Hero section */}
        <section className="relative mb-8 overflow-hidden rounded-3xl
          bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700
          px-6 py-8 text-white sm:px-10 sm:py-10">
          <div className="relative z-10 max-w-xl">
            <span className="rounded-full border border-white/20
              bg-white/10 px-3 py-1.5 text-xs font-semibold">
              REACT PRACTICAL
            </span>

            <h2 className="mt-5 text-3xl font-extrabold
              sm:text-4xl">
              Welcome Back!
            </h2>

            <p className="mt-3 text-sm leading-7 text-indigo-100 sm:text-base">
              Enter your login details and explore how uncontrolled
              components retrieve form values using React refs.
            </p>
          </div>

          <div className="absolute -right-10 -top-12 h-48 w-48
            rounded-full border-[25px] border-white/10" />

          <div className="absolute -bottom-24 right-24 h-48 w-48
            rounded-full bg-white/5" />
        </section>

        {/* Main content */}
        <div className="grid items-start gap-7 lg:grid-cols-2">
          <section className="rounded-3xl border border-white
            bg-white p-6 shadow-xl shadow-violet-100/70 sm:p-8">
            <div className="mb-7">
              <div className="mb-4 flex h-14 w-14 items-center
                justify-center rounded-2xl bg-violet-100 text-3xl">
                👋
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the details below to submit the login form.
              </p>
            </div>

            <LoginForm onLogin={setCredentials} />
          </section>

          <section>
            <div className="mb-4">
              <h2 className="text-xl font-extrabold text-slate-900">
                Submission Details
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your submitted values will appear here.
              </p>
            </div>

            <LoginResult credentials={credentials} />
          </section>
        </div>

        {/* Learning section */}
        <section className="mt-8 rounded-2xl border border-violet-100
          bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">
            What this practical demonstrates
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-violet-50 p-4">
              <p className="font-bold text-violet-800">useRef()</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Accesses input elements directly.
              </p>
            </div>

            <div className="rounded-xl bg-indigo-50 p-4">
              <p className="font-bold text-indigo-800">onSubmit</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Retrieves values when the form is submitted.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="font-bold text-emerald-800">Tailwind CSS</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Creates a responsive, attractive interface.
              </p>
            </div>
          </div>
        </section>

        <footer className="py-7 text-center text-sm text-slate-500">
          Built with React, useRef and Tailwind CSS
        </footer>
      </div>
    </main>
  );
}