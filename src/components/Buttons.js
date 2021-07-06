import '../scss/Buttons.scss';

const buttons = [
    {name: 'Red', colour: 'red-800'},
    {name: 'Green', colour: 'green-800'},
    {name: 'Blue', colour: 'blue-800'},
    {name: 'Purple', colour: 'purple-800'},
]

const Buttons = ({setColourValue}) => {
    const changeColour = (e) => {
        setColourValue(e.target.dataset.colour);
    }

    return(
        <div className="flex flex-wrap justify-center py-3">
            {buttons.map((button) => (
                <button className={`btn bg-${button.colour}`} data-colour={`text-${button.colour}`} onClick={changeColour}>
                    {button.name}
                </button>
            ))}
        </div>
    );
}

export default Buttons;