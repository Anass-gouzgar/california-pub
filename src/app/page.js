import dynamic from "next/dynamic";


const Header = dynamic(() => import("/modules/home_page/Header/index.jsx"), {
    loading: () => <p></p>,
  }),
  WhatsAppIcon = dynamic(
    () => import("/modules/home_page/Whats_App_Icon/index.jsx"),
    {
      loading: () => <p></p>,
    }
  ),
  Partenaires = dynamic(
    () => import("/modules/home_page/Partenaires/index.jsx"),
    {
      loading: () => <p></p>,
    }
  ),
  Hero = dynamic(() => import("/modules/home_page/Hero/Hero.jsx"), {
    loading: () => <p></p>,
  }),
  Footer = dynamic(() => import("/modules/home_page/Footer/index.jsx"), {
    loading: () => <p></p>,
  }),
  Divider = dynamic(() => import("/modules/home_page/Divider/index.jsx"), {
    loading: () => <p></p>,
  }),
  Faq = dynamic(() => import("/modules/home_page/Faq/index.jsx"), {
    loading: () => <p></p>,
  });

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="h-auto sm:mlax-w-[1600px] w-full">
        <Header />
        <WhatsAppIcon />
        <Hero />
        <Divider />
        <Partenaires />
        <Divider />
        <Faq />
        <Divider />

        <Footer />
      </div>
    </div>
  );
}
