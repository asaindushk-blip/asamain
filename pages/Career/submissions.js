import { useState, useEffect } from "react";
import Document from "../../components/icons/document";
import axios from "../../components/axios";
import { useRouter } from "next/router";

const submissions = () => {
    const router = useRouter();
    const [submissions, setSubmission] = useState([]);
    const Deleted = [];

    useEffect(() => {
        const auth = window.sessionStorage.getItem("ASA-INDUS-SIGN");
        if (!auth) router.push("/");
        axios
            .get("/", {
                headers: {
                    "X-Auth-Header": auth,
                },
            })
            .then((res) => {
                setSubmission(res.data);
            });
        return () => {
            window.sessionStorage.removeItem("ASA-INDUS-APIKEY");
            window.sessionStorage.removeItem("ASA-INDUS-SIGN");
            axios
                .post(
                    "/delete",
                    { ids: Deleted },
                    {
                        headers: {
                            "X-Auth-Header": auth,
                        },
                    }
                )
                .then((res) => {
                    console.log("Yaaayyyy deleted")
                });
        };
    }, []);
    function base64ToArrayBuffer(base64) {
        var binaryString = window.atob(base64);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    }

    function filefy(bytes) {
        return new Blob([base64ToArrayBuffer(bytes)], {
            type: "application/pdf",
        });
    }
    const Link = ({ submission }) => {
        if (!window) return null;
        const blob = filefy(submission.cv);
        const link = window.URL.createObjectURL(blob);
        return (
            <a
                href={link}
                download={`${submission.firstName}_${submission.lastName}`}
                className="px-6 py-2 my-2 text-white transition-colors duration-200 bg-blue-500 border-2 border-blue-500 rounded-md cursor-pointer hover:bg-gray-200 hover:text-blue-500"
            >
                Open
            </a>
        );
    };
    const Delete = (submission) => {
        const id = submission._id;
        const authentication =
            window.sessionStorage.getItem("ASA-INDUS-APIKEY");

        console.log(submission);

        setSubmission(submissions.filter((submission) => submission._id != id));
        Deleted.push(submission._id);
    };

    return (
        <div className="grid w-screen h-screen place-items-center">
            <div className="md:hidden text-7xl">
                Please view in desktop mode
            </div>
            <div className="md:flex flex-col w-full gap-8 mx-auto place-self-center hidden">
                {submissions.length == 0 && (
                    <div className="mx-auto my-auto">Loading...</div>
                )}
                {submissions.length != 0 &&
                    submissions.map((submission) => {
                        return (
                            <div className="flex flex-row justify-between w-5/6 px-2 mx-auto bg-gray-200 rounded-lg sm:w-3/5">
                                <div className="flex flex-row h-min">
                                    <Document className="mx-6 my-auto" />
                                    <p className="my-auto font-medium text-blue-500">{`${submission.firstName} ${submission.lastName}`}</p>
                                </div>
                                <p className="my-auto text-gray-500">
                                    {submission.applyingFor}
                                </p>
                                <p
                                    className="text-red-400 my-auto cursor-pointer"
                                    onClick={() => Delete(submission)}
                                >
                                    Delete
                                </p>
                                <Link submission={submission} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

/* 
 1. firstName
 2. lastName
 3. email
 4. applyingFor */

export default submissions;
