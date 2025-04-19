import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const messageSectionAnime = () => {
  const secMessage = document.getElementById("sec-message");
  if (!secMessage) return;

  const secMessageInner = document.getElementById("sec-message-inner");

  const wrapMessage = document.getElementById("message-section-wrapper");
  const messageText01 = document.querySelectorAll(".message-text-01");
  // const messageText02 = document.querySelectorAll(".message-text-02");
  const messageText03 = document.querySelectorAll(".message-text-03");
  // const messageText04 = document.querySelectorAll(".message-text-04");

  const messageImage01 = document.getElementById("message-image-01");
  const messageImage02 = document.getElementById("message-image-02");
  const messageImage03 = document.getElementById("message-image-03");

  const messageTextWrapper02 = document.getElementById("message-text-02-wrapper");
  const messageTextBar02 = document.getElementById("message-text-02-bar");

  const imageWrapper01 = document.getElementById("message-image-wrapper-01");
  const imageWrapper02 = document.getElementById("message-image-wrapper-02");
  const imageWrapper03 = document.getElementById("message-image-wrapper-03");
  const text_with = document.getElementById("text-with");
  const creatorLink = document.getElementById("text-link");
  const creatorLinkArrow = document.getElementById("text-link-arrow");
  const creatorLinkUnderLine = document.getElementById("text-link-underLine");

  //セクションのスクロール総量の設定
  const updateHeight = () => {
    const newHeight = window.innerWidth <= 768 ? "400vh" : "600vh";

    gsap.set(wrapMessage, {
      height: newHeight,
    });
  };

  updateHeight();
  window.addEventListener("resize", updateHeight);

  // 画像のアニメーション定義
  const updateImageClass01 = (progress: number) => {
    if (!messageImage01) return;

    if (progress >= 0.35 && progress < 0.5) {
      messageImage01.classList.add("message-image-01-change01");
    } else {
      messageImage01.classList.remove("message-image-01-change01");
    }

    if (progress >= 0.5) {
      messageImage01.classList.add("message-image-01-change02");
    } else {
      messageImage01.classList.remove("message-image-01-change02");
    }
  };

  const updateImageClass02 = (progress: number) => {
    if (!messageImage02) return;

    if (progress >= 0.6 && progress < 0.75) {
      messageImage02.classList.add("message-image-02-change01");
    } else {
      messageImage02.classList.remove("message-image-02-change01");
    }

    if (progress >= 0.75) {
      messageImage02.classList.add("message-image-02-change02");
    } else {
      messageImage02.classList.remove("message-image-02-change02");
    }
  };

  const updateImageClass03 = (progress: number) => {
    if (!messageImage03) return;

    if (progress >= 0.7 && progress < 0.85) {
      messageImage03.classList.add("message-image-03-change01");
    } else {
      messageImage03.classList.remove("message-image-03-change01");
    }

    if (progress >= 0.85) {
      messageImage03.classList.add("message-image-03-change02");
    } else {
      messageImage03.classList.remove("message-image-03-change02");
    }
  };

  //初期設定
  messageText01.forEach((catchCopy) => {
    gsap.set(catchCopy, {
      yPercent: 100,
      display: "inline-block",
      opacity: 0,
    });
  });

  gsap.set(messageTextWrapper02, {
    yPercent: 105,
    display: "inline-block",
  });

  gsap.set(imageWrapper01, {
    scale: 0,
  });
  gsap.set(imageWrapper02, {
    scale: 0,
  });
  gsap.set(imageWrapper03, {
    scale: 0,
  });

  messageText03.forEach((catchCopy) => {
    gsap.set(catchCopy, {
      yPercent: 100,
      opacity: 0,
      display: "inline-block",
    });
  });

  gsap.set(text_with, {
    yPercent: 100,
    display: "inline-block",
  });

  gsap.set(creatorLink, {
    scale: "0",
    display: "inline-block",
  });

  gsap.set(messageTextBar02, {
    width: "100%",
    height: "100%",
  });

  gsap.set(creatorLinkArrow, {
    scale: 0,
  });

  gsap.set(creatorLinkUnderLine, {
    width: 0,
  });

  //１行目テキスト 表示アニメーション
  const textLine01 = gsap
    .timeline({ paused: true })
    .to(messageText01, {
      yPercent: 0,
      duration: 1,
      stagger: 0.2, // 0.2秒ずつ順番に発火
    })
    .to(
      messageText01,
      {
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // 0.2秒ずつ順番に発火
      },
      "<"
    );
  //2行目テキスト 表示アニメーション
  const textLine02 = gsap
    .timeline({ paused: true })
    .to(messageTextWrapper02, {
      yPercent: 0,
      duration: 2,
    })
    .to(messageTextBar02, {
      height: 0,
      duration: 1,
    });

  //3行目テキスト 表示アニメーション
  const textLine03 = gsap
    .timeline({ paused: true })
    .to(messageText03, {
      yPercent: 0,
      duration: 1,
      stagger: 0.2, // 0.2秒ずつ順番に発火
    })
    .to(
      messageText03,
      {
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // 0.2秒ずつ順番に発火
      },
      "<"
    );

  //4行目テキスト 表示アニメーション
  const textLine04 = gsap.timeline({ paused: true }).to(text_with, {
    yPercent: 0,
    duration: 1,
  });

  //最後のリンク 表示アニメーション
  const creatorLinkAnimation = gsap
    .timeline({ paused: true })
    .to(creatorLink, {
      scale: 1.1,
      duration: 1,
    })
    .to(creatorLink, {
      scale: 1,
      duration: 1,
    })
    .to(creatorLinkUnderLine, {
      width: "100%",
      duration: 0.5,
    })
    .to(creatorLinkArrow, {
      scale: 2,
      duration: 0.5,
    })
    .to(creatorLinkArrow, {
      scale: 1,
      duration: 0.5,
    });
  //１行目画像表示アニメーション
  const imageAnime01 = gsap
    .timeline({ paused: true })
    .to(imageWrapper01, {
      scale: 1.3,
      duration: 1,
    })
    .to(imageWrapper01, {
      scale: 1,
      duration: 1,
    });

  //3行目画像表示アニメーション
  const imageAnime02 = gsap
    .timeline({ paused: true })
    .to(imageWrapper02, {
      scale: 1.2,
      duration: 1,
    })
    .to(imageWrapper02, {
      scale: 1,
      duration: 1,
    });

  //4行目画像表示アニメーション
  const imageAnime03 = gsap
    .timeline({ paused: true })
    .to(imageWrapper03, {
      scale: 1.2,
      duration: 1,
    })
    .to(imageWrapper03, {
      scale: 1,
      duration: 1,
    });

  //クロージングアニメーション
  const sectionFadeout = gsap
    .timeline({
      paused: true,
    })
    .to(secMessageInner, {
      scale: 50,
      duration: 0.5,
      ease: "Power2.easeIn",
    })
    .to(
      secMessage,
      {
        opacity: 0,
        duration: 0.01,
      },
      "-=0.05"
    );

  const TL = gsap.timeline({
    scrollTrigger: {
      trigger: wrapMessage,
      start: "0% bottom",
      end: "80% top",
      scrub: 1.3,
      // markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        // 1. タイトルのフェードイン・フェードアウト
        // gsap.to([creatorTitle, creatorNav], { y: progress > 0.2 ? 0 : "100%", duration: 0.7 });

        updateImageClass01(progress);
        updateImageClass02(progress);
        updateImageClass03(progress);

        //１行目テキスト
        if (progress >= 0.06 && progress <= 0.16) {
          const normalizedProgress = (progress - 0.06) / 0.1;
          textLine01.progress(normalizedProgress);
        } else if (progress < 0.06) {
          textLine01.progress(0);
        } else if (progress > 0.16) {
          textLine01.progress(1);
        }
        //１行目画像
        if (progress >= 0.16 && progress <= 0.22) {
          const normalizedProgress = (progress - 0.2) / 0.06;
          imageAnime01.progress(normalizedProgress);
        } else if (progress < 0.2) {
          imageAnime01.progress(0);
        } else if (progress > 0.22) {
          imageAnime01.progress(1);
        }

        //2行目テキスト
        if (progress >= 0.22 && progress <= 0.3) {
          const normalizedProgress = (progress - 0.22) / 0.08;
          textLine02.progress(normalizedProgress);
        } else if (progress < 0.22) {
          textLine02.progress(0);
        } else if (progress > 0.3) {
          textLine02.progress(1);
        }

        //3行目テキスト
        if (progress >= 0.3 && progress <= 0.4) {
          const normalizedProgress = (progress - 0.3) / 0.1;
          textLine03.progress(normalizedProgress);
        } else if (progress < 0.3) {
          textLine03.progress(0);
        } else if (progress > 0.4) {
          textLine03.progress(1);
        }
        //3行目画像
        if (progress >= 0.4 && progress <= 0.46) {
          const normalizedProgress = (progress - 0.4) / 0.06;
          imageAnime02.progress(normalizedProgress);
        } else if (progress < 0.4) {
          imageAnime02.progress(0);
        } else if (progress > 0.46) {
          imageAnime02.progress(1);
        }

        //4行目テキスト
        if (progress >= 0.46 && progress <= 0.52) {
          const normalizedProgress = (progress - 0.46) / 0.06;
          textLine04.progress(normalizedProgress);
        } else if (progress < 0.46) {
          textLine04.progress(0);
        } else if (progress > 0.52) {
          textLine04.progress(1);
        }

        //4行画像
        if (progress >= 0.52 && progress <= 0.57) {
          const normalizedProgress = (progress - 0.52) / 0.05;
          imageAnime03.progress(normalizedProgress);
        } else if (progress < 0.52) {
          imageAnime03.progress(0);
        } else if (progress > 0.57) {
          imageAnime03.progress(1);
        }

        //4行目テキスト(リンク)
        if (progress >= 0.6 && progress <= 0.75) {
          const normalizedProgress = (progress - 0.6) / 0.15;
          creatorLinkAnimation.progress(normalizedProgress);
        } else if (progress < 0.6) {
          creatorLinkAnimation.progress(0);
        } else if (progress > 0.75) {
          creatorLinkAnimation.progress(1);
        }

        if (progress >= 0.78 && progress <= 1) {
          const normalizedProgress = (progress - 0.78) / 0.22;
          sectionFadeout.progress(normalizedProgress);
        } else if (progress < 0.78) {
          sectionFadeout.progress(0);
        } else if (progress > 1) {
          sectionFadeout.progress(1);
        }
      },
    },
  });
};
