import LeftNav from './LeftNav';
import MiddleContent from './MiddleContent';
import RightFeed from './RightFeed';

const Dashboard = () => {
  return (
    <div className='flex h-screen text-white bg-black'>
      <LeftNav />
      <MiddleContent />
      <RightFeed />
    </div>
  );
};

export default Dashboard;
