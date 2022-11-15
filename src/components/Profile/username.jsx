import user from "../user.json";

function Username() {
    return <p className="username">{user.username}</p>
        
}

export default Username;