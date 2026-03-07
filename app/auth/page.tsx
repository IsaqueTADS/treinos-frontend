"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { authClient } from "@/app/_lib/auth-client";
import { LoginForm } from "./_componets/login-form";

export default function AuthPage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return null;
  if (session) redirect("/");

  return (
    <div className="flex min-h-svh flex-col bg-auth-bg text-auth-bg-foreground">
      <div className="relative flex h-[296px] shrink-0 flex-col items-center justify-between overflow-hidden rounded-b-[20px] px-5 pb-10 pt-5">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/login-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(243deg, rgba(0,0,0,0) 34%, rgb(0,0,0) 100%)",
            }}
          />
        </div>

        <p
          className="relative text-[22px] uppercase leading-[1.15] text-background"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Fit.ai
        </p>

        <div className="relative flex flex-col items-center gap-1.5">
          <h1 className="font-heading text-2xl font-semibold leading-[1.05] text-background">
            Bem-vindo
          </h1>
          <p className="font-heading text-sm leading-[1.15] text-background/70">
            Acesse sua conta para continuar
          </p>
        </div>
      </div>

      <div className="flex-1 px-5 py-5">
        <LoginForm />
      </div>

      <p className="pb-5 text-center font-heading text-xs leading-[1.4] text-auth-bg-foreground/70">
        ©2026 Copyright FIT.AI. Todos os direitos reservados
      </p>
    </div>
  );
}
