interface Category {
  name: string;
  path: string;
  bgColor: string;
}

const CategoryCard = (data: Category) => {
  const { name, path, bgColor } = data;
  console.log(bgColor);
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
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
export default CategoryCard;
