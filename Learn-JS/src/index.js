/**
 * テキストボックスの値を取得し、フォームを初期化する。
 */
const onClickAdd = () => {
  // # 共通パーツの作成
  // ## 入力値の取得
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  // ## liタグ生成
  const li = document.createElement("li");
  li.className = "flex";

  // ## pタグ生成
  const p  = document.createElement("p");
  p.innerText = inputText;

  // # buttonパーツの作成
  const div = document.createElement("div");

  // ## 完了ボタンの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 対象ノードと移動先を設定
    const completeTarget = completeButton.closest(".flex");
    const destination = document.getElementById("complete_list");

    // 新しいノードを作成
    const backItem = document.createElement("li");
    backItem.className = "flex";

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    const returnText = document.createElement("p");
    returnText.innerText = completeTarget.firstElementChild.textContent;

    backItem.appendChild(returnText);
    backItem.appendChild(backButton);

    // 新しいノードを移動先に挿入
    destination.appendChild(backItem);

    // 対象ノードを削除
    deleteTodo(completeTarget);
  })

  // ## 削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンを押した際に親タグを削除
    deleteTodo(deleteButton.closest(".flex"));
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

const deleteTodo = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
}

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
