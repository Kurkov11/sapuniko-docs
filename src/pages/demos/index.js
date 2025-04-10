import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Hello() {
  return (
    <Layout title="Demos" description="Demos Page">
      <h1>Demos</h1>
      <div className={styles.sapunikoDemosContainer}>
        <div class="portfolio-single-card my-[15px] z-10 post-73 portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-designs">
          <a href="https://sapuniko.com/demos/classic-demo" draggable="false">
            <div class="overflow-y-hidden rounded aspect-square cursor-pointer">
              <img
                src="https://sapuniko.com/demos/classic-demo/wp-content/uploads/2025/02/maxim-hopman-Hin-rzhOdWs-unsplash-1-1-1-scaled.webp"
                draggable="false"
                alt=""
                class="w-full h-[calc(100%+30px)] object-cover object-top transition-opacity opacity-80 sapuniko-blog-slide-img "
              />
            </div>
            <div class="pt-[25px] pb-[15px] font-akshar text-[17px] cursor-pointer max-w-[400px]">
              <div class="flex gap-[12px] text-gray items-center tracking-[0.5px]">
                <p class="text-[15px] tablet:text-[16px]">February 8, 2025</p>
                <div class="shrink-0 w-[4px] h-[4px] rounded-full bg-gray"></div>
                <p class="shrink-0 text-[15px] tablet:text-[16px]">
                  1 min read
                </p>
              </div>
              <p class="text-[19px] tablet:text-[23px] tracking-[1.2px] font-light underline decoration-transparent duration-200 transition-all pt-[10px] sapuniko-blog-slide-title pr-[5px] text-white">
                Flower Design
              </p>
            </div>
          </a>
          <div class="flex gap-[10px] flex-wrap">
            <a href="http://localhost:10025/portfolio-category/designs/">
              <button class="text-white w-fit text-[16px] tablet:text-[15px] px-[12px] py-[3px] rounded-[8px] transition-all duration-200 font-akshar tracking-[0.5px] font-light bg-lighter-black hover:bg-opacity-40 bg-opacity-60">
                Designs
              </button>{" "}
            </a>
          </div>
        </div>

        <div class="portfolio-single-card my-[15px] z-10 post-71 portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-programming">
          <a
            href="http://localhost:10025/portfolio/custom-ecommerce-website/"
            draggable="false"
          >
            <div class="overflow-y-hidden rounded aspect-square cursor-pointer">
              <img
                src="http://localhost:10025/wp-content/uploads/2025/02/surface-exSKJMg-_vI-unsplash-scaled-1.webp"
                draggable="false"
                alt=""
                class="w-full h-[calc(100%+30px)] object-cover object-top transition-opacity opacity-80 sapuniko-blog-slide-img "
              />
            </div>
            <div class="pt-[25px] pb-[15px] font-akshar text-[17px] cursor-pointer max-w-[400px]">
              <div class="flex gap-[12px] text-gray items-center tracking-[0.5px]">
                <p class="text-[15px] tablet:text-[16px]">February 8, 2025</p>
                <div class="shrink-0 w-[4px] h-[4px] rounded-full bg-gray"></div>
                <p class="shrink-0 text-[15px] tablet:text-[16px]">
                  1 min read
                </p>
              </div>
              <p class="text-[19px] tablet:text-[23px] tracking-[1.2px] font-light underline decoration-transparent duration-200 transition-all pt-[10px] sapuniko-blog-slide-title pr-[5px] text-white">
                Custom Ecommerce Website
              </p>
            </div>
          </a>
          <div class="flex gap-[10px] flex-wrap">
            <a href="http://localhost:10025/portfolio-category/programming/">
              <button class="text-white w-fit text-[16px] tablet:text-[15px] px-[12px] py-[3px] rounded-[8px] transition-all duration-200 font-akshar tracking-[0.5px] font-light bg-lighter-black hover:bg-opacity-40 bg-opacity-60">
                Programming
              </button>{" "}
            </a>
          </div>
        </div>

        <div class="portfolio-single-card my-[15px] z-10 post-69 portfolio type-portfolio status-publish has-post-thumbnail hentry portfolio_category-designs portfolio_category-programming">
          <a
            href="http://localhost:10025/portfolio/laptop-showcase/"
            draggable="false"
          >
            <div class="overflow-y-hidden rounded aspect-square cursor-pointer">
              <img
                src="http://localhost:10025/wp-content/uploads/2025/02/surface-gNlvxxs4ehQ-unsplash-1-1-1-1-scaled.webp"
                draggable="false"
                alt=""
                class="w-full h-[calc(100%+30px)] object-cover object-top transition-opacity opacity-80 sapuniko-blog-slide-img "
              />
            </div>
            <div class="pt-[25px] pb-[15px] font-akshar text-[17px] cursor-pointer max-w-[400px]">
              <div class="flex gap-[12px] text-gray items-center tracking-[0.5px]">
                <p class="text-[15px] tablet:text-[16px]">February 8, 2025</p>
                <div class="shrink-0 w-[4px] h-[4px] rounded-full bg-gray"></div>
                <p class="shrink-0 text-[15px] tablet:text-[16px]">
                  1 min read
                </p>
              </div>
              <p class="text-[19px] tablet:text-[23px] tracking-[1.2px] font-light underline decoration-transparent duration-200 transition-all pt-[10px] sapuniko-blog-slide-title pr-[5px] text-white">
                Laptop Showcase
              </p>
            </div>
          </a>
          <div class="flex gap-[10px] flex-wrap">
            <a href="http://localhost:10025/portfolio-category/designs/">
              <button class="text-white w-fit text-[16px] tablet:text-[15px] px-[12px] py-[3px] rounded-[8px] transition-all duration-200 font-akshar tracking-[0.5px] font-light bg-lighter-black hover:bg-opacity-40 bg-opacity-60">
                Designs
              </button>{" "}
            </a>
            <a href="http://localhost:10025/portfolio-category/programming/">
              <button class="text-white w-fit text-[16px] tablet:text-[15px] px-[12px] py-[3px] rounded-[8px] transition-all duration-200 font-akshar tracking-[0.5px] font-light bg-lighter-black hover:bg-opacity-40 bg-opacity-60">
                Programming
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
