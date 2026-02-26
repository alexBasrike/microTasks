type FooterPropsType = {
    title: string
}

export const Footer = ({title}: FooterPropsType) => {
    return (
        <footer>
            {title}
        </footer>
    );
};