import './index.css'
// import './index.js'
const CollapsableSidebar = () => {
    const listItems = document.querySelector("[data-list-items]");
    const unitBtn = document.querySelector("[data-unit]");

    unitBtn?.addEventListener("pointerover", ()=>{
        // console.log("Hovered")
        listItems?.classList.add('open')
    })

    //  unitBtn?.addEventListener("pointerleave", () => {
    //    console.log("Hovered");
    //    listItems?.classList.remove("open");
    //  });
    
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-section">
          <p>Hello</p>
          <p>Loorinho</p>
        </div>
        <div className="middle-section">
          <p className="unit" data-unit>Units</p>
          <p>Middle 2</p>
          <p>Middle 3</p>
        </div>
        <div className="bottom-section">
          <p>Bottom 1</p>
          <p>Bottom 2</p>
          <p>Bottom 3</p>
        </div>
      </div>

      <div className="content">
    
          <ul className='list-items' data-list-items>
            <li className='list-item'>Item 1</li>
            <li className='list-item'>Item 2</li>
            <li className='list-item'>Item 3</li>
            <li className='list-item'>Item 4</li>
          </ul>
    
        <p>My sidebar</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
        <p>Lontibus vitae nam voluptas? Nisi, doloribus.</p>
      </div>
    </div>
  );
}

export default CollapsableSidebar