import { useState } from "react";
import axios from "../../components/axios";

const edit = () => {
    const [posts, setPosts] = useState({
        one: "",
        two: "",
    });

    const onChange = (e) => {
        setPosts({
            ...posts,
            [e.target.name]: e.target.value,
        });
    };
    const submit = () => {
        axios.post('/post/0', {
            link: posts.one
        });
        axios.post('/post/1', {
            link: posts.two
        })
    }
    return (
        <div className="grid w-screen h-screen place-items-center">
            <div className="flex flex-col w-5/6 sm:w-2/3 md:w-1/2 h-1/2 justify-evenly">
                <h1 className="text-3xl font-medium text-center">
                    Enter LinkedIn Embed Links:
                </h1>
                <input
                    type="text"
                    placeholder="LinkedIn Post 1"
                    class="rounded-lg p-4 border-2 transition-all duration-200 border-blue-400"
                    value={posts.one}
                    onChange={onChange}
                    name="one"
                />
                <input
                    type="text"
                    placeholder="LinkedIn Post 2"
                    class="rounded-lg p-4 border-2 transition-all duration-200 border-blue-400"
                    value={posts.two}
                    onChange={onChange}
                    name="two"
                />
                <div className="items-center w-full">
                    <div className="px-6 py-2 mx-auto font-medium text-white transition-all duration-200 bg-blue-400 border-2 border-blue-400 rounded-lg cursor-pointer w-min h-min hover:bg-white hover:text-blue-400"
                    onClick={submit}>
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default edit;
