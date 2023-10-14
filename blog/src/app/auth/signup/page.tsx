import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';

const page = () => {
  return (
    <div className="authout">
      <Navbar />
      <div className="authin">
        <div className="left"></div>
        <div className="right">
          <form>
            <div className="forminput_cont">
              <label htmlFor="">Name</label>
              <input type="text" name="" placeholder="enter name" id="" />
            </div>
            <div className="forminput_cont">
              <label htmlFor="">Email</label>
              <input type="email" name="" placeholder="enter email" id="" />
            </div>
            <div className="forminput_cont">
              <label htmlFor="">Password</label>
              <input type="password" name="" placeholder="enter name" id="" />
            </div>
            <div className="forminput_cont">
              <label htmlFor="">Confirm Password</label>
              <input type="password" name="" placeholder="enter name" id="" />
            </div>
            <button type="submit" className="main_button">
              Register
            </button>
            <p>
              Already have an account? <Link href="/auth/signin">SignIn</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default page;
