const UserCard = (props) => {
    return (
        <div className="flex flex-col gap-x-3">
            <img src={props.avatar} alt={props.firstName} />
            <span>{props.firstName} {props.lastName}</span>
            <div>{props.email}</div>
        </div>
    );
}

export default UserCard;