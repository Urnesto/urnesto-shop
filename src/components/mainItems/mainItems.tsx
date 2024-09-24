import { Card } from "../Card/Card";
import { mainItemsConst } from "../../constants";

export const MainItems = () => {
    return (
        <main>
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:grid-rows-7 lg:mx-72">
                {mainItemsConst.map((item, index) => (
                    <div
                        key={index}
                        className={`${index === 6 || index === 7 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                            } lg:col-span-1 lg:row-span-2 ${index === 4 || index === 7 ? "lg:col-span-2 lg:row-span-3" : ""
                            }`}
                    >
                        <Card
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            isNew={item.isNew}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
};
