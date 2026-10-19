import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const b = await req.json();

  if (b.company) return NextResponse.json({ ok: true }); // honeypot

  const missing: string[] = [];
  if (!b.yourname?.trim()) missing.push("yourname");
  if (!/^\S+@\S+\.\S+$/.test(b.email ?? "")) missing.push("email");
  if (!b.message?.trim()) missing.push("message");

  if (missing.length) {
    console.log("Contact form rejected. Received:", b); // shows in the terminal running `npm run dev`
    return NextResponse.json({ error: "Invalid data", missing }, { status: 400 });
  }
  const fd = new FormData();
  fd.append("your-name", b.yourname);
  fd.append("your-email", b.email);
  fd.append("service", b.service ?? "");
  fd.append("budget", b.budget ?? "");
  fd.append("your-message", b.message);
  fd.append("_wpcf7_unit_tag", "wpcf7-f207-p1-o1"); // replace 123 with your Contact Form 7 form ID

  const res = await fetch(process.env.WP_CF7_URL!, { method: "POST", body: fd });
  const json = await res.json();

  if (json.status !== "mail_sent") {
    return NextResponse.json({ error: json.message ?? "Failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}