export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container d-flex vh-100">{children}</div>;
}
