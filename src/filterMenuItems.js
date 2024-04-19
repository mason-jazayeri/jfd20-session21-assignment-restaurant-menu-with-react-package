import {menuItems} from "./data";

export default function filterMenuItems(categoryName) {
    if (categoryName === "همه موارد") {
      return menuItems;
    }
    return menuItems.filter(function(item) {
      return item.category === categoryName;
    });
  }