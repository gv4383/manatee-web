import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { Skill, User } from '../../store/reducers/user/types';
import SkillCard from '../../components/SkillCard';
import UserCard from '../../components/UserCard';

interface Props {
  skills: Skill[] | undefined;
  user: User | undefined;
}

const Profile = (props: Props) => {
  const { skills, user } = props;
  const email = user && user.attributes.email;
  const firstName = user && user.attributes.first_name;
  const lastName = user && user.attributes.last_name;
  const displayUserSKills = skills && skills.map((skill: Skill) => (
    <SkillCard
      key={skill.attributes.name}
      description={skill.attributes.description}
      name={skill.attributes.name}
      rating={skill.attributes.rating}
    />
  ));
  const userSkills = skills && skills.length > 0
    ? displayUserSKills
    : 'No skills to show';

  return (
    <div>
      <Link to="/">
        <Button>Back</Button>
      </Link>
      <UserCard
        email={email}
        firstName={firstName}
        lastName={lastName}
        skills={skills}
        isProfileCard
      />
      {userSkills}
    </div>
  );
};

export default Profile;
