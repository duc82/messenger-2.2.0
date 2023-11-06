export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="row vh-100 align-items-center justify-content-center">
        {children}
      </div>
    </div>
  );
}
