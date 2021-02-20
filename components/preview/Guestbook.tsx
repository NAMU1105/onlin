import React from "react";

const Guestbook = (props) => (
  <section className="guestbook">
    <h1>방명록</h1>
    <form action="">
      <div>
        <label htmlFor="gusetbookMame"></label>
        <input
          id="gusetbookMame"
          type="txt"
          placeholder="이름을 입력해주세요."
          autoComplete="on"
        />
        <label htmlFor="guestbookPassword"></label>
        <input
          id="guestbookPassword"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          autoComplete="off"
        />
      </div>
      <textarea name="" id="" cols={30} rows={3}></textarea>
    </form>
    <button>메시지 등록하기</button>
  </section>
);
export default Guestbook;
