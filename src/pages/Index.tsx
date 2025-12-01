import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResourceCards from "@/components/ResourceCards";
import MapSection from "@/components/MapSection";
import ChatSection from "@/components/ChatSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ResourceCards />
        <MapSection />
        <ChatSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;