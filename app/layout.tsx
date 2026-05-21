import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Declutterer – Auto-archive old Slack threads",
  description: "Automatically archives inactive Slack threads older than X days to reduce channel noise and improve team focus."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d6437cfd-49eb-46c1-9ad1-9e83cd668e76"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
