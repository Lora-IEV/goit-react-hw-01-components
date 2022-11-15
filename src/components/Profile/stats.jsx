import user from "../user.json";

function Stats() {
   return <ul className="stats">
    <li className="statsObject">
           <span className="label">Followers</span>
           <br />
        <span className="quantity">{user.stats.followers}</span>
    </li>
    <li className="statsObject">
           <span className="label">Views</span>
           <br />
        <span className="quantity">{user.stats.views}</span>
    </li>
    <li className="statsObject">
           <span className="label">Likes</span>
           <br />
        <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
}



export default Stats