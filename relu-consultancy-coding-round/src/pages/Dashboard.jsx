import React from "react";
import Header from "../component/Header";
import Container from "../component/Container";
import Sidebar from "../component/Sidebar";
import MidSectionCard from "../component/MidSectionCard";
import { cardData } from "../data/userData";
import HorizontalScrollSection from "../component/HorizontalScrollSection";
import RightSidebar from "../component/RightSidebar";

function Dashboard() {
  return (
    <Container>
      <div className="flex-col h-screen">
        <div className="sticky top-0 z-10 ">
          <Header />
        </div>

        <div className="flex  justify-center flex-1 overflow-y">
          <div className="m-4 w-[260px] h-[600px] flex flex-col justify-startrounded-lg overflow-auto">
            <div className=" bg-white ">
              <Sidebar />
            </div>
            <div className="flex m-4 text-black text-xs justify-between">
              <span>2022©logo name</span>
              <span>Developed by ivan Infotech</span>
            </div>
          </div>

          <div className="h-[720px] overflow-y-auto  flex-1 mx-4">
            {cardData.map((card) => (
              <div className=" w-[620px] bg-white rounded-lg">
                <MidSectionCard
                  key={card.id}
                  userName={card.userName}
                  userHandle={card.userHandle}
                  userImage={card.userImage}
                  postImage={card.postImage}
                  postText={card.postText}
                  likes={card.likes}
                  comments={card.comments}
                  shares={card.shares}
                  heartIcon={card.heartIcon}
                  commentIcon={card.commentIcon}
                  shareIcon={card.shareIcon}
                  threeDotsIcon={card.threeDotsIcon}
                  heartImage={card.heartImage}
                />
              </div>
            ))}
            <div className="w-[620px]">
              <HorizontalScrollSection />
            </div>
          </div>

          <div className=" w-[260px] flex flex-col  m-4 rounded-lg  ">
            <div className="overflow-y">
              <RightSidebar />
              <div className="flex justify-around m-2 text-black text-xs">
                <span>Privacy</span>
                <span>Terms of Service</span>
                <span>Cookie Notice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
