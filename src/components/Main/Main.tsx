import css from "./Main.module.css";

type MainPropsType = {
    title: string
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const Main = ({title}: MainPropsType) => {

    const topCars: TopCarsType[] = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' },
    ]

    return (
        <main>
            <h1>{title}</h1>
            <ul className={css.list}>
                {topCars.map(car => <li>
                    Manufacturer: {car.manufacturer} and Model: {car.model}
                </li>)}
            </ul>
        </main>
    );
};