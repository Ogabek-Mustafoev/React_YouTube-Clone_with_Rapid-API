import { Stack } from "@mui/material";
import { category } from "../../constants";

export default function Category({
  selectedCategoryHandler,
  selectedCategory,
}) {
  return (
    <Stack direction={"row"} sx={{
      overflowX: "scroll", position: "sticky",
      top: { xs: '56px', md: '59px', },
      zIndex: 9999,
    }} className='bgd' >
      {category.map((item) => (
        <button
          key={item.name}
          className={`category-btn ${item.name === selectedCategory && 'selected_category'}`}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff !important" : 'var(--sp-clor) !important',
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: 1 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
}
