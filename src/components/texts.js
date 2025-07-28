import React from "react";

const AchievementsSection = () => {
  const achievements = [
    {
      image:
        "/images/2025-2-26--14-30-35-597_Al-Mehmoodeducationnetwork_award28_the_most_trusted_education_brand_by_big_impact_awards_2025.webp",
      alt: "Al-Mehmood International School was awarded as the Most Trusted Education Brand by Big Impact Awards 2025",
      text: "Al-Mehmood International School was awarded as the Most Trusted Education Brand by Big Impact Awards 2025",
    },
    {
      image:
        "images/2024-10-21--13-10-28-82_Al-Mehmoodeducationnetwork_award27_mostrespectededucationbrandinindia2024-25.webp",
      alt: "Al-Mehmood International Schools was awarded as the Most Respected Education Brand in India 2024-25 by Education World",
      text: "Al-Mehmood International Schools was awarded as the Most Respected Education Brand in India 2024-25 by Education World",
    },
    {
      image:
        "images/2024-4-2--14-24-44-784_Al-Mehmoodeducationnetwork_award26_mosttrustedbrandsofindia2024-25.webp",
      alt: "Al-Mehmood International School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily",
      text: "Al-Mehmood International School was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily",
    },
    {
      image:
        "images/2024-4-2--14-24-9-119_Al-Mehmoodeducationnetwork_award25_besteducationbrands2024bytheeconomictimes.webp",
      alt: "Al-Mehmood Education Network has been recognised as the Best Education Brands 2024 by The Economic Times",
      text: "Al-Mehmood Education Network has been recognised as the Best Education Brands 2024 by The Economic Times",
    },
    {
      image:
        "images/2023-10-11--16-25-36-310_Al-Mehmoodeducationnetwork_award24_mimamsagroupaward2023.webp",
      alt: "Al-Mehmood Education Network - Chain of Schools with Highest Number of Students (Mumbai Region) 2023",
      text: "Al-Mehmood Education Network - Chain of Schools with Highest Number of Students (Mumbai Region) 2023",
    },
    {
      image:
        "images/2023-10-5--14-5-37-777_Al-Mehmoodeducationnetwork_award23_mosttrustedbrandofthenation2023.webp",
      alt: "Al-Mehmood International School - Most Trusted Brand of the Nation 2023 by The Brand Story",
      text: "Al-Mehmood International School - Most Trusted Brand of the Nation 2023 by The Brand Story",
    },
    {
      image:
        "images/2023-9-27--17-50-18-836_Al-Mehmoodeducationnetwork_award22_leadingpreschoolchainardorcommmedia2023.webp",
      alt: "Al-Mehmood Prep - Leading Preschool Chain (National) 2023 by ArdorComm Media",
      text: "Al-Mehmood Prep - Leading Preschool Chain (National) 2023 by ArdorComm Media",
    },
    {
      image:
        "images/2023-9-26--8-55-47-790_Al-Mehmoodeducationnetwork_award22_promisingschoolsiliconindia2023.webp",
      alt: "Al-Mehmood International School: Honored Among India's Top 10 Most Promising International Schools by Silicon India 2023",
      text: "Al-Mehmood International School: Honored Among India's Top 10 Most Promising International Schools by Silicon India 2023",
    },
    {
      image:
        "images/2023-8-26--10-15-15-460_Al-Mehmoodeducationnetwork_award21_indiasmostrespectededucationbrand2023.webp",
      alt: "The Economic Times Best Education Brands Award 2023",
      text: "The Economic Times Best Education Brands Award 2023",
    },
    {
      image:
        "images/2023-8-26--10-11-57-527_Al-Mehmoodeducationnetwork_award21_indiasmostrespectededucationbrand2022.webp",
      alt: "India's Most Respected Education Brand 2022",
      text: "India's Most Respected Education Brand 2022",
    },
    {
      image:
        "images/2022-7-14--9-45-30-434_Al-Mehmoodeducationnetwork_award20_besteducationbrands2022.webp",
      alt: "The Economic Times Best Education Brands Award 2022",
      text: "The Economic Times Best Education Brands Award 2022",
    },
    {
      image:
        "images/2022-4-28--12-59-5-787_Al-Mehmoodeducationnetwork_award19_e4mprideofindiathebestofbharataward2022.webp",
      alt: "e4m Pride of India - The Best of Bharat Award 2022",
      text: "e4m Pride of India - The Best of Bharat Award 2022",
    },
    {
      image:
        "images/2022-2-5--14-55-44-645_Al-Mehmoodeducationnetwork_award18_indiasmostrespectedearlychildhoodeducationbrand2022.webp",
      alt: "India's Most Respected Early Childhood Education Brand - The Education World - 21-22",
      text: "India's Most Respected Early Childhood Education Brand - The Education World - 21-22",
    },
    {
      image:
        "images/2022-1-16--20-28-9-127_Al-Mehmoodeducationnetwork_award17_mostrespectededucationbrandinindia2022.webp",
      alt: "The Most Respected Education Brand in India - The Education World - 21-22",
      text: "The Most Respected Education Brand in India - The Education World - 21-22",
    },
    {
      image:
        "images/2022-1-20--15-11-33-647_Al-Mehmoodeducationnetwork_award16_leadingschoolchainnational2022.webp",
      alt: "Leading School Chain (National) 2022 - ArdorComm Media Group - 2022",
      text: "Leading School Chain (National) 2022 - ArdorComm Media Group - 2022",
    },
    {
      image:
        "images/2021-7-5--12-11-58-452_Al-Mehmoodeducationnetwork_award14_penmostdistinguishedintschoolnetworkoftheyear.webp",
      alt: "Most Distinguished International School Network of the Year - Education Excellence Awards - 2020-21",
      text: "Most Distinguished International School Network of the Year - Education Excellence Awards - 2020-21",
    },
    {
      image:
        "images/2021-7-5--12-10-41-836_Al-Mehmoodeducationnetwork_award15_pjkbestpreschooloftheyear20202021.webp",
      alt: "Best Pre-school Brand of the Year - Education Excellence Awards - 2020-21",
      text: "Best Pre-school Brand of the Year - Education Excellence Awards - 2020-21",
    },
    {
      image:
        "images/2020-11-6--10-43-19-552_Al-Mehmoodeducationnetwork_award13_pjkbestpreschooloftheyear2020.webp",
      alt: "Best Preschool of the Year - Global School Awards - 2020-21",
      text: "Best Preschool of the Year - Global School Awards - 2020-21",
    },
    {
      image:
        "images/2020-11-6--10-43-42-61_Al-Mehmoodeducationnetwork_award12_outstandingedunetwork.webp",
      alt: "Outstanding Educational Network in India - The Economics Times - 2020-21",
      text: "Outstanding Educational Network in India - The Economics Times - 2020-21",
    },
  ];

  return (
    <section className="achievements">
      <div className="container d-flex flex-column">
        <div className="title title_purple_30px text-center pb-1">
          Our Achievements
        </div>
        <div className="counter-title fs-25 text-center pb-5">
          We are honoured to be recognised for our commitment to quality
        </div>

        <div className="cardsBox d-flex justify-content-center">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card align-items-center text-center d-flex justify-content-around"
            >
              <img
                src={achievement.image}
                alt={achievement.alt}
                loading="lazy"
              />
              <div className="card-body text-start text-center">
                <p className="card-text">{achievement.text}</p>
              </div>
            </div>
          ))}
        </div>

        <a className="link-text" href="/achievements-and-awards">
          View All
          <span className="custom-icon verticle_icon cust-ico-download mr-1">
            <img src="images/icon-orange-arrow.png" alt="" loading="lazy" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default AchievementsSection;
