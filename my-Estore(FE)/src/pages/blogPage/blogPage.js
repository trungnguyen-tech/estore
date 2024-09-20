import BlogCardItemMain from "../../components/blog-cardItem-Main/blog-cardItem-Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "./blogPage.css";
import VideoModal from "../../components/videoModal/videoModal";
import RecentPostsDetail from "../../components/recentPostsDetail/recentPostsDetail";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SpinnerDetail from "../../components/spinner/spinnderDetail";

const BlogDetail = () => {
  const icon = {
    name : 'home',
  };
  const [loading, setLoading] = useState(true);

  const dataBlogs = [
    {
      title: "Định hình lại doanh nghiệp hiện đại",
      imgSrc:
        "https://th.bing.com/th/id/OIG4.bO_i_O3ixW8XASvRIuJm?w=1024&h=1024&rs=1&pid=ImgDetMain",
      date: "zxcv",
      content:
        "Dưới thời đại hiện tại, công nghệ số đang cách mạng hóa cách doanh nghiệp hoạt động. Khái niệm về công nghệ số bao gồm một loạt các công cụ và thực hành tiên tiến, bao gồm Big Data, Internet of Things (IoT) và cloud computing. ",
    },
    {
      title: "Lợi ích của máy giặt trong cuộc sống hiện đại",
      imgSrc:
        "https://th.bing.com/th/id/OIG2.1kBeNl9wDwXHiTLVJPN2?w=1024&h=1024&rs=1&pid=ImgDetMain",
      date: "zxcv",
      content:
        "Máy giặt đã trở thành một thiết bị gia dụng không thể thiếu trong mỗi gia đình hiện đại. Nó mang lại nhiều lợi ích to lớn, giúp cuộc sống của chúng ta trở nên dễ dàng và tiện lợi hơn.",
    },
    {
      title: "Bí quyết bảo dưỡng máy lạnh hợp lý",
      imgSrc: "https://th.bing.com/th/id/OIG1.d5PfqQdaQCLh4iC43wEa?pid=ImgGn",
      date: "zxcv",
      content:
        "Máy lạnh là thiết bị gia dụng không thể thiếu trong những ngày hè nóng bức. Tuy nhiên, sau một thời gian sử dụng, máy lạnh dễ bị bám bẩn, ảnh hưởng đến hiệu quả hoạt động và tuổi thọ của máy. Do vậy, việc bảo dưỡng máy lạnh định kỳ là vô cùng cần thiết.",
    },
    {
      title: "Các thiết bị gia dụng hiện đại.",
      imgSrc: "https://th.bing.com/th/id/OIG4.pgbrFs6pCz9j009LlDCs?pid=ImgGn",
      date: "zxcv",
      content:
        "Căn bếp là trái tim của ngôi nhà, nơi chúng ta nấu nướng, chia sẻ bữa ăn và tận hưởng thời gian bên gia đình. Một căn bếp hiện đại không chỉ đẹp mắt mà còn phải có đầy đủ thiết bị gia dụng để giúp chúng ta thực hiện công việc nấu nướng một cách thuận tiện và hiệu quả.",
    },
    {
      title: "Các thiết bị gia dụng hiện đại.",
      imgSrc: "https://th.bing.com/th/id/OIG4.pgbrFs6pCz9j009LlDCs?pid=ImgGn",
      date: "zxcv",
      content:
        "Căn bếp là trái tim của ngôi nhà, nơi chúng ta nấu nướng, chia sẻ bữa ăn và tận hưởng thời gian bên gia đình. Một căn bếp hiện đại không chỉ đẹp mắt mà còn phải có đầy đủ thiết bị gia dụng để giúp chúng ta thực hiện công việc nấu nướng một cách thuận tiện và hiệu quả.",
    },
    {
      title: "Các thiết bị gia dụng hiện đại.",
      imgSrc: "https://th.bing.com/th/id/OIG4.pgbrFs6pCz9j009LlDCs?pid=ImgGn",
      date: "zxcv",
      content:
        "Căn bếp là trái tim của ngôi nhà, nơi chúng ta nấu nướng, chia sẻ bữa ăn và tận hưởng thời gian bên gia đình. Một căn bếp hiện đại không chỉ đẹp mắt mà còn phải có đầy đủ thiết bị gia dụng để giúp chúng ta thực hiện công việc nấu nướng một cách thuận tiện và hiệu quả.",
    },
  ];
  const dataVideos = [
    {
      title: "Có nên đầu tư nồi cơm trên 1 triệu?",
      videoSrc: "https://www.youtube.com/embed/zvPjV3OCWJI?si=UaqhKrDAB9Zk6B68",
      imgSrc:
        "https://i.ytimg.com/vi/zvPjV3OCWJI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvKSAzfcb_-drvu2h1NFdEVGeIog",
    },
    {
      title: "5 lưu ý cần phải thuộc lòng khi dùng ROBOT HÚT BỤI",
      videoSrc: "https://www.youtube.com/embed/VVn0fKyX42o?si=HRJxiziGfFTW4Hk6",
      imgSrc:
        "https://i.ytimg.com/vi/VVn0fKyX42o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBBH78QvdX9-X3v4DfkFfyZMlHw",
    },
    {
      title: "5 lưu ý cần phải thuộc lòng khi dùng ROBOT HÚT BỤI",
      videoSrc: "https://www.youtube.com/embed/VVn0fKyX42o?si=HRJxiziGfFTW4Hk6",
      imgSrc:
        "https://i.ytimg.com/vi/VVn0fKyX42o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBBH78QvdX9-X3v4DfkFfyZMlHw",
    },
    {
      title: "5 lưu ý cần phải thuộc lòng khi dùng ROBOT HÚT BỤI",
      videoSrc: "https://www.youtube.com/embed/VVn0fKyX42o?si=HRJxiziGfFTW4Hk6",
      imgSrc:
        "https://i.ytimg.com/vi/VVn0fKyX42o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBBH78QvdX9-X3v4DfkFfyZMlHw",
    },
    {
      title: "Có nên đầu tư nồi cơm trên 1 triệu?",
      videoSrc: "https://www.youtube.com/embed/zvPjV3OCWJI?si=UaqhKrDAB9Zk6B68",
      imgSrc:
        "https://i.ytimg.com/vi/zvPjV3OCWJI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvKSAzfcb_-drvu2h1NFdEVGeIog",
    },
    {
      title: "Có nên đầu tư nồi cơm trên 1 triệu?",
      videoSrc: "https://www.youtube.com/embed/zvPjV3OCWJI?si=UaqhKrDAB9Zk6B68",
      imgSrc:
        "https://i.ytimg.com/vi/zvPjV3OCWJI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvKSAzfcb_-drvu2h1NFdEVGeIog",
    },
    {
      title: "Có nên đầu tư nồi cơm trên 1 triệu?",
      videoSrc: "https://www.youtube.com/embed/zvPjV3OCWJI?si=UaqhKrDAB9Zk6B68",
      imgSrc:
        "https://i.ytimg.com/vi/zvPjV3OCWJI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvKSAzfcb_-drvu2h1NFdEVGeIog",
    },
  ];
  const dataRecentPosts = [
    {
      title: "Thuỷ tinh borosilicate là gì ? ",
      content:
        "Lướt qua nhiều cửa hàng đồ gia dụng (như Gia Dụng Plus) để mua hủ gia vị - bình đựng dầu ăn nước mắm hoặc bình đựng nước...",
      date: "13/07/2022",
      imgSrc:
        "//bizweb.dktcdn.net/100/353/817/files/banner-blog-thuy-tinh-borosilicate-la-gi.jpg?v=1657688890855",
    },
    {
      title: "Tất tần tật những điều cần biết khi chọn mua Tivi cho gia đình",
      content:
        "Ngày nay, tivi đã một thiết bị quen thuộc và hầu như không thể thiếu trong nhiều gia đình.",
      date: "12/01/2024",
      imgSrc:
        "https://www.homepaylater.vn/static/07efd052b1f508784705f92ff4548a16/aea75/tat_tan_tat_nhung_dieu_can_biet_khi_chon_mua_tivi_mua_tet_nay_4d6d41477c.webp",
    },
    {
      title: "Bỏ túi kinh nghiệm chọn mua máy giặt phù hợp cho gia đình",
      content:
        "Sở hữu một chiếc máy giặt phù hợp trong gia đình sẽ giúp bạn tiết kiệm đáng kể thời gian, công sức và giặt giũ hiệu quả hơn.",
      date: "02/02/2024",
      imgSrc:
        "https://www.homepaylater.vn/static/57909cb11d9f505b8bb7cf54656e343b/89314/may_giat_tro_thu_dac_luc_dong_hanh_voi_cuoc_song_ban_ron_cua_moi_gia_dinh_5dceec6eee.webp",
    },
    {
      title:
        "Những điều cơ bản bạn nên biết trước khi bước vào cửa hàng điện máy",
      content:
        "Bạn nên bỏ túi các điều cơ bản này để mua được 1 chiếc máy lạnh ưng ý, ...",
      date: "11/06/2024",
      imgSrc:
        "https://blog.btaskee.com/wp-content/uploads/2020/06/200611-nhung-luu-y-khi-mua-may-lanh.jpg",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },600)
  },[]);

  if(loading){
    return (
      <Container className="d-flex justify-content-center" style={{ height: '100vh' }}>
            <SpinnerDetail/>
        </Container>
      
    )
  }

  return (
    <div className="blogDetail row">
      <div className="main-content col-8">
        <div className="frameMain row row-cols-3 g-2">
          {dataBlogs &&
            dataBlogs.map((item) => {
              return <BlogCardItemMain user={item} />;
            })}
        </div>
        <div className="frameSub">
          <h5 className="h5 frameSub-title">Recent posts</h5>
          {dataRecentPosts &&
            dataRecentPosts.map((item) => (
              <RecentPostsDetail dataPost={item} />
            ))}
        </div>
      </div>
      <div className="sub-content col-4">
        <h5 className="h5 videoTitle">Videos</h5>
        {dataVideos && dataVideos.map((item) => <VideoModal video={item} />)}
      </div>
    </div>
  );
};
export default BlogDetail;
