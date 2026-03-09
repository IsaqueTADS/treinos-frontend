import Image from "next/image";
import { redirect } from "next/navigation";
import { authClient } from "@/app/_lib/auth-client";

import { headers } from "next/headers";
import { LoginForm } from "../_componets/login-form";

export default async function AuthPage() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (session.data?.user) redirect("/");

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-[#080808]">
      <div className="relative h-[55svh] w-full shrink-0">
        <Image
          src="/login-bg.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0) 40%, rgba(8,8,8,0.85) 80%, #080808 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "150px",
          }}
        />
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 pt-12">
          <p
            className="text-[26px] font-black uppercase tracking-[0.25em] text-white"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Fit<span className="text-lime-accent">.ai</span>
          </p>
          <span
            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm"
          >
            Beta
          </span>
        </div>
      </div>
      <div className="relative z-10 -mt-8 flex flex-1 flex-col px-6">
        <div className="mb-6 flex items-center gap-2.5">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Acesse sua conta
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="mb-8 flex flex-col gap-1.5">
          <h1
            className="text-[36px] font-black uppercase leading-[0.95] tracking-tight text-white"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Bem-
            <br />
            <span className="text-lime-accent">vindo</span>
            <span className="text-white"> de</span>
            <br />
            volta.
          </h1>
          <p className="mt-2 text-[13px] leading-normal text-white/50">
            Seu treino te espera. Entre para continuar.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <LoginForm />
        </div>
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[10px] text-white/25">FIT.AI © 2026</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <p className="mt-4 pb-8 text-center text-[11px] leading-normal text-white/25">
          Todos os direitos reservados
        </p>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-20 blur-[80px]"
        style={{ background: "var(--lime-accent)" }}
      />
    </div>
  );
}