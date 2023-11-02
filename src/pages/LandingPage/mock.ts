import GroupSVG from '../../assets/group.svg';
import BuildingsSVG from '../../assets/buildings.svg';
import ClubsSVG from '../../assets/clubs.svg';

interface ManagementItemProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const managementItems: ManagementItemProps[] = [
  {
    id: 1,
    title: 'Membership Organisations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: GroupSVG,
  },
  {
    id: 2,
    title: 'National Associations',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: BuildingsSVG,
  },
  {
    id: 3,
    title: 'Clubs And Groups',
    description:
      'Our membership management software provides full automation of membership renewals and payments',
    icon: ClubsSVG,
  },
];
