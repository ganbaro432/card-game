
function Card({item, id, handleClick, banClass}) {
    const itemClass = item.stat ? "active " + item.stat : "";
    return (
        <div className={"card " + itemClass + " " + banClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    );
};

export default Card;