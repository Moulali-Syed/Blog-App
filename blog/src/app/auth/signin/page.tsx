import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';

const page = () => {
  return (
    <div className="authout">
      <Navbar />
      <div className="authin">
        <div className="left"></div>
        <div className="right">
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className="forminput_cont">
              <label htmlFor="">Email</label>
              <input type="email" name="" placeholder="enter email" id="" />
            </div>
            <div className="forminput_cont">
              <label htmlFor="">Password</label>
              <input type="password" name="" placeholder="enter name" id="" />
            </div>

            <button type="submit" className="main_button">
              Login
            </button>
            <p>
              Don't have an account? <Link href="/auth/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default page;
