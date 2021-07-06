const Body = ({textColour}) => {
    return(
        <article className="w-full text-center">
            <p className={`font-bold text-2xl ${textColour}`}>Change my colour!</p>
        </article>
    );
}

export default Body;