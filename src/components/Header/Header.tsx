type HeaderPropsType = {
    title: string
}

export const Header = ({title}: HeaderPropsType) => {
    return (
        <header>
            {title}
        </header>
    );
};