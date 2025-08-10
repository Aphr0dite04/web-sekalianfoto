import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://web-sekalianfoto.vercel.app";
  const logo = new URL("/icon.png", base).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg,#0a0a0a,#111827)"
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.12, background:
          "radial-gradient(600px 600px at 20% 30%,#8b5cf6,transparent), radial-gradient(700px 700px at 80% 70%,#f59e0b,transparent)" }} />
        <div style={{ display: "flex", gap: 32, alignItems: "center", padding: 48, borderRadius: 24,
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)"}}>
          <img src={logo} width={160} height={160} style={{ borderRadius: 28 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, color: "white", fontWeight: 800 }}>Sekalian Foto</div>
            <div style={{ fontSize: 32, color: "#d1d5db" }}>Rekam Jejak Kebahagiaan</div>
            <div style={{ marginTop: 8, fontSize: 24, color: "#a3a3a3" }}>Photobooth di kafe favoritmu</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
