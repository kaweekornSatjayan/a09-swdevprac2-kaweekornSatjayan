"use client";
export default function InteractiveCard({  children,}: {children: React.ReactNode;}) {

  function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type === 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg', 'bg-white')
            event.currentTarget.classList.add('shadow-2xl', 'bg-neutral-200')
        } else {
            event.currentTarget.classList.remove('shadow-2xl', 'bg-neutral-200')
            event.currentTarget.classList.add('shadow-lg', 'bg-white')
        }
    }  
  function onCardSelected(event: React.MouseEvent) {
    if (event.target === event.currentTarget) {
      alert("Card is Clicked");
    }
  }


  return (
    <div
      className="w-full h-[300px] rounded-lg shadow-lg bg-white 
                       hover:shadow-2xl hover:bg-neutral-200 transition-all duration-300"
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}>
      {children}
    </div>
  );
}
