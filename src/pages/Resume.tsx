import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Resume />
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
