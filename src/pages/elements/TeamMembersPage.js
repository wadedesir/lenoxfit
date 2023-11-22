import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import TeamMembersOne from "../../elements/TeamMembers/TeamMembersOne";
import TeamMembersTwo from "../../elements/TeamMembers/TeamMemberTwo";
import TeamMembersThree from "../../elements/TeamMembers/TeamMembersThree";
import TeamMembersFour from "../../elements/TeamMembers/TeamMembersFour";
import Loader from "../../components/Loader/Loader";

const TeamMembersPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle
      title="Team Member"
      tagline="Four team member style"
      image={imgBg}
    />
    <TeamMembersOne data={dataTeam} title="Default Style" />
    <TeamMembersTwo data={dataTeam} title="Style Two" />
    <TeamMembersThree data={dataTeam} title="Style Three" />
    <TeamMembersFour data={dataTeam} title="Style Four" />
    <FooterOne />
  </Loader>
);

export default TeamMembersPage;
