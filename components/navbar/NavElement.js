const NavElement = ({ label, href, current }) => {
    return label === current ? (
        <a
            href={href}
            prefetch={false}
            passHref
            className="py-12 my-auto text-blue-500 underline lg:py-0"
        >
            <div className="px-8 mx-4 font-medium transition-all duration-200 rounded-full lg:text-lg text-8xl lg:px-2">
                {label}
            </div>
        </a>
    ) : (
        <a
            href={href}
            prefetch={false}
            passHref
            className="py-12 my-auto font-medium text-black hover:text-blue-500 hover:underline lg:text-lg text-8xl lg:py-0"
        >
            <div className="px-8 mx-4 transition-all duration-200 rounded-full lg:px-2">
                {label}
            </div>
        </a>
    );
};

export default NavElement;
