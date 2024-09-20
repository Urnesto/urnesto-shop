interface ICard {
    Children: React.ReactNode;
    title: string;
    price: number;
    photo: string;
    isNew: boolean;
}

export const Card = ({ Children }: ICard) => {
    return (
        <div className="p-6 hover:border-black">
            {Children}
        </div>
    )
}
