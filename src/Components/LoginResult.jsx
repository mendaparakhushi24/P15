import { useState } from "react";

export default function LoginResult({ credentials }) {
  const [showPassword, setShowPassword] = useState(false);

  if (!credentials) {
    return (
      <div className="flex min-h-64 flex-col items-center
        justify-center rounded-2xl border-2 border-dashed
        border-violet-200 bg-white/70 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center
          rounded-full bg-violet-100 text-3xl">
          📋
        </div>

        <h3 className="mt-4 font-bold text-slate-800">
          No submission yet
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
          Enter your username and password, then click Sign In
          to view the submitted information.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border
      border-emerald-100 bg-white shadow-xl shadow-emerald-100/50">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600
        p-5 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center
            justify-center rounded-xl bg-white/20 text-2xl">
            ✓
          </div>

          <div>
            <h3 className="text-lg font-bold">Form Submitted!</h3>
            <p className="mt-1 text-sm text-emerald-50">
              Your input values were retrieved successfully.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase
            tracking-wider text-slate-400">
            Username
          </p>
          <p className="mt-2 break-all font-semibold text-slate-800">
            {credentials.username}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase
              tracking-wider text-slate-400">
              Submitted Password
            </p>

            <button
              type="button"
              onClick={() => setShowPassword((previous) => !previous)}
              className="text-xs font-semibold text-violet-700"
            >
              {showPassword ? "Hide" : "Reveal"}
            </button>
          </div>

          <p className="mt-2 break-all font-mono text-sm text-slate-800">
            {showPassword
              ? credentials.password
              : "•".repeat(credentials.password.length)}
          </p>
        </div>

        <div className="rounded-xl border border-amber-200
          bg-amber-50 p-3 text-xs leading-5 text-amber-800">
          Demo only: real login applications must not display,
          log, or retain plaintext passwords unnecessarily.
        </div>
      </div>
    </div>
  );
}