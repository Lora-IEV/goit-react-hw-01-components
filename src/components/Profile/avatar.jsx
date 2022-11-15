import user from "../user.json";

function Avatar({ url, title, clas }) {
    return <img className="avatar"
      src={user.avatar}
      alt={user.title}
        
    />
}

export default Avatar