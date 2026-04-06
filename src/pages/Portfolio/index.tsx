import { Carousel, Image } from "antd";

import slide1 from "@/assets/portfolio/portfilo1.jpg";
import slide2 from "@/assets/portfolio/portfolio2.jpg";
import slide3 from "@/assets/portfolio/portfolio3.jpg";
import slide4 from "@/assets/portfolio/portfolio4.jpg";
import "./index.less";

export type SlideProps = {
  imageSrc: string;
  title: string;
  honor: string;
};

function Slide({ imageSrc, title, honor }: SlideProps) {
  return (
    <div className="portfolio-slide">
      <div className="portfolio-slide__media">
        <Image width={300} src={imageSrc} />
      </div>
      <div className="portfolio-slide__text">
        <div className="portfolio-slide__title">{title}</div>
        <div className="portfolio-slide__honor">{honor}</div>
      </div>
    </div>
  );
}

const portfolioItems: SlideProps[] = [
  {
    imageSrc: slide1,
    title: "斩诡成神-从契约s级女皇开始",
    honor: "执行导演",
  },
  {
    imageSrc: slide2,
    title: "剪影成双",
    honor: "美术指导-播放量破千万",
  },
  {
    imageSrc: slide3,
    title: "从赖皮蛇开始吞噬进化",
    honor: "执行导演-全平台累计播放量超3亿",
  },
  {
    imageSrc: slide4,
    title: "恐龙复苏：我靠溶洞躲末日",
    honor: "总导演-播放量破千万",
  },
];

export function Portfolio() {
  return (
    <section
      className="panel portfolio"
      id="portfolio"
      data-snap-page={1}
      aria-labelledby="portfolio-title"
    >
      <div className="portfolio-carousel-wrap">
        <Carousel className="portfolio-carousel" autoplay>
          {portfolioItems.map((item, index) => (
            <div key={index}>
              <Slide
                imageSrc={item.imageSrc}
                title={item.title}
                honor={item.honor}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
