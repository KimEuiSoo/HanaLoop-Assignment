interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="ml-64">

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppShell;