import React from 'react'

function Footer() {

    let styles = {
        mainFooter:{
            backgroundColor:"blue",
            padding:"20px",
            color:"white",
            textAlign:"center",
            marginTop:"15px"
        }
    }
  return (
    <div style={styles.mainFooter}>copyright Footer 2023</div>
  )
}

export default Footer