/**
 * テキストボックスの値を取得し、フォームを初期化する。
 */
const onClickAdd = () => {
  const inputText = document.getElementById("add_text").value;
  inputText.value = "";

  // liタグ生成
  const li = document.createElement("li");
  li.className = "flex";

  // pタグ生成
  const p  = document.createElement("p");
  p.innerText = inputText;

  // buttonタグ生成
  const div = document.createElement("div");
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("done!");
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンを押した際に親タグを削除
    const deleteTarget = deleteButton.closest(".flex");
    document.getElementById("incomplete_list").removeChild(deleteTarget);
  })

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグの子要素に各要素を指定
  li.appendChild(p);
  li.appendChild(div);

  // 未完了リストに追加
  const incompleteList = document.getElementById("incomplete_list");
  incompleteList.appendChild(li);
}

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
