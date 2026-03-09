import Image from "next/image";
import { redirect } from "next/navigation";
import { authClient } from "@/app/_lib/auth-client";
import { headers } from "next/headers";
import { SignupForm } from "../_componets/signup-form";

export default async function AuthPage() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (session.data?.user) redirect("/");

  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-[#080808]">
      <div className="relative h-[50svh] w-full shrink-0">
        <Image
          src="/login-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0) 35%, rgba(8,8,8,0.8) 75%, #080808 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background: "linear-gradient(135deg, var(--lime-accent) 0%, transparent 60%)",
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
          <span className="flex items-center gap-1.5 rounded-full border border-lime-accent/30 bg-lime-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-lime-accent/80">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-accent animate-pulse" />
            Novo
          </span>
        </div>
      </div>
      <div className="relative z-10 -mt-6 flex flex-1 flex-col px-6">
        <div className="mb-6 flex items-center gap-2.5">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-lime-accent/20 to-transparent" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-lime-accent/50">
            Crie sua conta
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-lime-accent/20 to-transparent" />
        </div>
        <div className="mb-7 flex flex-col gap-1.5">
          <h1
            className="text-[36px] font-black uppercase leading-[0.95] tracking-tight text-white"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Sua
            <br />
            <span className="text-lime-accent">jornada</span>
            <br />
            começa.
          </h1>
          <p className="mt-2 text-[13px] leading-normal text-white/50">
            Crie sua conta e transforme seus treinos com IA.
          </p>
          <div className="mt-3 flex items-center gap-4">
            {[
              "Treinos personalizados",
              "IA adaptativa",
              "Grátis",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1">
                <span className="text-lime-accent text-[10px]">✦</span>
                <span className="text-[10px] text-white/35 whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SignupForm />
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
        className="pointer-events-none absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full opacity-25 blur-[90px]"
        style={{ background: "var(--lime-accent)" }}
      />
      <div
        className="pointer-events-none absolute -left-16 top-32 h-[200px] w-[200px] rounded-full opacity-10 blur-[70px]"
        style={{ background: "var(--lime-accent)" }}
      />
    </div>
  );
}