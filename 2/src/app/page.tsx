import Card from "~/components/Card";
import InfoCard from "~/components/InfoCard";

const Home: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-[13px] relative w-[875px] h-screen m-auto">
      <Card />

      <InfoCard />
    </div>
  );
};

export default Home;
