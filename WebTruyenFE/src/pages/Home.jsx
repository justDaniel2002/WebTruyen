import { CardContain } from "../components/cardContain";
import { listCard } from "../mock/data";

export const Home = () => {
  return (
    <main>
      {/*Home code*/}
      <div className="max-w-screen-xl m-auto  mt-6">
        <div>
          <h2 className="text-xl font-medium">Truyện hot</h2>
        </div>
        <div className="px-4 w-full mt-4 flex  flex-wrap gap-y-3">
          {listCard.map((element) => {
            return (
              <div key={element.id} className="w-[12.5%] h-[200px]">
                <div className="w-[90%] h-full">
                  <CardContain
                    image={element.image}
                    name={element.name}
                    id={element.id}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
