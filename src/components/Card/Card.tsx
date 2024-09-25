import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { FC } from "react";
import { cn } from "../../utils/utils";

interface ICard extends VariantProps<typeof cardVarriants>, HTMLAttributes<HTMLDivElement> {
    title: string,
    price: number,
    image: string,
    isNew: boolean,
}

const cardVarriants = cva(
    'rounded-3xl flex flex-col justify-between',
    {
        variants: {
            variant: {
                default: 'w-full h-full',
            },
            size: {
                default: 'p-2',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export const Card: FC<ICard> = ({ className, size, variant, title, price, image, isNew, ...props }) => {
    return (
        <div className={cn(cardVarriants({ className, size, variant, ...props }))}>
            <div className="w-full aspect-[1/1] flex-1 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div className="mt-2">
                <div className="flex flex-row justify-between">
                    <p className="font-bold">{title}</p>
                    <p className="text-gray-500">{price} $</p>
                </div>
                <div className="h-4 mt-2">
                    {isNew && <p className="uppercase text-xs text-red-500">!NEW</p>}
                </div>
            </div>
        </div>
    );
};
