import Header from "../Header/Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col justify-between w-full container mx-auto py-5">
      <Header />

      {children}
    </div>
  );
}

export default Layout;
