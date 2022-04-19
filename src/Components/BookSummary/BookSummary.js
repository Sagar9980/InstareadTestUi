import React from "react";
import ContentLayout from "../../Layout/ContentLayout";
import { useTabs, TabPanel } from "react-headless-tabs";
import TabSelector from "../../Utils/TabSelector";
import Aud from "../../Assets/music.mp3";
import { ReactComponent as Play } from "../../Assets/audio-headphones.svg";
import { ReactComponent as Lock } from "../../Assets/lock.svg";
import { ReactComponent as LockBlack } from "../../Assets/lockblack.svg";

import "./BookSummary.css";
import Button from "../Button/Button";
function BookSummary() {
  const items = ["summary", "insights", "quotes", "community"];

  const [selectedTab, setSelectedTab] = useTabs(items);

  const getSelectedTabIndex = () =>
    items.findIndex((item) => item === selectedTab);

  return (
    <ContentLayout>
      <div className="book__summary__container">
        <div className="tab__section">
          <nav
            style={{
              position: "relative",
              width: "60%",
              borderBottom: "solid 2px #f7f7f7",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: `calc((100% / ${
                  items.length
                }) * ${getSelectedTabIndex()})`,
                height: "2px",
                width: `calc(80% / ${items.length})`,
                background: "#3c8de4",
                transition: "all ease 0.2s",
              }}
            />
            <div
              style={{
                display: "flex",
              }}
            >
              <TabSelector
                item="summary"
                setSelectedTab={(e) => setSelectedTab(e)}
                selectedTab={selectedTab}
              >
                Summary
                <LockBlack style={{ marginLeft: "10px" }} />
              </TabSelector>
              <TabSelector
                item="insights"
                setSelectedTab={(e) => setSelectedTab(e)}
                selectedTab={selectedTab}
              >
                Insights
              </TabSelector>
              <TabSelector
                item="quotes"
                setSelectedTab={(e) => setSelectedTab(e)}
                selectedTab={selectedTab}
              >
                Quotes
              </TabSelector>
              <TabSelector
                item="community"
                setSelectedTab={(e) => setSelectedTab(e)}
                selectedTab={selectedTab}
              >
                Community
              </TabSelector>
            </div>
          </nav>
          <div className="tabs__pannel">
            <div className="tabs__content">
              <TabPanel
                hidden={selectedTab !== "summary"}
                style={{ position: "relative" }}
              >
                <div className="text__content">
                  <h2>Overview</h2>

                  <p>
                    Robert Wright’s Why Buddhism Is True: The Science and
                    Philosophy of Meditation and Enlightenment (2017) considers
                    Buddhism through the lens of evolutionary psychology, a
                    discipline that regards natural selection as the provenance
                    of many mental traits. Focusing on his personal experience
                    with mindfulness meditation, Wright describes a path to
                    truth, using ideas from the realms of psychology and modern,
                    scientifically influenced philosophy to illuminate ancient
                    wisdom. Most people are profoundly out of touch with the
                    nature of objective reality. The human brain has been wired
                    by evolution to experience the world in a deeply subjective,
                    distorted way. Human genes have been programmed to propagate
                    the species, not perceive truth or attain lasting happiness.
                    People seek happiness under the false assumption that one
                    day they can attain it permanently. But happiness is
                    fleeting, in part because of how the brain experiences it,
                    and in part due to inevitable change and the passage of
                    time. Humans are caught in the cycle of seeking out
                    pleasurable experiences and feeling bad in the in-between
                    moments that constitute most day-to-day experiences. This is
                    the source of much human suffering. Human consciousness is
                    influenced by “false feelings,” which seem authentic but
                    which are deceptive in the sense that they don’t lead to
                    productive, well-adjusted behaviors. Meditation is a tool
                    for identifying such feelings as false. The act of
                    meditating shines a spotlight on subjectivity and bias such
                    that a new, more objective perspective becomes possible.
                    Individual selfhood is constructed from warped perceptions
                    of reality. The boundary between one’s self and the external
                    world is porous, if it exists at all. Individuals’ actions
                    are determined in large part by genetics and external
                    circumstances more than their own agency and choices. This
                    means that selfhood isn’t static or fixed, and personality
                    isn’t a collection of traits that are stable from situation
                    to situation. It’s difficult to pursue the path of truth and
                    enlightenment because the human brain isn’t wired to
                    recognize its own bias. Meditation can help overcome this
                    innate obstacle. While Western practitioners often describe
                    meditation in terms of outcomes like stress reduction, such
                    benefits are secondary. The primary benefit is that
                    meditation helps people perceive reality more clearly, which
                    is good not just for individuals, but for humankind.
                  </p>
                  <h2>Key Insight 1</h2>
                  <p>
                    Robert Wright’s Why Buddhism Is True: The Science and
                    Philosophy of Meditation and Enlightenment (2017) considers
                    Buddhism through the lens of evolutionary psychology, a
                    discipline that regards natural selection as the provenance
                    of many mental traits. Focusing on his personal experience
                    with mindfulness meditation, Wright describes a path to
                    truth, using ideas from the realms of psychology and modern,
                    scientifically influenced philosophy to illuminate ancient
                    wisdom. Most people are profoundly out of touch with the
                    nature of objective reality. The human brain has been wired
                    by evolution to experience the world in a deeply subjective,
                    distorted way. Human genes have been programmed to propagate
                    the species, not perceive truth or attain lasting happiness.
                    People seek happiness under the false assumption that one
                    day they can attain it permanently. But happiness is
                    fleeting, in part because of how the brain experiences it,
                    and in part due to inevitable change and the passage of
                    time. Humans are caught in the cycle of seeking out
                    pleasurable experiences and feeling bad in the in-between
                    moments that constitute most day-to-day experiences. This is
                    the source of much human suffering. Human consciousness is
                    influenced by “false feelings,” which seem authentic but
                    which are deceptive in the sense that they don’t lead to
                    productive, well-adjusted behaviors. Meditation is a tool
                    for identifying such feelings as false. The act of
                    meditating shines a spotlight on subjectivity and bias such
                    that a new, more objective perspective becomes possible.
                    Individual selfhood is constructed from warped perceptions
                    of reality. The boundary between one’s self and the external
                    world is porous, if it exists at all. Individuals’ actions
                    are determined in large part by genetics and external
                    circumstances more than their own agency and choices. This
                    means that selfhood isn’t static or fixed, and personality
                    isn’t a collection of traits that are stable from situation
                    to situation. It’s difficult to pursue the path of truth and
                    enlightenment because the human brain isn’t wired to
                    recognize its own bias. Meditation can help overcome this
                    innate obstacle. While Western practitioners often describe
                    meditation in terms of outcomes like stress reduction, such
                    benefits are secondary. The primary benefit is that
                    meditation helps people perceive reality more clearly, which
                    is good not just for individuals, but for humankind.
                  </p>
                  <h2>Key Insight 2</h2>
                  <p>
                    Robert Wright’s Why Buddhism Is True: The Science and
                    Philosophy of Meditation and Enlightenment (2017) considers
                    Buddhism through the lens of evolutionary psychology, a
                    discipline that regards natural selection as the provenance
                    of many mental traits. Focusing on his personal experience
                    with mindfulness meditation, Wright describes a path to
                    truth, using ideas from the realms of psychology and modern,
                    scientifically influenced philosophy to illuminate ancient
                    wisdom. Most people are profoundly out of touch with the
                    nature of objective reality. The human brain has been wired
                    by evolution to experience the world in a deeply subjective,
                    distorted way. Human genes have been programmed to propagate
                    the species, not perceive truth or attain lasting happiness.
                    People seek happiness under the false assumption that one
                    day they can attain it permanently. But happiness is
                    fleeting, in part because of how the brain experiences it,
                    and in part due to inevitable change and the passage of
                    time. Humans are caught in the cycle of seeking out
                    pleasurable experiences and feeling bad in the in-between
                    moments that constitute most day-to-day experiences. This is
                    the source of much human suffering. Human consciousness is
                    influenced by “false feelings,” which seem authentic but
                    which are deceptive in the sense that they don’t lead to
                    productive, well-adjusted behaviors. Meditation is a tool
                    for identifying such feelings as false. The act of
                    meditating shines a spotlight on subjectivity and bias such
                    that a new, more objective perspective becomes possible.
                    Individual selfhood is constructed from warped perceptions{" "}
                  </p>
                </div>
                <div className="read__more">
                  <h3>Want to read more?</h3>
                  <Button />
                </div>
              </TabPanel>
              <TabPanel hidden={selectedTab !== "insights"}>Insights</TabPanel>
              <TabPanel hidden={selectedTab !== "quotes"}>Quotes</TabPanel>
              <TabPanel hidden={selectedTab !== "community"}>
                Community
              </TabPanel>
            </div>
            <div className="audio__book__section">
              <h3>Audiobook</h3>
              <audio controls>
                <source src={Aud} type="audio/mpeg" />
              </audio>
              <h3>Table of contents</h3>

              <div className="audio__files">
                <div className="audio__file__wrapper">
                  <p>
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                      1.
                    </span>
                    Overview
                  </p>
                  <Play />
                </div>
                <div className="audio__file__wrapper">
                  <p>
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                      1.
                    </span>
                    Key Insights 1
                  </p>
                  <Play />
                </div>
                <div className="audio__file__wrapper">
                  <p>
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                      2.
                    </span>
                    Key Insights 2
                  </p>
                  <Play />
                </div>
                <div className="audio__file__wrapper">
                  <p>
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                      3.
                    </span>
                    Key Insights 3
                  </p>
                  <Play />
                </div>
                <div className="audio__file__wrapper">
                  <p>
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                      4.
                    </span>
                    What to See, When to see
                  </p>
                  <Play />
                </div>{" "}
                <div className="audio__file__wrapper">
                  <p>
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                      5.
                    </span>
                    How's the Gun do Talking?
                  </p>
                  <Play />
                </div>
              </div>
              <div className="unlock__section">
                <Lock />

                <h3>Unlock access to thousands of titles</h3>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default BookSummary;
