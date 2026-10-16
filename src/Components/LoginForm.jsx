import { useRef, useState } from "react";

export default function LoginForm({ onLogin }) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    onLogin({ username, password });

    // Clear the input fields after submission
    event.currentTarget.reset();
    setShowPassword(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Username
        </label>

        <div className="flex items-center gap-3 rounded-xl border
          border-slate-200 bg-slate-50 px-4 transition
          focus-within:border-violet-500 focus-within:bg-white
          focus-within:ring-4 focus-within:ring-violet-100">
          <span className="text-lg">👤</span>

          <input
            ref={usernameRef}
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            autoComplete="username"
            required
            className="w-full bg-transparent py-3.5 text-sm
              text-slate-800 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Password
        </label>

        <div className="flex items-center gap-3 rounded-xl border
          border-slate-200 bg-slate-50 px-4 transition
          focus-within:border-violet-500 focus-within:bg-white
          focus-within:ring-4 focus-within:ring-violet-100">
          <span className="text-lg">🔒</span>

          <input
            ref={passwordRef}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
            className="w-full bg-transparent py-3.5 text-sm
              text-slate-800 outline-none placeholder:text-slate-400"
          />

          <button
            type="button"
            onClick={() => setShowPassword((previous) => !previous)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="text-xs font-semibold text-violet-700
              hover:text-violet-900"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r
          from-violet-600 to-indigo-600 px-5 py-3.5
          font-bold text-white shadow-lg shadow-violet-200
          transition hover:-translate-y-0.5 hover:shadow-xl
          focus:outline-none focus:ring-4 focus:ring-violet-200"
      >
        Sign In <span className="ml-1">→</span>
      </button>

      <p className="text-center text-xs leading-5 text-slate-400">
        Educational demonstration only. This form does not authenticate
        users against a server.
      </p>
    </form>
  );
}