import axios from "../../components/axios"

const Page = (props) => {
        <iframe src={props.linkedin} className="absolute linkedin w-screen z-10 h-screen" allowfullscreen="" title="Embedded post" width="504" height="462" frameborder="0"></iframe>
}

export default Page;

export async function getServerSideProps(context) {
    const id = context.params.id;

    // obtain the iframe in this
    const iframeLink = await axios.get(`/post/${id}`)
    return{
        props: {
            linkedin: iframeLink
        }
    }
}

