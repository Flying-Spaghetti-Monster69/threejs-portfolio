import PropTypes from "prop-types";

const TagsGrid = ({ tags }) => {
  return (
    <div className="mt-[2px] flex flex-wrap gap-2">
      {tags.map((tag) => {
        return (
          <p key={tag.name} className={`${tag.color} text-[14px]`}>
            #{tag.name}
          </p>
        );
      })}
    </div>
  );
};

TagsGrid.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default TagsGrid;
