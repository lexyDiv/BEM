import React from "react";

function MoreBtn({
  setShowBaseSelector,
}: {
  setShowBaseSelector: (value: boolean) => void;
}): JSX.Element {
  return (
    <button
      className="more block__more"
      onClick={() => {
        setShowBaseSelector(true);
      }}
    >
      <div className="more__plus">
        <span className="more__plus-item">+</span>
      </div>
      <h2 className="more__text">Выбрать ещё</h2>
    </button>
  );
}

export default MoreBtn;
