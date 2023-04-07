import "./globals.css";

export const metadata = {
  title: "THK - portfolio website",
  description:
    "Unlock the full potential of your web projects with Tom Kobierecki, a skilled fullstack developer. Browse through a captivating portfolio showcasing Tom Kobierecki proficiency in frontend and backend development. From design to deployment, trust Tom Kobierecki to deliver robust and responsive web solutions. Connect with Tom Kobierecki and take your online presence to the next level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark">{children}</body>
    </html>
  );
}
