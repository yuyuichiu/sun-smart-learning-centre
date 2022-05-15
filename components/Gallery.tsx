import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import awardBoardImg from "../public/assets/studentAwards/awardBoard.jpg";

const studentAwards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Gallery: React.FC = (props) => {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={5000}>
        <div style={{ position: "relative", height: "450px" }}>
          <Image
            src={awardBoardImg}
            placeholder="blur"
            layout="fill"
            objectFit="contain"
            alt="學生成績"
          />
        </div>
      </Carousel.Item>

      {studentAwards.map((item, idx) => {
        return (
          <Carousel.Item  interval={2000} key={`award-${item}`}>
            <div style={{ position: "relative", height: "450px" }}>
              <Image
                src={`/assets/studentAwards/${item}.jpg`}
                placeholder='blur'
                blurDataURL={`/assets/studentAwards/${item}.jpg`}
                layout="fill"
                objectFit="contain"
                alt={`學生成績-${item}`}
              />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Gallery;
