import { TeamMember } from "../config/interfaces";

export default function TeamMembersPanel({ teamName, teamMembers }: TeamMember) {
  return (
    <>
      <h6 className="text-lg font-semibold">{teamName}</h6>
      {teamMembers.map((member, idx) => {
        return <p key={idx}>{member}</p>;
      })}
    </>
  );
}
