const Products_Contact = () => {
    return (
        <div className="w-2/3 mx-auto my-20">
            <div className="flex flex-col justify-between md:flex-row h-min">
                <div className="text-3xl text-black">
                    <div>Want to customise any products?</div>
                    <div>Drop us your requirements.</div>
                </div>
                <a href="/ContactUs">
                    <div className="h-16 px-6 py-4 my-auto text-2xl text-white bg-red-500 rounded-lg">
                        CONTACT US
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Products_Contact;
