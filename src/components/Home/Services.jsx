import React from 'react'
import Styles from "./Services.module.css"

function Services() {
  return (
    <div className={Styles.mainServices}>
        {/* product 1 */}
        <div className={Styles.gridChild}>
            <img src="#" alt="" />
            <h3>My Product</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio error vero eos natus nam fugit sint, libero aliquid asperiores earum nesciunt corrupti veniam aspernatur, porro adipisci excepturi, impedit repellat minus.</p>
            <button>Learn More</button>
        </div>

        {/* product 2 */}
        <div className={Styles.gridChild}>
            <img src="#" alt="" />
            <h3>My Product</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio error vero eos natus nam fugit sint, libero aliquid asperiores earum nesciunt corrupti veniam aspernatur, porro adipisci excepturi, impedit repellat minus.</p>
            <button>Learn More</button>
        </div>

        {/* product 3 */}

        <div className={Styles.gridChild}>
            <img src="#" alt="" />
            <h3>My Product</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio error vero eos natus nam fugit sint, libero aliquid asperiores earum nesciunt corrupti veniam aspernatur, porro adipisci excepturi, impedit repellat minus.</p>
            <button>Learn More</button>
        </div>


    </div>
  )
}

export default Services