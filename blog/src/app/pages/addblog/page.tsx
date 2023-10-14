import Navbar from '@/components/Navbar/Navbar';

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="addblog_in">
        <h1 className="head1">Add Blog</h1>
        <form
          style={{
            width: '70%',
            minWidth: '250px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="forminput_cont">
            <label>Blog name</label>
            <input type="text" name="" placeholder="blog name" id="" />
          </div>
          <div className="forminput_cont">
            <label>Blog description</label>
            <textarea name="" placeholder="blog description" id=""></textarea>
          </div>
          <div className="forminput_cont">
            <label>Blog Image</label>
            <input type="file" name="" placeholder="blog image" id="" />
          </div>

          <div className="paragraph">
            <div className="forminput_cont">
              <label>Paragraph Title</label>
              <input type="text" name="" placeholder="blog name" id="" />
            </div>
            <div className="forminput_cont">
              <label>Paragraph description</label>
              <textarea
                name=""
                placeholder="paragraph description"
                id=""
              ></textarea>
            </div>
            <div className="forminput_cont">
              <label>Paragraph Image</label>
              <input type="file" name="" placeholder="paragraph image" id="" />
            </div>
            <button type="submit" className="main_button">
              Add more paragrpahs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default page;
