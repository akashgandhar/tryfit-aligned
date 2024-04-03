
export default function Modal ({open,onClose}){
    if(!open)return null
  return (
    <div className="overlay">
        <div className="modalContainer ">
            <div className="modalRight flex flex-col">
                <p onClick={onClose} className="closeBtn">X</p>
                <div className="content mt-56">
                </div>
                <div className="btnContainer">
                </div>
            </div>
        </div>
    </div>
  )
}
