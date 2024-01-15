import CreatePost from './CreatePost';
import Home from './Home';
import Catios from './Catios';
import Messages from './Messages';
import Notifications from './Notifications';
import ProfileLink from './ProfileLink';
import Search from './Search';

const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Catios />
      <Messages />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  );
};

export default SidebarItems;
