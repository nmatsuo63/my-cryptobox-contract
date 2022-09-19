// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Transactions {
  // 暗号資産の受け渡しのためのデータ構造
  struct TransferStruct {
    address sender;//送信者のアドレス
    address receiver;//受信者のアドレス
    uint amount;//総量
  }

  TransferStruct[] transactions;//データ構造をインスタンス化

  event Transfer(address from, address receiver, uint amount);

  function addToBlockchain(address payable receiver, uint amount) public {
    // インスタンスに対してデータをプッシュ
    transactions.push(TransferStruct(msg.sender, receiver, amount));

    emit Transfer(msg.sender, receiver, amount);//関数の発火
  }
}

