const gallery = () => (
    <div className="w-5/6 mx-auto my-20">
        <h2 className="my-4 text-4xl">
            Gallery
        </h2>
        <div className="grid grid-cols-3 gap-4">
            <img src="https://picsum.photos/200/300" />
                        <img src="https://picsum.photos/200/300" />
            <img src="https://picsum.photos/200/300" />
            <img src="https://picsum.photos/200/300" />

        </div>
    </div>
);

export default gallery;