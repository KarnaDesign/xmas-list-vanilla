export function handleCreateWishlist() {
    document.querySelector(".wishlistCreator").classList.remove("hidden");
    document.querySelector(".listCreator").classList.add("hidden");

    const name = document.getElementById("inputName").value;
    let suffixedName = name;

    const lastCharacter = name[name.length - 1];
    if (lastCharacter !== "s") {
        suffixedName += "s";
    }

    document.getElementById("outputName").innerHTML = suffixedName;
}

export function handleAddWishItem(e) {
    if (e.keyCode === 13) {
        const wish = document.querySelector(".wishlistItem").value;
        const ul = document.getElementById("wishlist");
        const newListitem = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.innerHTML = wish;
        newListitem.appendChild(textSpan);
        const deleteSpan = document.createElement("span");
        deleteSpan.className = "fa fa-trash";
        newListitem.appendChild(deleteSpan);
        ul.appendChild(newListitem);

        const inputListItem = document.querySelector(".input");
        ul.appendChild(inputListItem);

        const newInput = document.querySelector(".wishlistItem");
        newInput.value = "";
        newInput.focus();
    }
}