import React from "react";

function MidSectionCard({
  userName,
  userHandle,
  userImage,
  postImage,
  postText,
  likes,
  comments,
  shares,
  heartIcon,
  commentIcon,
  shareIcon,
  threeDotsIcon,
  heartImage,
}) {
  return (
    <div className=" w-full flex flex-col  my-4">
      <div className="px-4 my-8 flex flex-row w-full justify-between">
        <div className="flex mx-4  text-left">
          <img src={userImage} alt="user" />
          <div className="flex flex-col mx-4">
            <span className="text-[#101010] text-lg font-semibold ">
              {userName}
            </span>
            <span className="text-sm text-[#8D8D8D]">{userHandle}</span>
          </div>
        </div>
        <div className="flex ">
          <img src={threeDotsIcon} alt="options" className="h-8 w-10" />
        </div>
      </div>

      <div className="mx-4 text-left">
        <p className="mx-4">
          {postText} <span className="text-[#FF5E8A]">Read More</span>
        </p>
      </div>

      <div className="m-4 relative">
        <img
          src={heartImage}
          alt="heart"
          className="absolute top-5 right-5 h-6 w-6"
        />
        <img src={postImage} alt="post" className="w-[560px] h-[306px] mx-4" />{" "}
      </div>

      <hr className="w-[620px] text-[#F3F3F3] border border-2-[#F3F3F3]" />

      <div className="m-4 mx-8 flex text-[#101010]">
        <span className="flex">
          <img src={heartIcon} alt="like" />
          <span className="mx-2">{likes}</span>
        </span>
        <span className="flex">
          <img src={commentIcon} alt="comment" />
          <span className="mx-2">{comments}</span>
        </span>
        <span className="flex">
          <img src={shareIcon} alt="share" />
          <span className="mx-2">{shares}</span>
        </span>
      </div>
    </div>
  );
}

export default MidSectionCard;
