interface Blog {
  name: string;
  path: string;
  bgColor: string;
}

const BlogCard = (data: Blog) => {
  const { name, path, bgColor } = data;
  console.log(bgColor);
  return (
    <div
      style={{
        width: '300px',
        height: '400px',
        background: bgColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p style={{ color: 'red', fontSize: '15px' }}>{name}</p>
    </div>
  );
};
export default BlogCard;
