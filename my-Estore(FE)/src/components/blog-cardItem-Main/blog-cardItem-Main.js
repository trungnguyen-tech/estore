import "./blog-cardItem-Main.css";

const BlogCardItemMain = ({ user }) => {
  const customStyle = {
    width: "250px",
    height: "400px",
    padding: "10px",
    margin: "10px 10px",
    overflow: "hidden",
  };
  return (
    <div className="mainItem card col" style={customStyle}>
      <img
        className="card-img-top imgItemCard"
        src={user.imgSrc}
        alt="Illustration"
      />

      <div className="card-body">
        <p className="card-title-sub">{user.date}</p>
        <h5 className="card-title title">{user.title}</h5>
        <p className="card-text">{user.content}</p>
      </div>
    </div>
  );
};

export default BlogCardItemMain;
