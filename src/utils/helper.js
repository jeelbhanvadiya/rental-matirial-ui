
export const ScrollUp = (top = 0) => {
    window.scroll({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
}

export const displayDate =(date) =>{
  const mydate = new Date(date);
    var month = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
  return mydate.getDate() + ' '  + month + ' ' + mydate.getFullYear();
}

export const diaplayIcon = (name, fontSize = "1.2rem", color= '#112d4e')=>{
  return (
    <span style={{fontSize, color}}>
      <i className={name} />
    </span>
  )
}
