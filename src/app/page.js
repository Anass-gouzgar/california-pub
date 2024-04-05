import dynamic from "next/dynamic";

const Header = dynamic(() => import("/modules/home_page/Header/index.jsx"), {
    loading: () => <p></p>,
  }),
  Hero = dynamic(() => import("/modules/home_page/Hero/Hero.jsx"), {
    loading: () => <p></p>,
  }),
  Footer = dynamic(() => import("/modules/home_page/Footer/index.jsx"), {
    loading: () => <p></p>,
  });

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="h-auto sm:max-w-[1600px] w-full">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
