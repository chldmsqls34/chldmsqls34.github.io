
function Modal({ title, date, content, link,closeModal }:{title:string,date:string,content:string,link:string,closeModal:()=>void}) {

  return (

    <div className="modal-overlay" onClick={closeModal}>
      {/* 모달 내용 */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p className="text-date">{date}</p>
        <div className="modal-body">
          {content.split('\n').map((line, index) => (
            <p key={index}>{line}</p> // 줄바꿈 적용
          ))}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Modal;