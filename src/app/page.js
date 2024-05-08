import dynamic from "next/dynamic";

export const metadata = {
  title: "California Pub",
  description:
    "Notre engagement envers l'excellence transforme chaque projet en une expérience inoubliable. Commencez votre voyage vers l'excellence avec une consultation personnalisée dès aujourd'hui.",
  icon: "/icon.ico",
  ogImage: "../../public/assets/images/og-logo.jpg",
  ogUrl: "https://californiapublicite.ma",
  keywords:
    "publicité, CNC ROUTER, california pub cnc, marketing, communication, stratégie de marque, consultation personnalisée, excellence, voyage, consultation, marketing digital, publicité en ligne, stratégie de communication, agence de publicité, services de marketing, publicité et marketing, consultation marketing",
};





const Header = dynamic(() => import("/modules/home_page/Header/index.jsx"), {
    loading: () => <p></p>,
  }),
  Map = dynamic(() => import("/modules/home_page/Map/index.jsx"), {
    loading: () => <p></p>,
  }),
  RawMaterials = dynamic(
    () => import("/modules/home_page/Raw_Materials/index.jsx"),
    {
      loading: () => <p></p>,
    }
  ),
  WhatsAppIcon = dynamic(
    () => import("/modules/home_page/Whats_App_Icon/index.jsx"),
    {
      loading: () => <p></p>,
    }
  ),
  ContactForm = dynamic(() => import("/modules/home_page/Form/index.jsx"), {
    loading: () => <p></p>,
  }),
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
  Services = dynamic(() => import("/modules/home_page/Services/index.jsx"), {
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
        <Services />
        <Divider />
        <RawMaterials />
        <Divider />
        <ContactForm />
        <Divider />
        <Map />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}
