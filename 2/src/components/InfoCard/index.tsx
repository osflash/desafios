const InfoCard: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col items-start gap-3 text-[#271A45]">
        <p className="font-lato font-light text-[10px] leading-none">
          CÓDIGO: 42404
        </p>
        <h1 className="font-crimsonPro font-semibold text-[32px] leading-none">
          Sofá Margot II - Rosé
        </h1>
        <h2 className="font-lato font-normal text-base leading-none">
          R$ 4.000
        </h2>
        <button className="flex flex-row justify-center items-center px-4 py-2 gap-2 border-[0.5px] border-[#271A45] rounded-full mt-5 hover:border-[#271A45]/20">
          <h1 className="font-lato font-normal text-xs">ADICIONAR À CESTA</h1>
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
