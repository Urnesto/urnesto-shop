import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { FC } from "react";
import { cn } from "../../utils/utils";
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVarriants> {
}
const buttonVarriants = cva(
    'rounded-3xl',
    {
        variants: {
            variant: {
                default: 'text-black bg-transparent border-2 border-black hover:bg-black hover:text-white',
                slider: 'bg-white text-black',
                burger: 'border-2 border-black'
            },
            size: {
                default: 'py-0.5 px-3.5 text-p6 lg:py-1 lg:px-7 lg:text-p5 font-semibold ',
                slider: 'py-1 px-3.5 text-p6 lg:py-1.5 lg:px-7 lg:text-p4 font-bold ',
                burger: 'p-1.5'
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)
export const Button: FC<IButton> = ({ className, size, variant, ...props }) => {

    return (
        <button className={cn(buttonVarriants({ className, size, variant }))} type='button' {...props} />
    )
}
