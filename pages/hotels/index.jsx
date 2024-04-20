import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";

const Hotels = () => {
  return (
    <>
      <section className="bg-gray-900">
        <Header1/>
  
        <div className="flex m-5 ">
          <Hotel/>
        </div>
      </section>
    </>
  );
};

export default Hotels;
