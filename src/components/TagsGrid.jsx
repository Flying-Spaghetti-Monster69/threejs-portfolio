const TagsGrid = ({ tags }) => {
  return (
    <div className="mt-[2px] flex flex-wrap gap-2">
      {tags.map((tag) => {
        return (
          <p key={tag.name} className={`text-primary text-[14px]`}>
            #{tag.name}
          </p>
        );
      })}
    </div>
  );
};

export default TagsGrid;
