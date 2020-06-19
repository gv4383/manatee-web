import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import { Skill, User } from '../../store/reducers/user/types';
import SkillCard from '../../components/SkillCard';
import UserCard from '../../components/UserCard';
import SkillForm from '../../components/SkillForm';

interface Props {
  onClickBack: () => void;
  skills: Skill[] | undefined;
  user: User | undefined;
}

const Profile = (props: Props) => {
  const { onClickBack, skills, user } = props;
  const email = user?.attributes?.email;
  const firstName = user?.attributes?.first_name;
  const lastName = user?.attributes?.last_name;
  const userId = user?.id;
  const displayUserSKills = skills?.map((skill: Skill) => (
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
        <Button onClick={onClickBack}>Back</Button>
      </Link>
      <UserCard
        email={email}
        firstName={firstName}
        lastName={lastName}
        skills={skills}
        isProfileCard
      />
      <SkillForm userId={userId} />
      {userSkills}
    </div>
  );
};

export default Profile;
