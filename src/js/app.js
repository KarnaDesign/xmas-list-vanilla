import {
    handleCreateWishlist,
    handleAddWishItem
} from "./actionHandler";

// Add click event to button
document
    .getElementById("createButton")
    .addEventListener("click", handleCreateWishlist);

// Add event on enter
document
    .querySelector(".wishlistItem")
    .addEventListener("keydown", handleAddWishItem)