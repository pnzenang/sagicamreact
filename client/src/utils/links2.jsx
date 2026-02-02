import { TbUsersGroup } from 'react-icons/tb';
import { TbUsersPlus } from 'react-icons/tb';
import { RiUserSettingsLine } from 'react-icons/ri';
import { MdOutlineAnnouncement } from 'react-icons/md';
import {
  MdOutlineAdminPanelSettings,
  MdOutlineIntegrationInstructions,
} from 'react-icons/md';
import { FiUserCheck } from 'react-icons/fi';
import { TbReportMoney } from 'react-icons/tb';
// import { TfiStatsUp } from 'react-icons/tfi';
import { PiUsersFourLight } from 'react-icons/pi';
// import { SiGnuprivacyguard } from 'react-icons/si';

const links2 = [
  // {
  //   text: 'navigation instructions',
  //   path: 'navigation',
  //   icon: <MdOutlineIntegrationInstructions />,
  // },
  {
    text: 'add loved ones',
    path: '.',
    icon: <TbUsersPlus />,
  },
  {
    text: 'all loved ones',
    path: 'all-members',
    icon: <TbUsersGroup />,
  },

  {
    text: 'Updates',
    path: 'vested-members',
    icon: <FiUserCheck />,
  },
  {
    text: 'sponsor profile',
    path: 'profile',
    icon: <RiUserSettingsLine />,
  },
  // {
  //   text: 'contributions',
  //   path: 'contributions',
  //   icon: <TbReportMoney />,
  // },
  // {
  //   text: 'Internal Rules',
  //   path: 'internal-rules',
  //   icon: <RiUserSettingsLine />,
  // },

  // {
  //   text: 'death announcement',
  //   path: 'announcement',
  //   icon: <MdOutlineAnnouncement />,
  // },

  // {
  //   text: 'stats',
  //   path: 'stats',
  //   icon: <TfiStatsUp />,
  // },

  {
    text: 'admin',
    path: 'admin',
    icon: <MdOutlineAdminPanelSettings />,
  },
  {
    text: 'all members-admin',
    path: 'all-members-admin',
    icon: <PiUsersFourLight />,
  },

  // {
  //   text: 'all deceased-admin',
  //   path: 'all-deceased-admin',
  //   icon: <PiExcludeSquareDuotone />,
  // },
  // {
  //   text: 'register',
  //   path: 'register',
  //   icon: <SiGnuprivacyguard />,
  // },
];
export default links2;
