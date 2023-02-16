import Button from '~/components/Button'
import HeadTable from '~/components/HeadTable'

const Home: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className="mx-auto">
        {/* <div className="flex flex-col items-start gap-2 w-[808px]">
          <h1 className="font-bold text-[32px]  leading-8">Tipos de botão</h1>
          <p className="font-normal text-lg leading-6 pb-8 opacity-[0.67]">
            Dentro de um layout, botões servem para destacar ações importantes a
            serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.
          </p>
        </div> */}

        {/* <div className="w-[958px] h-[576px] mt-9 bg-[#1C162C] rounded-lg flex flex-col items-end">
          <div className="flex flex-row items-center py-4 gap-8">
            <HeadTable title="Botão Primário" />
            <HeadTable title="Botão Primário" />
            <HeadTable title="Botão Primário" />
            <HeadTable title="Cursor" little />
          </div>
          <div className="flex flex-row items-start">
            <div className="flex flex-col items-center gap-8">
              <div>Default</div>
            </div>
            <div>Buttons</div>
          </div>
        </div> */}
      </div>

      <div className="w-[406px] h-screen bg-[#130F1E]">
        <div className="mx-11 mt-[107px] flex flex-col gap-2">
          <h1 className="font-bold text-[32px] leading-8">Teste os botões</h1>
          <p className="font-normal text-[20px] leading-[22px] opacity-[0.67]">
            Interaja com os botões e observe a mudança de aparência e de
            cursores
          </p>
        </div>

        <div className="flex flex-col mt-16 mx-11">
          <Button>INTERAJA COMIGO</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
