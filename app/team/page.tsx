import TeamHeadCard from "./components/team-head-card";
import TeamMembersPanel from "./components/team-members-panel";
import { teamHeads, teams } from "./config/constants";
import styles from "./page.module.css";
import "../globals.css";

export default function TeamPage() {
  return (
    <div className={`${styles.customBg} ${styles.grayText} py-8 mt-16`}>
      <div className="w-full max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold">
          We&apos;re shaping the way teens learn finance.
        </h1>
        <h6 className={`text-3xl font-bold text-gradient-orange`}>
          And we have fun doing it ;)
        </h6>
        <p className="text-2xl font-semibold my-5">Meet the team</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 mt-6 mb-12">
          {teamHeads.map((teamHead, idx) => (
            <TeamHeadCard key={idx} {...teamHead} />
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8%] mt-6">
          {teams.map((team, idx) => (
            <div key={idx}>
              <TeamMembersPanel {...team} />
            </div>
          ))}
        </div>

        <div className="hidden sm:block">
          <h6 className="text-3xl font-bold mt-8 mb-4">More than just work.</h6>
          <div className="text-3xl font-bold text-gradient-orange my-4">
            <h6>Although we&apos;re working hard to build the</h6>
            <h6>future of finance learning</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
