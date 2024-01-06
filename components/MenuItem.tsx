
const MenuItem = (props: any) => {
    return (
        <>
            <a href={props.link ? props.link : '#'}
                className={`flex my-3 w-full ${props.isActive && 'border-r-2 border-green-500'}`}>
                <span className="text-green-500">
                    {props.icon}
                </span>
                <p className="mx-3">{props.text}</p>
            </a>
        </>
    );
};
export default MenuItem;